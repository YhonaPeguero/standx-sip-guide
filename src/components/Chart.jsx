import { motion } from 'framer-motion';
import { VB_H, VB_W } from '../constants/chart';

// The x axis is the selected horizon, subdivided into units of itself (6h/12h/18h/1D for a
// day, 3M/6M/9M/1Y for a year). It used to print 'Oct 12 · Oct 26 · Nov 09 · Active', which
// implied a real historical series that never existed.

export default function Chart({ linePath, areaPath, endY, isOn, ticks, ariaLabel }) {
  return (
    <div className="relative mt-4 h-[210px] w-full">
      <svg
        viewBox={`0 0 ${VB_W} ${VB_H}`}
        preserveAspectRatio="none"
        className="h-full w-full"
        role="img"
        aria-label={ariaLabel}
      >
        <defs>
          <linearGradient id="areaGrad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#006632" stopOpacity="0.4" />
            <stop offset="100%" stopColor="#006632" stopOpacity="0.02" />
          </linearGradient>

          <linearGradient id="lineGrad" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#006632" stopOpacity="0.4" />
            <stop offset="65%" stopColor="#3D976F" stopOpacity="0.95" />
            <stop offset="100%" stopColor="#FAC6C3" stopOpacity="0.95" />
          </linearGradient>
        </defs>

        <line
          x1="6"
          x2={VB_W - 6}
          y1={VB_H - 1}
          y2={VB_H - 1}
          stroke="rgba(77, 91, 84, 0.55)"
          strokeWidth="1"
        />

        {[0.25, 0.5, 0.75].map((point) => (
          <line
            key={point}
            x1={6 + (VB_W - 12) * point}
            x2={6 + (VB_W - 12) * point}
            y1="20"
            y2={VB_H - 1}
            stroke="rgba(62, 74, 68, 0.22)"
            strokeWidth="1"
            strokeDasharray="4 10"
          />
        ))}

        <motion.path
          d={areaPath}
          fill="url(#areaGrad)"
          animate={{ opacity: isOn ? 1 : 0.55 }}
          transition={{ duration: 0.45 }}
        />

        <motion.path
          d={linePath}
          fill="none"
          stroke="url(#lineGrad)"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          animate={{ opacity: isOn ? 1 : 0.72 }}
        />

        {isOn ? (
          <motion.circle
            cx={VB_W - 6}
            cy={endY}
            r={4}
            fill="none"
            stroke="#FAC6C3"
            strokeWidth="1.5"
            initial={{ r: 4, opacity: 0.55 }}
            animate={{ r: [4, 14], opacity: [0.55, 0] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: 'easeOut' }}
          />
        ) : null}

        <motion.circle
          cx={VB_W - 6}
          cy={endY}
          r="4"
          fill="#FAC6C3"
          animate={{ opacity: isOn ? 1 : 0.6 }}
          transition={{ duration: 0.3 }}
        />
      </svg>

      <div className="mono mt-2 flex items-center justify-between text-[11px] uppercase tracking-[0.12em] text-[var(--sx-muted)]">
        {ticks.map((tick) => (
          <span key={tick}>{tick}</span>
        ))}
      </div>
    </div>
  );
}
