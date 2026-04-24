import { motion } from 'framer-motion';
import { TIME_RANGES } from '../constants/chart';
import { useI18n } from '../i18n';

export default function RangeSelector({ value, onChange }) {
  const { t } = useI18n();

  return (
    <div
      role="radiogroup"
      aria-label={t('rangeSelector.ariaLabel')}
      className="inline-flex gap-1 border border-[var(--sx-border)] bg-[var(--sx-surface-2)] p-1"
      style={{ borderRadius: 6 }}
    >
      {TIME_RANGES.map((range) => {
        const active = range.id === value;

        return (
          <button
            key={range.id}
            type="button"
            onClick={() => onChange(range.id)}
            role="radio"
            aria-checked={active}
            className="mono relative px-3.5 py-2 text-[12px] font-semibold uppercase tracking-[0.14em] transition-colors duration-300 focus:outline-none focus-visible:ring-1 focus-visible:ring-[var(--sx-accent)]/70 sm:px-4"
            style={{
              color: active ? 'var(--sx-text)' : 'var(--sx-muted)',
              borderRadius: 4,
            }}
          >
            {active ? (
              <motion.div
                layoutId="range-indicator"
                className="absolute inset-0"
                style={{
                  borderRadius: 4,
                  background:
                    'linear-gradient(180deg, rgba(0,102,50,0.9) 0%, rgba(0,102,50,0.75) 100%)',
                }}
                transition={{ type: 'spring', stiffness: 450, damping: 32 }}
              />
            ) : null}

            <span className="relative z-10">{range.label}</span>
          </button>
        );
      })}
    </div>
  );
}
