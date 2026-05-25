import { BASE_VALUE, SIP2_OFF_BASELINE_RATIO } from '../constants/chart.js';

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

function resolveSip2Multiplier(value) {
  if (!Number.isFinite(value) || value < 0) {
    return 1;
  }

  return value;
}

export function computeEffectiveTarget({ target, isSip2On, sip2Multiplier = 1 }) {
  const safeTarget = toSafeTarget(target);
  const baselineTarget = BASE_VALUE + (safeTarget - BASE_VALUE) * SIP2_OFF_BASELINE_RATIO;

  if (!isSip2On) {
    return baselineTarget;
  }

  const safeMultiplier = resolveSip2Multiplier(sip2Multiplier);
  const sip2Delta = safeTarget - baselineTarget;
  return baselineTarget + sip2Delta * safeMultiplier;
}

export function calculateSimulationSnapshot({ capital, target, isSip2On, sip2Multiplier = 1 }) {
  const initialCapital = toSafeCapital(capital);
  const effectiveTarget = computeEffectiveTarget({ target, isSip2On, sip2Multiplier });

  const projectedValue = calculateProjectedValue(initialCapital, effectiveTarget);
  const estimatedValue = Math.max(initialCapital, toSafeNumber(projectedValue, initialCapital));
  const estimatedGain = Math.max(0, estimatedValue - initialCapital);
  const yieldPct = initialCapital > 0 ? (estimatedGain / initialCapital) * 100 : 0;

  return {
    initialCapital,
    estimatedValue,
    estimatedGain,
    yieldPct,
  };
}

export function calculateScenarioSnapshot({ capital, target, sip2Multiplier = 1 }) {
  const initialCapital = toSafeCapital(capital);
  const safeTarget = toSafeTarget(target);

  const baselineTarget = BASE_VALUE + (safeTarget - BASE_VALUE) * SIP2_OFF_BASELINE_RATIO;
  const offEstimatedValue = Math.max(0, calculateProjectedValue(initialCapital, baselineTarget));
  const offEstimatedGain = Math.max(0, offEstimatedValue - initialCapital);
  const offYieldPct = initialCapital > 0 ? (offEstimatedGain / initialCapital) * 100 : 0;

  const onTarget = computeEffectiveTarget({ target, isSip2On: true, sip2Multiplier });
  const onEstimatedValue = Math.max(0, calculateProjectedValue(initialCapital, onTarget));
  const onEstimatedGain = Math.max(0, onEstimatedValue - initialCapital);
  const onYieldPct = initialCapital > 0 ? (onEstimatedGain / initialCapital) * 100 : 0;

  return {
    initialCapital,
    offEstimatedValue,
    offEstimatedGain,
    offYieldPct,
    onEstimatedValue,
    onEstimatedGain,
    onYieldPct,
  };
}
