import Button from './ui/Button';
import Card from './ui/Card';
import SectionHeader from './ui/SectionHeader';

const PLAYBOOK_CARDS = [
  {
    id: 'hold-dusd',
    tag: 'Passive',
    title: 'Hold DUSD',
    headline: 'Earn passively without staking',
    copy: 'Keep DUSD ready while still participating in simulated yield behavior over time.',
    benefit: 'Capital stays liquid while yield stays visible.',
    actionLabel: 'Try this flow',
    actionType: 'try',
  },
  {
    id: 'trade-awareness',
    tag: 'Active',
    title: 'Trade with awareness',
    headline: 'Eligible positions may earn through SIP #2',
    copy: 'Use SIP #2 as a lens to understand how activity and yield can work together.',
    benefit: 'Better timing decisions with less idle capital.',
    actionLabel: 'Learn more',
    actionType: 'learn',
  },
  {
    id: 'understand-loop',
    tag: 'System',
    title: 'Understand the loop',
    headline: 'SIP #3 routes activity back into DUSD yield',
    copy: 'Follow the loop view to see how different actions can feed into long-term growth.',
    benefit: 'Clearer mental model of how the system compounds.',
    actionLabel: 'Learn more',
    actionType: 'learn',
  },
  {
    id: 'combine-layers',
    tag: 'Strategy',
    title: 'Combine the layers',
    headline: 'DUSD base yield + active position yield',
    copy: 'Test different capital amounts and ranges to compare layered outcomes in one place.',
    benefit: 'Practical strategy planning with fast what-if checks.',
    actionLabel: 'Try this flow',
    actionType: 'try',
  },
];

export default function YieldPlaybookView({ onTryFlow, onLearnMore }) {
  return (
    <section className="space-y-12">
      <SectionHeader
        eyebrow="Community Yield Playbook"
        title="Practical paths to learn DUSD and SIP behavior quickly"
        description="Short, opinionated cards built from how the community actually thinks about each flow."
      />

      <div className="grid gap-4 lg:grid-cols-2">
        {PLAYBOOK_CARDS.map((card) => (
          <Card key={card.id} tone="raised" padding="lg" interactive className="h-full">
            <div className="flex h-full flex-col gap-4">
              <div className="flex items-center gap-2">
                <span
                  className="mono inline-flex items-center px-2 py-0.5 text-[10px] font-semibold uppercase tracking-[0.18em] text-[var(--sx-primary-bright)]"
                  style={{ borderRadius: 3, backgroundColor: 'rgba(0,102,50,0.18)' }}
                >
                  {card.tag}
                </span>
                <span className="text-[10px] uppercase tracking-[0.16em] text-[var(--sx-muted-soft)]">
                  Strategy card
                </span>
              </div>

              <div className="space-y-2">
                <h3 className="text-[19px] font-semibold leading-[1.2] tracking-[-0.015em] text-[var(--sx-text)]">
                  {card.title}
                </h3>
                <p className="text-[14px] leading-[1.4] text-[var(--sx-text-muted)]">
                  {card.headline}
                </p>
              </div>

              <p className="text-[13px] leading-[1.55] text-[var(--sx-muted)]">{card.copy}</p>

              <div
                className="flex items-start gap-2 border-l-2 border-[var(--sx-primary)] pl-3 text-[12px] leading-[1.5] text-[var(--sx-primary-bright)]"
              >
                <span className="mono uppercase tracking-[0.16em] text-[var(--sx-muted)]">
                  Benefit:
                </span>
                <span>{card.benefit}</span>
              </div>

              <div className="mt-auto pt-2">
                <Button
                  variant="outline"
                  size="md"
                  iconRight={<span>→</span>}
                  onClick={card.actionType === 'try' ? onTryFlow : onLearnMore}
                >
                  {card.actionLabel}
                </Button>
              </div>
            </div>
          </Card>
        ))}
      </div>

      <div className="hairline pt-5">
        <p className="text-[12px] leading-[1.5] text-[var(--sx-muted)]">
          Educational simulation only. Actual results may vary.
        </p>
      </div>
    </section>
  );
}
