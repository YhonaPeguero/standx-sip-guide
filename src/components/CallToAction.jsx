import { motion } from 'framer-motion';

export default function CallToAction({ className = '', label = 'Try it on StandX' }) {
  return (
    <motion.button
      type="button"
      whileHover={{
        y: -1,
        boxShadow: '0 10px 30px rgba(0, 102, 50, 0.45)',
      }}
      whileTap={{ scale: 0.98, y: 0 }}
      transition={{ duration: 0.2, ease: 'easeOut' }}
      className={`inline-flex items-center justify-center bg-[var(--sx-primary)] px-6 py-3 text-[15px] font-medium tracking-[-0.01em] text-[var(--sx-text)] focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--sx-accent)]/85 focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--sx-bg)] ${className}`}
      style={{ borderRadius: 4 }}
    >
      <span>{label}</span>
    </motion.button>
  );
}
