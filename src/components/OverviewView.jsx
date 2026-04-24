import EducationSection from './EducationSection';
import Headline from './Headline';
import MicroCopy from './MicroCopy';
import StatusChip from './StatusChip';
import ToggleSwitch from './ToggleSwitch';
import YieldLoopFlow from './YieldLoopFlow';
import Button from './ui/Button';

export default function OverviewView({ isOn, onToggle, onOpenSimulator, educationSectionId }) {
  return (
    <div className="space-y-12 sm:space-y-16">
      <section className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-end">
        <div className="flex flex-col gap-5">
          <StatusChip isOn={isOn} />
          <Headline />
          <MicroCopy isOn={isOn} />
        </div>

        <div className="flex flex-wrap items-center gap-3">
          <Button variant="primary" size="lg" onClick={onOpenSimulator} iconRight={<span>→</span>}>
            Open simulator
          </Button>
        </div>
      </section>

      <section className="grid gap-5 lg:grid-cols-[300px_minmax(0,1fr)]">
        <article
          className="relative flex flex-col border border-[var(--sx-border)] bg-[var(--sx-surface)] p-6 shadow-[var(--sx-shadow-lg)]"
          style={{ borderRadius: 6 }}
        >
          <span className="eyebrow">Interactive Preview</span>

          <div className="mt-6 flex justify-center">
            <ToggleSwitch isOn={isOn} onChange={onToggle} />
          </div>

          <p className="mt-6 text-[13px] leading-[1.55] text-[var(--sx-text-muted)]">
            {isOn
              ? 'When active, the loop simulates how capital can keep moving through yield layers.'
              : 'Turn SIP on to preview how the yield loop can work over time.'}
          </p>

          <div className="mt-auto pt-6">
            <div className="hairline pt-4">
              <p className="text-[12px] leading-[1.5] text-[var(--sx-muted)]">
                The whole story plays out in three connected steps shown on the right.
              </p>
            </div>
          </div>
        </article>

        <YieldLoopFlow isOn={isOn} />
      </section>

      <EducationSection sectionId={educationSectionId} />
    </div>
  );
}
