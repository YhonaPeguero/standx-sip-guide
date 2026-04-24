import { AnimatePresence, motion } from 'framer-motion';

export default function ToggleSwitch({ isOn, onChange }) {
  return (
    <button
      type="button"
      onClick={onChange}
      aria-pressed={isOn}
      aria-label={isOn ? 'Turn yield off' : 'Turn yield on'}
      className="relative block h-[170px] w-[122px] cursor-pointer overflow-hidden border border-[var(--sx-border)] bg-[var(--sx-surface-2)] px-4 py-3 focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--sx-accent)]/80 focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--sx-bg)]"
      style={{ borderRadius: 8 }}
    >
      <motion.div
        animate={{ opacity: isOn ? 1 : 0.35 }}
        transition={{ duration: 0.45 }}
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            'radial-gradient(circle at 50% 45%, rgba(0,102,50,0.22) 0%, rgba(0,102,50,0.03) 60%, transparent 100%)',
        }}
      />

      <div className="mono text-center text-[10px] uppercase tracking-[0.2em]">
        <AnimatePresence mode="wait" initial={false}>
          <motion.span
            key={isOn ? 'state-on' : 'state-off'}
            initial={{ opacity: 0, y: 3 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -3 }}
            transition={{ duration: 0.18 }}
            className="inline-block"
            style={{ color: isOn ? 'var(--sx-primary-bright)' : 'var(--sx-muted)' }}
          >
            {isOn ? 'ON' : 'OFF'}
          </motion.span>
        </AnimatePresence>
      </div>

      <motion.div
        animate={{
          backgroundColor: isOn ? '#0F2A20' : '#101614',
          borderColor: isOn ? 'rgba(0, 102, 50, 0.9)' : 'rgba(31, 43, 38, 1)',
          boxShadow: isOn
            ? '0 0 0 1px rgba(0,102,50,0.6), 0 10px 24px rgba(0, 102, 50, 0.28)'
            : '0 8px 20px rgba(0,0,0,0.35)',
        }}
        transition={{ duration: 0.35, ease: 'easeOut' }}
        className="mx-auto mt-3 grid h-[74px] w-[74px] place-items-center border"
        style={{ borderRadius: 8 }}
      >
        <motion.div
          animate={{
            backgroundColor: isOn ? '#006632' : '#202926',
            color: isOn ? '#FAC6C3' : '#78857d',
          }}
          transition={{ duration: 0.35 }}
          className="grid h-[54px] w-[54px] place-items-center"
          style={{ borderRadius: 6 }}
        >
          <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" aria-hidden="true">
            <path
              d="M12 4V12"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
            />
            <path
              d="M8.15 6.6A6.5 6.5 0 1 0 15.85 6.6"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
            />
          </svg>
        </motion.div>
      </motion.div>

      <div className="mono mt-3 text-center text-[10px] uppercase tracking-[0.2em]">
        <AnimatePresence mode="wait" initial={false}>
          <motion.span
            key={isOn ? 'mode-active' : 'mode-idle'}
            initial={{ opacity: 0, y: 3 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -3 }}
            transition={{ duration: 0.18 }}
            className="inline-block"
            style={{ color: isOn ? '#FAC6C3' : '#6f7d74' }}
          >
            {isOn ? 'ACTIVE' : 'IDLE'}
          </motion.span>
        </AnimatePresence>
      </div>
    </button>
  );
}
