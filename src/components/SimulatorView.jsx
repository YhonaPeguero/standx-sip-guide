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
  return (
    <div className="space-y-10 sm:space-y-12">
      <section className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-end">
        <div className="flex flex-col gap-5">
          <StatusChip isOn={isOn} />
          <Headline />
          <MicroCopy isOn={isOn} />
        </div>

        <div className="self-start lg:self-end">
          <RangeSelector value={rangeId} onChange={onRangeChange} />
        </div>
      </section>

      <section className="grid gap-5 lg:grid-cols-[minmax(0,1fr)_320px]">
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
