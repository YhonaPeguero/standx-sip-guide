import { useI18n } from '../i18n';
import Button from './ui/Button';
import Card from './ui/Card';
import Chip from './ui/Chip';
import SectionHeader from './ui/SectionHeader';

const FLOW_STEP_KEYS = ['step1', 'step2', 'step3', 'step4'];

const SIP_OVERVIEW = [
  { id: 'sip-1', tag: 'SIP #1', key: 'sip1', status: 'live', href: 'https://docs.standx.com/sip/sip-1-block-trade' },
  { id: 'sip-2', tag: 'SIP #2', key: 'sip2', status: 'live', href: 'https://docs.standx.com/sip/sip-2-position-yield' },
  { id: 'sip-3', tag: 'SIP #3', key: 'sip3', status: 'live', href: 'https://docs.standx.com/sip/sip-3-dusd-native-yield' },
  { id: 'sip-4', tag: 'SIP #4', key: 'sip4', status: 'review', href: 'https://docs.standx.com/sip/sip-4-block-options' },
  { id: 'sip-5', tag: 'SIP #5', key: 'sip5', status: 'draft', href: 'https://docs.standx.com/sip/sip-5-universal-markets-listing' },
];

// Status → Chip tone: live=green, review=coral (in progress), draft=muted (not yet available)
const STATUS_TONE = { live: 'primary', review: 'accent', draft: 'muted' };

export default function EducationSection({ sectionId }) {
  const { t } = useI18n();

  const flowSteps = FLOW_STEP_KEYS.map((stepKey) => ({
    key: stepKey,
    title: t(`education.flowSteps.${stepKey}.title`),
    copy: t(`education.flowSteps.${stepKey}.copy`),
  }));

  const sipCards = SIP_OVERVIEW.map((sip) => ({
    ...sip,
    title: t(`education.sipCards.${sip.key}.title`),
    copy: t(`education.sipCards.${sip.key}.copy`),
    statusLabel: t(`education.sipStatus.${sip.status}`),
  }));

  return (
    <section id={sectionId} className="space-y-14">
      <div className="space-y-6">
        <div className="flex flex-col gap-3">
          <span className="tag-pill">{t('education.mechanics.tag')}</span>
          <SectionHeader
            size="lg"
            title={t('education.mechanics.title')}
            description={t('education.mechanics.description')}
          />
        </div>

        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {flowSteps.map((step, index) => (
            <Card key={step.key} tone="subtle" padding="md" interactive className="h-full">
              <div className="flex items-center justify-between">
                <span className="mono text-[11px] uppercase tracking-[0.16em] text-[var(--sx-primary-bright)]">
                  {t('education.stepLabel')} {String(index + 1).padStart(2, '0')}
                </span>
                <span className="mono text-[11px] tracking-[0.14em] text-[var(--sx-muted-soft)]">
                  {String(index + 1)}/4
                </span>
              </div>
              <h4 className="mt-3.5 text-[16px] font-medium leading-[1.34] tracking-[-0.01em] text-[var(--sx-text)] sm:text-[17px]">
                {step.title}
              </h4>
              <p className="mt-2 text-[13px] leading-[1.62] text-[var(--sx-text-muted)] sm:text-[14px]">
                {step.copy}
              </p>
            </Card>
          ))}
        </div>
      </div>

      <div className="space-y-6">
        <div className="flex flex-col gap-3">
          <span className="tag-pill">{t('education.sipOverview.tag')}</span>
          <SectionHeader
            size="lg"
            title={t('education.sipOverview.title')}
            description={t('education.sipOverview.description')}
          />
        </div>

        <div className="grid gap-3 md:grid-cols-3">
          {sipCards.map((sip) => (
            <Card key={sip.id} tone="default" padding="md" interactive className="h-full">
              <div className="flex h-full flex-col">
                <div className="flex items-center justify-between gap-2">
                  <Chip tone="primary">{sip.tag}</Chip>
                  <Chip tone={STATUS_TONE[sip.status] ?? 'muted'}>{sip.statusLabel}</Chip>
                </div>
                <h4 className="mt-3.5 text-[18px] font-semibold leading-[1.28] tracking-[-0.015em] text-[var(--sx-text)]">
                  {sip.title}
                </h4>
                <p className="mt-2.5 text-[14px] leading-[1.62] text-[var(--sx-text-muted)]">
                  {sip.copy}
                </p>

                <div className="mt-auto pt-4">
                  <Button variant="ghost" size="sm" iconRight={<span>→</span>} href={sip.href}>
                    {t('education.readMore')}
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>

      <div className="hairline pt-5">
        <p className="text-[13px] leading-[1.58] text-[var(--sx-muted)]">
          {t('education.communityNote')}
        </p>
      </div>
    </section>
  );
}
