import { motion } from 'framer-motion';

const WAVE_ORIGIN_X = 180;
const WAVE_ORIGIN_Y = 140;

// Tighter ripple spacing — starts dense near origin and stays close together
const BASE_RADII = [
  60, 110, 160, 215, 275, 340, 410, 485, 565, 650, 740, 835, 935, 1040, 1150, 1265, 1385, 1510,
];

// Cadence is computed once at module load and handed to CSS as custom properties.
// These are static style attributes — the animation loop itself lives in the stylesheet.
const WAVE_RINGS = BASE_RADII.map((radius, index) => ({
  radius,
  primaryStyle: {
    '--sx-ring-dur': `${10 + (index % 4) * 1.2}s`,
    '--sx-ring-delay': `${(index % 6) * 0.55}s`,
  },
  softStyle: {
    '--sx-ring-dur': `${12 + (index % 5) * 1.1}s`,
    '--sx-ring-delay': `${(index % 6) * 0.55 + 0.4}s`,
  },
}));

const FOCAL_RINGS = [30, 52, 78].map((radius, index) => ({
  radius,
  style: {
    '--sx-ring-dur': `${7 + index * 0.8}s`,
    '--sx-ring-delay': `${index * 0.5}s`,
  },
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
        {/* The radial falloff that used to be an SVG <mask> now lives in the stroke itself.
            Rings are concentric on the origin, so a radial gradient in user space gives each
            ring a flat colour at its own distance — same look, no per-frame re-rasterization. */}
        <radialGradient
          id="sx-wave-stroke"
          gradientUnits="userSpaceOnUse"
          cx={WAVE_ORIGIN_X}
          cy={WAVE_ORIGIN_Y}
          r={1200}
        >
          <stop offset="0%" stopColor="rgba(232, 238, 234, 0.85)" />
          <stop offset="26%" stopColor="rgba(178, 220, 198, 0.6)" />
          <stop offset="52%" stopColor="rgba(140, 205, 170, 0.38)" />
          <stop offset="78%" stopColor="rgba(0, 102, 50, 0.18)" />
          <stop offset="100%" stopColor="rgba(0, 102, 50, 0)" />
        </radialGradient>

        <radialGradient
          id="sx-wave-stroke-soft"
          gradientUnits="userSpaceOnUse"
          cx={WAVE_ORIGIN_X}
          cy={WAVE_ORIGIN_Y}
          r={1200}
        >
          <stop offset="0%" stopColor="rgba(232, 238, 234, 0.5)" />
          <stop offset="40%" stopColor="rgba(140, 205, 170, 0.24)" />
          <stop offset="72%" stopColor="rgba(0, 102, 50, 0.12)" />
          <stop offset="100%" stopColor="rgba(0, 102, 50, 0)" />
        </radialGradient>
      </defs>

      {/* Primary ripple layer */}
      <g fill="none" stroke="url(#sx-wave-stroke)" strokeWidth="1.3">
        {WAVE_RINGS.map((ring) => (
          <circle
            key={`primary-${ring.radius}`}
            className="sx-ring sx-ring--primary"
            cx={WAVE_ORIGIN_X}
            cy={WAVE_ORIGIN_Y}
            r={ring.radius}
            style={ring.primaryStyle}
          />
        ))}
      </g>

      {/* Secondary interleaved ripple layer for denser ripple feel */}
      <g fill="none" stroke="url(#sx-wave-stroke-soft)" strokeWidth="0.95">
        {WAVE_RINGS.map((ring) => (
          <circle
            key={`secondary-${ring.radius}`}
            className="sx-ring sx-ring--soft"
            cx={WAVE_ORIGIN_X}
            cy={WAVE_ORIGIN_Y}
            r={ring.radius + 25}
            style={ring.softStyle}
          />
        ))}
      </g>

      {/* Green-tinted focal rings near the origin */}
      <g fill="none" stroke="rgba(0, 102, 50, 0.55)" strokeWidth="0.9">
        {FOCAL_RINGS.map((ring) => (
          <circle
            key={`focal-${ring.radius}`}
            className="sx-ring sx-ring--focal"
            cx={WAVE_ORIGIN_X}
            cy={WAVE_ORIGIN_Y}
            r={ring.radius}
            style={ring.style}
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
