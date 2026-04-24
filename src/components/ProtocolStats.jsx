import { motion } from 'framer-motion';
import { formatCurrencyAdaptive, formatPercentValue } from '../lib/formatters';
import { useI18n } from '../i18n';

function StatCell({ label, value, valueColor }) {
  return (
    <div className="flex flex-col gap-1.5">
      <p className="mono text-[11px] uppercase tracking-[0.14em] text-[var(--sx-muted)]">{label}</p>
      <motion.p
        animate={{ color: valueColor }}
        transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
        className="mono text-[20px] font-semibold tracking-[-0.02em] lg:text-[22px]"
      >
        {value}
      </motion.p>
    </div>
  );
}

export default function ProtocolStats({ initialCapital, estimatedValue, estimatedGain, yieldPct, isOn }) {
  const { t } = useI18n();
  const initialLabel = formatCurrencyAdaptive(initialCapital, { threshold: 100000 });
  const estimatedLabel = formatCurrencyAdaptive(estimatedValue, { threshold: 100000 });
  const gainLabel = formatCurrencyAdaptive(estimatedGain, { threshold: 100000 });
  const yieldLabel = formatPercentValue(yieldPct);

  return (
    <div className="mt-7 grid grid-cols-2 gap-5 border-t border-[var(--sx-border)] pt-6 lg:grid-cols-4">
      <StatCell label={t('protocolStats.initialCapital')} value={initialLabel} valueColor="var(--sx-text)" />
      <StatCell label={t('protocolStats.estimatedValue')} value={estimatedLabel} valueColor="var(--sx-text)" />
      <StatCell
        label={t('protocolStats.estimatedGain')}
        value={isOn ? `+${gainLabel}` : '$0.00'}
        valueColor={isOn ? 'var(--sx-primary-bright)' : '#839188'}
      />
      <StatCell
        label={t('protocolStats.yieldPct')}
        value={yieldLabel}
        valueColor={isOn ? 'var(--sx-primary-bright)' : 'var(--sx-text)'}
      />
    </div>
  );
}
