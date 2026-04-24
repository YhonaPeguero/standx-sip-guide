import { motion } from 'framer-motion';

export default function TrendSignal({ isOn }) {
  return (
    <motion.div
      animate={{ opacity: isOn ? 1 : 0.45, y: isOn ? 0 : 4 }}
      transition={{ duration: 0.35 }}
      className="grid h-11 w-11 place-items-center rounded-[6px] border border-[var(--sx-border)] bg-[var(--sx-surface-2)] text-[var(--sx-primary-bright)]"
      aria-hidden="true"
    >
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none">
        <path
          d="M4 15L9.5 9.5L13.5 13.5L20 7"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M15.5 7H20V11.5"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </motion.div>
  );
}
