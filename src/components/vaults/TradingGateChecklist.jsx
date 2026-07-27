import { useI18n } from '../../i18n';
import { NotPublishedChip } from '../ui/Markers';

// The four conditions SIP-5B requires before a market moves from Bootstrapping to Live.
// Three are measured against figures the proposal does not publish.
//
// This used to be a full section: its own lg SectionHeader, a two-column grid, four
// toggleable checkboxes and a live/bootstrapping state panel that recomputed as the reader
// ticked them. The interaction taught nothing the list does not — the conditions are a
// conjunction, and reading four lines says so as well as clicking four boxes does — while
// the state panel implied a market whose status this page could actually report.
//
// It now rides at the end of the vault types section as a static strip, the same shape as
// the Shield Health escalation ladder inside the liquidation flow.
const CONDITIONS = [
  { id: 'sponsorEquity', notPublished: true },
  { id: 'shieldCapital', notPublished: true },
  { id: 'rewardBudget', notPublished: true },
  { id: 'review', notPublished: false },
];

export default function TradingGateChecklist() {
  const { t } = useI18n();

  return (
    <div className="hairline mt-10 pt-7">
      <span className="eyebrow">{t('vaults.gate.eyebrow')}</span>

      <p className="type-body-sm mt-3.5 max-w-[720px] text-[var(--sx-text-muted)]">
        {t('vaults.gate.description')}
      </p>

      <ol role="list" className="mt-6 flex flex-col divide-y divide-[var(--sx-border-soft)]">
        {CONDITIONS.map((condition, index) => (
          <li key={condition.id} className="flex items-start gap-3.5 py-3.5 first:pt-0 last:pb-0">
            <span
              className="mono mt-[3px] shrink-0 text-[10.5px] uppercase tracking-[0.14em] text-[var(--sx-muted-soft)]"
              aria-hidden="true"
            >
              {String(index + 1).padStart(2, '0')}
            </span>

            <span className="flex min-w-0 flex-1 flex-col gap-1.5">
              <span className="text-[13.5px] leading-[1.56] text-[var(--sx-text-muted)]">
                {t(`vaults.gate.conditions.${condition.id}`)}
              </span>
              {condition.notPublished ? <NotPublishedChip className="self-start" /> : null}
            </span>
          </li>
        ))}
      </ol>

      <p className="mt-5 max-w-[760px] text-[12px] leading-[1.58] text-[var(--sx-muted)]">
        {t('vaults.gate.footnote')}
      </p>
    </div>
  );
}
