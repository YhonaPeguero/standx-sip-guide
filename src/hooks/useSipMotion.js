import { useEffect, useMemo } from 'react';
import { animate, useMotionValue, useTransform } from 'framer-motion';
import { POINTS } from '../constants/chart';
import { MAX_FILL, buildPoints, toAreaPath, toLinePath } from '../lib/chartPaths';
import { calculateSimulationSnapshot, resolveAppliedRate } from '../lib/simulator';

const ON_EASE = [0.16, 1, 0.3, 1];
const OFF_EASE = [0.4, 0, 0.75, 0];

export function useSipMotion({ isSip2On, baseRate, sip2Rate, yearFraction, capital }) {
  const simulated = useMemo(
    () => calculateSimulationSnapshot({ capital, baseRate, sip2Rate, yearFraction, isSip2On }),
    [baseRate, capital, isSip2On, sip2Rate, yearFraction],
  );

  // The projection is drawn against the reader's full base + SIP-2 rate, so toggling SIP-2
  // moves the line by exactly the share the reader attributed to it. With no rate entered
  // the reference is 0 and the line sits flat on the baseline, which is the honest empty
  // state: nothing has been parameterised yet, so there is nothing to project.
  const referenceRate = resolveAppliedRate({ baseRate, sip2Rate, isSip2On: true });
  const targetFill = referenceRate > 0 ? (simulated.appliedRate / referenceRate) * MAX_FILL : 0;

  const fill = useMotionValue(targetFill);

  useEffect(() => {
    const current = fill.get();
    const safeCurrent = Number.isFinite(current) ? current : 0;

    if (!Number.isFinite(current)) {
      fill.set(0);
    }

    const goingUp = targetFill > safeCurrent;

    const controls = animate(fill, targetFill, {
      duration: goingUp ? 0.72 : 0.42,
      ease: goingUp ? ON_EASE : OFF_EASE,
    });

    return () => controls.stop();
  }, [fill, targetFill]);

  const getSafeFill = () => {
    const value = fill.get();
    return Number.isFinite(value) ? value : 0;
  };

  const linePath = useTransform(() => toLinePath(buildPoints(getSafeFill())));
  const areaPath = useTransform(() => toAreaPath(buildPoints(getSafeFill())));

  const endY = useTransform(() => {
    const point = buildPoints(getSafeFill())[POINTS];

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
