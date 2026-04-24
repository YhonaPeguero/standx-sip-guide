import { BASE_VALUE, POINTS, VB_H, VB_W } from '../constants/chart';

const clamp = (value, min, max) => Math.max(min, Math.min(max, value));

const seededNoise = (index, seed) => {
  const x = Math.sin(index * 12.9898 + seed * 78.233) * 43758.5453;
  return (x - Math.floor(x)) * 2 - 1;
};

export const buildPoints = (progress, target) => {
  const growth = (target - BASE_VALUE) / BASE_VALUE;
  const baseY = VB_H - 26;
  const topY = 14;
  const scale = Math.min(0.3 + growth * 0.5, 0.92);
  const points = [];

  for (let index = 0; index <= POINTS; index += 1) {
    const t = index / POINTS;
    const x = 6 + t * (VB_W - 12);
    const curveT = Math.pow(t, 1.4);
    const noise = seededNoise(index, 3) * 0.022 + seededNoise(index, 7) * 0.012;
    const noisyCurve = clamp(curveT + noise * Math.min(t + 0.2, 1), 0, 1);
    const curveY = baseY - noisyCurve * (baseY - topY) * scale;
    const flatY = baseY - 1 + seededNoise(index, 13) * 0.25;
    const y = flatY + (curveY - flatY) * progress;

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
