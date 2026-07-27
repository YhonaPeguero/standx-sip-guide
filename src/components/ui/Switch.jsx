import { motion } from 'framer-motion';

// The shared on/off control. SIP #2 used to get a bespoke 122×170px panel with its own
// gradient field, which gave a single bit more visual weight than the chart it changes.
// A switch is the affordance readers already know, and it is the same one the protocol
// status list uses, so "on" looks identical everywhere in the product.
export default function Switch({ isOn, onChange, ariaLabel, id }) {
  return (
    <button
      id={id}
      type="button"
      role="switch"
      aria-checked={isOn}
      aria-label={ariaLabel}
      onClick={onChange}
      className="tap-target relative block h-[24px] w-[44px] shrink-0 cursor-pointer outline-none"
      style={{
        borderRadius: 999,
        backgroundColor: isOn ? 'rgba(0, 102, 50, 0.85)' : 'var(--sx-surface-2)',
        border: `1px solid ${isOn ? 'rgba(0, 102, 50, 0.95)' : 'var(--sx-border-strong)'}`,
        transition: 'background-color 200ms ease, border-color 200ms ease',
      }}
    >
      <motion.span
        animate={{ x: isOn ? 22 : 2 }}
        transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
        style={{
          position: 'absolute',
          top: 3,
          left: 0,
          height: 16,
          width: 16,
          borderRadius: 999,
          backgroundColor: isOn ? '#00ff2a' : '#6f7d74',
        }}
      />
    </button>
  );
}
