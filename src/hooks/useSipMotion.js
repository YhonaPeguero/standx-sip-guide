import { useEffect, useMemo } from 'react';
import { animate, useMotionValue, useTransform } from 'framer-motion';
import { BASE_VALUE, POINTS, SIP2_OFF_PROGRESS } from '../constants/chart';
import { buildPoints, toAreaPath, toLinePath } from '../lib/chartPaths';
import { calculateSimulationSnapshot, computeEffectiveTarget } from '../lib/simulator';

const ON_EASE = [0.16, 1, 0.3, 1];
const OFF_EASE = [0.4, 0, 0.75, 0];

export function useSipMotion({ isSip2On, target, capital, sip2Multiplier = 1 }) {
  const safeTarget = Number.isFinite(target) ? target : BASE_VALUE;
  const effectiveTarget = isSip2On
    ? computeEffectiveTarget({ target: safeTarget, isSip2On: true, sip2Multiplier })
    : safeTarget;
  const onProgress = useMotionValue(SIP2_OFF_PROGRESS);
  const chartTarget = useMotionValue(effectiveTarget);

  const simulated = useMemo(
    () => calculateSimulationSnapshot({ capital, target, isSip2On, sip2Multiplier }),
    [capital, isSip2On, sip2Multiplier, target],
  );

  useEffect(() => {
    const targetProgress = isSip2On ? 1 : SIP2_OFF_PROGRESS;
    const currentRawProgress = onProgress.get();
    const currentProgress = Number.isFinite(currentRawProgress) ? currentRawProgress : SIP2_OFF_PROGRESS;

    if (!Number.isFinite(currentRawProgress)) {
      onProgress.set(SIP2_OFF_PROGRESS);
    }

    const goingUp = targetProgress > currentProgress;

    const controls = animate(onProgress, targetProgress, {
      duration: goingUp ? 0.72 : 0.42,
      ease: goingUp ? ON_EASE : OFF_EASE,
    });

    return () => controls.stop();
  }, [isSip2On, onProgress]);

  useEffect(() => {
    const controls = animate(chartTarget, effectiveTarget, {
      duration: 0.72,
      ease: ON_EASE,
    });

    return () => controls.stop();
  }, [chartTarget, effectiveTarget]);

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
