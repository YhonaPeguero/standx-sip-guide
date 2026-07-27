import { useState } from 'react';
import { motion } from 'framer-motion';
import { useI18n } from '../../i18n';
import { Reveal } from '../Reveal';
import Card from '../ui/Card';
import SectionHeader from '../ui/SectionHeader';
import { NotPublishedChip } from './VaultLabels';

// Escalation order from "Shield Health During Operation". SIP-5B states what triggers each
// stage but publishes no threshold, window length or coverage ratio for any of them, so the
// sequence is shown without a single number.
const STAGES = ['escrow', 'oiCut', 'reduceOnly', 'sunset'];
const STAGE_TONES = ['var(--sx-warning)', 'var(--sx-warning)', 'var(--sx-accent)', 'var(--sx-accent)'];

export default function ShieldHealthLadder() {
  // 0 = within requirement, 1..4 = the escalation stages
  const [stage, setStage] = useState(0);

  const { t } = useI18n();
  const steps = [t('vaults.shield.healthy'), ...STAGES.map((id) => t(`vaults.shield.stages.${id}.short`))];

  return (
    <div className="section-block">
      <Reveal>
        <SectionHeader
          size="lg"
          eyebrow={t('vaults.shield.eyebrow')}
          title={t('vaults.shield.title')}
          description={t('vaults.shield.description')}
        />
      </Reveal>

      <Reveal delay={0.06} className="flex flex-col gap-3">
        <Card tone="default" padding="lg">
          <div className="flex flex-wrap items-baseline justify-between gap-3">
            <span className="eyebrow">{t('vaults.shield.stageLabel')}</span>
            <span className="mono text-[11px] uppercase tracking-[0.14em] text-[var(--sx-muted)]">
              {stage}/{STAGES.length}
            </span>
          </div>

          <div
            role="radiogroup"
            aria-label={t('vaults.shield.stageLabel')}
            className="no-scrollbar mt-4 flex gap-1 overflow-x-auto border border-[var(--sx-border)] bg-[var(--sx-surface-2)] p-1"
            style={{ borderRadius: 6 }}
          >
            {steps.map((label, index) => {
              const active = index === stage;

              return (
                <button
                  key={label}
                  type="button"
                  role="radio"
                  aria-checked={active}
                  onClick={() => setStage(index)}
                  className="mono relative shrink-0 px-3 py-2 text-[11px] font-semibold uppercase tracking-[0.12em] outline-none transition-colors duration-300 focus-visible:ring-1 focus-visible:ring-[var(--sx-accent)]/70"
                  style={{ borderRadius: 4, color: active ? 'var(--sx-text)' : 'var(--sx-muted)' }}
                >
                  {active ? (
                    <motion.span
                      layoutId="shield-stage-indicator"
                      className="absolute inset-0"
                      style={{
                        borderRadius: 4,
                        background:
                          'linear-gradient(180deg, rgba(0,102,50,0.9) 0%, rgba(0,102,50,0.75) 100%)',
                      }}
                      transition={{ type: 'spring', stiffness: 450, damping: 32 }}
                    />
                  ) : null}
                  <span className="relative z-10">{label}</span>
                </button>
              );
            })}
          </div>

          <ol className="mt-6 flex flex-col">
            {STAGES.map((id, index) => {
              const stageNumber = index + 1;
              const reached = stage >= stageNumber;
              const isCurrent = stage === stageNumber;
              const tone = STAGE_TONES[index];

              return (
                <li key={id} className="flex gap-3.5 pb-5 last:pb-0">
                  {/* Rail: filled down to the active stage */}
                  <div className="flex flex-col items-center">
                    <span
                      className="mono grid h-[26px] w-[26px] shrink-0 place-items-center border text-[11px] font-semibold transition-colors duration-300"
                      style={{
                        borderRadius: 999,
                        borderColor: reached ? tone : 'var(--sx-border-strong)',
                        backgroundColor: reached ? 'rgba(0, 102, 50, 0.2)' : 'var(--sx-surface-2)',
                        color: reached ? tone : 'var(--sx-muted-soft)',
                      }}
                    >
                      {stageNumber}
                    </span>
                    {index < STAGES.length - 1 ? (
                      <span
                        className="mt-1 w-[1.5px] flex-1 transition-colors duration-300"
                        style={{
                          backgroundColor:
                            stage > stageNumber ? tone : 'var(--sx-border)',
                          minHeight: 26,
                        }}
                        aria-hidden="true"
                      />
                    ) : null}
                  </div>

                  <div className="min-w-0 flex-1">
                    <div className="flex flex-wrap items-center gap-2">
                      <h4
                        className="text-[15px] font-semibold leading-[1.3] tracking-[-0.01em] transition-colors duration-300"
                        style={{ color: reached ? 'var(--sx-text)' : 'var(--sx-muted)' }}
                      >
                        {t(`vaults.shield.stages.${id}.name`)}
                      </h4>
                      {isCurrent ? (
                        <span
                          className="mono px-1.5 py-0.5 text-[10px] uppercase tracking-[0.12em]"
                          style={{ borderRadius: 3, color: tone, backgroundColor: 'rgba(0,102,50,0.18)' }}
                        >
                          {t('vaults.shield.current')}
                        </span>
                      ) : null}
                    </div>

                    <p className="mt-1.5 text-[13px] leading-[1.58] text-[var(--sx-text-muted)]">
                      <span className="text-[var(--sx-muted)]">{t('vaults.shield.triggerLabel')}: </span>
                      {t(`vaults.shield.stages.${id}.trigger`)}
                    </p>

                    <div className="mt-2 flex flex-wrap items-center gap-2">
                      <span className="mono text-[10.5px] uppercase tracking-[0.12em] text-[var(--sx-muted-soft)]">
                        {t('vaults.shield.thresholdLabel')}
                      </span>
                      <NotPublishedChip />
                    </div>
                  </div>
                </li>
              );
            })}
          </ol>

          <div className="hairline mt-5 pt-4">
            <p className="text-[12.5px] leading-[1.58] text-[var(--sx-muted)]">
              {t('vaults.shield.footnote')}
            </p>
          </div>
        </Card>
      </Reveal>
    </div>
  );
}
