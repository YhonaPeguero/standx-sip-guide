import Button from './ui/Button';
import Card from './ui/Card';
import SectionHeader from './ui/SectionHeader';
import { useI18n } from '../i18n';

const PLAYBOOK_CARD_DEFS = [
  {
    id: 'hold-dusd',
    key: 'holdDusd',
    actionType: 'try',
  },
  {
    id: 'trade-awareness',
    key: 'tradeAwareness',
    actionType: 'learn',
  },
  {
    id: 'understand-loop',
    key: 'understandLoop',
    actionType: 'learn',
  },
  {
    id: 'combine-layers',
    key: 'combineLayers',
    actionType: 'try',
  },
];

export default function YieldPlaybookView({ onTryFlow, onLearnMore }) {
  const { t } = useI18n();

  const playbookCards = PLAYBOOK_CARD_DEFS.map((card) => ({
    ...card,
    tag: t(`playbook.cards.${card.key}.tag`),
    title: t(`playbook.cards.${card.key}.title`),
    headline: t(`playbook.cards.${card.key}.headline`),
    copy: t(`playbook.cards.${card.key}.copy`),
    benefit: t(`playbook.cards.${card.key}.benefit`),
    actionLabel: t(`playbook.actions.${card.actionType}`),
  }));

  return (
    <section className="space-y-12" data-guide-id="guide-playbook">
      <SectionHeader
        eyebrow={t('playbook.eyebrow')}
        title={t('playbook.title')}
        description={t('playbook.description')}
      />

      <div className="grid gap-4 lg:grid-cols-2">
        {playbookCards.map((card) => (
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
                  {t('playbook.strategyCard')}
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
                  {t('playbook.benefitLabel')}
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
          {t('playbook.disclaimer')}
        </p>
      </div>
    </section>
  );
}
