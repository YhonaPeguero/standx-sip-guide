import { readFileSync, readdirSync, statSync } from 'node:fs';
import { join, extname } from 'node:path';
import en from '../src/i18n/locales/en.js';

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

function* walk(dir) {
  for (const name of readdirSync(dir)) {
    const path = join(dir, name);
    const stat = statSync(path);
    if (stat.isDirectory()) {
      if (name === 'node_modules' || name === 'i18n') continue;
      yield* walk(path);
    } else if (['.jsx', '.js', '.tsx', '.ts'].includes(extname(name))) {
      yield path;
    }
  }
}

const enFlat = flatten(en);
const enKeys = new Set(Object.keys(enFlat));
const arrayKeys = new Set(
  Object.entries(en)
    .flatMap(function collect([k, v], _i, _arr, prefix = '') {
      const path = prefix ? `${prefix}.${k}` : k;
      if (Array.isArray(v)) return [path];
      if (v && typeof v === 'object')
        return Object.entries(v).flatMap(([kk, vv]) => collect([kk, vv], 0, 0, path));
      return [];
    }),
);

const T_CALL = /\bt\(\s*['"`]([^'"`]+)['"`]/g;
const issues = [];

for (const file of walk('src')) {
  const src = readFileSync(file, 'utf8');
  let match;
  while ((match = T_CALL.exec(src)) !== null) {
    const key = match[1];
    if (key.includes('${')) continue;
    if (enKeys.has(key) || arrayKeys.has(key)) continue;
    // Check templated keys: try removing trailing dynamic part
    const baseKey = key.replace(/\.[^.]+$/, '');
    if (enKeys.has(baseKey)) continue;
    issues.push({ file, key });
  }
}

if (issues.length === 0) {
  console.log('All t() calls resolve to existing keys.');
} else {
  for (const { file, key } of issues) {
    console.log(`MISSING  ${key}  (${file})`);
  }
  process.exit(1);
}
