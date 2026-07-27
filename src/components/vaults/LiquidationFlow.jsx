import { useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import { useI18n } from '../../i18n';
import { formatCurrencyAdaptive } from '../../lib/formatters';
import { splitLiquidation } from '../../lib/vaults';
import { Reveal } from '../Reveal';
import Card from '../ui/Card';
import SectionHeader from '../ui/SectionHeader';
import ShieldHealthStrip from './ShieldHealthStrip';
import { IllustrativeNote, NotPublishedChip } from '../ui/Markers';

const AMOUNT_PATTERN = /^\d*(\.\d{0,2})?$/;

// Order book → Shield Vault → ADL. The Shield Vault takes the position at the liquidation
// price and receives the liquidation fee; ADL is reached only once the capacity reserved for
// that pair is exhausted. The fee is typed in rather than derived: SIP-5B publishes no fee
// formula, only that the vault receives "the corresponding liquidation fee".
const INPUTS = [
  { id: 'positionSize', notPublished: false },
  { id: 'reservedCapacity', notPublished: true },
  { id: 'liquidationFee', notPublished: true },
];

function AmountField({ id, label, value, onChange, notPublished }) {
  return (
    <div>
      <span className="flex flex-wrap items-center gap-2">
        <label
          htmlFor={id}
          className="mono block text-[10.5px] uppercase tracking-[0.14em] text-[var(--sx-muted)]"
        >
          {label}
        </label>
        {notPublished ? <NotPublishedChip /> : null}
      </span>

      <div className="relative mt-1.5">
        <span className="mono pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-[13px] text-[var(--sx-muted)]">
          $
        </span>
        <input
          id={id}
          type="text"
          inputMode="decimal"
          value={value}
          onChange={(event) => onChange(event.target.value)}
          placeholder="0"
          className="mono h-10 w-full border bg-[var(--sx-surface-2)] pl-7 pr-3 text-[13px] text-[var(--sx-text)] outline-none transition-colors duration-200 focus:border-[var(--sx-primary)] focus:bg-[var(--sx-surface-3)]"
          style={{ borderRadius: 4, borderColor: 'var(--sx-border)' }}
        />
      </div>
    </div>
  );
}

function FlowNode({ index, title, copy, active, accent }) {
  return (
    <motion.div
      initial={false}
      animate={{ borderTopColor: active ? accent : 'var(--sx-border-soft)' }}
      transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
      className="subregion flex min-w-0 flex-1 flex-col"
    >
      <div className="flex items-center justify-between gap-2">
        <span
          className="mono text-[10.5px] uppercase tracking-[0.14em]"
          style={{ color: active ? accent : 'var(--sx-muted-soft)' }}
        >
          {String(index).padStart(2, '0')}
        </span>
      </div>
      <h4
        className="mt-2 text-[14.5px] font-semibold leading-[1.3] tracking-[-0.01em]"
        style={{ color: active ? 'var(--sx-text)' : 'var(--sx-muted)' }}
      >
        {title}
      </h4>
      <p className="mt-1.5 text-[12.5px] leading-[1.55] text-[var(--sx-text-muted)]">{copy}</p>
    </motion.div>
  );
}

export default function LiquidationFlow() {
  const { t } = useI18n();
  const [amounts, setAmounts] = useState({
    positionSize: '',
    reservedCapacity: '',
    liquidationFee: '',
  });

  const handleAmountChange = (id, rawValue) => {
    const value = rawValue.replace(/[$,\s]/g, '');

    if (value !== '' && (!AMOUNT_PATTERN.test(value) || value.length > 16)) {
      return;
    }

    setAmounts((current) => ({ ...current, [id]: value }));
  };

  const positionSize = Number(amounts.positionSize) || 0;
  const reservedCapacity = Number(amounts.reservedCapacity) || 0;
  const liquidationFee = Number(amounts.liquidationFee) || 0;

  const outcome = useMemo(
    () => splitLiquidation({ positionSize, reservedCapacity }),
    [positionSize, reservedCapacity],
  );

  const hasPosition = positionSize > 0;
  const reachesAdl = outcome.reachesAdl > 0;

  const results = [
    {
      id: 'absorbed',
      value: formatCurrencyAdaptive(outcome.absorbedByShield),
      accent: outcome.absorbedByShield > 0,
    },
    {
      id: 'fee',
      value: formatCurrencyAdaptive(liquidationFee),
      accent: liquidationFee > 0,
    },
    {
      id: 'remaining',
      value: formatCurrencyAdaptive(outcome.remainingCapacity),
      accent: false,
    },
    {
      id: 'adl',
      value: formatCurrencyAdaptive(outcome.reachesAdl),
      accent: false,
      warn: reachesAdl,
    },
  ];

  return (
    <div className="section-block">
      <Reveal>
        <SectionHeader
          size="lg"
          eyebrow={t('vaults.liquidation.eyebrow')}
          title={t('vaults.liquidation.title')}
          description={t('vaults.liquidation.description')}
        />
      </Reveal>

      <Reveal delay={0.06} className="flex flex-col gap-3">
        <Card tone="default" padding="lg">
          <div className="grid gap-3.5 sm:grid-cols-3">
            {INPUTS.map((input) => (
              <AmountField
                key={input.id}
                id={`liquidation-${input.id}`}
                label={t(`vaults.liquidation.inputs.${input.id}`)}
                value={amounts[input.id]}
                onChange={(value) => handleAmountChange(input.id, value)}
                notPublished={input.notPublished}
              />
            ))}
          </div>

          <div className="mt-9 flex flex-col items-stretch gap-2.5 lg:flex-row lg:items-center">
            <FlowNode
              index={1}
              title={t('vaults.liquidation.nodes.orderBook.title')}
              copy={t('vaults.liquidation.nodes.orderBook.copy')}
              active={hasPosition}
              accent="var(--sx-primary-bright)"
            />
            <span
              className="mono self-center text-[14px] text-[var(--sx-muted)] lg:px-1"
              aria-hidden="true"
            >
              →
            </span>
            <FlowNode
              index={2}
              title={t('vaults.liquidation.nodes.shield.title')}
              copy={t('vaults.liquidation.nodes.shield.copy')}
              active={hasPosition && outcome.absorbedByShield > 0}
              accent="var(--sx-primary-bright)"
            />
            <span
              className="mono self-center text-[14px] text-[var(--sx-muted)] lg:px-1"
              aria-hidden="true"
            >
              →
            </span>
            <FlowNode
              index={3}
              title={t('vaults.liquidation.nodes.adl.title')}
              copy={t('vaults.liquidation.nodes.adl.copy')}
              active={reachesAdl}
              accent="var(--sx-accent)"
            />
          </div>

          {/* Values sit in a fixed-width right-aligned column so changing digits never
              reflow the labels beside them */}
          <dl className="mt-9 grid gap-x-8 gap-y-4 sm:grid-cols-2">
            {results.map((result) => (
              <div
                key={result.id}
                className="flex items-baseline justify-between gap-4 border-b border-[var(--sx-border-soft)] pb-2.5"
              >
                <dt className="text-[12.5px] leading-[1.5] text-[var(--sx-muted)]">
                  {t(`vaults.liquidation.results.${result.id}`)}
                </dt>
                <dd
                  className="mono w-[124px] shrink-0 text-right text-[14px] font-semibold tracking-[-0.01em]"
                  style={{
                    color: result.warn
                      ? 'var(--sx-accent)'
                      : result.accent
                        ? 'var(--sx-primary-bright)'
                        : 'var(--sx-text)',
                  }}
                >
                  {result.value}
                </dd>
              </div>
            ))}
          </dl>

          <p
            aria-live="polite"
            className="mt-7 text-[13.5px] leading-[1.62]"
            style={{ color: reachesAdl ? 'var(--sx-accent)' : 'var(--sx-text-muted)' }}
          >
            {!hasPosition
              ? t('vaults.liquidation.states.idle')
              : reachesAdl
                ? t('vaults.liquidation.states.adl')
                : t('vaults.liquidation.states.covered')}
          </p>

          <div className="hairline mt-7 pt-5">
            <p className="text-[12.5px] leading-[1.58] text-[var(--sx-muted)]">
              {t('vaults.liquidation.isolationNote')}
            </p>
            <IllustrativeNote className="mt-3" />
          </div>

          {/* What happens to the market when that shield coverage falls short */}
          <ShieldHealthStrip />
        </Card>
      </Reveal>
    </div>
  );
}
