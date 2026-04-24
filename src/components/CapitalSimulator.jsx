import { motion } from 'framer-motion';
import { CAPITAL_PRESETS, MAX_CAPITAL, MIN_CAPITAL } from '../constants/chart';
import { useI18n } from '../i18n';
import { formatCurrencyWhole } from '../lib/formatters';

const PRESET_LABELS = {
  1000: '$1K',
  5000: '$5K',
  10000: '$10K',
  25000: '$25K',
};

export default function CapitalSimulator({
  amountInput,
  onInputChange,
  onInputBlur,
  amountError,
  onPresetSelect,
  activeAmount,
}) {
  const { t } = useI18n();

  return (
    <div className="mt-7 hairline pt-6">
      <span className="eyebrow">{t('capitalSimulator.eyebrow')}</span>

      <div className="mt-3 grid grid-cols-2 gap-2">
        {CAPITAL_PRESETS.map((preset) => {
          const active = Math.abs(activeAmount - preset) < 0.001 && !amountError;

          return (
            <motion.button
              key={preset}
              type="button"
              onClick={() => onPresetSelect(preset)}
              whileHover={{ y: -1, borderColor: 'var(--sx-border-strong)' }}
              whileTap={{ scale: 0.985 }}
              animate={{
                borderColor: active ? 'rgba(0,102,50,0.7)' : 'var(--sx-border)',
                backgroundColor: active ? 'rgba(0,102,50,0.22)' : 'var(--sx-surface-2)',
                color: active ? 'var(--sx-text)' : 'var(--sx-text-muted)',
              }}
              transition={{ duration: 0.18, ease: [0.22, 1, 0.36, 1] }}
              className="mono border px-3 py-2 text-[12px] font-semibold tracking-[0.13em]"
              style={{ borderRadius: 4 }}
            >
              {PRESET_LABELS[preset]}
            </motion.button>
          );
        })}
      </div>

      <div className="mt-4">
        <label
          htmlFor="capital-amount"
          className="mono block text-[11px] uppercase tracking-[0.14em] text-[var(--sx-muted)]"
        >
          {t('capitalSimulator.customAmount')}
        </label>

        <div className="relative mt-2">
          <span className="mono pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-[14px] text-[var(--sx-muted)]">
            $
          </span>
          <input
            id="capital-amount"
            type="text"
            inputMode="decimal"
            value={amountInput}
            onChange={(event) => onInputChange(event.target.value)}
            onBlur={onInputBlur}
            placeholder="10000"
            className="mono h-11 w-full border bg-[var(--sx-surface-2)] pl-7 pr-3 text-[14px] text-[var(--sx-text)] outline-none transition-colors duration-200 focus:border-[var(--sx-primary)] focus:bg-[var(--sx-surface-3)]"
            style={{
              borderRadius: 4,
              borderColor: amountError ? 'rgba(250,198,195,0.6)' : 'var(--sx-border)',
            }}
            aria-invalid={Boolean(amountError)}
            aria-describedby={amountError ? 'capital-input-error' : undefined}
          />
        </div>

        {amountError ? (
          <p id="capital-input-error" className="mt-1.5 text-[12px] text-[var(--sx-accent)]">
            {amountError}
          </p>
        ) : (
          <p className="mt-1.5 text-[12px] text-[var(--sx-muted)]">
            {t('capitalSimulator.rangeHint', {
              min: formatCurrencyWhole(MIN_CAPITAL),
              max: formatCurrencyWhole(MAX_CAPITAL),
            })}
          </p>
        )}
      </div>

      <p className="mt-4 text-[12px] leading-[1.58] text-[var(--sx-muted)]">
        {t('capitalSimulator.note')}
      </p>
    </div>
  );
}
