// Simple accrual on rates the reader supplies: gain = capital × (rate% / 100) × yearFraction.
//
// There is no compounding and no baseline split, because both would require numbers StandX
// does not publish — a compounding frequency, and the share of total yield attributable to
// SIP-2. The reader states the DUSD base rate (SIP-3 included, since SIP-3 routes fees into
// the same DUSD pool) and, separately, what SIP-2 adds on top. The SIP-2 toggle decides
// whether the second rate is applied, so the OFF/ON difference is the reader's own figure
// rather than a ratio we invented.

function toSafeNumber(value, fallback = 0) {
  return Number.isFinite(value) ? value : fallback;
}

function toSafeCapital(capital) {
  return Math.max(0, toSafeNumber(capital, 0));
}

// An unentered rate is 0, never a stand-in default.
function toSafeRate(rate) {
  return Math.max(0, toSafeNumber(rate, 0));
}

function toSafeYearFraction(yearFraction) {
  return Math.max(0, toSafeNumber(yearFraction, 0));
}

// The annual rate actually in effect, before the horizon scales it.
export function resolveAppliedRate({ baseRate, sip2Rate, isSip2On }) {
  return toSafeRate(baseRate) + (isSip2On ? toSafeRate(sip2Rate) : 0);
}

export function calculateSimulationSnapshot({ capital, baseRate, sip2Rate, yearFraction, isSip2On }) {
  const initialCapital = toSafeCapital(capital);
  const appliedRate = resolveAppliedRate({ baseRate, sip2Rate, isSip2On });
  const periodRate = (appliedRate / 100) * toSafeYearFraction(yearFraction);

  const estimatedGain = Math.max(0, initialCapital * periodRate);
  const estimatedValue = initialCapital + estimatedGain;
  const yieldPct = initialCapital > 0 ? (estimatedGain / initialCapital) * 100 : 0;

  return {
    initialCapital,
    estimatedValue,
    estimatedGain,
    yieldPct,
    appliedRate,
  };
}

// OFF and ON side by side, both derived from the same reader-entered rates.
export function calculateScenarioSnapshot({ capital, baseRate, sip2Rate, yearFraction }) {
  const off = calculateSimulationSnapshot({
    capital,
    baseRate,
    sip2Rate,
    yearFraction,
    isSip2On: false,
  });

  const on = calculateSimulationSnapshot({
    capital,
    baseRate,
    sip2Rate,
    yearFraction,
    isSip2On: true,
  });

  return {
    initialCapital: off.initialCapital,
    offEstimatedValue: off.estimatedValue,
    offEstimatedGain: off.estimatedGain,
    offYieldPct: off.yieldPct,
    onEstimatedValue: on.estimatedValue,
    onEstimatedGain: on.estimatedGain,
    onYieldPct: on.yieldPct,
  };
}
