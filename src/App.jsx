import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import BackgroundFX from './components/BackgroundFX';
import GuideOverlay from './components/GuideOverlay';
import OverviewView from './components/OverviewView';
import SimulatorView from './components/SimulatorView';
import TopBar from './components/TopBar';
import YieldPlaybookView from './components/YieldPlaybookView';
import {
  BASE_VALUE,
  DEFAULT_CAPITAL,
  DEFAULT_RANGE_ID,
  MAX_CAPITAL,
  MIN_CAPITAL,
  TIME_RANGES,
} from './constants/chart';
import { useSipMotion } from './hooks/useSipMotion';
import { useI18n } from './i18n';
import { formatCurrencyAdaptive, formatPercentValue } from './lib/formatters';
import { calculateScenarioSnapshot } from './lib/simulator';
import { canNarrateLanguage, speakGuideStep } from './lib/speechSynthesis';

const CAPITAL_PATTERN = /^\d*(\.\d{0,2})?$/;
const MAX_ERROR_KEY = 'maxAmount';
const MIN_ERROR_KEY = 'minAmount';
const EDUCATION_SECTION_ID = 'overview-learn-flow';
const GUIDE_PROMPT_SESSION_KEY = 'standx.guidePromptSeen';
const GUIDE_SPOTLIGHT_PADDING = 10;
const TABS = ['overview', 'simulator', 'playbook'];

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
    id: 'simulator',
    tabId: 'simulator',
    targetId: 'guide-simulator',
    titleKey: 'guide.steps.simulator.title',
    textKey: 'guide.steps.simulator.text',
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
  const [activeTab, setActiveTab] = useState('overview');
  const [isOn, setIsOn] = useState(false);
  const [rangeId, setRangeId] = useState(DEFAULT_RANGE_ID);
  const [capitalAmount, setCapitalAmount] = useState(DEFAULT_CAPITAL);
  const [capitalInput, setCapitalInput] = useState(String(DEFAULT_CAPITAL));
  const [capitalErrorKey, setCapitalErrorKey] = useState('');
  const [showGuidePrompt, setShowGuidePrompt] = useState(false);
  const [isGuideOpen, setIsGuideOpen] = useState(false);
  const [guideStepIndex, setGuideStepIndex] = useState(0);
  const [guideSpotlightRect, setGuideSpotlightRect] = useState(null);
  const [isNarratedGuide, setIsNarratedGuide] = useState(false);
  const [isNarrationPaused, setIsNarrationPaused] = useState(false);
  const [showVoiceUnavailableNotice, setShowVoiceUnavailableNotice] = useState(false);
  const safeActiveTab = TABS.includes(activeTab) ? activeTab : 'overview';

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

  const selectedRange = useMemo(
    () => TIME_RANGES.find((range) => range.id === rangeId) ?? TIME_RANGES[0],
    [rangeId],
  );

  const safeTarget = Number.isFinite(selectedRange?.target) ? selectedRange.target : BASE_VALUE;
  const isSimulatorTabActive = safeActiveTab === 'simulator';

  const { simulated, linePath, areaPath, endY } = useSipMotion({
    isOn: isSimulatorTabActive ? isOn : false,
    target: isSimulatorTabActive ? safeTarget : BASE_VALUE,
    capital: capitalAmount,
  });

  const handleCapitalPreset = useCallback((amount) => {
    setCapitalAmount(amount);
    setCapitalInput(String(amount));
    setCapitalErrorKey('');
  }, []);

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

    const parsedAmount = Number(nextValue);
    const validation = validateCapitalAmount(parsedAmount);

    if (!validation.isValid) {
      setCapitalErrorKey(validation.errorKey);
      return;
    }

    setCapitalAmount(validation.amount);
    setCapitalErrorKey('');
  }, []);

  const handleCapitalInputBlur = useCallback(() => {
    if (capitalInput.trim().length === 0) {
      setCapitalInput(normalizeCapitalInput(capitalAmount));
      setCapitalErrorKey('');
      return;
    }

    const parsedAmount = Number(capitalInput);
    const validation = validateCapitalAmount(parsedAmount);

    if (!validation.isValid) {
      setCapitalInput(normalizeCapitalInput(capitalAmount));
      setCapitalErrorKey('');
      return;
    }

    setCapitalAmount(validation.amount);
    setCapitalInput(normalizeCapitalInput(validation.amount));
    setCapitalErrorKey('');
  }, [capitalAmount, capitalInput]);

  const capitalError = useMemo(
    () => (capitalErrorKey ? t(`app.errors.${capitalErrorKey}`) : ''),
    [capitalErrorKey, t],
  );

  const chartMarkers = useMemo(() => {
    const localizedMarkers = t('app.chartMarkers');
    return Array.isArray(localizedMarkers) ? localizedMarkers : [];
  }, [t]);

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

  const estimatedValueLabel = useMemo(
    () => formatCurrencyAdaptive(simulated.estimatedValue, { threshold: 850000 }),
    [simulated.estimatedValue],
  );

  const yieldPctLabel = useMemo(() => formatPercentValue(simulated.yieldPct), [simulated.yieldPct]);

  const scenario = useMemo(
    () => calculateScenarioSnapshot({ capital: capitalAmount, target: safeTarget }),
    [capitalAmount, safeTarget],
  );

  const handleTabChange = useCallback((tabId) => {
    setActiveTab(tabId);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

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

    setActiveTab('overview');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [narrationSupported]);

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
      setActiveTab(step.tabId);
      return;
    }

    const timer = window.setTimeout(() => {
      locateGuideTarget(true);
    }, 120);

    return () => {
      window.clearTimeout(timer);
    };
  }, [activeTab, guideStepIndex, guideSteps, isGuideOpen, locateGuideTarget]);

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
  }, []);

  const handleOpenOverviewLearning = useCallback(() => {
    setActiveTab('overview');

    window.setTimeout(() => {
      const section = document.getElementById(EDUCATION_SECTION_ID);

      if (section) {
        section.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }, 90);
  }, []);

  return (
    <div className="relative min-h-screen overflow-hidden bg-[var(--sx-bg)] text-[var(--sx-text)]">
      <BackgroundFX isOn={isOn} />
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

      <main className="relative z-10 mx-auto w-full max-w-[1240px] px-4 pb-20 pt-10 sm:px-6 sm:pt-12 lg:px-8 lg:pt-16">
        <motion.div
          key={safeActiveTab}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
        >
          {safeActiveTab === 'overview' ? (
            <OverviewView
              isOn={isOn}
              onToggle={() => setIsOn((value) => !value)}
              onOpenSimulator={handleOpenSimulator}
              educationSectionId={EDUCATION_SECTION_ID}
            />
          ) : null}

          {safeActiveTab === 'simulator' ? (
            <SimulatorView
              rangeId={rangeId}
              onRangeChange={setRangeId}
              isOn={isOn}
              onToggle={() => setIsOn((value) => !value)}
              linePath={linePath}
              areaPath={areaPath}
              endY={endY}
              markers={chartMarkers}
              simulated={simulated}
              estimatedValueLabel={estimatedValueLabel}
              yieldPctLabel={yieldPctLabel}
              capitalInput={capitalInput}
              capitalError={capitalError}
              onCapitalInputChange={handleCapitalInputChange}
              onCapitalInputBlur={handleCapitalInputBlur}
              onPresetSelect={handleCapitalPreset}
              activeCapital={capitalAmount}
              onLearnHowItWorks={handleOpenOverviewLearning}
              scenario={scenario}
            />
          ) : null}

          {safeActiveTab === 'playbook' ? (
            <YieldPlaybookView
              onTryFlow={handleOpenSimulator}
              onLearnMore={handleOpenOverviewLearning}
            />
          ) : null}
        </motion.div>

        <footer className="mt-12 flex flex-col gap-2 border-t border-[var(--sx-border)] pt-4 text-[11px] leading-[1.5] text-[var(--sx-muted)] sm:flex-row sm:items-center sm:justify-between">
          <p>{t('app.footer.disclaimer')}</p>
          <a
            href="https://x.com/RyuuDefi"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex w-fit items-center text-[var(--sx-muted)] transition-colors duration-200 hover:text-[var(--sx-primary-bright)]"
          >
            {t('app.footer.createdBy')}
          </a>
        </footer>
      </main>
    </div>
  );
}
