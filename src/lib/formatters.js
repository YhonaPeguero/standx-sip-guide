const STANDARD_CURRENCY = new Intl.NumberFormat('en-US', {
  minimumFractionDigits: 2,
  maximumFractionDigits: 2,
});

const STANDARD_INTEGER = new Intl.NumberFormat('en-US', {
  minimumFractionDigits: 0,
  maximumFractionDigits: 0,
});

const COMPACT_NUMBER = new Intl.NumberFormat('en-US', {
  notation: 'compact',
  compactDisplay: 'short',
  minimumFractionDigits: 0,
  maximumFractionDigits: 1,
});

const PERCENTAGE = new Intl.NumberFormat('en-US', {
  minimumFractionDigits: 2,
  maximumFractionDigits: 2,
});

export function formatCurrencyValue(value) {
  return STANDARD_CURRENCY.format(Math.max(0, value));
}

export function formatCurrencyAdaptive(value, { withSymbol = true, threshold = 100000 } = {}) {
  const safeValue = Number.isFinite(value) ? Math.max(0, value) : 0;

  const formatted =
    safeValue >= threshold ? COMPACT_NUMBER.format(safeValue).toUpperCase() : STANDARD_CURRENCY.format(safeValue);

  return withSymbol ? `$${formatted}` : formatted;
}

export function formatCurrencyWhole(value) {
  return `$${STANDARD_INTEGER.format(Math.max(0, value))}`;
}

export function formatPercentValue(value) {
  const safeValue = Number.isFinite(value) ? Math.max(0, value) : 0;
  return `${PERCENTAGE.format(safeValue)}%`;
}
