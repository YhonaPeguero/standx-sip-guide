import BlockOptionsSection from './BlockOptionsSection';
import Card from './ui/Card';
import EducationSection from './EducationSection';
import Hero from './Hero';
import ProtocolStatusList from './ProtocolStatusList';
import { Reveal } from './Reveal';
import StatusChip from './StatusChip';
import YieldLoopFlow from './YieldLoopFlow';
import { useI18n } from '../i18n';

export default function OverviewView({ isSip2On, onToggleSip2, onOpenSimulator, educationSectionId }) {
  const { t } = useI18n();

  const scrollToLearn = () => {
    const section = document.getElementById(educationSectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="section-stack">
      <Hero onPrimary={onOpenSimulator} onSecondary={scrollToLearn} />

      <Reveal
        as="section"
        delay={0.12}
        className="grid gap-5 lg:grid-cols-[320px_minmax(0,1fr)]"
        aria-labelledby="interactive-preview-heading"
      >
        <Card
          as="article"
          tone="default"
          padding="lg"
          elevated
          className="flex flex-col"
          data-guide-id="guide-protocol-layers"
        >
          <div className="flex flex-col gap-3">
            <span className="eyebrow" id="interactive-preview-heading">
              {t('overview.interactivePreview')}
            </span>
            <div className="self-start">
              <StatusChip isOn={isSip2On} compact />
            </div>
          </div>

          <ProtocolStatusList
            isSip2On={isSip2On}
            onToggleSip2={onToggleSip2}
            showSip2Row
            compact
            className="mt-6"
          />

          <p className="type-body mt-6 text-[var(--sx-text-muted)]">
            {isSip2On ? t('overview.previewActive') : t('overview.previewIdle')}
          </p>

          <div className="mt-auto pt-6">
            <div className="hairline pt-4">
              <p className="type-body-sm text-[var(--sx-muted)]">
                {t('overview.storyHint')}
              </p>
            </div>
          </div>
        </Card>

        <YieldLoopFlow isOn={isSip2On} />
      </Reveal>

      <EducationSection sectionId={educationSectionId} />

      <BlockOptionsSection sectionId="overview-block-options" />
    </div>
  );
}
