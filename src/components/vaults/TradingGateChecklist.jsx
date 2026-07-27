import { useI18n } from '../../i18n';
import { Reveal } from '../Reveal';
import Card from '../ui/Card';
import { NotPublishedChip } from '../ui/Markers';

// The four conditions SIP-5B requires before a market moves from Bootstrapping to Live.
// Three are measured against figures the proposal does not publish.
//
// This used to be a full section with four toggleable checkboxes and a live/bootstrapping
// state panel. The interaction taught nothing the list does not — the conditions are a
// conjunction — and the panel reported a market status this page has no market to report.
//
// It closes the liquidation section as a static block, on the same default card surface as
// every other block here. It spent one commit bare on the rule grid, where a block with no
// surface of its own reads as leftover rather than as content.
const CONDITIONS = [
  { id: 'sponsorEquity', notPublished: true },
  { id: 'shieldCapital', notPublished: true },
  { id: 'rewardBudget', notPublished: true },
  { id: 'review', notPublished: false },
];

export default function TradingGateChecklist() {
  const { t } = useI18n();

  return (
    <Reveal delay={0.06}>
      <Card tone="default" padding="lg">
        {/* The site marks a section with one thing: the green tag-pill. This block was
            using the grey mono eyebrow instead, so it read as a different kind of object
            from every other section on the page. */}
        <span className="tag-pill">{t('vaults.gate.eyebrow')}</span>

        <p className="type-body-sm mt-5 max-w-[720px] text-[var(--sx-text-muted)]">
          {t('vaults.gate.description')}
        </p>

        <ol role="list" className="mt-5 flex flex-col divide-y divide-[var(--sx-border-soft)]">
          {CONDITIONS.map((condition, index) => {
            // 01 is the load-bearing one: the Sponsor's own locked equity is what stops a
            // market opening without them, and the other three are checks around it. It
            // reads at body size in full-strength text while 02–04 stay at the muted
            // secondary size, so the list has a first line rather than four equal ones.
            const isLead = index === 0;

            return (
            <li
              key={condition.id}
              className={`flex items-baseline gap-3 first:pt-0 last:pb-0 ${isLead ? 'pb-4 pt-0' : 'py-2.5'}`}
            >
              <span
                className="mono shrink-0 text-[10.5px] uppercase tracking-[0.14em] text-[var(--sx-primary-bright)]"
                aria-hidden="true"
              >
                {String(index + 1).padStart(2, '0')}
              </span>

              {/* Inline flow, not a column: the chip follows the condition text on the same
                  line the way it does beside the rate labels, rather than dropping to a
                  line of its own.
                  The separator is a non-breaking space, so the chip can never be left
                  stranded on a line by itself — it moves with the final word or not at all.
                  A shade smaller than elsewhere, and the measure is capped at 760px to
                  match the description above, which keeps the last line short enough to
                  take it on every locale. */}
              <span
                className={`min-w-0 max-w-[760px] flex-1 leading-[1.7] ${
                  isLead
                    ? 'text-[15px] text-[var(--sx-text)]'
                    : 'text-[13.5px] text-[var(--sx-text-muted)]'
                }`}
              >
                {t(`vaults.gate.conditions.${condition.id}`)}
                {condition.notPublished ? (
                  <>
                    {'\u00A0'}
                    <NotPublishedChip className="align-middle text-[9.5px]" />
                  </>
                ) : null}
              </span>
            </li>
            );
          })}
        </ol>

        {/* Pulled well clear of the list: it qualifies one term inside condition 01, so at
            four points of separation it read as a fifth item. */}
        <div className="hairline mt-8 pt-5">
          <p className="max-w-[760px] text-[12px] leading-[1.58] text-[var(--sx-muted)]">
            {t('vaults.gate.footnote')}
          </p>
        </div>
      </Card>
    </Reveal>
  );
}
