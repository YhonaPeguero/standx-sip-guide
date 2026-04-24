import { motion } from 'framer-motion';

const NAV_ITEMS = [
  { id: 'overview', label: 'Overview' },
  { id: 'simulator', label: 'Simulator' },
  { id: 'playbook', label: 'Yield Playbook' },
];

function HeaderIcon({ children, label }) {
  return (
    <motion.button
      type="button"
      whileHover={{ y: -1, color: 'var(--sx-text)' }}
      whileTap={{ scale: 0.96 }}
      transition={{ duration: 0.18 }}
      className="grid h-9 w-9 place-items-center border border-[var(--sx-border)] bg-[var(--sx-surface)] text-[var(--sx-muted)] outline-none transition-colors duration-200 focus-visible:ring-2 focus-visible:ring-[var(--sx-accent)]/60"
      style={{ borderRadius: 4 }}
      aria-label={label}
    >
      {children}
    </motion.button>
  );
}

export default function TopBar({ activeTab, onTabChange }) {
  return (
    <header className="relative z-20 w-full border-b border-[var(--sx-border)] bg-[rgba(6,11,9,0.85)] backdrop-blur-md">
      <div className="mx-auto w-full max-w-[1240px] px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between py-4 sm:py-5">
          <div className="flex items-center gap-3">
            <span className="text-[24px] font-semibold tracking-[-0.03em] text-[var(--sx-primary-soft-text)] sm:text-[28px]">
              StandX
            </span>
            <span
              className="hidden h-5 items-center border border-[var(--sx-border)] bg-[var(--sx-surface-2)] px-2 text-[10px] font-medium uppercase tracking-[0.2em] text-[var(--sx-muted)] md:inline-flex"
              style={{ borderRadius: 3 }}
            >
              Community
            </span>
          </div>

          <div className="flex items-center gap-2">
            <HeaderIcon label="Open workspace switcher">
              <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" aria-hidden="true">
                <path
                  d="M5 5H19V19H5V5Z"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                />
                <path
                  d="M9 9H15V15H9V9Z"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                />
              </svg>
            </HeaderIcon>

            <HeaderIcon label="Open settings">
              <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" aria-hidden="true">
                <path
                  d="M12 8.5A3.5 3.5 0 1 0 12 15.5A3.5 3.5 0 1 0 12 8.5Z"
                  stroke="currentColor"
                  strokeWidth="1.6"
                />
                <path
                  d="M19 12H21M3 12H5M12 3V5M12 19V21M17.2 6.8L18.6 5.4M5.4 18.6L6.8 17.2M17.2 17.2L18.6 18.6M5.4 5.4L6.8 6.8"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                />
              </svg>
            </HeaderIcon>
          </div>
        </div>

        <nav className="no-scrollbar -mb-px flex items-center gap-1 overflow-x-auto md:gap-2">
          {NAV_ITEMS.map((item) => {
            const active = item.id === activeTab;

            return (
              <button
                key={item.id}
                type="button"
                onClick={() => onTabChange(item.id)}
                className="relative shrink-0 px-3 py-3 text-[13px] font-medium tracking-[-0.005em] outline-none transition-colors duration-200 focus-visible:text-[var(--sx-text)] sm:px-4 md:text-[14px]"
                style={{ color: active ? 'var(--sx-text)' : 'var(--sx-muted)' }}
              >
                <span className="relative z-10">{item.label}</span>
                {active ? (
                  <motion.span
                    layoutId="topbar-indicator"
                    className="absolute inset-x-2 bottom-0 h-[2px] bg-[var(--sx-accent)]"
                    transition={{ type: 'spring', stiffness: 480, damping: 36 }}
                  />
                ) : null}
              </button>
            );
          })}
        </nav>
      </div>
    </header>
  );
}
