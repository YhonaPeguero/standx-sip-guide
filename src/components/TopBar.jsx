import { AnimatePresence, motion } from 'framer-motion';
import { useEffect, useMemo, useRef, useState } from 'react';
import { useI18n } from '../i18n';
import StandXBrand from './StandXBrand';

const NAV_IDS = ['overview', 'simulator', 'playbook'];

export default function TopBar({ activeTab, onTabChange, onStartGuide }) {
  const { t, locale, setLocale, localeOptions } = useI18n();
  const [isLanguageMenuOpen, setIsLanguageMenuOpen] = useState(false);
  const menuRef = useRef(null);

  const navItems = useMemo(
    () => [
      { id: NAV_IDS[0], label: t('topBar.nav.overview') },
      { id: NAV_IDS[1], label: t('topBar.nav.simulator') },
      { id: NAV_IDS[2], label: t('topBar.nav.playbook') },
    ],
    [t],
  );

  const activeLocale = localeOptions.find((option) => option.code === locale) ?? localeOptions[0];

  useEffect(() => {
    if (!isLanguageMenuOpen) {
      return undefined;
    }

    const handlePointerDown = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsLanguageMenuOpen(false);
      }
    };

    const handleEscape = (event) => {
      if (event.key === 'Escape') {
        setIsLanguageMenuOpen(false);
      }
    };

    document.addEventListener('pointerdown', handlePointerDown);
    window.addEventListener('keydown', handleEscape);

    return () => {
      document.removeEventListener('pointerdown', handlePointerDown);
      window.removeEventListener('keydown', handleEscape);
    };
  }, [isLanguageMenuOpen]);

  return (
    <header className="relative z-20 w-full border-b border-[var(--sx-border)] bg-[rgba(6,11,9,0.85)] backdrop-blur-md">
      <div className="mx-auto w-full max-w-[1240px] px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between py-4 sm:py-5">
          <div className="flex items-center gap-3">
            <StandXBrand />
            <span
              className="hidden h-5 items-center border border-[rgba(139,210,178,0.3)] bg-[rgba(0,102,50,0.16)] px-2 text-[11px] font-medium uppercase tracking-[0.16em] text-[var(--sx-primary-soft-text)] md:inline-flex"
              style={{ borderRadius: 3 }}
            >
              {t('topBar.community')}
            </span>
          </div>

          <div className="flex items-center gap-2">
            <motion.button
              type="button"
              whileHover={{ borderColor: 'var(--sx-border-strong)', y: -1 }}
              whileTap={{ scale: 0.985 }}
              transition={{ duration: 0.18 }}
              onClick={onStartGuide}
              className="inline-flex h-9 items-center border border-[var(--sx-border)] bg-[var(--sx-surface)] px-3 text-[12px] font-medium uppercase tracking-[0.12em] text-[var(--sx-text-muted)] outline-none transition-colors duration-200 hover:text-[var(--sx-text)] focus-visible:ring-2 focus-visible:ring-[var(--sx-accent)]/70"
              style={{ borderRadius: 4 }}
            >
              {t('guide.button')}
            </motion.button>

            <div className="relative" ref={menuRef}>
              <motion.button
                type="button"
                whileHover={{ borderColor: 'var(--sx-border-strong)', y: -1 }}
                whileTap={{ scale: 0.985 }}
                transition={{ duration: 0.18 }}
                onClick={() => setIsLanguageMenuOpen((value) => !value)}
                aria-haspopup="listbox"
                aria-expanded={isLanguageMenuOpen}
                aria-label={t('topBar.language.buttonAria')}
                className="inline-flex h-9 items-center gap-2 border border-[var(--sx-border)] bg-[var(--sx-surface)] px-3 outline-none transition-colors duration-200 focus-visible:ring-2 focus-visible:ring-[var(--sx-accent)]/70"
                style={{ borderRadius: 4 }}
              >
                <span className="mono text-[11px] uppercase tracking-[0.15em] text-[var(--sx-muted)]">
                  {t('topBar.language.button')}
                </span>
                <span className="mono text-[12px] font-semibold tracking-[0.11em] text-[var(--sx-text)]">
                  {activeLocale.label}
                </span>
                <motion.span
                  animate={{ rotate: isLanguageMenuOpen ? 180 : 0 }}
                  transition={{ duration: 0.2 }}
                  className="text-[11px] text-[var(--sx-muted)]"
                  aria-hidden="true"
                >
                  ▾
                </motion.span>
              </motion.button>

              <AnimatePresence>
                {isLanguageMenuOpen ? (
                  <motion.div
                    initial={{ opacity: 0, y: -6 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -6 }}
                    transition={{ duration: 0.18, ease: [0.22, 1, 0.36, 1] }}
                    className="absolute right-0 top-[calc(100%+8px)] z-30 w-[210px] border border-[var(--sx-border-strong)] bg-[var(--sx-surface)] p-1.5 shadow-[var(--sx-shadow-lg)]"
                    style={{ borderRadius: 6 }}
                  >
                    <ul role="listbox" aria-label={t('topBar.language.menuAria')} className="space-y-1">
                      {localeOptions.map((option) => {
                        const active = option.code === locale;

                        return (
                          <li key={option.code}>
                            <button
                              type="button"
                              role="option"
                              aria-selected={active}
                              onClick={() => {
                                setLocale(option.code);
                                setIsLanguageMenuOpen(false);
                              }}
                              className="flex w-full items-center justify-between px-2.5 py-2 text-left transition-colors duration-150"
                              style={{
                                borderRadius: 4,
                                backgroundColor: active ? 'rgba(0,102,50,0.18)' : 'transparent',
                              }}
                            >
                              <span className="mono text-[12px] font-semibold tracking-[0.12em] text-[var(--sx-text)]">
                                {option.label}
                              </span>
                              <span className="text-[13px] text-[var(--sx-text-muted)]">{option.name}</span>
                            </button>
                          </li>
                        );
                      })}
                    </ul>
                  </motion.div>
                ) : null}
              </AnimatePresence>
            </div>
          </div>
        </div>

        <nav className="no-scrollbar -mb-px flex items-center gap-1 overflow-x-auto md:gap-2">
          {navItems.map((item) => {
            const active = item.id === activeTab;

            return (
              <button
                key={item.id}
                type="button"
                onClick={() => onTabChange(item.id)}
                className="relative shrink-0 px-3 py-3 text-[14px] font-medium leading-[1.2] tracking-[-0.004em] outline-none transition-colors duration-200 focus-visible:text-[var(--sx-text)] sm:px-4 sm:text-[15px]"
                style={{ color: active ? 'var(--sx-text)' : 'var(--sx-muted)' }}
              >
                <span className="relative z-10">{item.label}</span>
                {active ? (
                  <motion.span
                    layoutId="topbar-indicator"
                    className="absolute inset-x-2 bottom-0 h-[2px] bg-[var(--sx-primary-bright)]"
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
