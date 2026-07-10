import { motion } from 'framer-motion';
import { useI18n } from '../i18n';

// Mobile-only bottom navigation. Mirrors the TopBar tabs into the thumb zone so the user
// always knows where they are and can get back with one tap. Desktop keeps the TopBar tabs.

function OverviewIcon(props) {
  return (
    <svg viewBox="0 0 20 20" fill="none" aria-hidden="true" {...props}>
      <rect x="2.5" y="2.5" width="6" height="6" rx="1.2" stroke="currentColor" strokeWidth="1.4" />
      <rect x="11.5" y="2.5" width="6" height="6" rx="1.2" stroke="currentColor" strokeWidth="1.4" />
      <rect x="2.5" y="11.5" width="6" height="6" rx="1.2" stroke="currentColor" strokeWidth="1.4" />
      <rect x="11.5" y="11.5" width="6" height="6" rx="1.2" stroke="currentColor" strokeWidth="1.4" />
    </svg>
  );
}

function SimulatorIcon(props) {
  return (
    <svg viewBox="0 0 20 20" fill="none" aria-hidden="true" {...props}>
      <path d="M2.5 13.5L7 9L10 11.5L17.5 4.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M13.5 4.5H17.5V8.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function PlaybookIcon(props) {
  return (
    <svg viewBox="0 0 20 20" fill="none" aria-hidden="true" {...props}>
      <path d="M4 3.5H14.5C15.6 3.5 16.5 4.4 16.5 5.5V16.5H6C4.9 16.5 4 15.6 4 14.5V3.5Z" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" />
      <path d="M4 14.5C4 13.4 4.9 12.5 6 12.5H16.5" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" />
      <path d="M7.5 6.5H13" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
    </svg>
  );
}

const NAV_ITEMS = [
  { id: 'overview', Icon: OverviewIcon },
  { id: 'simulator', Icon: SimulatorIcon },
  { id: 'playbook', Icon: PlaybookIcon },
];

export default function BottomNav({ activeTab, onTabChange }) {
  const { t } = useI18n();

  return (
    <nav
      aria-label={t('topBar.nav.ariaLabel')}
      className="fixed inset-x-0 bottom-0 z-40 sm:hidden"
      style={{
        paddingBottom: 'env(safe-area-inset-bottom)',
        backgroundColor: 'rgba(4, 8, 10, 0.9)',
        backdropFilter: 'blur(14px) saturate(140%)',
        WebkitBackdropFilter: 'blur(14px) saturate(140%)',
        borderTop: '1px solid var(--sx-border)',
      }}
    >
      <div className="mx-auto grid max-w-[520px] grid-cols-3">
        {NAV_ITEMS.map(({ id, Icon }) => {
          const active = id === activeTab;

          return (
            <motion.button
              key={id}
              type="button"
              onClick={() => onTabChange(id)}
              aria-current={active ? 'page' : undefined}
              whileTap={{ scale: 0.94 }}
              transition={{ duration: 0.16, ease: [0.22, 1, 0.36, 1] }}
              className="relative flex flex-col items-center justify-center gap-1 py-2.5 outline-none transition-colors duration-200 focus-visible:text-[var(--sx-text)]"
              style={{ color: active ? 'var(--sx-primary-bright)' : 'var(--sx-muted)' }}
            >
              {active ? (
                <motion.span
                  layoutId="bottomnav-indicator"
                  className="absolute inset-x-6 top-0 h-[2px] bg-[var(--sx-primary-bright)]"
                  transition={{ type: 'spring', stiffness: 480, damping: 36 }}
                />
              ) : null}
              <Icon className="h-[22px] w-[22px]" />
              <span className="text-[10.5px] font-medium uppercase tracking-[0.08em] leading-none">
                {t(`topBar.nav.${id}`)}
              </span>
            </motion.button>
          );
        })}
      </div>
    </nav>
  );
}
