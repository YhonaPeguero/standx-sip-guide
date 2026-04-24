export const BASE_VALUE = 1000;

export const DEFAULT_CAPITAL = 10000;
export const MIN_CAPITAL = 100;
export const MAX_CAPITAL = 1000000;
export const CAPITAL_PRESETS = [1000, 5000, 10000, 25000];

export const TIME_RANGES = [
  {
    id: '1d',
    label: '1D',
    target: 1022.36,
    poolLabel: '9 Pools',
    rebalanceLabel: '07m 48s',
  },
  {
    id: '1w',
    label: '1W',
    target: 1058.74,
    poolLabel: '11 Pools',
    rebalanceLabel: '11m 19s',
  },
  {
    id: '1m',
    label: '1M',
    target: 1087.42,
    poolLabel: '14 Pools',
    rebalanceLabel: '14m 22s',
  },
  {
    id: '1y',
    label: '1Y',
    target: 1548.36,
    poolLabel: '18 Pools',
    rebalanceLabel: '18m 06s',
  },
  {
    id: 'all',
    label: 'ALL',
    target: 2210.0,
    poolLabel: '22 Pools',
    rebalanceLabel: '23m 33s',
  },
];

export const DEFAULT_RANGE_ID = '1m';

export const CHART_MARKERS = ['Oct 12', 'Oct 26', 'Nov 09', 'Active'];

export const VB_W = 600;
export const VB_H = 180;
export const POINTS = 52;
