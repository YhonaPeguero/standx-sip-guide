import { useCallback, useMemo, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import BackgroundFX from './components/BackgroundFX';
import OverviewView from './components/OverviewView';
import SimulatorView from './components/SimulatorView';
import TopBar from './components/TopBar';
import YieldPlaybookView from './components/YieldPlaybookView';
import {
  BASE_VALUE,
  CHART_MARKERS,
  DEFAULT_CAPITAL,
  DEFAULT_RANGE_ID,
  MAX_CAPITAL,
  MIN_CAPITAL,
  TIME_RANGES,
} from './constants/chart';
import { useSipMotion } from './hooks/useSipMotion';
import { formatCurrencyAdaptive, formatPercentValue } from './lib/formatters';

const CAPITAL_PATTERN = /^\d*(\.\d{0,2})?$/;
const MAX_ERROR = 'Max amount: $1,000,000';
const MIN_ERROR = 'Min amount: $100';
const EDUCATION_SECTION_ID = 'overview-learn-flow';

const sanitizeInput = (value) => value.replace(/[$,\s]/g, '');

const normalizeCapitalInput = (value) => {
  if (!Number.isFinite(value)) {
    return String(DEFAULT_CAPITAL);
  }

  const decimals = Number.isInteger(value) ? 0 : 2;
  return value.toFixed(decimals);
};

export default function App() {
  const [activeTab, setActiveTab] = useState('overview');
  const [isOn, setIsOn] = useState(false);
  const [rangeId, setRangeId] = useState(DEFAULT_RANGE_ID);
  const [capitalAmount, setCapitalAmount] = useState(DEFAULT_CAPITAL);
  const [capitalInput, setCapitalInput] = useState(String(DEFAULT_CAPITAL));
  const [capitalError, setCapitalError] = useState('');

  const selectedRange = useMemo(
    () => TIME_RANGES.find((range) => range.id === rangeId) ?? TIME_RANGES[0],
    [rangeId],
  );

  const { simulated, linePath, areaPath, endY } = useSipMotion({
    isOn,
    target: selectedRange.target,
    capital: capitalAmount,
  });

  const handleCapitalPreset = useCallback((amount) => {
    setCapitalAmount(amount);
    setCapitalInput(String(amount));
    setCapitalError('');
  }, []);

  const handleCapitalInputChange = useCallback((rawValue) => {
    const nextValue = sanitizeInput(rawValue);

    if (nextValue.length > 16 || !CAPITAL_PATTERN.test(nextValue)) {
      return;
    }

    setCapitalInput(nextValue);

    if (nextValue.length === 0) {
      setCapitalError(MIN_ERROR);
      return;
    }

    const parsedAmount = Number(nextValue);

    if (!Number.isFinite(parsedAmount)) {
      setCapitalError(MIN_ERROR);
      return;
    }

    if (parsedAmount > MAX_CAPITAL) {
      setCapitalError(MAX_ERROR);
      return;
    }

    if (parsedAmount < MIN_CAPITAL) {
      setCapitalError(MIN_ERROR);
      return;
    }

    setCapitalAmount(parsedAmount);
    setCapitalError('');
  }, []);

  const handleCapitalInputBlur = useCallback(() => {
    if (capitalInput.trim().length === 0) {
      setCapitalInput(normalizeCapitalInput(capitalAmount));
      setCapitalError('');
      return;
    }

    const parsedAmount = Number(capitalInput);

    if (!Number.isFinite(parsedAmount)) {
      setCapitalError(MIN_ERROR);
      return;
    }

    if (parsedAmount > MAX_CAPITAL) {
      setCapitalError(MAX_ERROR);
      return;
    }

    if (parsedAmount < MIN_CAPITAL) {
      setCapitalError(MIN_ERROR);
      return;
    }

    setCapitalAmount(parsedAmount);
    setCapitalInput(normalizeCapitalInput(parsedAmount));
    setCapitalError('');
  }, [capitalAmount, capitalInput]);

  const estimatedValueLabel = useMemo(
    () => formatCurrencyAdaptive(simulated.estimatedValue, { threshold: 850000 }),
    [simulated.estimatedValue],
  );

  const yieldPctLabel = useMemo(() => formatPercentValue(simulated.yieldPct), [simulated.yieldPct]);

  const scenario = useMemo(() => {
    const onEstimatedValue = capitalAmount * (selectedRange.target / BASE_VALUE);
    const onEstimatedGain = Math.max(0, onEstimatedValue - capitalAmount);
    const onYieldPct = capitalAmount > 0 ? (onEstimatedGain / capitalAmount) * 100 : 0;

    return {
      initialCapital: capitalAmount,
      onEstimatedValue,
      onEstimatedGain,
      onYieldPct,
    };
  }, [capitalAmount, selectedRange.target]);

  const handleTabChange = useCallback((tabId) => {
    setActiveTab(tabId);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

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
      <TopBar activeTab={activeTab} onTabChange={handleTabChange} />

      <main className="relative z-10 mx-auto w-full max-w-[1240px] px-4 pb-20 pt-10 sm:px-6 sm:pt-12 lg:px-8 lg:pt-16">
        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -4 }}
            transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
          >
            {activeTab === 'overview' ? (
              <OverviewView
                isOn={isOn}
                onToggle={() => setIsOn((value) => !value)}
                onOpenSimulator={handleOpenSimulator}
                educationSectionId={EDUCATION_SECTION_ID}
              />
            ) : null}

            {activeTab === 'simulator' ? (
              <SimulatorView
                rangeId={rangeId}
                onRangeChange={setRangeId}
                isOn={isOn}
                onToggle={() => setIsOn((value) => !value)}
                linePath={linePath}
                areaPath={areaPath}
                endY={endY}
                markers={CHART_MARKERS}
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

            {activeTab === 'playbook' ? (
              <YieldPlaybookView
                onTryFlow={handleOpenSimulator}
                onLearnMore={handleOpenOverviewLearning}
              />
            ) : null}
          </motion.div>
        </AnimatePresence>

        <footer className="mt-12 flex flex-col gap-2 border-t border-[var(--sx-border)] pt-4 text-[11px] leading-[1.5] text-[var(--sx-muted)] sm:flex-row sm:items-center sm:justify-between">
          <p>Educational simulation only. Actual results may vary.</p>
          <a
            href="https://x.com/RyuuDefi"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex w-fit items-center text-[var(--sx-muted)] transition-colors duration-200 hover:text-[var(--sx-primary-bright)]"
          >
            Created by: Thisnotmeme,
          </a>
        </footer>
      </main>
    </div>
  );
}
