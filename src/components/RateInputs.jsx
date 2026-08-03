import { MAX_RATE, MIN_RATE } from '../constants/chart';
import { useI18n } from '../i18n';
import { MarkerChip } from './ui/Markers';

// The two rates the reader supplies. The first one is the whole DUSD yield assumption —
// DUSD's existing yield sources with SIP-3's fee routing already inside it — and the second
// is the optional SIP-2 layer. That is why there is no third field: SIP-3 is not a separate
// input, it is part of the first number, and the label says so.
//
// Neither rate is a protocol figure. The SIP specifications define mechanisms, not APYs, so
// each label carries the `not fixed by SIP` chip inline beside it, sized to the label rather
// than shrunk into fine print: the absence of a fixed figure is information, not a
// disclaimer.
//
// Both fields start empty. A prefilled rate would be a number the reader never chose, which
// is the exact failure this screen was rebuilt to remove.

function RateField({
  id,
  label,
  marker,
  description,
  hint,
  error,
  value,
  placeholder,
  disabled,
  onChange,
  onBlur,
}) {
  const errorId = `${id}-error`;
  const descriptionId = description ? `${id}-description` : undefined;
  const hintId = `${id}-hint`;
  // The description explains what the field covers, so it stays in the accessible name-and-
  // description chain whether or not the field is currently in error.
  const describedBy = [error ? errorId : hintId, descriptionId].filter(Boolean).join(' ');

  return (
    <div>
      {/* Inline flow rather than a flex row: the chip follows the label text directly, so it
          stays beside the label instead of wrapping onto a line of its own in a narrow
          column — and it keeps that adjacency in the locales with the longest labels. */}
      <div className="leading-[1.7]">
        <label
          htmlFor={id}
          className="mono text-[11px] uppercase tracking-[0.08em] text-[var(--sx-muted)]"
        >
          {label}
        </label>
        <MarkerChip className="ml-2 align-middle text-[11px]">{marker}</MarkerChip>
      </div>

      {description ? (
        <p
          id={descriptionId}
          className="mt-1.5 text-[12px] leading-[1.5] text-[var(--sx-muted)]"
        >
          {description}
        </p>
      ) : null}

      <div className="relative mt-2">
        <input
          id={id}
          type="text"
          inputMode="decimal"
          value={value}
          disabled={disabled}
          onChange={(event) => onChange(event.target.value)}
          onBlur={onBlur}
          placeholder={placeholder}
          className="mono h-12 w-full border bg-[var(--sx-surface-2)] pl-3 pr-9 text-[18px] font-semibold tracking-[-0.015em] text-[var(--sx-text)] outline-none transition-colors duration-200 focus:bg-[var(--sx-surface-3)] disabled:cursor-not-allowed disabled:opacity-55"
          style={{
            borderRadius: 4,
            borderColor: error ? 'var(--sx-accent)' : 'var(--sx-border)',
          }}
          aria-invalid={Boolean(error)}
          aria-describedby={describedBy}
        />
        <span className="mono pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-[16px] text-[var(--sx-muted)]">
          %
        </span>
      </div>

      {error ? (
        <p id={errorId} className="mt-1.5 text-[12px] text-[var(--sx-accent)]">
          {error}
        </p>
      ) : (
        <p id={hintId} className="mt-1.5 text-[12px] leading-[1.5] text-[var(--sx-muted)]">
          {hint}
        </p>
      )}
    </div>
  );
}

export default function RateInputs({
  baseRateInput,
  sip2RateInput,
  baseRateError,
  sip2RateError,
  onBaseRateChange,
  onSip2RateChange,
  onBaseRateBlur,
  onSip2RateBlur,
  isSip2On,
  headingId,
  className = '',
}) {
  const { t } = useI18n();
  const rangeHint = t('rateInputs.rangeHint', { min: MIN_RATE, max: MAX_RATE });
  const marker = t('rateInputs.notFixedMarker');

  return (
    <div className={className}>
      <span className="eyebrow" id={headingId}>
        {t('rateInputs.eyebrow')}
      </span>

      <div className="mt-3 flex flex-col gap-5">
        <RateField
          id="base-rate"
          label={t('rateInputs.baseLabel')}
          marker={marker}
          description={t('rateInputs.baseHint')}
          hint={rangeHint}
          error={baseRateError}
          value={baseRateInput}
          placeholder={t('rateInputs.placeholder')}
          onChange={onBaseRateChange}
          onBlur={onBaseRateBlur}
        />

        <RateField
          id="sip2-rate"
          label={t('rateInputs.sip2Label')}
          marker={marker}
          hint={isSip2On ? rangeHint : t('rateInputs.sip2DisabledHint')}
          error={sip2RateError}
          value={sip2RateInput}
          placeholder={t('rateInputs.placeholder')}
          disabled={!isSip2On}
          onChange={onSip2RateChange}
          onBlur={onSip2RateBlur}
        />
      </div>

      <p className="mt-4 text-[12px] leading-[1.58] text-[var(--sx-muted)]">
        {t('rateInputs.note')}
      </p>
    </div>
  );
}
