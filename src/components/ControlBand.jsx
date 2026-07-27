import CapitalSimulator from './CapitalSimulator';
import RateInputs from './RateInputs';
import Card from './ui/Card';
import Switch from './ui/Switch';
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

export default function ControlBand({
  isSip2On,
  onToggleSip2,
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
    <div className="grid items-start gap-4 lg:grid-cols-3">
      <Card as="section" tone="subtle" padding="md" aria-labelledby="control-capital-heading">
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

      <Card as="section" tone="subtle" padding="md" aria-labelledby="control-rates-heading">
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

      <Card as="section" tone="subtle" padding="md" aria-labelledby="control-sip2-heading">
        <span className="eyebrow" id="control-sip2-heading">
          {t('controlPanel.sip2Label')}
        </span>

        <div className="mt-4 flex items-center justify-between gap-4">
          <span
            className="mono text-[13px] font-semibold uppercase tracking-[0.12em]"
            style={{ color: isSip2On ? 'var(--sx-primary-bright)' : 'var(--sx-muted)' }}
          >
            {isSip2On ? t('toggle.on') : t('toggle.off')}
          </span>
          <Switch
            isOn={isSip2On}
            onChange={onToggleSip2}
            ariaLabel={isSip2On ? t('toggle.ariaOn') : t('toggle.ariaOff')}
          />
        </div>

        <p className="mt-4 text-[12px] leading-[1.58] text-[var(--sx-muted)]">
          {t('controlPanel.sip2Hint')}
        </p>
      </Card>
    </div>
  );
}
