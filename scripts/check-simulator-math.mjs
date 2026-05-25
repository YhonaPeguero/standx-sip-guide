import { TIME_RANGES, SIP2_SCENARIOS, BASE_VALUE } from '../src/constants/chart.js';
import { calculateSimulationSnapshot, calculateScenarioSnapshot } from '../src/lib/simulator.js';

const capital = 10000;

console.log('Simulation snapshot ($10,000 capital):');
console.log('=========================================');
for (const range of TIME_RANGES) {
  console.log(`\n[${range.label}] target=${range.target} (growth ${(((range.target - BASE_VALUE) / BASE_VALUE) * 100).toFixed(2)}%)`);
  const off = calculateSimulationSnapshot({ capital, target: range.target, isSip2On: false });
  console.log(`  SIP-2 OFF  → value $${off.estimatedValue.toFixed(2)}  gain $${off.estimatedGain.toFixed(2)}  (${off.yieldPct.toFixed(2)}%)`);
  for (const scenario of SIP2_SCENARIOS) {
    const on = calculateSimulationSnapshot({
      capital,
      target: range.target,
      isSip2On: true,
      sip2Multiplier: scenario.multiplier,
    });
    console.log(`  SIP-2 ${scenario.id.padEnd(12)} (x${scenario.multiplier}) → value $${on.estimatedValue.toFixed(2)}  gain $${on.estimatedGain.toFixed(2)}  (${on.yieldPct.toFixed(2)}%)`);
  }
}

console.log('\n\nScenario comparison snapshot ($10,000, 1M target, base multiplier):');
const r1m = TIME_RANGES.find((r) => r.id === '1m');
const scen = calculateScenarioSnapshot({ capital, target: r1m.target, sip2Multiplier: 1 });
console.log(scen);

console.log('\nInvariants check:');
const baseOff = calculateSimulationSnapshot({ capital, target: r1m.target, isSip2On: false });
const baseOn = calculateSimulationSnapshot({ capital, target: r1m.target, isSip2On: true, sip2Multiplier: 1 });
const consOn = calculateSimulationSnapshot({ capital, target: r1m.target, isSip2On: true, sip2Multiplier: 0.5 });
const optOn = calculateSimulationSnapshot({ capital, target: r1m.target, isSip2On: true, sip2Multiplier: 1.5 });

const checks = [
  ['OFF gain > 0 (DUSD+SIP3 baseline)', baseOff.estimatedGain > 0],
  ['Conservative gain > OFF gain', consOn.estimatedGain > baseOff.estimatedGain],
  ['Base gain > Conservative gain', baseOn.estimatedGain > consOn.estimatedGain],
  ['Optimistic gain > Base gain', optOn.estimatedGain > baseOn.estimatedGain],
  ['Multiplier only scales delta over baseline', Math.abs((consOn.estimatedGain - baseOff.estimatedGain) - 0.5 * (baseOn.estimatedGain - baseOff.estimatedGain)) < 0.01],
];

for (const [label, ok] of checks) {
  console.log(`  ${ok ? '[OK]' : '[FAIL]'}  ${label}`);
}
