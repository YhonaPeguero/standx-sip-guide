import { useI18n } from '../../i18n';
import { NotPublishedChip } from './VaultLabels';

// Escalation order from "Shield Health During Operation", rendered as a static strip under
// the liquidation flow. SIP-5B states what triggers each stage but publishes no threshold,
// window length or coverage ratio, so the sequence carries no numbers at all.
const STAGES = ['escrow', 'oiCut', 'reduceOnly', 'sunset'];

export default function ShieldHealthStrip() {
  const { t } = useI18n();

  return (
    <div className="hairline mt-8 pt-6">
      <span className="eyebrow">{t('vaults.shield.eyebrow')}</span>

      <p className="type-body-sm mt-3.5 max-w-[720px] text-[var(--sx-text-muted)]">
        {t('vaults.shield.description')}
      </p>

      <ol className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
        {STAGES.map((id, index) => (
          <li
            key={id}
            className="flex flex-col border border-[var(--sx-border)] bg-[var(--sx-surface-2)] p-3.5"
            style={{ borderRadius: 6 }}
          >
            <div className="flex items-center gap-2">
              <span
                className="mono grid h-[22px] w-[22px] shrink-0 place-items-center border text-[10.5px] font-semibold"
                style={{
                  borderRadius: 999,
                  borderColor: 'var(--sx-border-strong)',
                  color: 'var(--sx-primary-bright)',
                }}
              >
                {index + 1}
              </span>
              {index < STAGES.length - 1 ? (
                <span className="mono text-[12px] text-[var(--sx-muted-soft)]" aria-hidden="true">
                  →
                </span>
              ) : null}
            </div>

            <h4 className="mt-2.5 text-[13.5px] font-semibold leading-[1.34] tracking-[-0.01em] text-[var(--sx-text)]">
              {t(`vaults.shield.stages.${id}.name`)}
            </h4>

            <p className="mt-1.5 text-[12.5px] leading-[1.55] text-[var(--sx-text-muted)]">
              <span className="text-[var(--sx-muted)]">{t('vaults.shield.triggerLabel')}: </span>
              {t(`vaults.shield.stages.${id}.trigger`)}
            </p>

            <div className="mt-auto flex flex-wrap items-center gap-2 pt-3">
              <span className="mono text-[10px] uppercase tracking-[0.12em] text-[var(--sx-muted-soft)]">
                {t('vaults.shield.thresholdLabel')}
              </span>
              <NotPublishedChip />
            </div>
          </li>
        ))}
      </ol>

      <p className="mt-4 text-[12.5px] leading-[1.58] text-[var(--sx-muted)]">
        {t('vaults.shield.footnote')}
      </p>
    </div>
  );
}
