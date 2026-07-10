import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { useI18n } from '../i18n';
import { Reveal, StaggerGroup, StaggerItem } from './Reveal';
import Button from './ui/Button';
import Card from './ui/Card';
import Chip from './ui/Chip';
import SectionHeader from './ui/SectionHeader';

const FLOW_STEP_KEYS = ['step1', 'step2', 'step3', 'step4'];

// SIP #5 is now a WIP parent that expands into its staged sub-proposals (5A live, 5B coming soon).
const SIP_OVERVIEW = [
  { id: 'sip-1', tag: 'SIP #1', key: 'sip1', status: 'live', href: 'https://docs.standx.com/sip/sip-1-block-trade' },
  { id: 'sip-2', tag: 'SIP #2', key: 'sip2', status: 'live', href: 'https://docs.standx.com/sip/sip-2-position-yield' },
  { id: 'sip-3', tag: 'SIP #3', key: 'sip3', status: 'live', href: 'https://docs.standx.com/sip/sip-3-dusd-native-yield' },
  { id: 'sip-4', tag: 'SIP #4', key: 'sip4', status: 'live', href: 'https://docs.standx.com/sip/sip-4-block-options' },
  {
    id: 'sip-5',
    tag: 'SIP #5',
    key: 'sip5',
    status: 'wip',
    href: 'https://docs.standx.com/sip/sip-5-universal-markets-listing',
    children: [
      { id: 'sip-5a', tag: 'SIP #5A', key: 'sip5a', status: 'live', href: 'https://docs.standx.com/sip/sip-5a-community-maker-yield' },
      { id: 'sip-5b', tag: 'SIP #5B', key: 'sip5b', status: 'draft', href: null },
    ],
  },
];

// Status → Chip tone: live=green, review/wip=coral (in progress), draft=muted (not yet available)
const STATUS_TONE = { live: 'primary', review: 'accent', wip: 'accent', draft: 'muted' };

export default function EducationSection({ sectionId }) {
  const { t } = useI18n();
  const [expandedId, setExpandedId] = useState(null);

  const flowSteps = FLOW_STEP_KEYS.map((stepKey) => ({
    key: stepKey,
    title: t(`education.flowSteps.${stepKey}.title`),
    copy: t(`education.flowSteps.${stepKey}.copy`),
  }));

  const localizeSip = (sip) => ({
    ...sip,
    title: t(`education.sipCards.${sip.key}.title`),
    copy: t(`education.sipCards.${sip.key}.copy`),
    statusLabel: t(`education.sipStatus.${sip.status}`),
  });

  const sipCards = SIP_OVERVIEW.map((sip) => ({
    ...localizeSip(sip),
    children: (sip.children ?? []).map(localizeSip),
  }));

  return (
    <section id={sectionId} className="section-stack">
      <div className="section-block">
        <Reveal>
          <SectionHeader
            size="lg"
            eyebrow={t('education.mechanics.tag')}
            title={t('education.mechanics.title')}
            description={t('education.mechanics.description')}
          />
        </Reveal>

        <StaggerGroup className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {flowSteps.map((step, index) => (
            <StaggerItem key={step.key} className="h-full">
            <Card tone="subtle" padding="md" interactive className="h-full">
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
            </StaggerItem>
          ))}
        </StaggerGroup>
      </div>

      <div className="section-block">
        <Reveal>
          <SectionHeader
            size="lg"
            eyebrow={t('education.sipOverview.tag')}
            title={t('education.sipOverview.title')}
            description={t('education.sipOverview.description')}
          />
        </Reveal>

        <StaggerGroup className="grid gap-3 md:grid-cols-3">
          {sipCards.map((sip) => {
            const hasChildren = sip.children.length > 0;
            const isExpanded = expandedId === sip.id;
            return (
              <StaggerItem key={sip.id} className="h-full">
              <Card tone="default" padding="md" interactive className="h-full">
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

                  <div className="mt-auto flex flex-wrap items-center gap-2 pt-4">
                    {sip.href && (
                      <Button variant="ghost" size="sm" iconRight={<span>→</span>} href={sip.href}>
                        {t('education.readMore')}
                      </Button>
                    )}
                    {hasChildren && (
                      <Button
                        variant="ghost"
                        size="sm"
                        iconRight={<span>{isExpanded ? '−' : '+'}</span>}
                        aria-expanded={isExpanded}
                        onClick={() => setExpandedId(isExpanded ? null : sip.id)}
                      >
                        {isExpanded ? t('education.hideSubProposals') : t('education.showSubProposals')}
                      </Button>
                    )}
                  </div>

                  {hasChildren && (
                    <AnimatePresence initial={false}>
                      {isExpanded && (
                        <motion.div
                          key="children"
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.24, ease: [0.22, 1, 0.36, 1] }}
                          className="overflow-hidden"
                        >
                          <div className="mt-4 space-y-2.5 border-t border-[var(--sx-border-soft)] pt-4">
                            {sip.children.map((child) => (
                              <Card key={child.id} as="div" tone="subtle" padding="sm">
                                <div className="flex items-center justify-between gap-2">
                                  <Chip tone="primary">{child.tag}</Chip>
                                  <Chip tone={STATUS_TONE[child.status] ?? 'muted'}>{child.statusLabel}</Chip>
                                </div>
                                <h5 className="mt-2.5 text-[15px] font-semibold leading-[1.3] tracking-[-0.01em] text-[var(--sx-text)]">
                                  {child.title}
                                </h5>
                                <p className="mt-1.5 text-[13px] leading-[1.58] text-[var(--sx-text-muted)]">
                                  {child.copy}
                                </p>
                                {child.href && (
                                  <div className="mt-2.5">
                                    <Button variant="ghost" size="sm" iconRight={<span>→</span>} href={child.href}>
                                      {t('education.readMore')}
                                    </Button>
                                  </div>
                                )}
                              </Card>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  )}
                </div>
              </Card>
              </StaggerItem>
            );
          })}
        </StaggerGroup>
      </div>

      <div className="hairline pt-5">
        <p className="text-[13px] leading-[1.58] text-[var(--sx-muted)]">
          {t('education.communityNote')}
        </p>
      </div>
    </section>
  );
}
