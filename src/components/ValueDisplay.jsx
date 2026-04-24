import { motion } from 'framer-motion';
import { useI18n } from '../i18n';

export default function ValueDisplay({ estimatedValueLabel, yieldPctLabel, isOn }) {
  const { t } = useI18n();

  return (
    <div>
      <p className="mono text-[10px] font-medium uppercase tracking-[0.18em] text-[var(--sx-muted)]">
        {t('valueDisplay.label')}
      </p>

      <div className="mt-2 flex items-end gap-3">
        <motion.span
          animate={{ color: isOn ? 'var(--sx-primary-bright)' : 'var(--sx-text)' }}
          transition={{ duration: 0.4 }}
          className="mono text-[42px] font-semibold leading-none tracking-[-0.025em] sm:text-[58px]"
        >
          {estimatedValueLabel}
        </motion.span>

        <motion.span
          animate={{
            opacity: isOn ? 1 : 0.45,
            color: isOn ? 'var(--sx-primary-bright)' : 'var(--sx-muted)',
          }}
          transition={{ duration: 0.3 }}
          className="mono mb-1 text-[18px] font-medium tracking-[-0.02em]"
        >
          +{yieldPctLabel}
        </motion.span>
      </div>
    </div>
  );
}
