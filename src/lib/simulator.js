import { BASE_VALUE } from '../constants/chart.js';

function toSafeNumber(value, fallback = 0) {
  return Number.isFinite(value) ? value : fallback;
}

function toSafeCapital(capital) {
  return Math.max(0, toSafeNumber(capital, 0));
}

function toSafeTarget(target) {
  return Math.max(0, toSafeNumber(target, BASE_VALUE));
}

export function calculateProjectedValue(capital, target) {
  const safeCapital = toSafeCapital(capital);
  const safeTarget = toSafeTarget(target);

  if (BASE_VALUE <= 0) {
    return safeCapital;
  }

  return safeCapital * (safeTarget / BASE_VALUE);
}

export function calculateSimulationSnapshot({ capital, target, isOn }) {
  const initialCapital = toSafeCapital(capital);

  if (!isOn) {
    return {
      initialCapital,
      estimatedValue: initialCapital,
      estimatedGain: 0,
      yieldPct: 0,
    };
  }

  const projectedValue = calculateProjectedValue(initialCapital, target);
  const estimatedValue = Math.max(0, toSafeNumber(projectedValue, initialCapital));
  const estimatedGain = Math.max(0, estimatedValue - initialCapital);
  const yieldPct = initialCapital > 0 ? (estimatedGain / initialCapital) * 100 : 0;

  return {
    initialCapital,
    estimatedValue,
    estimatedGain,
    yieldPct,
  };
}

export function calculateScenarioSnapshot({ capital, target }) {
  const initialCapital = toSafeCapital(capital);
  const estimatedValue = Math.max(0, calculateProjectedValue(initialCapital, target));
  const estimatedGain = Math.max(0, estimatedValue - initialCapital);
  const yieldPct = initialCapital > 0 ? (estimatedGain / initialCapital) * 100 : 0;

  return {
    initialCapital,
    onEstimatedValue: estimatedValue,
    onEstimatedGain: estimatedGain,
    onYieldPct: yieldPct,
  };
}
