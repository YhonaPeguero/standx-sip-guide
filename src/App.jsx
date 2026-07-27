import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import BackgroundFX from './components/BackgroundFX';
import BottomNav from './components/BottomNav';
import CommunityVaultsView from './components/CommunityVaultsView';
import Footer from './components/Footer';
import GuideOverlay from './components/GuideOverlay';
import OverviewView from './components/OverviewView';
import SimulatorView from './components/SimulatorView';
import TopBar from './components/TopBar';
import YieldPlaybookView from './components/YieldPlaybookView';
import {
  DEFAULT_CAPITAL,
  DEFAULT_HORIZON_ID,
  HORIZONS,
  MAX_CAPITAL,
  MAX_RATE,
  MIN_CAPITAL,
  MIN_RATE,
} from './constants/chart';
import { useSipMotion } from './hooks/useSipMotion';
import { useI18n } from './i18n';
import { formatCurrencyAdaptive, formatPercentValue } from './lib/formatters';
import { readRoute, subscribeRoute, writeRoute } from './lib/route';
import { calculateScenarioSnapshot } from './lib/simulator';
import { canNarrateLanguage, speakGuideStep } from './lib/speechSynthesis';

// Digits, at most two decimals, and an optional k/m suffix. Anything else cannot become an
// amount no matter what the reader types next, so it is the only thing refused outright.
const CAPITAL_PATTERN = /^\d*(\.\d{0,2})?[kKmM]?$/;
const RATE_PATTERN = /^\d*(\.\d{0,2})?$/;
const MAX_ERROR_KEY = 'maxAmount';
const MIN_ERROR_KEY = 'minAmount';
const RATE_MAX_ERROR_KEY = 'maxRate';
const RATE_MIN_ERROR_KEY = 'minRate';
const EDUCATION_SECTION_ID = 'overview-learn-flow';
const GUIDE_PROMPT_SESSION_KEY = 'standx.guidePromptSeen';
const GUIDE_SPOTLIGHT_PADDING = 10;
const TABS = ['overview', 'simulator', 'playbook', 'vaults'];
const DEFAULT_TAB = 'overview';

// Every step spotlights one concrete element, and every tab appears. The previous list
// pointed `simulator` at the whole section-block — spotlighting everything, which
// highlights nothing — and never mentioned vaults, the largest surface in the product. It
// also predated the simulator restructure, so its copy described a sidebar and a toggle
// panel that no longer exist.
//
// Each targetId must match a live data-guide-id. Current anchors:
//   guide-dusd / guide-sip-2 / guide-sip-3   YieldLoopFlow nodes      (overview)
//   guide-capital / guide-rates              ControlBand cards        (simulator)
//   guide-output                             the output card          (simulator)
//   guide-vaults                             the vault-type grid      (vaults)
//   guide-playbook                           the flow grid            (playbook)
const GUIDE_STEPS = [
  {
    id: 'dusd',
    tabId: 'overview',
    targetId: 'guide-dusd',
    titleKey: 'guide.steps.dusd.title',
    textKey: 'guide.steps.dusd.text',
  },
  {
    id: 'sip2',
    tabId: 'overview',
    targetId: 'guide-sip-2',
    titleKey: 'guide.steps.sip2.title',
    textKey: 'guide.steps.sip2.text',
  },
  {
    id: 'sip3',
    tabId: 'overview',
    targetId: 'guide-sip-3',
    titleKey: 'guide.steps.sip3.title',
    textKey: 'guide.steps.sip3.text',
  },
  {
    id: 'capital',
    tabId: 'simulator',
    targetId: 'guide-capital',
    titleKey: 'guide.steps.capital.title',
    textKey: 'guide.steps.capital.text',
  },
  {
    id: 'rates',
    tabId: 'simulator',
    targetId: 'guide-rates',
    titleKey: 'guide.steps.rates.title',
    textKey: 'guide.steps.rates.text',
  },
  {
    id: 'output',
    tabId: 'simulator',
    targetId: 'guide-output',
    titleKey: 'guide.steps.output.title',
    textKey: 'guide.steps.output.text',
  },
  {
    id: 'vaults',
    tabId: 'vaults',
    targetId: 'guide-vaults',
    titleKey: 'guide.steps.vaults.title',
    textKey: 'guide.steps.vaults.text',
  },
  {
    id: 'playbook',
    tabId: 'playbook',
    targetId: 'guide-playbook',
    titleKey: 'guide.steps.playbook.title',
    textKey: 'guide.steps.playbook.text',
  },
];

const sanitizeInput = (value) => value.replace(/[$,\s]/g, '');

// Traders write 10k, not 10000. The suffix is part of the notation, so it is accepted as
// typed and expanded on blur rather than rejected keystroke by keystroke.
const CAPITAL_SUFFIX_MULTIPLIER = { k: 1_000, m: 1_000_000 };

const parseCapitalInput = (rawValue) => {
  const cleaned = sanitizeInput(rawValue);
  const match = cleaned.match(/^(\d*\.?\d*)([kKmM]?)$/);

  if (!match || !match[1] || match[1] === '.') {
    return NaN;
  }

  const base = Number(match[1]);

  if (!Number.isFinite(base)) {
    return NaN;
  }

  return base * (CAPITAL_SUFFIX_MULTIPLIER[match[2].toLowerCase()] ?? 1);
};

const normalizeCapitalInput = (value) => {
  if (!Number.isFinite(value)) {
    return String(DEFAULT_CAPITAL);
  }

  const decimals = Number.isInteger(value) ? 0 : 2;
  return value.toFixed(decimals);
};

const validateCapitalAmount = (value) => {
  if (!Number.isFinite(value)) {
    return { isValid: false, errorKey: MIN_ERROR_KEY };
  }

  if (value > MAX_CAPITAL) {
    return { isValid: false, errorKey: MAX_ERROR_KEY };
  }

  if (value < MIN_CAPITAL) {
    return { isValid: false, errorKey: MIN_ERROR_KEY };
  }

  return { isValid: true, amount: value, errorKey: '' };
};

// Rates are annual percentages the reader types. An empty field is a valid state that means
// "no rate stated" and yields 0, not a hidden default.
const validateRate = (raw) => {
  if (raw.trim().length === 0) {
    return { isValid: true, rate: 0, errorKey: '' };
  }

  const value = Number(raw);

  if (!Number.isFinite(value) || value < MIN_RATE) {
    return { isValid: false, errorKey: RATE_MIN_ERROR_KEY };
  }

  if (value > MAX_RATE) {
    return { isValid: false, errorKey: RATE_MAX_ERROR_KEY };
  }

  return { isValid: true, rate: value, errorKey: '' };
};

const buildSpotlightRect = (rect) => {
  if (typeof window === 'undefined' || !rect) {
    return null;
  }

  const viewportWidth = window.innerWidth;
  const viewportHeight = window.innerHeight;

  const width = Math.min(viewportWidth - 16, rect.width + GUIDE_SPOTLIGHT_PADDING * 2);
  const height = Math.min(viewportHeight - 16, rect.height + GUIDE_SPOTLIGHT_PADDING * 2);

  let left = Math.max(8, rect.left - GUIDE_SPOTLIGHT_PADDING);
  let top = Math.max(8, rect.top - GUIDE_SPOTLIGHT_PADDING);

  if (left + width > viewportWidth - 8) {
    left = viewportWidth - 8 - width;
  }

  if (top + height > viewportHeight - 8) {
    top = viewportHeight - 8 - height;
  }

  return {
    top: Math.max(8, top),
    left: Math.max(8, left),
    width,
    height,
  };
};

export default function App() {
  const { t, locale } = useI18n();
  // The tab lives in the URL (`#/<locale>/<tab>`), so every section is deep-linkable.
  const [route, setRoute] = useState(() => readRoute());
  const [isSip2On, setIsSip2On] = useState(false);
  const [rangeId, setRangeId] = useState(DEFAULT_HORIZON_ID);
  const [capitalAmount, setCapitalAmount] = useState(DEFAULT_CAPITAL);
  const [capitalInput, setCapitalInput] = useState(String(DEFAULT_CAPITAL));
  const [capitalErrorKey, setCapitalErrorKey] = useState('');
  // Both rates start empty: StandX publishes neither, so there is no honest default.
  const [baseRateInput, setBaseRateInput] = useState('');
  const [sip2RateInput, setSip2RateInput] = useState('');
  const [baseRate, setBaseRate] = useState(0);
  const [sip2Rate, setSip2Rate] = useState(0);
  const [baseRateErrorKey, setBaseRateErrorKey] = useState('');
  const [sip2RateErrorKey, setSip2RateErrorKey] = useState('');
  const [showGuidePrompt, setShowGuidePrompt] = useState(false);
  const [isGuideOpen, setIsGuideOpen] = useState(false);
  const [guideStepIndex, setGuideStepIndex] = useState(0);
  const [guideSpotlightRect, setGuideSpotlightRect] = useState(null);
  const [isNarratedGuide, setIsNarratedGuide] = useState(false);
  const [isNarrationPaused, setIsNarrationPaused] = useState(false);
  const [showVoiceUnavailableNotice, setShowVoiceUnavailableNotice] = useState(false);
  const activeTab = route.tab;
  const safeActiveTab = TABS.includes(activeTab) ? activeTab : DEFAULT_TAB;

  const setActiveTab = useCallback((tabId, options) => {
    writeRoute({ tab: tabId }, options);
  }, []);

  useEffect(() => subscribeRoute(() => setRoute(readRoute())), []);

  // Canonicalize an unknown or missing tab segment without adding a history entry.
  useEffect(() => {
    if (!TABS.includes(readRoute().tab)) {
      writeRoute({ tab: DEFAULT_TAB }, { replace: true });
    }
  }, []);

  const narrationRequestRef = useRef(0);
  const narrationToggleRequestRef = useRef(0);

  const narrationSupported =
    typeof window !== 'undefined' &&
    'speechSynthesis' in window &&
    'SpeechSynthesisUtterance' in window;

  const guideSteps = useMemo(
    () =>
      GUIDE_STEPS.map((step) => ({
        ...step,
        title: t(step.titleKey),
        text: t(step.textKey),
      })),
    [t],
  );

  const selectedHorizon = useMemo(
    () => HORIZONS.find((horizon) => horizon.id === rangeId) ?? HORIZONS[0],
    [rangeId],
  );

  const yearFraction = selectedHorizon?.yearFraction ?? 0;
  const isSimulatorTabActive = safeActiveTab === 'simulator';

  const { simulated, linePath, areaPath, endY } = useSipMotion({
    isSip2On: isSimulatorTabActive ? isSip2On : false,
    baseRate,
    sip2Rate,
    yearFraction,
    capital: capitalAmount,
  });

  const handleCapitalPreset = useCallback((amount) => {
    setCapitalAmount(amount);
    setCapitalInput(String(amount));
    setCapitalErrorKey('');
  }, []);

  // The reader's text is kept exactly as typed. Only characters that cannot form an amount
  // at all are refused; a value that is merely out of range is accepted into the field and
  // answered with a message, because silently swallowing a keystroke reads as a broken
  // keyboard rather than as a limit.
  const handleCapitalInputChange = useCallback((rawValue) => {
    const nextValue = sanitizeInput(rawValue);

    if (nextValue.length > 16 || !CAPITAL_PATTERN.test(nextValue)) {
      return;
    }

    setCapitalInput(nextValue);

    if (nextValue.length === 0) {
      setCapitalErrorKey(MIN_ERROR_KEY);
      return;
    }

    const validation = validateCapitalAmount(parseCapitalInput(nextValue));

    if (!validation.isValid) {
      setCapitalErrorKey(validation.errorKey);
      return;
    }

    setCapitalAmount(validation.amount);
    setCapitalErrorKey('');
  }, []);

  // Blur formats a good value and expands any suffix. It never overwrites a bad one: the
  // text and its message both stay, so the reader can see what they typed, read why it was
  // refused, and edit it. Previously both were discarded together, which left the field
  // showing a number the reader had not chosen and no explanation of where theirs went.
  const handleCapitalInputBlur = useCallback(() => {
    if (capitalInput.trim().length === 0) {
      setCapitalInput(normalizeCapitalInput(capitalAmount));
      setCapitalErrorKey('');
      return;
    }

    const validation = validateCapitalAmount(parseCapitalInput(capitalInput));

    if (!validation.isValid) {
      setCapitalErrorKey(validation.errorKey);
      return;
    }

    setCapitalAmount(validation.amount);
    setCapitalInput(normalizeCapitalInput(validation.amount));
    setCapitalErrorKey('');
  }, [capitalAmount, capitalInput]);

  // One handler shape for both rate fields: reject characters that cannot form a rate, then
  // validate the value and keep the numeric state in step with the text.
  const makeRateChangeHandler = useCallback(
    (setInput, setRate, setErrorKey) => (rawValue) => {
      const nextValue = sanitizeInput(rawValue);

      if (nextValue.length > 6 || !RATE_PATTERN.test(nextValue)) {
        return;
      }

      setInput(nextValue);

      const validation = validateRate(nextValue);

      if (!validation.isValid) {
        setErrorKey(validation.errorKey);
        return;
      }

      setRate(validation.rate);
      setErrorKey('');
    },
    [],
  );

  const handleBaseRateChange = useMemo(
    () => makeRateChangeHandler(setBaseRateInput, setBaseRate, setBaseRateErrorKey),
    [makeRateChangeHandler],
  );

  const handleSip2RateChange = useMemo(
    () => makeRateChangeHandler(setSip2RateInput, setSip2Rate, setSip2RateErrorKey),
    [makeRateChangeHandler],
  );

  // On blur an out-of-range entry is clamped to the bound it broke, so the reader keeps a
  // number they can see and reason about rather than having their input silently discarded.
  const makeRateBlurHandler = useCallback(
    (input, setInput, setRate, setErrorKey) => () => {
      const validation = validateRate(input);

      if (validation.isValid) {
        setErrorKey('');
        return;
      }

      const clamped = validation.errorKey === RATE_MAX_ERROR_KEY ? MAX_RATE : MIN_RATE;
      setRate(clamped);
      setInput(String(clamped));
      setErrorKey('');
    },
    [],
  );

  const handleBaseRateBlur = useMemo(
    () => makeRateBlurHandler(baseRateInput, setBaseRateInput, setBaseRate, setBaseRateErrorKey),
    [baseRateInput, makeRateBlurHandler],
  );

  const handleSip2RateBlur = useMemo(
    () => makeRateBlurHandler(sip2RateInput, setSip2RateInput, setSip2Rate, setSip2RateErrorKey),
    [makeRateBlurHandler, sip2RateInput],
  );

  const capitalError = useMemo(
    () => (capitalErrorKey ? t(`app.errors.${capitalErrorKey}`) : ''),
    [capitalErrorKey, t],
  );

  const baseRateError = useMemo(
    () => (baseRateErrorKey ? t(`app.errors.${baseRateErrorKey}`) : ''),
    [baseRateErrorKey, t],
  );

  const sip2RateError = useMemo(
    () => (sip2RateErrorKey ? t(`app.errors.${sip2RateErrorKey}`) : ''),
    [sip2RateErrorKey, t],
  );

  const chartAriaLabel = useMemo(
    () => t('simulator.chartAriaLabel', { horizon: selectedHorizon?.label ?? '' }),
    [selectedHorizon, t],
  );

  useEffect(() => {
    setShowVoiceUnavailableNotice(false);
  }, [locale]);

  useEffect(() => {
    if (typeof window === 'undefined') {
      return;
    }

    try {
      const seenPrompt = window.sessionStorage.getItem(GUIDE_PROMPT_SESSION_KEY);

      if (!seenPrompt) {
        setShowGuidePrompt(true);
        window.sessionStorage.setItem(GUIDE_PROMPT_SESSION_KEY, '1');
      }
    } catch {
      setShowGuidePrompt(true);
    }
  }, []);

  const estimatedGainLabel = useMemo(
    () => formatCurrencyAdaptive(simulated.estimatedGain, { threshold: 850000 }),
    [simulated.estimatedGain],
  );

  const yieldPctLabel = useMemo(() => formatPercentValue(simulated.yieldPct), [simulated.yieldPct]);

  const scenario = useMemo(
    () =>
      calculateScenarioSnapshot({
        capital: capitalAmount,
        baseRate,
        sip2Rate,
        yearFraction,
      }),
    [baseRate, capitalAmount, sip2Rate, yearFraction],
  );

  const handleTabChange = useCallback(
    (tabId) => {
      setActiveTab(tabId);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    },
    [setActiveTab],
  );

  const handleDismissGuidePrompt = useCallback(() => {
    setShowGuidePrompt(false);
  }, []);

  const handleStartGuide = useCallback(() => {
    setShowGuidePrompt(false);
    setIsGuideOpen(true);
    setGuideStepIndex(0);
    setGuideSpotlightRect(null);
    setIsNarrationPaused(false);
    setShowVoiceUnavailableNotice(false);

    if (narrationSupported) {
      window.speechSynthesis.cancel();
    }

    // Guide-driven moves replace, so a tour does not fill the history stack.
    setActiveTab('overview', { replace: true });
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [narrationSupported, setActiveTab]);

  const handleCloseGuide = useCallback(() => {
    narrationRequestRef.current += 1;
    narrationToggleRequestRef.current += 1;
    setIsGuideOpen(false);
    setGuideStepIndex(0);
    setGuideSpotlightRect(null);
    setIsNarrationPaused(false);
    setIsNarratedGuide(false);
    setShowVoiceUnavailableNotice(false);

    if (narrationSupported) {
      window.speechSynthesis.cancel();
    }
  }, [narrationSupported]);

  const handleGuideBack = useCallback(() => {
    setGuideStepIndex((step) => Math.max(0, step - 1));
  }, []);

  const handleGuideNext = useCallback(() => {
    setGuideStepIndex((step) => Math.min(guideSteps.length - 1, step + 1));
  }, [guideSteps.length]);

  const locateGuideTarget = useCallback(
    (shouldScroll = false) => {
      if (typeof document === 'undefined' || !isGuideOpen) {
        return;
      }

      const currentStep = guideSteps[guideStepIndex];
      if (!currentStep) {
        return;
      }

      const targetElement = document.querySelector(`[data-guide-id="${currentStep.targetId}"]`);
      if (!targetElement) {
        setGuideSpotlightRect(null);
        return;
      }

      const initialRect = targetElement.getBoundingClientRect();
      const outOfView =
        initialRect.top < 106 ||
        initialRect.bottom > window.innerHeight - 130 ||
        initialRect.left < 12 ||
        initialRect.right > window.innerWidth - 12;

      if (shouldScroll && outOfView) {
        targetElement.scrollIntoView({ behavior: 'smooth', block: 'center', inline: 'nearest' });
      }

      window.requestAnimationFrame(() => {
        const nextRect = targetElement.getBoundingClientRect();
        setGuideSpotlightRect(buildSpotlightRect(nextRect));
      });
    },
    [guideStepIndex, guideSteps, isGuideOpen],
  );

  useEffect(() => {
    if (!isGuideOpen) {
      setGuideSpotlightRect(null);
      return;
    }

    const step = guideSteps[guideStepIndex];
    if (!step) {
      return;
    }

    if (activeTab !== step.tabId) {
      setActiveTab(step.tabId, { replace: true });
      return;
    }

    const timer = window.setTimeout(() => {
      locateGuideTarget(true);
    }, 120);

    return () => {
      window.clearTimeout(timer);
    };
  }, [activeTab, guideStepIndex, guideSteps, isGuideOpen, locateGuideTarget, setActiveTab]);

  useEffect(() => {
    if (!isGuideOpen) {
      return;
    }

    const handleLayoutChange = () => {
      locateGuideTarget(false);
    };

    window.addEventListener('resize', handleLayoutChange);
    window.addEventListener('scroll', handleLayoutChange, true);

    return () => {
      window.removeEventListener('resize', handleLayoutChange);
      window.removeEventListener('scroll', handleLayoutChange, true);
    };
  }, [isGuideOpen, locateGuideTarget]);

  const narrateCurrentGuideStep = useCallback(async () => {
    if (!narrationSupported || !isGuideOpen || !isNarratedGuide) {
      return;
    }

    const step = guideSteps[guideStepIndex];
    if (!step) {
      return;
    }

    const narrationText = `${step.title}. ${step.text}`;
    const requestId = narrationRequestRef.current + 1;
    narrationRequestRef.current = requestId;

    const result = await speakGuideStep(narrationText, locale);
    if (requestId !== narrationRequestRef.current) {
      return;
    }

    if (result.status !== 'spoken') {
      setShowVoiceUnavailableNotice(true);
      setIsNarratedGuide(false);
      setIsNarrationPaused(false);
      return;
    }

    setShowVoiceUnavailableNotice(false);
    setIsNarrationPaused(false);

    if (result.utterance) {
      result.utterance.onend = () => {
        if (requestId === narrationRequestRef.current) {
          setIsNarrationPaused(false);
        }
      };
    }
  }, [guideStepIndex, guideSteps, isGuideOpen, isNarratedGuide, locale, narrationSupported]);

  useEffect(() => {
    if (!narrationSupported) {
      return;
    }

    if (!isGuideOpen || !isNarratedGuide) {
      window.speechSynthesis.cancel();
      setIsNarrationPaused(false);
      return;
    }

    void narrateCurrentGuideStep();
  }, [isGuideOpen, isNarratedGuide, guideStepIndex, locale, narrationSupported, narrateCurrentGuideStep]);

  const handleNarratedGuideChange = useCallback(
    async (nextValue) => {
      narrationToggleRequestRef.current += 1;
      const requestId = narrationToggleRequestRef.current;

      setIsNarrationPaused(false);

      if (!nextValue) {
        setIsNarratedGuide(false);
        setShowVoiceUnavailableNotice(false);

        if (narrationSupported) {
          window.speechSynthesis.cancel();
        }

        return;
      }

      if (!narrationSupported) {
        return;
      }

      setShowVoiceUnavailableNotice(false);

      const languageCanBeNarrated = await canNarrateLanguage(locale);
      if (requestId !== narrationToggleRequestRef.current) {
        return;
      }

      if (!languageCanBeNarrated) {
        setShowVoiceUnavailableNotice(true);
        setIsNarratedGuide(false);
        return;
      }

      setIsNarratedGuide(true);
    },
    [locale, narrationSupported],
  );

  const handleNarrationPauseToggle = useCallback(() => {
    if (!narrationSupported) {
      return;
    }

    const synth = window.speechSynthesis;

    if (synth.paused) {
      synth.resume();
      setIsNarrationPaused(false);
      return;
    }

    if (synth.speaking) {
      synth.pause();
      setIsNarrationPaused(true);
      return;
    }

    if (!isGuideOpen || !isNarratedGuide) {
      return;
    }

    void narrateCurrentGuideStep();
  }, [
    isGuideOpen,
    isNarratedGuide,
    narrateCurrentGuideStep,
    narrationSupported,
  ]);

  const handleNarrationMute = useCallback(() => {
    if (narrationSupported) {
      window.speechSynthesis.cancel();
    }

    narrationRequestRef.current += 1;
    narrationToggleRequestRef.current += 1;
    setIsNarratedGuide(false);
    setIsNarrationPaused(false);
    setShowVoiceUnavailableNotice(false);
  }, [narrationSupported]);

  const handleOpenSimulator = useCallback(() => {
    setActiveTab('simulator');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [setActiveTab]);

  const handleOpenOverviewLearning = useCallback(() => {
    setActiveTab('overview');

    window.setTimeout(() => {
      const section = document.getElementById(EDUCATION_SECTION_ID);

      if (section) {
        section.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }, 90);
  }, [setActiveTab]);

  return (
    <div className="relative min-h-screen overflow-hidden bg-[var(--sx-bg)] text-[var(--sx-text)]">
      <a href="#main-content" className="skip-link">
        {t('app.skipToContent')}
      </a>
      <BackgroundFX />
      <TopBar activeTab={safeActiveTab} onTabChange={handleTabChange} onStartGuide={handleStartGuide} />
      {showGuidePrompt || isGuideOpen ? (
        <GuideOverlay
          isOpen={isGuideOpen}
          steps={guideSteps}
          stepIndex={guideStepIndex}
          spotlightRect={guideSpotlightRect}
          onStartGuide={handleStartGuide}
          onDismissPrompt={handleDismissGuidePrompt}
          showPrompt={showGuidePrompt}
          onBack={handleGuideBack}
          onNext={handleGuideNext}
          onSkip={handleCloseGuide}
          onFinish={handleCloseGuide}
          narrationSupported={narrationSupported}
          isNarratedGuide={isNarratedGuide}
          isNarrationPaused={isNarrationPaused}
          showVoiceUnavailableNotice={showVoiceUnavailableNotice}
          onNarratedGuideChange={handleNarratedGuideChange}
          onNarrationPauseToggle={handleNarrationPauseToggle}
          onNarrationMute={handleNarrationMute}
        />
      ) : null}

      <main
        id="main-content"
        className="relative z-10 mx-auto w-full max-w-[1240px] px-4 pb-28 pt-12 sm:px-6 sm:pb-16 sm:pt-16 lg:px-8 lg:pt-24"
      >
        {/* Tab switch is a plain fade — each section supplies its own staggered rise via Reveal */}
        <motion.div
          key={safeActiveTab}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
        >
          {safeActiveTab === 'overview' ? (
            <OverviewView
              isSip2On={isSip2On}
              onToggleSip2={() => setIsSip2On((value) => !value)}
              onOpenSimulator={handleOpenSimulator}
              educationSectionId={EDUCATION_SECTION_ID}
            />
          ) : null}

          {safeActiveTab === 'simulator' ? (
            <SimulatorView
              rangeId={rangeId}
              onRangeChange={setRangeId}
              isSip2On={isSip2On}
              onToggleSip2={() => setIsSip2On((value) => !value)}
              linePath={linePath}
              areaPath={areaPath}
              endY={endY}
              ticks={selectedHorizon?.ticks ?? []}
              chartAriaLabel={chartAriaLabel}
              simulated={simulated}
              estimatedGainLabel={estimatedGainLabel}
              yieldPctLabel={yieldPctLabel}
              capitalInput={capitalInput}
              capitalError={capitalError}
              onCapitalInputChange={handleCapitalInputChange}
              onCapitalInputBlur={handleCapitalInputBlur}
              onPresetSelect={handleCapitalPreset}
              activeCapital={capitalAmount}
              baseRate={baseRate}
              sip2Rate={sip2Rate}
              baseRateInput={baseRateInput}
              sip2RateInput={sip2RateInput}
              baseRateError={baseRateError}
              sip2RateError={sip2RateError}
              onBaseRateChange={handleBaseRateChange}
              onSip2RateChange={handleSip2RateChange}
              onBaseRateBlur={handleBaseRateBlur}
              onSip2RateBlur={handleSip2RateBlur}
              scenario={scenario}
            />
          ) : null}

          {safeActiveTab === 'playbook' ? (
            <YieldPlaybookView
              onTryFlow={handleOpenSimulator}
              onLearnMore={handleOpenOverviewLearning}
            />
          ) : null}

          {safeActiveTab === 'vaults' ? <CommunityVaultsView /> : null}
        </motion.div>

        <Footer />
      </main>

      <BottomNav activeTab={safeActiveTab} onTabChange={handleTabChange} />
    </div>
  );
}
