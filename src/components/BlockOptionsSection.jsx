import { useI18n } from '../i18n';
import Button from './ui/Button';
import Card from './ui/Card';
import Chip from './ui/Chip';
import SectionHeader from './ui/SectionHeader';

const SIDES = [
  { key: 'tp', tone: 'primary', accent: 'var(--sx-primary-bright)' },
  { key: 'sl', tone: 'accent', accent: 'var(--sx-accent)' },
];

const RESOURCE_LINKS = [
  { key: 'docs', href: 'https://docs.standx.com/sip/sip-4-block-options', variant: 'outline' },
  {
    key: 'thread',
    href: 'https://x.com/StandX_Official/status/2067532356190196006',
    variant: 'ghost',
  },
  {
    key: 'intern',
    href: 'https://x.com/jimmyitsopen/status/2066566589848211968',
    variant: 'ghost',
  },
];

function SideIcon({ side }) {
  // TP → upward exit, SL → shield (protection)
  if (side === 'tp') {
    return (
      <svg viewBox="0 0 20 20" className="h-4 w-4" fill="none" aria-hidden="true">
        <path
          d="M5 12.5 10 7l5 5.5"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 20 20" className="h-4 w-4" fill="none" aria-hidden="true">
      <path
        d="M10 3 4.5 5.2v4c0 3.2 2.2 5.6 5.5 6.8 3.3-1.2 5.5-3.6 5.5-6.8v-4L10 3Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function BlockOptionsSection({ sectionId }) {
  const { t } = useI18n();

  const terms = t('blockOptions.terms.items');
  const termItems = Array.isArray(terms) ? terms : [];

  return (
    <section id={sectionId} className="space-y-8" aria-labelledby="block-options-heading">
      <div className="flex flex-col gap-3">
        <span className="tag-pill">{t('blockOptions.tag')}</span>
        <SectionHeader
          size="lg"
          title={t('blockOptions.title')}
          description={t('blockOptions.description')}
        />
        <p className="max-w-[760px] text-[14px] leading-[1.66] text-[var(--sx-text-muted)] sm:text-[15px]">
          {t('blockOptions.intro')}
        </p>
      </div>

      <div className="grid gap-3 md:grid-cols-2">
        {SIDES.map(({ key, tone, accent }) => {
          const steps = t(`blockOptions.${key}.steps`);
          const stepItems = Array.isArray(steps) ? steps : [];

          return (
            <Card key={key} tone="default" padding="lg" interactive className="h-full">
              <div className="flex h-full flex-col">
                <div className="flex items-center justify-between gap-2">
                  <span
                    className="mono inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.14em]"
                    style={{ color: accent }}
                  >
                    <SideIcon side={key} />
                    {t(`blockOptions.${key}.chip`)}
                  </span>
                  <Chip tone={tone}>{t(`blockOptions.${key}.feeLabel`)}</Chip>
                </div>

                <h3 className="mt-4 text-[20px] font-semibold leading-[1.22] tracking-[-0.018em] text-[var(--sx-text)]">
                  {t(`blockOptions.${key}.title`)}
                </h3>
                <p className="mt-2 text-[14px] leading-[1.62] text-[var(--sx-text-muted)]">
                  {t(`blockOptions.${key}.summary`)}
                </p>

                <ol className="mt-5 space-y-2.5">
                  {stepItems.map((step, index) => (
                    <li key={index} className="flex gap-3">
                      <span
                        className="mono mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center text-[10px] font-semibold"
                        style={{
                          borderRadius: 4,
                          color: accent,
                          backgroundColor: 'var(--sx-surface-2)',
                          border: '1px solid var(--sx-border)',
                        }}
                      >
                        {index + 1}
                      </span>
                      <span className="text-[13px] leading-[1.56] text-[var(--sx-text-muted)] sm:text-[13.5px]">
                        {step}
                      </span>
                    </li>
                  ))}
                </ol>

                <div className="mt-auto pt-5">
                  <div className="hairline flex items-baseline justify-between gap-3 pt-3.5">
                    <span className="mono text-[11px] uppercase tracking-[0.14em] text-[var(--sx-muted-soft)]">
                      {t(`blockOptions.${key}.feeLabel`)}
                    </span>
                    <span className="text-[13px] font-medium" style={{ color: accent }}>
                      {t(`blockOptions.${key}.feeValue`)}
                    </span>
                  </div>
                </div>
              </div>
            </Card>
          );
        })}
      </div>

      <div className="grid gap-3 sm:grid-cols-3">
        {termItems.map((item, index) => (
          <Card key={index} tone="subtle" padding="md" className="h-full">
            <span className="mono text-[11px] uppercase tracking-[0.14em] text-[var(--sx-primary-bright)]">
              {item.term}
            </span>
            <p className="mt-2 text-[13px] leading-[1.58] text-[var(--sx-text-muted)]">
              {item.copy}
            </p>
          </Card>
        ))}
      </div>

      <div className="hairline flex flex-col gap-5 pt-5">
        <p className="text-[13px] leading-[1.58] text-[var(--sx-muted)]">
          {t('blockOptions.marginNote')}
        </p>
        <div className="flex flex-col gap-2.5">
          <span className="eyebrow">{t('blockOptions.resourcesLabel')}</span>
          <div className="flex flex-wrap gap-2.5">
            {RESOURCE_LINKS.map((link) => (
              <Button
                key={link.key}
                variant={link.variant}
                size="sm"
                href={link.href}
                iconRight={<span aria-hidden="true">↗</span>}
              >
                {t(`blockOptions.links.${link.key}`)}
              </Button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
