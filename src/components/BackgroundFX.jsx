import { motion } from 'framer-motion';

// Atmosphere only. The ripple field and the 52px rule grid that used to live here were
// the hero's background, and both were fine repeated geometry — the shimmer behind a
// landing page, not the ground under a document. What remains is three soft washes and a
// vignette: no pattern, no per-frame animation, nothing for the eye to count.
export default function BackgroundFX({ isOn }) {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
      {/* Ambient center glow, responds to the SIP #2 toggle */}
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

      {/* Upper-left wash — where the ripple origin used to be, so the composition keeps
          its weight on that corner without drawing anything countable there. */}
      <div
        className="absolute -left-32 -top-24 h-[560px] w-[560px] rounded-full"
        style={{
          background:
            'radial-gradient(circle, rgba(0, 102, 50, 0.18) 0%, rgba(0, 102, 50, 0.06) 42%, transparent 74%)',
          filter: 'blur(56px)',
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
