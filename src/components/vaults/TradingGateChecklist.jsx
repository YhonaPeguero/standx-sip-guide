import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { useI18n } from '../../i18n';
import { Reveal } from '../Reveal';
import Card from '../ui/Card';
import SectionHeader from '../ui/SectionHeader';
import { NotPublishedChip } from '../ui/Markers';

// The four conditions SIP-5B requires before a market moves from Bootstrapping to Live.
// Three of them are measured against figures the proposal does not publish.
const CONDITIONS = [
  { id: 'sponsorEquity', notPublished: true },
  { id: 'shieldCapital', notPublished: true },
  { id: 'rewardBudget', notPublished: true },
  { id: 'review', notPublished: false },
];

function CheckBox({ checked }) {
  return (
    <span
      aria-hidden="true"
      className="grid h-[20px] w-[20px] shrink-0 place-items-center border transition-colors duration-200"
      style={{
        borderRadius: 4,
        borderColor: checked ? 'rgba(0, 102, 50, 0.9)' : 'var(--sx-border-strong)',
        backgroundColor: checked ? 'rgba(0, 102, 50, 0.28)' : 'var(--sx-surface-2)',
        color: checked ? 'var(--sx-primary-bright)' : 'transparent',
      }}
    >
      <svg viewBox="0 0 12 12" className="h-[11px] w-[11px]" fill="none">
        <path
          d="M2.5 6.25L4.85 8.5L9.5 3.75"
          stroke="currentColor"
          strokeWidth="1.7"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </span>
  );
}

export default function TradingGateChecklist() {
  const { t } = useI18n();
  const [met, setMet] = useState({});

  const metCount = CONDITIONS.filter((condition) => met[condition.id]).length;
  const isLive = metCount === CONDITIONS.length;

  const toggle = (id) => {
    setMet((current) => ({ ...current, [id]: !current[id] }));
  };

  return (
    <div className="section-block">
      <Reveal>
        <SectionHeader
          size="lg"
          eyebrow={t('vaults.gate.eyebrow')}
          title={t('vaults.gate.title')}
          description={t('vaults.gate.description')}
        />
      </Reveal>

      <Reveal delay={0.06} className="grid gap-3 lg:grid-cols-[minmax(0,1fr)_300px]">
        <Card tone="default" padding="lg">
          <ul role="list" className="flex flex-col divide-y divide-[var(--sx-border-soft)]">
            {CONDITIONS.map((condition, index) => {
              const checked = Boolean(met[condition.id]);

              return (
                <li key={condition.id} className="py-3.5 first:pt-0 last:pb-0">
                  <button
                    type="button"
                    role="checkbox"
                    aria-checked={checked}
                    onClick={() => toggle(condition.id)}
                    className="control-min group flex w-full items-start gap-3 py-1 text-left outline-none"
                    style={{ borderRadius: 4 }}
                  >
                    <span className="mt-0.5">
                      <CheckBox checked={checked} />
                    </span>

                    <span className="flex min-w-0 flex-1 flex-col gap-1.5">
                      <span className="flex flex-wrap items-center gap-2">
                        <span className="mono text-[10.5px] uppercase tracking-[0.14em] text-[var(--sx-muted-soft)]">
                          {String(index + 1).padStart(2, '0')}
                        </span>
                        {condition.notPublished ? <NotPublishedChip /> : null}
                      </span>
                      <span
                        className="text-[13.5px] leading-[1.56] transition-colors duration-200"
                        style={{ color: checked ? 'var(--sx-text)' : 'var(--sx-text-muted)' }}
                      >
                        {t(`vaults.gate.conditions.${condition.id}`)}
                      </span>
                    </span>
                  </button>
                </li>
              );
            })}
          </ul>
        </Card>

        <Card tone="subtle" padding="md" className="h-full">
          <span className="eyebrow">{t('vaults.gate.stateLabel')}</span>

          <div className="mt-4 flex items-center gap-2.5">
            <span className="relative inline-flex h-[9px] w-[9px] shrink-0">
              <span
                className="absolute inset-0 rounded-full"
                style={{ backgroundColor: isLive ? '#00ff2a' : '#6f7d74' }}
              />
              {isLive ? (
                <span
                  className="absolute inset-0 rounded-full animate-ping"
                  style={{ backgroundColor: 'rgba(0, 255, 42, 0.55)' }}
                />
              ) : null}
            </span>

            <AnimatePresence mode="wait" initial={false}>
              <motion.span
                key={isLive ? 'live' : 'bootstrapping'}
                initial={{ opacity: 0, y: 4 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -4 }}
                transition={{ duration: 0.22 }}
                className="mono text-[15px] font-semibold uppercase tracking-[0.14em]"
                style={{ color: isLive ? '#00ff2a' : 'var(--sx-muted)' }}
              >
                {isLive ? t('vaults.gate.live') : t('vaults.gate.bootstrapping')}
              </motion.span>
            </AnimatePresence>
          </div>

          <p className="mt-4 text-[12.5px] leading-[1.58] text-[var(--sx-text-muted)]">
            {isLive
              ? t('vaults.gate.openCopy')
              : t('vaults.gate.closedCopy', {
                  met: metCount,
                  total: CONDITIONS.length,
                })}
          </p>

          <div className="hairline mt-5 pt-4">
            <p className="text-[12px] leading-[1.55] text-[var(--sx-muted)]">
              {t('vaults.gate.footnote')}
            </p>
          </div>
        </Card>
      </Reveal>
    </div>
  );
}
