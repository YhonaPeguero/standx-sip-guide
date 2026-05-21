import { useI18n } from '../i18n';
import Button from './ui/Button';
import Card from './ui/Card';
import Chip from './ui/Chip';
import SectionHeader from './ui/SectionHeader';

const PLAYBOOK_CARD_DEFS = [
  { id: 'hold-dusd', key: 'holdDusd', actionType: 'try' },
  { id: 'trade-awareness', key: 'tradeAwareness', actionType: 'learn' },
  { id: 'understand-loop', key: 'understandLoop', actionType: 'learn' },
  { id: 'combine-layers', key: 'combineLayers', actionType: 'try' },
];

export default function YieldPlaybookView({ onTryFlow, onLearnMore }) {
  const { t } = useI18n();

  const playbookCards = PLAYBOOK_CARD_DEFS.map((card, index) => ({
    ...card,
    index,
    tag: t(`playbook.cards.${card.key}.tag`),
    title: t(`playbook.cards.${card.key}.title`),
    headline: t(`playbook.cards.${card.key}.headline`),
    copy: t(`playbook.cards.${card.key}.copy`),
    benefit: t(`playbook.cards.${card.key}.benefit`),
    actionLabel: t(`playbook.actions.${card.actionType}`),
  }));

  return (
    <section className="space-y-12" data-guide-id="guide-playbook">
      <div className="flex flex-col gap-4">
        <span className="tag-pill">{t('playbook.tag')}</span>
        <SectionHeader
          size="lg"
          title={t('playbook.title')}
          description={t('playbook.description')}
        />
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        {playbookCards.map((card) => (
          <Card key={card.id} tone="raised" padding="lg" interactive className="h-full">
            <div className="flex h-full flex-col gap-4">
              <div className="flex items-center justify-between gap-2">
                <div className="flex items-center gap-2">
                  <Chip tone="primary">{card.tag}</Chip>
                  <span className="text-[11px] uppercase tracking-[0.14em] text-[var(--sx-muted-soft)]">
                    {t('playbook.strategyCard')}
                  </span>
                </div>
                <span className="mono text-[11px] tracking-[0.14em] text-[var(--sx-muted-soft)]">
                  0{card.index + 1}
                </span>
              </div>

              <div className="space-y-2">
                <h3 className="text-[19px] font-semibold leading-[1.22] tracking-[-0.018em] text-[var(--sx-text)] sm:text-[21px]">
                  {card.title}
                </h3>
                <p className="text-[15px] leading-[1.55] text-[var(--sx-text-muted)]">
                  {card.headline}
                </p>
              </div>

              <p className="text-[14px] leading-[1.62] text-[var(--sx-muted)]">{card.copy}</p>

              <div className="flex flex-col gap-1.5 border-l-2 border-[var(--sx-primary)] pl-3 text-[13px] leading-[1.6]">
                <span className="mono text-[10px] uppercase tracking-[0.18em] text-[var(--sx-muted)]">
                  {t('playbook.benefitLabel')}
                </span>
                <span className="text-[var(--sx-primary-bright)]">{card.benefit}</span>
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
        <p className="text-[13px] leading-[1.58] text-[var(--sx-muted)]">
          {t('playbook.disclaimer')}
        </p>
      </div>
    </section>
  );
}
