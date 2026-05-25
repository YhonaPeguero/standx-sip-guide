import EducationSection from './EducationSection';
import Hero from './Hero';
import ProtocolStatusList from './ProtocolStatusList';
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
    <div className="space-y-14 sm:space-y-20">
      <Hero onPrimary={onOpenSimulator} onSecondary={scrollToLearn} />

      <section
        className="grid gap-5 lg:grid-cols-[320px_minmax(0,1fr)]"
        aria-labelledby="interactive-preview-heading"
      >
        <article
          className="relative flex flex-col border border-[var(--sx-border)] bg-[var(--sx-surface)] p-6 shadow-[var(--sx-shadow-lg)]"
          style={{ borderRadius: 6 }}
          data-guide-id="guide-protocol-layers"
        >
          <div className="flex items-center justify-between gap-2">
            <span className="eyebrow" id="interactive-preview-heading">
              {t('overview.interactivePreview')}
            </span>
            <StatusChip isOn={isSip2On} compact />
          </div>

          <ProtocolStatusList
            isSip2On={isSip2On}
            onToggleSip2={onToggleSip2}
            showSip2Row
            compact
            className="mt-6"
          />

          <p className="mt-6 text-[14px] leading-[1.62] text-[var(--sx-text-muted)]">
            {isSip2On ? t('overview.previewActive') : t('overview.previewIdle')}
          </p>

          <div className="mt-auto pt-6">
            <div className="hairline pt-4">
              <p className="text-[13px] leading-[1.58] text-[var(--sx-muted)]">
                {t('overview.storyHint')}
              </p>
            </div>
          </div>
        </article>

        <YieldLoopFlow isOn={isSip2On} />
      </section>

      <EducationSection sectionId={educationSectionId} />
    </div>
  );
}
