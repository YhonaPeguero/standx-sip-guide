import { useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import { useI18n } from '../../i18n';
import { fromTenths, isTierSetValid, sumTierTenths, toTenths } from '../../lib/vaults';
import { Reveal } from '../Reveal';
import Button from '../ui/Button';
import Card from '../ui/Card';
import SectionHeader from '../ui/SectionHeader';
import { IllustrativeNote } from './VaultLabels';

const MAX_TIERS = 6;
const MIN_TIERS = 1;
const SHARE_PATTERN = /^\d*(\.\d?)?$/;

// Bands start empty: SIP-5B describes bps/depth tiers but publishes no band values, so every
// distance band on screen is the reader's own. Shares start empty too, which puts the one
// documented rule — tiers must sum to exactly 100% — in front of the user immediately.
const createTier = (index) => ({ id: `tier-${index}`, band: '', share: '' });

export default function RewardTierConfigurator() {
  const { t } = useI18n();
  const [tiers, setTiers] = useState(() => [createTier(1), createTier(2), createTier(3)]);
  const [nextId, setNextId] = useState(4);

  const totalTenths = useMemo(() => sumTierTenths(tiers), [tiers]);
  const isValid = isTierSetValid(tiers);
  const total = fromTenths(totalTenths);
  const remaining = fromTenths(100 * 10 - totalTenths);

  const notes = t('vaults.reward.notes');
  const noteItems = Array.isArray(notes) ? notes : [];

  const updateTier = (id, patch) => {
    setTiers((current) => current.map((tier) => (tier.id === id ? { ...tier, ...patch } : tier)));
  };

  const handleShareChange = (id, rawValue) => {
    const value = rawValue.replace(/[%\s]/g, '');

    if (value !== '' && (!SHARE_PATTERN.test(value) || Number(value) > 100)) {
      return;
    }

    updateTier(id, { share: value });
  };

  const addTier = () => {
    if (tiers.length >= MAX_TIERS) {
      return;
    }

    setTiers((current) => [...current, createTier(nextId)]);
    setNextId((value) => value + 1);
  };

  const removeTier = (id) => {
    if (tiers.length <= MIN_TIERS) {
      return;
    }

    setTiers((current) => current.filter((tier) => tier.id !== id));
  };

  return (
    <div className="section-block">
      <Reveal>
        <SectionHeader
          size="lg"
          eyebrow={t('vaults.reward.eyebrow')}
          title={t('vaults.reward.title')}
          description={t('vaults.reward.description')}
        />
      </Reveal>

      <Reveal delay={0.06} className="grid gap-3 lg:grid-cols-[minmax(0,1fr)_320px]">
        <Card tone="default" padding="lg">
          {/* Deliberately no "n of max" counter: SIP-5B publishes no maximum tier count, so
              showing one would put a number on screen the proposal never states. MAX_TIERS
              below is only an editor guard. */}
          <span className="eyebrow">{t('vaults.reward.tiersLabel')}</span>

          <ul className="mt-4 flex flex-col gap-3">
            {tiers.map((tier, index) => (
              <li key={tier.id} className="flex flex-col gap-2 sm:flex-row sm:items-end sm:gap-3">
                <div className="min-w-0 flex-1">
                  <label
                    htmlFor={`${tier.id}-band`}
                    className="mono block text-[10.5px] uppercase tracking-[0.14em] text-[var(--sx-muted)]"
                  >
                    {t('vaults.reward.bandLabel')} {index + 1}
                  </label>
                  <input
                    id={`${tier.id}-band`}
                    type="text"
                    value={tier.band}
                    onChange={(event) => updateTier(tier.id, { band: event.target.value })}
                    placeholder={t('vaults.reward.bandPlaceholder')}
                    className="mono mt-1.5 h-10 w-full border bg-[var(--sx-surface-2)] px-3 text-[13px] text-[var(--sx-text)] outline-none transition-colors duration-200 focus:border-[var(--sx-primary)] focus:bg-[var(--sx-surface-3)]"
                    style={{ borderRadius: 4, borderColor: 'var(--sx-border)' }}
                  />
                </div>

                <div className="w-full sm:w-[132px]">
                  <label
                    htmlFor={`${tier.id}-share`}
                    className="mono block text-[10.5px] uppercase tracking-[0.14em] text-[var(--sx-muted)]"
                  >
                    {t('vaults.reward.shareLabel')}
                  </label>
                  <div className="relative mt-1.5">
                    <input
                      id={`${tier.id}-share`}
                      type="text"
                      inputMode="decimal"
                      value={tier.share}
                      onChange={(event) => handleShareChange(tier.id, event.target.value)}
                      placeholder="0"
                      className="mono h-10 w-full border bg-[var(--sx-surface-2)] pl-3 pr-7 text-[13px] text-[var(--sx-text)] outline-none transition-colors duration-200 focus:border-[var(--sx-primary)] focus:bg-[var(--sx-surface-3)]"
                      style={{ borderRadius: 4, borderColor: 'var(--sx-border)' }}
                    />
                    <span className="mono pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-[12px] text-[var(--sx-muted)]">
                      %
                    </span>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() => removeTier(tier.id)}
                  disabled={tiers.length <= MIN_TIERS}
                  aria-label={`${t('vaults.reward.removeTier')} ${index + 1}`}
                  className="mono h-10 shrink-0 border border-[var(--sx-border)] bg-transparent px-3 text-[12px] text-[var(--sx-muted)] outline-none transition-colors duration-200 hover:text-[var(--sx-text)] disabled:cursor-not-allowed disabled:opacity-40 focus-visible:ring-2 focus-visible:ring-[var(--sx-accent)]/70"
                  style={{ borderRadius: 4 }}
                >
                  ×
                </button>
              </li>
            ))}
          </ul>

          <div className="mt-4">
            <Button
              variant="secondary"
              size="sm"
              onClick={addTier}
              disabled={tiers.length >= MAX_TIERS}
              iconRight={<span aria-hidden="true">+</span>}
            >
              {t('vaults.reward.addTier')}
            </Button>
          </div>

          <div className="hairline mt-6 pt-5">
            {/* Distribution is drawn against a full 100%, so an incomplete set reads as a gap */}
            <div
              className="flex h-3 w-full overflow-hidden border border-[var(--sx-border)]"
              style={{ borderRadius: 3, backgroundColor: 'var(--sx-surface-2)' }}
              aria-hidden="true"
            >
              {tiers.map((tier, index) => (
                <motion.span
                  key={tier.id}
                  animate={{ width: `${Math.min(100, fromTenths(toTenths(tier.share)))}%` }}
                  transition={{ duration: 0.24, ease: [0.22, 1, 0.36, 1] }}
                  style={{
                    backgroundColor:
                      index % 2 === 0 ? 'var(--sx-primary)' : 'rgba(78, 175, 132, 0.55)',
                  }}
                />
              ))}
            </div>

            <div className="mt-3.5 flex flex-wrap items-baseline justify-between gap-2">
              <span className="mono text-[11px] uppercase tracking-[0.14em] text-[var(--sx-muted)]">
                {t('vaults.reward.total')}
              </span>
              <span
                className="mono text-[18px] font-semibold tracking-[-0.02em]"
                style={{ color: isValid ? 'var(--sx-primary-bright)' : 'var(--sx-accent)' }}
              >
                {total.toFixed(1)}% / 100%
              </span>
            </div>

            <p
              aria-live="polite"
              className="mt-2 text-[12.5px] leading-[1.55]"
              style={{ color: isValid ? 'var(--sx-primary-bright)' : 'var(--sx-accent)' }}
            >
              {isValid
                ? t('vaults.reward.valid')
                : t('vaults.reward.blocked', { remaining: remaining.toFixed(1) })}
            </p>

            <div className="mt-4">
              <Button variant="primary" size="md" disabled={!isValid}>
                {isValid ? t('vaults.reward.lockValid') : t('vaults.reward.lockBlocked')}
              </Button>
            </div>
          </div>

          <IllustrativeNote className="mt-5" />
        </Card>

        <Card tone="subtle" padding="md" className="h-full">
          <span className="eyebrow">{t('vaults.reward.rulesLabel')}</span>

          <p className="mt-4 text-[13.5px] font-medium leading-[1.55] text-[var(--sx-text)]">
            {t('vaults.reward.rule')}
          </p>

          <ul className="mt-4 flex flex-col gap-3">
            {noteItems.map((note, index) => (
              <li key={index} className="flex gap-2.5">
                <span
                  className="mt-[7px] h-[5px] w-[5px] shrink-0 rounded-full"
                  style={{ backgroundColor: 'var(--sx-primary-bright)' }}
                  aria-hidden="true"
                />
                <span className="text-[12.5px] leading-[1.58] text-[var(--sx-text-muted)]">
                  {note}
                </span>
              </li>
            ))}
          </ul>
        </Card>
      </Reveal>
    </div>
  );
}
