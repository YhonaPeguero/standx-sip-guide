// The simulator projects a function the reader parameterises. It does not replay history.
//
// StandX publishes no yield rate anywhere: SIP-2 defines Position Yield Pool as
// `Configured Ratio × Net Eligible Fee Flow` and lists Configured Ratio under
// "Governance and Parameters" as adjustable; SIP-3 routes "a systematic allocation" of Net
// Trading Fee Revenue without quantifying it; the DUSD Yielding Circle publishes the 7-day
// cycle and its snapshot rules but no APY. So no rate is hardcoded here — both rates are
// typed in by the reader and carry the `not published` marker next to their labels.
//
// Removed deliberately, and not to be reintroduced without a doc citation: per-range
// `target` values (1022.36 / 1058.74 / 1087.42 / 1548.36 / 2210.0), the
// Conservative/Base/Optimistic multipliers, SIP2_OFF_BASELINE_RATIO (which asserted that
// SIP-2 accounts for exactly 70% of yield), the `ALL` range (there is no history to show),
// and the `poolLabel` / `rebalanceLabel` / `CHART_MARKERS` strings.

// Horizons scale the reader's annual rate. `yearFraction` is calendar arithmetic on that
// rate, not a protocol parameter. `ticks` label the x axis in units of the horizon itself,
// so the axis never implies a date. They stay untranslated, matching `label`.
export const HORIZONS = [
  { id: '1d', label: '1D', yearFraction: 1 / 365, ticks: ['6h', '12h', '18h', '1D'] },
  { id: '1w', label: '1W', yearFraction: 7 / 365, ticks: ['2D', '4D', '6D', '1W'] },
  { id: '1m', label: '1M', yearFraction: 30 / 365, ticks: ['1W', '2W', '3W', '1M'] },
  { id: '1y', label: '1Y', yearFraction: 1, ticks: ['3M', '6M', '9M', '1Y'] },
];

export const DEFAULT_HORIZON_ID = '1m';

export const DEFAULT_CAPITAL = 10000;
export const MIN_CAPITAL = 100;
export const MAX_CAPITAL = 1000000;
export const CAPITAL_PRESETS = [1000, 5000, 10000, 25000];

// Annual percentage bounds for the two reader-entered rates. These bound an input field;
// they are not claims about what StandX pays. Both fields start empty on purpose — a
// prefilled rate would be an invented figure the reader never chose.
export const MIN_RATE = 0;
export const MAX_RATE = 100;

export const VB_W = 600;
export const VB_H = 180;
export const POINTS = 52;
