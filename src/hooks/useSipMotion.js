import { useEffect, useState } from 'react';
import { animate, useMotionValue, useTransform } from 'framer-motion';
import { BASE_VALUE, POINTS } from '../constants/chart';
import { buildPoints, toAreaPath, toLinePath } from '../lib/chartPaths';

const ON_EASE = [0.16, 1, 0.3, 1];
const OFF_EASE = [0.4, 0, 0.75, 0];
const ON_PROGRESS_FLOOR = 0.14;
const OFF_PROGRESS_CEILING = 0.86;

export function useSipMotion({ isOn, target, capital }) {
  const onProgress = useMotionValue(0);
  const chartTarget = useMotionValue(target);
  const initialCapital = useMotionValue(capital);
  const projectedCapital = useMotionValue(capital * (target / BASE_VALUE));

  const [simulated, setSimulated] = useState({
    initialCapital: capital,
    estimatedValue: capital,
    estimatedGain: 0,
    yieldPct: 0,
  });

  useEffect(() => {
    const currentProgress = onProgress.get();

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
    const controls = animate(chartTarget, target, {
      duration: 0.72,
      ease: ON_EASE,
    });

    return () => controls.stop();
  }, [chartTarget, target]);

  useEffect(() => {
    const controls = animate(initialCapital, capital, {
      duration: 0.35,
      ease: ON_EASE,
    });

    return () => controls.stop();
  }, [capital, initialCapital]);

  useEffect(() => {
    const controls = animate(projectedCapital, capital * (target / BASE_VALUE), {
      duration: 0.5,
      ease: ON_EASE,
    });

    return () => controls.stop();
  }, [capital, projectedCapital, target]);

  const currentValue = useTransform(
    () =>
      initialCapital.get() +
      (projectedCapital.get() - initialCapital.get()) * onProgress.get(),
  );

  const estimatedGain = useTransform(() => currentValue.get() - initialCapital.get());

  const yieldPct = useTransform(() => {
    if (initialCapital.get() <= 0) {
      return 0;
    }

    return (estimatedGain.get() / initialCapital.get()) * 100;
  });

  const linePath = useTransform(() => {
    const points = buildPoints(onProgress.get(), chartTarget.get());
    return toLinePath(points);
  });

  const areaPath = useTransform(() => {
    const points = buildPoints(onProgress.get(), chartTarget.get());
    return toAreaPath(points);
  });

  const endY = useTransform(() => {
    const points = buildPoints(onProgress.get(), chartTarget.get());
    return points[POINTS][1];
  });

  useEffect(() => {
    const update = () => {
      const initial = initialCapital.get();
      const estimated = currentValue.get();
      const gain = Math.max(0, estimated - initial);
      const pct = initial > 0 ? (gain / initial) * 100 : 0;

      setSimulated({
        initialCapital: initial,
        estimatedValue: estimated,
        estimatedGain: gain,
        yieldPct: pct,
      });
    };

    update();

    const stopCurrent = currentValue.on('change', update);
    const stopInitial = initialCapital.on('change', update);

    return () => {
      stopCurrent();
      stopInitial();
    };
  }, [currentValue, initialCapital]);

  return {
    simulated,
    linePath,
    areaPath,
    endY,
    estimatedGain,
    yieldPct,
  };
}
