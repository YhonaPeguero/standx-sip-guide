import { useI18n } from '../i18n';

const RESOURCE_LINKS = [
  { key: 'docs', href: 'https://docs.standx.com' },
  { key: 'website', href: 'https://standx.com' },
  { key: 'sip1', href: 'https://docs.standx.com/sip/sip-1-block-trade' },
  { key: 'sip2', href: 'https://docs.standx.com/sip/sip-2-position-yield' },
  { key: 'sip3', href: 'https://docs.standx.com/sip/sip-3-dusd-native-yield' },
];

const COMMUNITY_LINKS = [
  { key: 'author', href: 'https://x.com/thisnotmeeme' },
  { key: 'twitter', href: 'https://x.com/StandX_io' },
];

function IconX() {
  return (
    <svg viewBox="0 0 16 16" className="h-4 w-4" fill="currentColor" aria-hidden="true">
      <path d="M11.34 2.5h1.94l-4.24 4.84L14 13.5h-3.9l-3.06-4-3.5 4H1.6l4.54-5.2L1.4 2.5h4l2.77 3.66L11.34 2.5Zm-.68 9.85h1.08L5.4 3.6H4.24l6.42 8.75Z" />
    </svg>
  );
}

export default function Footer() {
  const { t } = useI18n();

  return (
    <footer className="mt-16 border-t border-[var(--sx-border)] pt-10">
      <div className="grid gap-10 lg:grid-cols-[1.4fr_1fr_1fr]">
        <div className="flex flex-col gap-3">
          <span className="mono text-[11px] uppercase tracking-[0.18em] text-[var(--sx-primary-bright)]">
            {t('footer.brand')}
          </span>
          <p className="max-w-[420px] text-[14px] leading-[1.6] text-[var(--sx-text-muted)]">
            {t('footer.tagline')}
          </p>
          <p className="text-[12px] leading-[1.58] text-[var(--sx-muted-soft)]">
            {t('footer.disclaimer')}
          </p>
        </div>

        <div className="flex flex-col gap-3">
          <span className="eyebrow">{t('footer.resourcesTitle')}</span>
          <ul className="space-y-2">
            {RESOURCE_LINKS.map((link) => (
              <li key={link.key}>
                <a
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-[13px] text-[var(--sx-text-muted)] transition-colors duration-200 hover:text-[var(--sx-primary-bright)]"
                >
                  <span>{t(`footer.resources.${link.key}`)}</span>
                  <span aria-hidden="true" className="text-[10px] text-[var(--sx-muted-soft)]">↗</span>
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex flex-col gap-3">
          <span className="eyebrow">{t('footer.communityTitle')}</span>
          <ul className="space-y-2">
            {COMMUNITY_LINKS.map((link) => (
              <li key={link.key}>
                <a
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-[13px] text-[var(--sx-text-muted)] transition-colors duration-200 hover:text-[var(--sx-primary-bright)]"
                >
                  <IconX />
                  <span>{t(`footer.community.${link.key}`)}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="mt-10 flex flex-col gap-2 border-t border-[var(--sx-border)] pt-4 text-[11px] leading-[1.5] text-[var(--sx-muted)] sm:flex-row sm:items-center sm:justify-between">
        <p className="mono uppercase tracking-[0.14em]">{t('footer.copyright')}</p>
        <p>{t('footer.educational')}</p>
      </div>
    </footer>
  );
}
