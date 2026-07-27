import { POINTS, VB_H, VB_W } from '../constants/chart';

// The chart draws the accrual function, so the line is straight: simple accrual is linear in
// time. It used to be a power curve with two layers of seeded noise, which read as a price
// history — jitter the protocol never published, on an axis labelled with dates. Both are
// gone. A curved line here would imply compounding, and no compounding frequency is
// published either.

const PLOT_LEFT = 6;
const PLOT_RIGHT = VB_W - 6;
const BASE_Y = VB_H - 26;
const TOP_Y = 14;

// Leaves headroom so the fully-on projection does not touch the top of the viewBox.
export const MAX_FILL = 0.86;

// `fill` is the share of the plot height the projection reaches: 0 when no rate has been
// entered yet, MAX_FILL when the reader's base + SIP-2 rates are both applied.
export const buildPoints = (fill) => {
  const safeFill = Number.isFinite(fill) ? Math.max(0, Math.min(MAX_FILL, fill)) : 0;
  const endY = BASE_Y - safeFill * (BASE_Y - TOP_Y);
  const points = [];

  for (let index = 0; index <= POINTS; index += 1) {
    const t = index / POINTS;
    const x = PLOT_LEFT + t * (PLOT_RIGHT - PLOT_LEFT);
    const y = BASE_Y + (endY - BASE_Y) * t;

    points.push([x, y]);
  }

  return points;
};

export const toLinePath = (points) => {
  let path = `M ${points[0][0].toFixed(2)} ${points[0][1].toFixed(2)}`;

  for (let index = 1; index < points.length; index += 1) {
    path += ` L ${points[index][0].toFixed(2)} ${points[index][1].toFixed(2)}`;
  }

  return path;
};

export const toAreaPath = (points) => {
  let path = `M ${points[0][0].toFixed(2)} ${VB_H}`;
  path += ` L ${points[0][0].toFixed(2)} ${points[0][1].toFixed(2)}`;

  for (let index = 1; index < points.length; index += 1) {
    path += ` L ${points[index][0].toFixed(2)} ${points[index][1].toFixed(2)}`;
  }

  path += ` L ${points[points.length - 1][0].toFixed(2)} ${VB_H} Z`;
  return path;
};
