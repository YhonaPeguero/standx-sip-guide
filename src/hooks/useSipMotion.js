import { useEffect, useMemo } from 'react';
import { animate, useMotionValue, useTransform } from 'framer-motion';
import { BASE_VALUE, POINTS } from '../constants/chart';
import { buildPoints, toAreaPath, toLinePath } from '../lib/chartPaths';
import { calculateSimulationSnapshot } from '../lib/simulator';

const ON_EASE = [0.16, 1, 0.3, 1];
const OFF_EASE = [0.4, 0, 0.75, 0];
const ON_PROGRESS_FLOOR = 0.14;
const OFF_PROGRESS_CEILING = 0.86;

export function useSipMotion({ isOn, target, capital }) {
  const safeTarget = Number.isFinite(target) ? target : BASE_VALUE;
  const onProgress = useMotionValue(0);
  const chartTarget = useMotionValue(safeTarget);

  const simulated = useMemo(
    () => calculateSimulationSnapshot({ capital, target, isOn }),
    [capital, isOn, target],
  );

  useEffect(() => {
    const currentRawProgress = onProgress.get();
    const currentProgress = Number.isFinite(currentRawProgress) ? currentRawProgress : 0;

    if (!Number.isFinite(currentRawProgress)) {
      onProgress.set(0);
    }

    if (isOn && currentProgress < ON_PROGRESS_FLOOR) {
      onProgress.set(ON_PROGRESS_FLOOR);
    }

    if (!isOn && currentProgress > OFF_PROGRESS_CEILING) {
      onProgress.set(OFF_PROGRESS_CEILING);
    }

    const controls = animate(onProgress, isOn ? 1 : 0, {
      duration: isOn ? 0.72 : 0.42,
      ease: isOn ? ON_EASE : OFF_EASE,
    });

    return () => controls.stop();
  }, [isOn, onProgress]);

  useEffect(() => {
    const controls = animate(chartTarget, safeTarget, {
      duration: 0.72,
      ease: ON_EASE,
    });

    return () => controls.stop();
  }, [chartTarget, safeTarget]);

  const getSafeProgress = () => {
    const progress = onProgress.get();
    return Number.isFinite(progress) ? progress : 0;
  };

  const getSafeChartTarget = () => {
    const currentTarget = chartTarget.get();
    return Number.isFinite(currentTarget) ? currentTarget : BASE_VALUE;
  };

  const linePath = useTransform(() => {
    const points = buildPoints(getSafeProgress(), getSafeChartTarget());
    return toLinePath(points);
  });

  const areaPath = useTransform(() => {
    const points = buildPoints(getSafeProgress(), getSafeChartTarget());
    return toAreaPath(points);
  });

  const endY = useTransform(() => {
    const points = buildPoints(getSafeProgress(), getSafeChartTarget());
    const point = points[POINTS];

    if (!point || !Number.isFinite(point[1])) {
      return 0;
    }

    return point[1];
  });

  return {
    simulated,
    linePath,
    areaPath,
    endY,
  };
}
