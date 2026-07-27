import { motion } from 'framer-motion';
import { useI18n } from '../i18n';
import { IllustrativeNote } from './ui/Markers';

// The 58px figure is the gain, which is what the reader's rates actually produce. It used to
// be `estimatedValue` under the label "Total Yield Generated" — capital plus yield presented
// as the yield.
//
// The illustrative marker sits directly under the figure it qualifies. It used to live at
// 11px in a separate column, so the largest number on the page carried no visible caveat.

export default function ValueDisplay({ estimatedGainLabel, yieldPctLabel, isOn }) {
  const { t } = useI18n();

  return (
    <div className="min-w-0">
      <p className="mono text-[11px] font-medium uppercase tracking-[0.14em] text-[var(--sx-muted)]">
        {t('valueDisplay.label')}
      </p>

      <div className="mt-2 flex flex-wrap items-end gap-x-3 gap-y-1">
        <motion.span
          animate={{ color: isOn ? 'var(--sx-primary-bright)' : 'var(--sx-text)' }}
          transition={{ duration: 0.4 }}
          className="mono text-[34px] font-semibold leading-none tracking-[-0.025em] sm:text-[48px] lg:text-[58px]"
        >
          {estimatedGainLabel}
        </motion.span>

        <motion.span
          animate={{
            opacity: isOn ? 1 : 0.45,
            color: isOn ? 'var(--sx-primary-bright)' : 'var(--sx-muted)',
          }}
          transition={{ duration: 0.3 }}
          className="mono mb-1 text-[16px] font-medium tracking-[-0.02em] sm:text-[18px]"
        >
          +{yieldPctLabel}
        </motion.span>
      </div>

      <IllustrativeNote className="mt-2 max-w-[42ch]" />
    </div>
  );
}
