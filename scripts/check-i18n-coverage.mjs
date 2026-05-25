import en from '../src/i18n/locales/en.js';
import es from '../src/i18n/locales/es.js';
import ko from '../src/i18n/locales/ko.js';
import ptBR from '../src/i18n/locales/ptBR.js';
import uk from '../src/i18n/locales/uk.js';

function flatten(obj, prefix = '') {
  const result = {};
  for (const [key, value] of Object.entries(obj)) {
    const path = prefix ? `${prefix}.${key}` : key;
    if (value && typeof value === 'object' && !Array.isArray(value)) {
      Object.assign(result, flatten(value, path));
    } else {
      result[path] = value;
    }
  }
  return result;
}

const locales = { en, es, ko, ptBR, uk };
const flatLocales = Object.fromEntries(
  Object.entries(locales).map(([name, data]) => [name, flatten(data)]),
);

const enKeys = new Set(Object.keys(flatLocales.en));
let hadIssue = false;

for (const [name, flat] of Object.entries(flatLocales)) {
  if (name === 'en') continue;
  const localeKeys = new Set(Object.keys(flat));
  const missing = [...enKeys].filter((k) => !localeKeys.has(k));
  const extra = [...localeKeys].filter((k) => !enKeys.has(k));
  if (missing.length || extra.length) {
    hadIssue = true;
    console.log(`\n[${name}]`);
    if (missing.length) console.log(`  Missing (${missing.length}):`, missing.join(', '));
    if (extra.length) console.log(`  Extra (${extra.length}):`, extra.join(', '));
  }
}

if (!hadIssue) {
  console.log('All locales match English key set. Total keys per locale:', enKeys.size);
}
