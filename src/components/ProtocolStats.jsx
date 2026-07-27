import { motion } from 'framer-motion';
import { formatCurrencyAdaptive, formatPercentValue } from '../lib/formatters';
import { useI18n } from '../i18n';

// The Estimated Gain cell moved up to the 58px headline, so it is no longer repeated here:
// three cells, each showing something the headline does not.

// Label above value, and the value carries the weight: 11px against 26–30px is a ratio
// the eye resolves without reading, where the old 11-against-20 left the two competing.
function StatCell({ label, value, valueColor }) {
  return (
    <div className="flex flex-col gap-2">
      <p className="mono text-[11px] uppercase tracking-[0.14em] text-[var(--sx-muted)]">{label}</p>
      <motion.p
        animate={{ color: valueColor }}
        transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
        className="mono text-[26px] font-semibold tracking-[-0.025em] lg:text-[30px]"
      >
        {value}
      </motion.p>
    </div>
  );
}

export default function ProtocolStats({ initialCapital, estimatedValue, appliedRate, isOn }) {
  const { t } = useI18n();
  const initialLabel = formatCurrencyAdaptive(initialCapital, { threshold: 100000 });
  const estimatedLabel = formatCurrencyAdaptive(estimatedValue, { threshold: 100000 });
  const appliedRateLabel = `${formatPercentValue(appliedRate)}`;

  return (
    <div className="mt-8 grid grid-cols-2 gap-x-5 gap-y-7 border-t border-[var(--sx-border)] pt-7 lg:grid-cols-3">
      <StatCell label={t('protocolStats.initialCapital')} value={initialLabel} valueColor="var(--sx-text)" />
      <StatCell label={t('protocolStats.estimatedValue')} value={estimatedLabel} valueColor="var(--sx-text)" />
      <StatCell
        label={t('protocolStats.appliedRate')}
        value={appliedRateLabel}
        valueColor={isOn ? 'var(--sx-primary-bright)' : 'var(--sx-text)'}
      />
    </div>
  );
}
