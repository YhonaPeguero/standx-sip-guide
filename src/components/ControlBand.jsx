import CapitalSimulator from './CapitalSimulator';
import RateInputs from './RateInputs';
import Card from './ui/Card';
import Switch from './ui/Switch';
import { formatPercentValue } from '../lib/formatters';
import { useI18n } from '../i18n';

// The simulator's controls, as a full-width band above the output.
//
// This was a 340px sidebar running ~1261px tall against ~540px of chart and stats, which
// left an empty rectangle beside it that no two-column distribution could close. Stacking
// the two full-width bands removes the imbalance instead of relocating it.
//
// Order follows what a reader reaches for: capital first, then the rates that act on it,
// then the one bit that decides whether the second rate applies. Three columns on lg, one
// per row below that.
//
// What used to sit here and no longer does: the DUSD and SIP #3 status cards. They are
// explanatory text, not controls — MicroCopy above the band already states that both run
// on their own and that SIP #2 is the layer the reader turns on.

// The three rows the switch actually decides, in the units the reader typed. It duplicates
// nothing: the stats row prints the applied rate as a single figure, this shows how that
// figure is composed, next to the control that composes it — and it gives the shortest
// column real content instead of a stretched frame.
//
// The first row names both layers inside the DUSD rate (`DUSD · Base + SIP-3`) so the
// composition is legible here too, without a SIP-3 row that would imply a third input.
function RateBreakdown({ baseRate, sip2Rate, appliedRate, isSip2On, t }) {
  const rows = [
    { key: 'base', label: t('controlPanel.breakdown.base'), value: formatPercentValue(baseRate) },
    {
      key: 'sip2',
      label: t('controlPanel.breakdown.sip2'),
      value: isSip2On ? `+ ${formatPercentValue(sip2Rate)}` : '—',
      active: isSip2On,
    },
  ];

  return (
    <dl className="mt-6 flex flex-col">
      {rows.map((row) => (
        <div
          key={row.key}
          className="flex items-baseline justify-between gap-3 border-t border-[var(--sx-border-soft)] py-2.5"
        >
          <dt className="mono text-[11px] uppercase leading-[1.5] tracking-[0.12em] text-[var(--sx-muted)]">
            {row.label}
          </dt>
          <dd
            className="mono shrink-0 text-[15px] font-semibold tracking-[-0.015em]"
            style={{ color: row.active ? 'var(--sx-primary-bright)' : 'var(--sx-text)' }}
          >
            {row.value}
          </dd>
        </div>
      ))}

      <div className="flex items-baseline justify-between gap-3 border-t border-[var(--sx-border-strong)] pt-3">
        <dt className="mono text-[11px] uppercase leading-[1.5] tracking-[0.12em] text-[var(--sx-text-muted)]">
          {t('controlPanel.breakdown.applied')}
        </dt>
        <dd
          className="mono shrink-0 text-[22px] font-bold tracking-[-0.025em]"
          style={{ color: isSip2On ? 'var(--sx-primary-bright)' : 'var(--sx-text)' }}
        >
          {formatPercentValue(appliedRate)}
        </dd>
      </div>
    </dl>
  );
}

export default function ControlBand({
  isSip2On,
  onToggleSip2,
  baseRate,
  sip2Rate,
  appliedRate,
  capitalInput,
  capitalError,
  onCapitalInputChange,
  onCapitalInputBlur,
  onPresetSelect,
  activeCapital,
  baseRateInput,
  sip2RateInput,
  baseRateError,
  sip2RateError,
  onBaseRateChange,
  onSip2RateChange,
  onBaseRateBlur,
  onSip2RateBlur,
}) {
  const { t } = useI18n();

  return (
    // Capital is the entry point, so it is the widest column, the strongest frame and the
    // most air. Hierarchy from structure and spacing rather than from a colour the palette
    // does not have.
    <div className="grid items-start gap-4 lg:grid-cols-[1.15fr_1fr_0.9fr]">
      <Card
        as="section"
        tone="raised"
        padding="lg"
        data-guide-id="guide-capital"
        aria-labelledby="control-capital-heading"
      >
        <CapitalSimulator
          headingId="control-capital-heading"
          amountInput={capitalInput}
          amountError={capitalError}
          onInputChange={onCapitalInputChange}
          onInputBlur={onCapitalInputBlur}
          onPresetSelect={onPresetSelect}
          activeAmount={activeCapital}
        />
      </Card>

      <Card
        as="section"
        tone="default"
        padding="md"
        data-guide-id="guide-rates"
        aria-labelledby="control-rates-heading"
      >
        <RateInputs
          headingId="control-rates-heading"
          baseRateInput={baseRateInput}
          sip2RateInput={sip2RateInput}
          baseRateError={baseRateError}
          sip2RateError={sip2RateError}
          onBaseRateChange={onBaseRateChange}
          onSip2RateChange={onSip2RateChange}
          onBaseRateBlur={onBaseRateBlur}
          onSip2RateBlur={onSip2RateBlur}
          isSip2On={isSip2On}
        />
      </Card>

      <Card as="section" tone="default" padding="md" aria-labelledby="control-sip2-heading">
        <span className="eyebrow" id="control-sip2-heading">
          {t('controlPanel.sip2Label')}
        </span>

        {/* The state word is sized like a value, not like a label — it is the one bit this
            column exists to set, so it carries the weight of a figure. */}
        <div className="mt-4 flex items-center justify-between gap-4">
          <span
            className="mono text-[22px] font-bold uppercase leading-none tracking-[-0.01em]"
            style={{ color: isSip2On ? 'var(--sx-primary-bright)' : 'var(--sx-muted-soft)' }}
          >
            {isSip2On ? t('toggle.on') : t('toggle.off')}
          </span>
          <Switch
            isOn={isSip2On}
            onChange={onToggleSip2}
            ariaLabel={isSip2On ? t('toggle.ariaOn') : t('toggle.ariaOff')}
          />
        </div>

        <RateBreakdown
          baseRate={baseRate}
          sip2Rate={sip2Rate}
          appliedRate={appliedRate}
          isSip2On={isSip2On}
          t={t}
        />

        <p className="mt-5 text-[12px] leading-[1.58] text-[var(--sx-muted)]">
          {t('controlPanel.sip2Hint')}
        </p>
      </Card>
    </div>
  );
}
