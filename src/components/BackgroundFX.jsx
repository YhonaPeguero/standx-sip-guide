import { motion } from 'framer-motion';

const WAVE_ORIGIN_X = 180;
const WAVE_ORIGIN_Y = 140;

// Tighter ripple spacing — starts dense near origin and stays close together
const BASE_RADII = [
  60, 110, 160, 215, 275, 340, 410, 485, 565, 650, 740, 835, 935, 1040, 1150, 1265, 1385, 1510,
];

const WAVE_RINGS = BASE_RADII.map((radius, index) => ({
  radius,
  delay: (index % 6) * 0.55,
}));

function WaveLayer() {
  return (
    <svg
      className="absolute inset-0 h-full w-full"
      viewBox="0 0 1440 900"
      preserveAspectRatio="xMinYMin slice"
      aria-hidden="true"
    >
      <defs>
        {/* Fade mask: strong near origin, softens toward bottom-right */}
        <radialGradient
          id="sx-wave-fade"
          cx={`${(WAVE_ORIGIN_X / 1440) * 100}%`}
          cy={`${(WAVE_ORIGIN_Y / 900) * 100}%`}
          r="95%"
          fx={`${(WAVE_ORIGIN_X / 1440) * 100}%`}
          fy={`${(WAVE_ORIGIN_Y / 900) * 100}%`}
        >
          <stop offset="0%" stopColor="#ffffff" stopOpacity="1" />
          <stop offset="30%" stopColor="#ffffff" stopOpacity="0.92" />
          <stop offset="55%" stopColor="#ffffff" stopOpacity="0.55" />
          <stop offset="78%" stopColor="#ffffff" stopOpacity="0.22" />
          <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
        </radialGradient>

        <mask id="sx-wave-mask" maskUnits="userSpaceOnUse" x="0" y="0" width="1440" height="900">
          <rect x="0" y="0" width="1440" height="900" fill="url(#sx-wave-fade)" />
        </mask>

        {/* Stroke gradient: bright near origin -> green-tinted -> fades out */}
        <linearGradient id="sx-wave-stroke" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="rgba(232, 238, 234, 0.85)" />
          <stop offset="45%" stopColor="rgba(140, 205, 170, 0.6)" />
          <stop offset="80%" stopColor="rgba(0, 102, 50, 0.22)" />
          <stop offset="100%" stopColor="rgba(0, 102, 50, 0)" />
        </linearGradient>

        <linearGradient id="sx-wave-stroke-soft" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="rgba(232, 238, 234, 0.5)" />
          <stop offset="60%" stopColor="rgba(140, 205, 170, 0.22)" />
          <stop offset="100%" stopColor="rgba(0, 102, 50, 0)" />
        </linearGradient>
      </defs>

      {/* Primary ripple layer */}
      <g
        mask="url(#sx-wave-mask)"
        fill="none"
        stroke="url(#sx-wave-stroke)"
        strokeWidth="1.05"
      >
        {WAVE_RINGS.map((ring, index) => (
          <motion.circle
            key={`primary-${ring.radius}`}
            cx={WAVE_ORIGIN_X}
            cy={WAVE_ORIGIN_Y}
            r={ring.radius}
            initial={{ opacity: 0.5, scale: 0.992 }}
            animate={{
              opacity: [0.45, 0.62, 0.45],
              scale: [0.992, 1.008, 0.992],
            }}
            transition={{
              duration: 10 + (index % 4) * 1.2,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: ring.delay,
            }}
            style={{ transformOrigin: `${WAVE_ORIGIN_X}px ${WAVE_ORIGIN_Y}px` }}
          />
        ))}
      </g>

      {/* Secondary interleaved ripple layer for denser ripple feel */}
      <g
        mask="url(#sx-wave-mask)"
        fill="none"
        stroke="url(#sx-wave-stroke-soft)"
        strokeWidth="0.7"
      >
        {WAVE_RINGS.map((ring, index) => (
          <motion.circle
            key={`secondary-${ring.radius}`}
            cx={WAVE_ORIGIN_X}
            cy={WAVE_ORIGIN_Y}
            r={ring.radius + 25}
            initial={{ opacity: 0.25 }}
            animate={{
              opacity: [0.2, 0.36, 0.2],
              scale: [0.995, 1.012, 0.995],
            }}
            transition={{
              duration: 12 + (index % 5) * 1.1,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: ring.delay + 0.4,
            }}
            style={{ transformOrigin: `${WAVE_ORIGIN_X}px ${WAVE_ORIGIN_Y}px` }}
          />
        ))}
      </g>

      {/* Green-tinted focal rings near the origin */}
      <g
        mask="url(#sx-wave-mask)"
        fill="none"
        stroke="rgba(0, 102, 50, 0.55)"
        strokeWidth="0.75"
      >
        {[30, 52, 78].map((radius, index) => (
          <motion.circle
            key={`focal-${radius}`}
            cx={WAVE_ORIGIN_X}
            cy={WAVE_ORIGIN_Y}
            r={radius}
            initial={{ opacity: 0.55 }}
            animate={{
              opacity: [0.5, 0.75, 0.5],
              scale: [1, 1.04, 1],
            }}
            transition={{
              duration: 7 + index * 0.8,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: index * 0.5,
            }}
            style={{ transformOrigin: `${WAVE_ORIGIN_X}px ${WAVE_ORIGIN_Y}px` }}
          />
        ))}
      </g>
    </svg>
  );
}

export default function BackgroundFX({ isOn }) {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
      {/* Subtle base grid */}
      <div
        className="absolute inset-0 opacity-[0.022]"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.7) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.7) 1px, transparent 1px)',
          backgroundSize: '52px 52px',
          maskImage: 'radial-gradient(ellipse 90% 70% at 50% 40%, #000 12%, transparent 78%)',
          WebkitMaskImage:
            'radial-gradient(ellipse 90% 70% at 50% 40%, #000 12%, transparent 78%)',
        }}
      />

      {/* Expanding ripple ring system from upper-left */}
      <WaveLayer />

      {/* Ambient center-to-lower glow, responds to toggle state */}
      <motion.div
        animate={{ opacity: isOn ? 0.85 : 0.3, scale: isOn ? 1 : 0.94 }}
        transition={{ duration: 1, ease: 'easeOut' }}
        className="absolute left-1/2 top-[50%] h-[720px] w-[720px] -translate-x-1/2 -translate-y-1/2 rounded-full"
        style={{
          background:
            'radial-gradient(circle, rgba(0, 102, 50, 0.16) 0%, rgba(0, 102, 50, 0.05) 38%, transparent 72%)',
          filter: 'blur(44px)',
        }}
      />

      {/* Soft accent wash top-right */}
      <div
        className="absolute -right-24 top-10 h-[340px] w-[340px] rounded-full"
        style={{
          background:
            'radial-gradient(circle, rgba(250, 198, 195, 0.07) 0%, rgba(250, 198, 195, 0.025) 45%, transparent 75%)',
          filter: 'blur(36px)',
        }}
      />

      {/* Lower content vignette to preserve readability */}
      <div
        className="absolute inset-0"
        style={{
          background:
            'radial-gradient(ellipse 130% 95% at 50% 38%, transparent 30%, rgba(3, 7, 6, 0.78) 100%)',
        }}
      />
    </div>
  );
}
