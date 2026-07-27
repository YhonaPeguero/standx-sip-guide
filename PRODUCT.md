# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

DeFi traders and the wider StandX community, arriving from links shared in community
channels rather than from a logged-in product. They are evaluating or trying to
understand a specific StandX Improvement Proposal (SIP) — usually one they just saw
referenced — and they read in one of five languages: English, Spanish, Brazilian
Portuguese, Ukrainian, or Korean.

The reader is not an operator completing a task. They arrive with a question, want it
answered without leaving the page, and may or may not already hold a position.

## Product Purpose

A community-built interactive explainer for the StandX SIP system. It turns proposal
documents into something a reader can navigate, simulate, and understand: what each SIP
changes, how DUSD base yield, position yield (SIP-2), DUSD yield expansion (SIP-3), and
the Universal Markets capital layer (SIP-5A/5B) fit together.

Success is a reader who understands a SIP well enough to reason about it, in their own
language, without having read the raw proposal.

## Positioning

Community-built and explicitly not official — the footer states it is "Not affiliated
with the StandX team." That independence is a fact to preserve, not a disclaimer to
minimize: it is why the guide can explain and simulate freely, and why it must never
present itself as a StandX product or imply endorsement.

The mechanism a neighboring explainer could not truthfully copy: every number on screen
is either published in the source SIP, entered by the reader, or explicitly marked
`not published`. Nothing is inferred, extrapolated, or invented to fill a gap.

## Operating Context

- Read in a browser, desktop and mobile, typically in a single visit from a shared link.
- Four surfaces, addressable as `#/<locale>/<tab>`: `overview`, `simulator`, `playbook`,
  `vaults`. The locale travels in the URL and wins over `localStorage`, so a link shared
  in one language opens in that language.
- A 60-second guide overlay is offered on first visit and can be skipped.
- The reader may arrive mid-scroll at a deep-linked section, not at the hero.

## Capabilities and Constraints

- React 18 + Vite + Tailwind + Framer Motion. No backend, no router library, no data
  fetching: the app ships as a static bundle and all content is local.
- Routing is hash-based on purpose — there is no host rewrite config, so a static host
  would 404 on real paths. Consequence to respect: hash fragments never reach the
  server, so per-section link previews are not achievable without prerendering.
- Simulations are illustrative and driven by reader-entered amounts. Two fixed markers,
  identical in every locale, keep the line visible: `Illustrative — user-entered
  amounts, not StandX parameters.` and `not published`.
- The footer already carries `Educational simulation only. Actual results may vary.`
- All copy lives in `src/i18n/locales/` and must stay coverage-complete across the five
  locales (enforced by `scripts/check-i18n-coverage.mjs` and `check-i18n-usage.mjs`).
  Any new UI text is five strings, not one. Domain terms (DUSD, Shield Vault, ADL,
  ReduceOnly) stay in English across locales by existing convention.
- Design tokens are CSS custom properties surfaced through Tailwind under the `sx-`
  namespace (`tailwind.config.js`); component styling goes through those tokens rather
  than raw values.
- ko and uk prose carries `// TODO: needs native review` per existing convention.

## Brand Commitments

- Name: **StandX SIP Guide**. Attribution: "Created by: Thisnotmeme".
- **Voice: precise and sober. Zero hype, zero marketing language.** No superlatives, no
  growth-copy verbs, no urgency. The guide earns trust by being accurate and calm.
- Binding palette constraint stated by the user: **StandX green on black, and the
  current palette is kept.** The goal is more life and contrast from the existing
  colors, not the introduction of new ones.
- The user frames this as brand-facing work — a public explainer, not an internal
  application. Visitor mode and any surface-level strategy belong in a surface brief,
  not here.
- Declared anti-references (recorded as given, not expanded): generic SaaS dashboard,
  purple-gradient AI landing page, nested cards.

## Evidence on Hand

- Source of truth for all SIP content: the official docs at `https://docs.standx.com/sip/`
  (e.g. `sip-5b-community-vault`). Content is transcribed from these documents.
- Real assets: the StandX logo (`src/assets/logo.png`).
- **Absences future work must not fabricate:** there are no testimonials, no customers,
  no usage metrics, no benchmarks, no partnerships, no audit results, and no StandX
  endorsement. There is no published formula for the SIP-5B liquidation fee, and the
  proposal states no maximum number of vault tiers. Where a parameter is unpublished,
  the correct output is the `not published` marker — never a plausible number.

## Product Principles

1. **Published, entered, or marked.** Every figure is traceable to the source document,
   typed by the reader, or labelled `not published`. No inferred numbers, ever.
2. **Independence stays legible.** Community-built, unaffiliated, educational — visible
   without being apologetic.
3. **Understanding over persuasion.** The reader leaves knowing how something works, not
   convinced to do anything. Nothing on the page is a call to trade.
4. **Five languages are one product.** No surface ships in English only; layout and
   typography must survive the longest locale, not just the shortest.
5. **Deep links are first-class.** Any section can be someone's entry point, so each
   must stand on its own without the preceding scroll.

## Accessibility & Inclusion

- Motion respects `prefers-reduced-motion`: the hero ripple animation disables itself.
- Five locales with differing text lengths and scripts (Latin, Cyrillic, Hangul).
- No product-specific certification standard has been established; WCAG AA contrast is
  the working floor.
