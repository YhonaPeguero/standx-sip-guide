import { formatCurrencyAdaptive, formatPercentValue } from '../lib/formatters';
import { useI18n } from '../i18n';

export default function ScenarioComparison({
  initialCapital,
  offEstimatedValue,
  offEstimatedGain,
  offYieldPct,
  onEstimatedValue,
  onEstimatedGain,
  onYieldPct,
  isSip2On = false,
}) {
  const { t } = useI18n();
  const offValueLabel = formatCurrencyAdaptive(offEstimatedValue ?? initialCapital, { threshold: 100000 });
  const offGainLabel = formatCurrencyAdaptive(offEstimatedGain ?? 0, { threshold: 100000 });
  const offYieldLabel = formatPercentValue(offYieldPct ?? 0);
  const onValueLabel = formatCurrencyAdaptive(onEstimatedValue, { threshold: 100000 });
  const onGainLabel = formatCurrencyAdaptive(onEstimatedGain, { threshold: 100000 });
  const onYieldLabel = formatPercentValue(onYieldPct);

  return (
    <div className="mt-7 border-t border-[var(--sx-border)] pt-6">
      <span className="eyebrow">{t('scenario.eyebrow')}</span>

      <div className={`mt-4 grid gap-3 ${isSip2On ? 'sm:grid-cols-2' : ''}`}>
        <article className="subregion">
          <div className="flex items-center justify-between">
            <span className="mono text-[11px] uppercase tracking-[0.13em] text-[var(--sx-muted)]">
              {t('scenario.sipOff')}
            </span>
            <span className="mono text-[11px] uppercase tracking-[0.13em] text-[var(--sx-muted-soft)]">
              {t('scenario.idle')}
            </span>
          </div>
          <p className="mono mt-3 text-[22px] font-semibold tracking-[-0.02em] text-[var(--sx-text)]">
            {offValueLabel}
          </p>
          <p className="mt-2 text-[13px] leading-[1.6] text-[var(--sx-muted)]">
            +{offGainLabel} <span className="text-[var(--sx-muted-soft)]">({offYieldLabel})</span>
          </p>
          <p className="mt-1 text-[12px] leading-[1.5] text-[var(--sx-muted-soft)]">
            {t('scenario.noGainIdle')}
          </p>
        </article>

        {isSip2On ? (
          <article className="subregion subregion-active relative">
            <div className="flex items-center justify-between">
              <span className="mono text-[11px] uppercase tracking-[0.13em] text-[var(--sx-primary-bright)]">
                {t('scenario.sipOn')}
              </span>
              <span className="mono text-[11px] uppercase tracking-[0.13em] text-[#00ff2a]">
                {t('scenario.active')}
              </span>
            </div>
            <p className="mono mt-3 text-[22px] font-semibold tracking-[-0.02em] text-[var(--sx-text)]">
              {onValueLabel}
            </p>
            <p className="mt-2 text-[13px] leading-[1.6] text-[var(--sx-primary-bright)]">
              +{onGainLabel} <span className="text-[var(--sx-muted)]">({onYieldLabel})</span>
            </p>
          </article>
        ) : null}
      </div>
    </div>
  );
}
