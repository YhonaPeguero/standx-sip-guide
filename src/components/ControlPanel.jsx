import CapitalSimulator from './CapitalSimulator';
import ProtocolStatusList from './ProtocolStatusList';
import RateInputs from './RateInputs';
import ToggleSwitch from './ToggleSwitch';
import Button from './ui/Button';
import { useI18n } from '../i18n';

export default function ControlPanel({
  isSip2On,
  onToggleSip2,
  onLearnHowItWorks,
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
    <aside
      className="border border-[var(--sx-border-strong)] bg-[var(--sx-surface)] p-6 shadow-[var(--sx-shadow-lg)] lg:self-start lg:p-7"
      style={{ borderRadius: 6 }}
    >
      <div className="flex flex-col gap-2 text-center">
        <span className="eyebrow">{t('controlPanel.eyebrow')}</span>
        <h2 className="text-[28px] font-semibold tracking-[-0.025em] text-[var(--sx-text)] sm:text-[30px]">
          {t('controlPanel.title')}
        </h2>
        <p className="text-[14px] leading-[1.6] text-[var(--sx-text-muted)]">
          {t('controlPanel.description')}
        </p>
      </div>

      <ProtocolStatusList className="mt-6" />

      <div className="mt-6 flex flex-col items-center gap-2">
        <span className="mono text-[11px] uppercase tracking-[0.16em] text-[var(--sx-muted)]">
          {t('controlPanel.sip2Label')}
        </span>
        <ToggleSwitch isOn={isSip2On} onChange={onToggleSip2} />
        <p className="mt-1 text-center text-[12px] leading-[1.55] text-[var(--sx-muted)]">
          {t('controlPanel.sip2Hint')}
        </p>
      </div>

      <RateInputs
        baseRateInput={baseRateInput}
        sip2RateInput={sip2RateInput}
        baseRateError={baseRateError}
        sip2RateError={sip2RateError}
        onBaseRateChange={onBaseRateChange}
        onSip2RateChange={onSip2RateChange}
        onBaseRateBlur={onBaseRateBlur}
        onSip2RateBlur={onSip2RateBlur}
        isSip2On={isSip2On}
        className="mt-7"
      />

      <CapitalSimulator
        amountInput={capitalInput}
        amountError={capitalError}
        onInputChange={onCapitalInputChange}
        onInputBlur={onCapitalInputBlur}
        onPresetSelect={onPresetSelect}
        activeAmount={activeCapital}
      />

      <div className="mt-6">
        <Button
          variant="outline"
          size="md"
          fullWidth
          onClick={onLearnHowItWorks}
          iconRight={<span>→</span>}
        >
          {t('controlPanel.learnHowItWorks')}
        </Button>
      </div>
    </aside>
  );
}
