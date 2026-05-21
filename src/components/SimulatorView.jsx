import { useI18n } from '../i18n';
import Chart from './Chart';
import ControlPanel from './ControlPanel';
import Headline from './Headline';
import MicroCopy from './MicroCopy';
import ProtocolStats from './ProtocolStats';
import RangeSelector from './RangeSelector';
import ScenarioComparison from './ScenarioComparison';
import StatusChip from './StatusChip';
import TrendSignal from './TrendSignal';
import ValueDisplay from './ValueDisplay';

export default function SimulatorView({
  rangeId,
  onRangeChange,
  isOn,
  onToggle,
  linePath,
  areaPath,
  endY,
  markers,
  simulated,
  estimatedValueLabel,
  yieldPctLabel,
  capitalInput,
  capitalError,
  onCapitalInputChange,
  onCapitalInputBlur,
  onPresetSelect,
  activeCapital,
  onLearnHowItWorks,
  scenario,
}) {
  const { t } = useI18n();

  return (
    <div className="space-y-10 sm:space-y-14" data-guide-id="guide-simulator">
      <section className="flex flex-col gap-6">
        <div className="flex flex-col gap-4">
          <div className="flex flex-wrap items-center gap-3">
            <span className="tag-pill">{t('simulator.tag')}</span>
            <StatusChip isOn={isOn} compact />
          </div>
          <Headline />
          <MicroCopy isOn={isOn} />
        </div>

        <div className="flex flex-col items-start justify-between gap-3 border-y border-[var(--sx-border)] py-4 sm:flex-row sm:items-center">
          <p className="text-[13px] leading-[1.5] text-[var(--sx-muted)]">
            {t('simulator.rangeHint')}
          </p>
          <RangeSelector value={rangeId} onChange={onRangeChange} />
        </div>
      </section>

      <section className="grid gap-5 lg:grid-cols-[minmax(0,1fr)_340px]">
        <div className="space-y-5">
          <article
            className="border border-[var(--sx-border)] bg-[var(--sx-surface)] p-6 shadow-[var(--sx-shadow-lg)] sm:p-8"
            style={{ borderRadius: 6 }}
          >
            <div className="flex items-start justify-between gap-5">
              <ValueDisplay
                estimatedValueLabel={estimatedValueLabel}
                yieldPctLabel={yieldPctLabel}
                isOn={isOn}
              />
              <TrendSignal isOn={isOn} />
            </div>

            <Chart linePath={linePath} areaPath={areaPath} endY={endY} isOn={isOn} markers={markers} />

            <ProtocolStats
              initialCapital={simulated.initialCapital}
              estimatedValue={simulated.estimatedValue}
              estimatedGain={simulated.estimatedGain}
              yieldPct={simulated.yieldPct}
              isOn={isOn}
            />

            <ScenarioComparison
              initialCapital={scenario.initialCapital}
              onEstimatedValue={scenario.onEstimatedValue}
              onEstimatedGain={scenario.onEstimatedGain}
              onYieldPct={scenario.onYieldPct}
              isOn={isOn}
            />
          </article>
        </div>

        <ControlPanel
          isOn={isOn}
          onToggle={onToggle}
          onLearnHowItWorks={onLearnHowItWorks}
          capitalInput={capitalInput}
          capitalError={capitalError}
          onCapitalInputChange={onCapitalInputChange}
          onCapitalInputBlur={onCapitalInputBlur}
          onPresetSelect={onPresetSelect}
          activeCapital={activeCapital}
        />
      </section>
    </div>
  );
}
