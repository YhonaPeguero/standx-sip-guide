import { HORIZONS } from '../src/constants/chart.js';
import {
  calculateSimulationSnapshot,
  calculateScenarioSnapshot,
  resolveAppliedRate,
} from '../src/lib/simulator.js';

// The simulator ships no rate: the SIP specifications fix none, so both rates are supplied
// by the reader. These fixtures stand in for reader input and exist only to exercise the
// arithmetic — they are not claims about StandX yields.
const capital = 10000;
const baseRate = 4; // reader-entered annual %
const sip2Rate = 2; // reader-entered annual %

console.log(`Projection ($${capital.toLocaleString()} capital, base ${baseRate}% + SIP-2 ${sip2Rate}% annual):`);
console.log('====================================================================');

for (const horizon of HORIZONS) {
  const off = calculateSimulationSnapshot({
    capital, baseRate, sip2Rate, yearFraction: horizon.yearFraction, isSip2On: false,
  });
  const on = calculateSimulationSnapshot({
    capital, baseRate, sip2Rate, yearFraction: horizon.yearFraction, isSip2On: true,
  });

  console.log(`\n[${horizon.label}] yearFraction=${horizon.yearFraction.toFixed(6)}  ticks=${horizon.ticks.join(' · ')}`);
  console.log(`  SIP-2 OFF → rate ${off.appliedRate}%  gain $${off.estimatedGain.toFixed(2)}  value $${off.estimatedValue.toFixed(2)}  (${off.yieldPct.toFixed(4)}%)`);
  console.log(`  SIP-2 ON  → rate ${on.appliedRate}%  gain $${on.estimatedGain.toFixed(2)}  value $${on.estimatedValue.toFixed(2)}  (${on.yieldPct.toFixed(4)}%)`);
}

const oneYear = HORIZONS.find((h) => h.id === '1y');
const oneMonth = HORIZONS.find((h) => h.id === '1m');

console.log('\n\nScenario comparison ($10,000, 1M horizon):');
console.log(calculateScenarioSnapshot({ capital, baseRate, sip2Rate, yearFraction: oneMonth.yearFraction }));

const snap = (opts) => calculateSimulationSnapshot({ capital, baseRate, sip2Rate, ...opts });

const yearOff = snap({ yearFraction: oneYear.yearFraction, isSip2On: false });
const yearOn = snap({ yearFraction: oneYear.yearFraction, isSip2On: true });
const monthOn = snap({ yearFraction: oneMonth.yearFraction, isSip2On: true });
const emptyRates = calculateSimulationSnapshot({
  capital, baseRate: 0, sip2Rate: 0, yearFraction: oneYear.yearFraction, isSip2On: true,
});
const zeroCapital = calculateSimulationSnapshot({
  capital: 0, baseRate, sip2Rate, yearFraction: oneYear.yearFraction, isSip2On: true,
});

console.log('\nInvariants check:');

const checks = [
  // No rate entered must produce no gain: the empty state cannot invent a projection.
  ['No rate entered → zero gain', emptyRates.estimatedGain === 0 && emptyRates.yieldPct === 0],
  // A full year of the reader's base rate is exactly that rate.
  ['1Y OFF gain == capital × baseRate', Math.abs(yearOff.estimatedGain - capital * baseRate / 100) < 1e-9],
  ['1Y ON gain == capital × (base + sip2)', Math.abs(yearOn.estimatedGain - capital * (baseRate + sip2Rate) / 100) < 1e-9],
  // SIP-2 contributes exactly what the reader attributed to it, never an invented share.
  ['SIP-2 delta == capital × sip2Rate over 1Y', Math.abs((yearOn.estimatedGain - yearOff.estimatedGain) - capital * sip2Rate / 100) < 1e-9],
  ['ON gain > OFF gain when sip2Rate > 0', yearOn.estimatedGain > yearOff.estimatedGain],
  // Horizon scales linearly, so a month is 30/365 of a year.
  ['1M gain == 1Y gain × 30/365', Math.abs(monthOn.estimatedGain - yearOn.estimatedGain * (30 / 365)) < 1e-9],
  ['yieldPct tracks gain/capital', Math.abs(yearOn.yieldPct - (yearOn.estimatedGain / capital) * 100) < 1e-9],
  ['estimatedValue == capital + gain', Math.abs(yearOn.estimatedValue - (capital + yearOn.estimatedGain)) < 1e-9],
  ['Zero capital is safe', zeroCapital.estimatedGain === 0 && zeroCapital.yieldPct === 0],
  ['appliedRate excludes SIP-2 when off', yearOff.appliedRate === baseRate],
  // The first rate is the whole DUSD assumption, SIP-3 included; SIP-2 is added to it only
  // while the toggle is on. Nothing else enters the applied rate.
  [
    'appliedRate == DUSD rate + SIP-2 only when SIP-2 is on',
    resolveAppliedRate({ baseRate, sip2Rate, isSip2On: true }) === baseRate + sip2Rate &&
      resolveAppliedRate({ baseRate, sip2Rate, isSip2On: false }) === baseRate,
  ],
  // Pinned outputs for the fixtures above. A relabelling pass must leave these untouched;
  // if any of them moves, the arithmetic changed.
  [
    'Pinned 1Y values unchanged (10,000 @ 4% / +2%)',
    yearOff.estimatedGain === 400 &&
      yearOff.estimatedValue === 10400 &&
      yearOff.yieldPct === 4 &&
      yearOn.estimatedGain === 600 &&
      yearOn.estimatedValue === 10600 &&
      yearOn.yieldPct === 6,
  ],
  [
    'Pinned 1M values unchanged (simple accrual, 30/365)',
    Math.abs(monthOn.estimatedGain - 49.31506849315068) < 1e-9 &&
      Math.abs(monthOn.estimatedValue - 10049.31506849315) < 1e-9,
  ],
  // Simple accrual, never compounding: a year taken in twelve monthly steps would exceed
  // the one-shot figure if a compounding term had crept in.
  [
    'No compounding: 1Y gain == 12 × (1Y gain × 1/12)',
    Math.abs(
      yearOn.estimatedGain -
        12 * snap({ yearFraction: 1 / 12, isSip2On: true }).estimatedGain,
    ) < 1e-9,
  ],
  // Nothing in the constants may carry a rate, a pool count or a date again.
  ['Horizons carry no target/pool/rebalance fields', HORIZONS.every((h) => !('target' in h) && !('poolLabel' in h) && !('rebalanceLabel' in h))],
  ['No ALL horizon', !HORIZONS.some((h) => h.id === 'all')],
  ['Axis ticks carry no dates', HORIZONS.every((h) => h.ticks.every((tick) => /^\d+[hDWMY]$/.test(tick)))],
];

let failed = 0;

for (const [label, ok] of checks) {
  if (!ok) failed += 1;
  console.log(`  ${ok ? '[OK]' : '[FAIL]'}  ${label}`);
}

if (failed > 0) {
  console.error(`\n${failed} invariant(s) failed.`);
  process.exit(1);
}

console.log('\nAll invariants hold.');
