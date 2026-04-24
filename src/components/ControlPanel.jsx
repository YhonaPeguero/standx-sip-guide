import CapitalSimulator from './CapitalSimulator';
import ToggleSwitch from './ToggleSwitch';
import Button from './ui/Button';
import { useI18n } from '../i18n';

export default function ControlPanel({
  isOn,
  onToggle,
  onLearnHowItWorks,
  capitalInput,
  capitalError,
  onCapitalInputChange,
  onCapitalInputBlur,
  onPresetSelect,
  activeCapital,
}) {
  const { t } = useI18n();

  return (
    <aside
      className="border border-[var(--sx-border-strong)] bg-[var(--sx-surface)] p-6 shadow-[var(--sx-shadow-lg)] lg:p-7"
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

      <div className="mt-7 flex justify-center">
        <ToggleSwitch isOn={isOn} onChange={onToggle} />
      </div>

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
