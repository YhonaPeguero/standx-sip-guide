import Button from './ui/Button';
import Card from './ui/Card';
import SectionHeader from './ui/SectionHeader';
import { useI18n } from '../i18n';

const FLOW_STEP_KEYS = ['step1', 'step2', 'step3', 'step4'];

const SIP_OVERVIEW = [
  {
    id: 'sip-1',
    tag: 'SIP #1',
    key: 'sip1',
    href: 'https://docs.standx.com/sip/sip-1-block-trade',
  },
  {
    id: 'sip-2',
    tag: 'SIP #2',
    key: 'sip2',
    href: 'https://docs.standx.com/sip/sip-2-position-yield',
  },
  {
    id: 'sip-3',
    tag: 'SIP #3',
    key: 'sip3',
    href: 'https://docs.standx.com/sip/sip-3-dusd-native-yield',
  },
];

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
  }));

  return (
    <section id={sectionId} className="space-y-12">
      <div className="space-y-6">
        <SectionHeader
          eyebrow={t('education.mechanics.eyebrow')}
          title={t('education.mechanics.title')}
          description={t('education.mechanics.description')}
        />

        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {flowSteps.map((step, index) => (
            <Card key={step.key} tone="subtle" padding="md" interactive className="h-full">
              <div className="flex items-center justify-between">
                <span className="mono text-[10px] uppercase tracking-[0.16em] text-[var(--sx-primary-bright)]">
                  {t('education.stepLabel')} {String(index + 1).padStart(2, '0')}
                </span>
                <span className="mono text-[10px] tracking-[0.16em] text-[var(--sx-muted-soft)]">
                  {String(index + 1)}/4
                </span>
              </div>
              <h4 className="mt-3 text-[15px] font-medium leading-[1.3] tracking-[-0.01em] text-[var(--sx-text)]">
                {step.title}
              </h4>
              <p className="mt-1.5 text-[12px] leading-[1.55] text-[var(--sx-text-muted)]">
                {step.copy}
              </p>
            </Card>
          ))}
        </div>
      </div>

      <div className="space-y-6">
        <SectionHeader
          eyebrow={t('education.sipOverview.eyebrow')}
          title={t('education.sipOverview.title')}
          description={t('education.sipOverview.description')}
        />

        <div className="grid gap-3 md:grid-cols-3">
          {sipCards.map((sip) => (
            <Card key={sip.id} tone="default" padding="md" interactive className="h-full">
              <div className="flex h-full flex-col">
                <div className="flex items-center justify-between">
                  <span
                    className="mono inline-flex items-center px-1.5 py-0.5 text-[10px] font-semibold uppercase tracking-[0.18em] text-[var(--sx-primary-bright)]"
                    style={{ borderRadius: 3, backgroundColor: 'rgba(0,102,50,0.18)' }}
                  >
                    {sip.tag}
                  </span>
                </div>
                <h4 className="mt-3 text-[17px] font-semibold leading-[1.25] tracking-[-0.015em] text-[var(--sx-text)]">
                  {sip.title}
                </h4>
                <p className="mt-2 text-[13px] leading-[1.55] text-[var(--sx-text-muted)]">
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
        <p className="text-[12px] leading-[1.5] text-[var(--sx-muted)]">
          {t('education.communityNote')}
        </p>
      </div>
    </section>
  );
}
