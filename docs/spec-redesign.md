# Spec: Redesign (navigation + premium refinement)

Branch: `feat/sip5-hierarchy` (redesign builds on top of the SIP-5 work).

## Context
The app is a 3-tab SPA (`overview` · `simulator` · `playbook`) with a sticky `TopBar`
holding the tab nav + active indicator. User feedback:
1. Navigation: "I don't know where I am or how to get back." — the Overview tab is long and
   the only nav lives at the top (out of thumb reach on mobile).
2. Aesthetics: "It doesn't feel fluid or premium."

Priority: **mobile-first**. Keep the current palette + minimalism — refine, don't replace.
Premium comes from hierarchy, spacing, typography, and microinteractions, not new colors.

## Phased delivery (review between each phase)

### Phase 1 — Audit (diagnosis only) ✅ delivered in chat
Sections inventory, why the user gets lost (top-only nav, weak active state, single-level
nav, no back-to-top affordance), and why it doesn't feel premium (type scale hardcoded not
tokenized → flat hierarchy; inconsistent vertical rhythm across tabs; hand-rolled cards +
3 chip variants; scattered non-orchestrated motion; high density of muted 13–14px text).

### Phase 2 — Navigation (mobile-first) ← THIS PHASE
Objective: on mobile the user always knows where they are and can get back with the thumb.
- New `BottomNav` fixed bar, mobile only (`< sm`): 3 items, **icon + label**, strong active
  state, own `layoutId` (`bottomnav-indicator`), `env(safe-area-inset-bottom)`.
- TopBar keeps brand + language + guide; its tab `<nav>` row becomes `hidden sm:flex`
  (kept on desktop, hidden on mobile to avoid duplicate nav).
- Tapping the active bottom-nav item scrolls to top (reuses existing `handleTabChange`).
- Main gets extra bottom padding on mobile so content clears the fixed bar.
- Phase 2B (in-tab scroll-spy for Overview): OUT of core — revisit after Phase 2.
- i18n: reuses `topBar.nav.overview/simulator/playbook` → **no new keys**.

Files touched:
- `src/components/BottomNav.jsx` (new)
- `src/App.jsx` (render BottomNav, main bottom padding)
- `src/components/TopBar.jsx` (tab nav row → `hidden sm:flex`)
- `src/styles/index.css` (safe-area util if needed)

### Phase 3 — Premium refinement (NOT STARTED)
Typography hierarchy (tokenize sizes, bolder hero display, less mid-range muted text),
unified vertical rhythm, component consolidation (Card + chips/eyebrows), orchestrated
tab-enter stagger + scroll-reveal, hero as the single signature moment. Palette + fonts
unchanged (Geist + Geist Mono). Visual-only → no i18n changes.

## Boundaries
- Always: reuse existing i18n keys; run both i18n checks + lint + build each phase; keep
  SIP-5 expand and all 5 locales intact.
- Ask first: adding fonts/colors/dependencies; Phase 2B scroll-spy.
- Never: break the 5-locale parity; break SIP-5.

## Verification (per phase)
```
node scripts/check-i18n-coverage.mjs
node scripts/check-i18n-usage.mjs
npm run lint
npm run build
```
Plus manual check: mobile tab switching from the bottom bar, clear active state, back-to-top.
