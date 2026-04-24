import Button from './ui/Button';
import Card from './ui/Card';
import SectionHeader from './ui/SectionHeader';

const FLOW_STEPS = [
  {
    title: 'Choose your capital',
    copy: 'Pick a starting amount or use a quick preset.',
  },
  {
    title: 'Turn SIP Switch ON',
    copy: 'Activate the loop and watch the simulator come alive.',
  },
  {
    title: 'Preview earning behavior',
    copy: 'See how value can evolve across timeframes in real time.',
  },
  {
    title: 'Learn which SIP powers it',
    copy: 'Understand which SIP drives each part of the experience.',
  },
];

const SIP_OVERVIEW = [
  {
    id: 'sip-1',
    tag: 'SIP #1',
    title: 'Block Trades',
    copy: 'Makes larger trades easier to execute with less disruption in normal market flow.',
    href: 'https://docs.standx.com/sip/sip-1-block-trade',
  },
  {
    id: 'sip-2',
    tag: 'SIP #2',
    title: 'Position Yield',
    copy: 'Lets eligible positions keep earning behavior active while users stay engaged in markets.',
    href: 'https://docs.standx.com/sip/sip-2-position-yield',
  },
  {
    id: 'sip-3',
    tag: 'SIP #3',
    title: 'DUSD Native Yield Expansion',
    copy: 'Improves how capital can circulate so trading activity can reinforce DUSD yield pathways.',
    href: 'https://docs.standx.com/sip/sip-3-dusd-native-yield',
  },
];

export default function EducationSection({ sectionId }) {
  return (
    <section id={sectionId} className="space-y-12">
      <div className="space-y-6">
        <SectionHeader
          eyebrow="Learn the Mechanics"
          title="A guided four-step path"
          description="A simple loop you can run through in under a minute to understand how SIP works in practice."
        />

        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {FLOW_STEPS.map((step, index) => (
            <Card key={step.title} tone="subtle" padding="md" interactive className="h-full">
              <div className="flex items-center justify-between">
                <span className="mono text-[10px] uppercase tracking-[0.16em] text-[var(--sx-primary-bright)]">
                  Step {String(index + 1).padStart(2, '0')}
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
          eyebrow="SIP Overview"
          title="Three SIPs working together"
          description="Each SIP plays a focused role. Together they shape how the StandX yield loop behaves."
        />

        <div className="grid gap-3 md:grid-cols-3">
          {SIP_OVERVIEW.map((sip) => (
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
                    Read more
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>

      <div className="hairline pt-5">
        <p className="text-[12px] leading-[1.5] text-[var(--sx-muted)]">
          Built by the community to help users understand StandX SIPs faster.
        </p>
      </div>
    </section>
  );
}
