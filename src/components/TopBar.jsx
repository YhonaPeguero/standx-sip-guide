import { AnimatePresence, motion } from 'framer-motion';
import { useEffect, useMemo, useRef, useState } from 'react';
import { useI18n } from '../i18n';
import StandXBrand from './StandXBrand';

const NAV_IDS = ['overview', 'simulator', 'playbook'];

export default function TopBar({ activeTab, onTabChange, onStartGuide }) {
  const { t, locale, setLocale, localeOptions } = useI18n();
  const [isLanguageMenuOpen, setIsLanguageMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
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
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 8);
    };
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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
    <header
      className="sticky top-0 z-30 w-full transition-colors duration-300"
      style={{
        backgroundColor: isScrolled ? 'rgba(4, 8, 10, 0.82)' : 'rgba(4, 8, 10, 0.55)',
        backdropFilter: 'blur(14px) saturate(140%)',
        WebkitBackdropFilter: 'blur(14px) saturate(140%)',
        borderBottom: `1px solid ${isScrolled ? 'var(--sx-border)' : 'transparent'}`,
      }}
    >
      <div className="mx-auto w-full max-w-[1240px] px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between py-3.5 sm:py-4">
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
              className="inline-flex h-9 items-center gap-2 border border-[var(--sx-border)] bg-[var(--sx-surface)] px-3 text-[12px] font-medium uppercase tracking-[0.12em] text-[var(--sx-text-muted)] outline-none transition-colors duration-200 hover:text-[var(--sx-text)] focus-visible:ring-2 focus-visible:ring-[var(--sx-accent)]/70"
              style={{ borderRadius: 4 }}
            >
              <svg
                viewBox="0 0 16 16"
                className="h-3.5 w-3.5"
                fill="none"
                aria-hidden="true"
              >
                <path
                  d="M8 1.5L9.85 5.6L14.25 6.25L11.1 9.4L11.85 13.75L8 11.7L4.15 13.75L4.9 9.4L1.75 6.25L6.15 5.6L8 1.5Z"
                  stroke="currentColor"
                  strokeWidth="1.2"
                  strokeLinejoin="round"
                />
              </svg>
              <span>{t('guide.button')}</span>
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
                <svg viewBox="0 0 16 16" className="h-3.5 w-3.5 text-[var(--sx-muted)]" fill="none" aria-hidden="true">
                  <circle cx="8" cy="8" r="6.25" stroke="currentColor" strokeWidth="1.1" />
                  <path d="M1.75 8H14.25M8 1.75C9.7 4 9.7 12 8 14.25M8 1.75C6.3 4 6.3 12 8 14.25" stroke="currentColor" strokeWidth="1.1" />
                </svg>
                <span className="mono text-[12px] font-semibold tracking-[0.11em] text-[var(--sx-text)]">
                  {activeLocale.label}
                </span>
                <motion.span
                  animate={{ rotate: isLanguageMenuOpen ? 180 : 0 }}
                  transition={{ duration: 0.2 }}
                  className="text-[10px] text-[var(--sx-muted)]"
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
                    className="absolute right-0 top-[calc(100%+8px)] z-30 w-[220px] border border-[var(--sx-border-strong)] bg-[var(--sx-surface)] p-1.5 shadow-[var(--sx-shadow-lg)]"
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

        <nav
          className="no-scrollbar -mb-px flex items-center gap-0.5 overflow-x-auto"
          aria-label={t('topBar.nav.ariaLabel')}
        >
          {navItems.map((item) => {
            const active = item.id === activeTab;

            return (
              <button
                key={item.id}
                type="button"
                onClick={() => onTabChange(item.id)}
                aria-current={active ? 'page' : undefined}
                className="relative shrink-0 px-3 py-3 text-[13px] font-medium leading-[1.2] tracking-[-0.004em] outline-none transition-colors duration-200 focus-visible:text-[var(--sx-text)] sm:px-4 sm:text-[14px]"
                style={{ color: active ? 'var(--sx-text)' : 'var(--sx-muted)' }}
              >
                <span className="relative z-10 uppercase tracking-[0.04em]">{item.label}</span>
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
