import { useI18n } from '../i18n';
import { Reveal } from './Reveal';
import Card from './ui/Card';
import Chart from './Chart';
import ControlBand from './ControlBand';
import Headline from './Headline';
import MicroCopy from './MicroCopy';
import ProtocolStats from './ProtocolStats';
import RangeSelector from './RangeSelector';
import ScenarioComparison from './ScenarioComparison';
import StatusChip from './StatusChip';
import TrendSignal from './TrendSignal';
import ValueDisplay from './ValueDisplay';

// Controls above, output below, both full width.
//
// The previous two-column split set ~1261px of stacked controls against ~540px of chart
// and stats. That gap is a content imbalance, not a placement problem, so no arrangement
// of the same two columns closed it. Stacking removes it: each band is as tall as its own
// content and nothing is padded out to match a neighbour.

export default function SimulatorView({
  rangeId,
  onRangeChange,
  isSip2On,
  onToggleSip2,
  linePath,
  areaPath,
  endY,
  ticks,
  chartAriaLabel,
  simulated,
  estimatedGainLabel,
  yieldPctLabel,
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
  scenario,
}) {
  const { t } = useI18n();

  return (
    <div className="section-block" data-guide-id="guide-simulator">
      <Reveal as="section" className="flex flex-col gap-8">
        <div className="flex flex-col gap-5">
          <div className="flex flex-wrap items-center gap-3">
            <span className="tag-pill">{t('simulator.tag')}</span>
            <StatusChip isOn={isSip2On} compact />
          </div>
          <Headline />
          {/* Carries the context the DUSD and SIP #3 status cards used to: both run on
              their own, SIP #2 is the layer the reader turns on. */}
          <MicroCopy isOn={isSip2On} />
        </div>

        <div className="flex flex-col items-start justify-between gap-3 border-y border-[var(--sx-border)] py-4 sm:flex-row sm:items-center">
          <p className="type-body-sm text-[var(--sx-muted)]">{t('simulator.rangeHint')}</p>
          <RangeSelector value={rangeId} onChange={onRangeChange} />
        </div>
      </Reveal>

      <Reveal as="section" delay={0.06}>
        <ControlBand
          isSip2On={isSip2On}
          onToggleSip2={onToggleSip2}
          capitalInput={capitalInput}
          capitalError={capitalError}
          onCapitalInputChange={onCapitalInputChange}
          onCapitalInputBlur={onCapitalInputBlur}
          onPresetSelect={onPresetSelect}
          activeCapital={activeCapital}
          baseRateInput={baseRateInput}
          sip2RateInput={sip2RateInput}
          baseRateError={baseRateError}
          sip2RateError={sip2RateError}
          onBaseRateChange={onBaseRateChange}
          onSip2RateChange={onSip2RateChange}
          onBaseRateBlur={onBaseRateBlur}
          onSip2RateBlur={onSip2RateBlur}
        />
      </Reveal>

      <Reveal as="section" delay={0.1}>
        <Card as="article" tone="default" padding="lg" elevated>
          <div className="flex items-start justify-between gap-5">
            <ValueDisplay
              estimatedGainLabel={estimatedGainLabel}
              yieldPctLabel={yieldPctLabel}
              isOn={isSip2On}
            />
            <TrendSignal isOn={isSip2On} />
          </div>

          <Chart
            linePath={linePath}
            areaPath={areaPath}
            endY={endY}
            isOn={isSip2On}
            ticks={ticks}
            ariaLabel={chartAriaLabel}
          />

          <ProtocolStats
            initialCapital={simulated.initialCapital}
            estimatedValue={simulated.estimatedValue}
            appliedRate={simulated.appliedRate}
            isOn={isSip2On}
          />
        </Card>
      </Reveal>

      <Reveal as="section" delay={0.14}>
        <ScenarioComparison
          initialCapital={scenario.initialCapital}
          offEstimatedValue={scenario.offEstimatedValue}
          offEstimatedGain={scenario.offEstimatedGain}
          offYieldPct={scenario.offYieldPct}
          onEstimatedValue={scenario.onEstimatedValue}
          onEstimatedGain={scenario.onEstimatedGain}
          onYieldPct={scenario.onYieldPct}
          isSip2On={isSip2On}
        />
      </Reveal>
    </div>
  );
}
