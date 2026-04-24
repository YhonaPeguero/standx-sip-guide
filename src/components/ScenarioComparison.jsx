import { formatCurrencyAdaptive, formatPercentValue } from '../lib/formatters';

export default function ScenarioComparison({
  initialCapital,
  onEstimatedValue,
  onEstimatedGain,
  onYieldPct,
}) {
  const offValueLabel = formatCurrencyAdaptive(initialCapital, { threshold: 100000 });
  const onValueLabel = formatCurrencyAdaptive(onEstimatedValue, { threshold: 100000 });
  const onGainLabel = formatCurrencyAdaptive(onEstimatedGain, { threshold: 100000 });
  const onYieldLabel = formatPercentValue(onYieldPct);

  return (
    <div className="mt-7 border-t border-[var(--sx-border)] pt-6">
      <span className="eyebrow">Scenario Comparison</span>

      <div className="mt-4 grid gap-3 sm:grid-cols-2">
        <article
          className="border border-[var(--sx-border)] bg-[var(--sx-surface-2)] p-4"
          style={{ borderRadius: 6 }}
        >
          <div className="flex items-center justify-between">
            <span className="mono text-[10px] uppercase tracking-[0.16em] text-[var(--sx-muted)]">
              SIP Off
            </span>
            <span className="mono text-[10px] uppercase tracking-[0.16em] text-[var(--sx-muted-soft)]">
              Idle
            </span>
          </div>
          <p className="mono mt-3 text-[22px] font-semibold tracking-[-0.02em] text-[var(--sx-text)]">
            {offValueLabel}
          </p>
          <p className="mt-1.5 text-[12px] leading-[1.5] text-[var(--sx-muted)]">
            No projected gain while idle.
          </p>
        </article>

        <article
          className="relative border border-[rgba(0,102,50,0.55)] bg-[rgba(11,22,18,0.95)] p-4"
          style={{
            borderRadius: 6,
            boxShadow: '0 0 0 1px rgba(0,102,50,0.18), 0 12px 28px rgba(0,102,50,0.16)',
          }}
        >
          <div className="flex items-center justify-between">
            <span className="mono text-[10px] uppercase tracking-[0.16em] text-[var(--sx-primary-bright)]">
              SIP On
            </span>
            <span className="mono text-[10px] uppercase tracking-[0.16em] text-[#FAC6C3]">
              Active
            </span>
          </div>
          <p className="mono mt-3 text-[22px] font-semibold tracking-[-0.02em] text-[var(--sx-text)]">
            {onValueLabel}
          </p>
          <p className="mt-1.5 text-[12px] leading-[1.5] text-[var(--sx-primary-bright)]">
            +{onGainLabel} <span className="text-[var(--sx-muted)]">({onYieldLabel})</span>
          </p>
        </article>
      </div>
    </div>
  );
}
