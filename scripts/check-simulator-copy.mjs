import en from '../src/i18n/locales/en.js';
import es from '../src/i18n/locales/es.js';
import ko from '../src/i18n/locales/ko.js';
import ptBR from '../src/i18n/locales/ptBR.js';
import uk from '../src/i18n/locales/uk.js';

// The simulator's rate copy carries a factual claim the arithmetic cannot make on its own:
// the first field is DUSD's whole yield assumption with SIP-3 already inside it, and SIP-2
// is a separate optional layer. These checks fail if that copy drifts back to presenting the
// first field as base yield alone, or starts implying the SIPs fix an APY.

const locales = { en, es, ko, ptBR, uk };

const checks = [
  // The label itself has to carry the composition — the footer note is not the place a
  // first-time reader learns that SIP-3 is already counted.
  [
    'Every locale names SIP-3 in the DUSD rate label',
    Object.values(locales).every((l) => l.rateInputs.baseLabel.includes('SIP-3')),
  ],
  [
    'No locale still labels the field as DUSD base alone',
    Object.values(locales).every(
      (l) => !/^DUSD base|^Base DUSD/i.test(l.rateInputs.baseLabel),
    ),
  ],
  [
    'Every locale supplies the combined-rate hint',
    Object.values(locales).every((l) => l.rateInputs.baseHint.includes('SIP-3')),
  ],
  // The breakdown is the second place the composition must be visible.
  [
    'Breakdown names both layers of the DUSD rate',
    Object.values(locales).every(
      (l) =>
        l.controlPanel.breakdown.base.includes('DUSD') &&
        l.controlPanel.breakdown.base.includes('SIP-3'),
    ),
  ],
  [
    'SIP-2 card states that SIP-3 sits inside the DUSD rate',
    Object.values(locales).every((l) => l.controlPanel.sip2Hint.includes('SIP-3')),
  ],
  // The marker is a local variant, not the site-wide `not published` one: these rates are
  // not withheld, they are simply not fixed by a specification.
  [
    'Rate marker reads `not fixed by SIP` in every locale',
    Object.values(locales).every((l) => l.rateInputs.notFixedMarker === 'not fixed by SIP'),
  ],
  [
    'The site-wide `not published` marker is untouched',
    Object.values(locales).every((l) => l.vaults.notPublished === 'not published'),
  ],
  // No screen may present a figure the reader did not type as a protocol rate.
  [
    'English rates note denies fixed APYs and flags SIP-2 as illustrative',
    /do not define fixed APYs/.test(en.rateInputs.note) &&
      /illustrative effective annual rate/.test(en.rateInputs.note),
  ],
  [
    'Applied total is labelled an estimate',
    en.controlPanel.breakdown.applied === 'Applied estimate',
  ],
  // A hardcoded percentage anywhere in the rate copy would be an invented protocol rate.
  [
    'No locale hardcodes a percentage in the rate copy',
    Object.values(locales).every((l) =>
      [
        l.rateInputs.baseLabel,
        l.rateInputs.baseHint,
        l.rateInputs.sip2Label,
        l.rateInputs.note,
        l.controlPanel.sip2Hint,
        l.controlPanel.breakdown.base,
        l.controlPanel.breakdown.applied,
      ].every((text) => !/\d+([.,]\d+)?\s*%/.test(text)),
    ),
  ],
];

console.log('Simulator copy contract:');

let failed = 0;

for (const [label, ok] of checks) {
  if (!ok) failed += 1;
  console.log(`  ${ok ? '[OK]' : '[FAIL]'}  ${label}`);
}

if (failed > 0) {
  console.error(`\n${failed} copy check(s) failed.`);
  process.exit(1);
}

console.log('\nAll copy checks hold.');
