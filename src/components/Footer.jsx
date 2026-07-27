import { useI18n } from '../i18n';
import { buildHash } from '../lib/route';

// The resource list used to run seven links: StandX Docs, StandX.com, and one per SIP.
// Docs and the site are the same destination as far as a reader is concerned, and picking
// out individual SIPs is arbitrary — the guide already has a section for each. One link to
// the SIP documentation replaces the five, and it is the primary link here because it is
// the source everything on this site is transcribed from.
const RESOURCE_LINKS = [
  { key: 'sipDocs', href: 'https://docs.standx.com/sip/', primary: true },
  { key: 'website', href: 'https://standx.com' },
];

// The guide's own surfaces. These are the only internal links in the footer, and they are
// what makes the external marker mean anything: before this every link went off-site, so
// the ↗ on all of them distinguished nothing.
const SECTION_TABS = ['overview', 'simulator', 'playbook', 'vaults'];

const COMMUNITY_LINKS = [
  { key: 'author', href: 'https://x.com/thisnotmeeme' },
  { key: 'twitter', href: 'https://x.com/StandX_Official' },
];

function IconX() {
  return (
    <svg viewBox="0 0 16 16" className="h-4 w-4" fill="currentColor" aria-hidden="true">
      <path d="M11.34 2.5h1.94l-4.24 4.84L14 13.5h-3.9l-3.06-4-3.5 4H1.6l4.54-5.2L1.4 2.5h4l2.77 3.66L11.34 2.5Zm-.68 9.85h1.08L5.4 3.6H4.24l6.42 8.75Z" />
    </svg>
  );
}

function ColumnTitle({ children }) {
  return <span className="eyebrow eyebrow-accent">{children}</span>;
}

export default function Footer() {
  const { t, locale } = useI18n();

  const linkBase =
    'control-min inline-flex items-center gap-1.5 text-[13px] underline-offset-4 transition-colors duration-200 hover:text-[var(--sx-primary-bright)] hover:underline hover:decoration-[var(--sx-primary-bright)]';

  return (
    <footer className="mt-[var(--sx-gap-section)] border-t border-[var(--sx-border)] pt-12">
      <div className="grid gap-10 lg:grid-cols-[1.5fr_1fr_1fr_1fr]">
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

        {/* Internal: no arrow, because nothing leaves the page. */}
        <div className="flex flex-col gap-3">
          <ColumnTitle>{t('footer.sectionsTitle')}</ColumnTitle>
          <ul className="space-y-1">
            {SECTION_TABS.map((tab) => (
              <li key={tab}>
                <a href={buildHash({ locale, tab })} className={`${linkBase} text-[var(--sx-text-muted)]`}>
                  {t(`topBar.nav.${tab}`)}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* External: the ↗ marks the boundary, and the primary link carries full-strength
            text and weight so the source of every figure on this site reads first. */}
        <div className="flex flex-col gap-3">
          <ColumnTitle>{t('footer.resourcesTitle')}</ColumnTitle>
          <ul className="space-y-1">
            {RESOURCE_LINKS.map((link) => (
              <li key={link.key}>
                <a
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${linkBase} ${
                    link.primary
                      ? 'font-semibold text-[var(--sx-text)]'
                      : 'text-[var(--sx-text-muted)]'
                  }`}
                >
                  <span>{t(`footer.resources.${link.key}`)}</span>
                  <span
                    aria-hidden="true"
                    className={`text-[10px] ${
                      link.primary ? 'text-[var(--sx-primary-bright)]' : 'text-[var(--sx-muted-soft)]'
                    }`}
                  >
                    ↗
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex flex-col gap-3">
          <ColumnTitle>{t('footer.communityTitle')}</ColumnTitle>
          <ul className="space-y-1">
            {COMMUNITY_LINKS.map((link) => (
              <li key={link.key}>
                <a
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${linkBase} gap-2 text-[var(--sx-text-muted)]`}
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
