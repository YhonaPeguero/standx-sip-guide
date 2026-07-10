# Spec: SIP-5 Hierarchy (SIP-5 → SIP-5A / SIP-5B)

Branch: `feat/sip5-hierarchy`

## Objective
Turn SIP-5 from a flat card (`#5 draft`) into a **WIP parent container** that expands to
reveal two staged sub-proposals:

- **SIP-5A — Community Maker Yield** → `live`
- **SIP-5B — (next phase, no official name yet)** → `draft` (coming soon, no doc link)

Success = the SIP-5 card expands to show 5A and 5B with correct status badges, in all 5
locales, with `check-i18n-coverage`, `check-i18n-usage`, `lint`, and `build` all green.

## Tech Stack
React 18 + Vite 5, Tailwind CSS 3, Framer Motion 11. Custom i18n (5 locales: en, es, ko,
ptBR, uk).

## Approach — minimal structural change
`SIP_OVERVIEW` in `src/components/EducationSection.jsx` stays a flat array; the SIP-5 entry
gains an **optional `children` array**. Only the SIP-5 item changes shape; SIP #1–#4 are
untouched.

```js
{
  id: 'sip-5', tag: 'SIP #5', key: 'sip5', status: 'wip',
  href: 'https://docs.standx.com/sip/sip-5-universal-markets-listing',
  children: [
    { id: 'sip-5a', tag: 'SIP #5A', key: 'sip5a', status: 'live',
      href: 'https://docs.standx.com/sip/sip-5a-community-maker-yield' },
    { id: 'sip-5b', tag: 'SIP #5B', key: 'sip5b', status: 'draft', href: null },
  ],
}
```

Render rules (single new branch):
- A card with `children` renders an expand/collapse toggle (`useState` + Framer Motion
  height animation). Sub-cards render **nested inside the parent card**, so the
  `md:grid-cols-3` layout is preserved.
- `STATUS_TONE` gains `wip: 'accent'` (coral, in progress). SIP-5A reuses existing `live`.
- The "Read more" button is **conditional on `href`**: SIP-5B (no doc yet) shows no link.

## Status decision
SIP-5A uses the existing `live` status (no new `implemented` variant) — "Live" already
communicates that it works and avoids an extra translation variant across 5 locales.

## Official names
- SIP-5 (parent): **Universal Markets Listing**
- SIP-5A: **Community Maker Yield**
- SIP-5B: no official name yet → placeholder "Universal Markets — Next Phase", coming soon.

## i18n keys
New keys (added to all 5 locales — coverage script requires identical key sets):
- `education.sipStatus.wip`
- `education.sipCards.sip5a.{title,copy}`
- `education.sipCards.sip5b.{title,copy}`
- `education.showSubProposals`, `education.hideSubProposals`

Modified: `education.sipCards.sip5.{title,copy}` (parent now describes the WIP container).

Translation policy:
- en, es, ptBR: natural translations.
- ko, uk: best-effort, marked `// TODO: needs native review`. Technical terms
  (Maker Hours, yield, order book, mark price, uptime, DUSD/token) kept in English.

## SIP-5A content (summarized from official doc)
First live piece of Universal Markets. Upgrades the Market Maker Uptime Program into a
daily yield: makers quoting two-sided liquidity near the mark price accrue "Maker Hours"
(weighted by price proximity and uptime) and split a daily DUSD/token reward pool, topped
up by recycled trading fees. Protocol acts as standing Market Sponsor. Implemented
2026-06-30, released 2026-07-05.

## Files touched
- `src/components/EducationSection.jsx` — children, STATUS_TONE, expand/collapse render,
  conditional Read more.
- `src/i18n/locales/en.js` / `es.js` / `ko.js` / `ptBR.js` / `uk.js` — new + updated keys.
- `docs/spec-sip5-hierarchy.md` — this spec.

Footer left intact (out of scope for this change).

## Verification
```
node scripts/check-i18n-coverage.mjs   # all 5 locales match
node scripts/check-i18n-usage.mjs      # all t() calls resolve
npm run lint
npm run build
```

## Boundaries
- Always: add every new key to all 5 locales at once; run both i18n checks + lint + build.
- Ask first: touching the Footer; adding dependencies.
- Never: delete other SIPs' keys; break the `grid-cols-3` layout.

## Open Questions
1. SIP-5B official name and doc URL — pending (placeholder + no link for now).
2. ko / uk copy — flagged for native-speaker review.
