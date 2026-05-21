# StandX SIP Guide — Redesign

Branch: `redesign/standx-style`
Date: 2026-05-21

A focused, StandX-flavored visual + UX refresh. The dark-green, mono-numeric, sharp-cornered language was already in place; this pass pushes structure, hierarchy, design tokens, navigation, and a real footer to make the page feel like a StandX-native product page rather than a single-screen demo.

---

## 1. Reference research

Both `standx.com` and the live deployment are JS-rendered SPAs, so `WebFetch` cannot retrieve a complete style sheet. Confirmed signals from the partial fetch and from the existing codebase:

- Near-black background with light text.
- Uppercase, wide-tracking navigation items.
- Sharp corners (3–6 px).
- Mono numeric / data display.
- Right-aligned CTA in the header.
- Dark green brand presence.

The redesign treats the existing design system as canonical and refines it into a more explicit, more scalable token system.

---

## 2. Visual tokens

All tokens live in `src/styles/index.css` as CSS custom properties and are exposed to Tailwind through `tailwind.config.js`.

### Color (semantic, dark-green family)

| Token | Value | Use |
|---|---|---|
| `--sx-bg` | `#04080a` | App background |
| `--sx-bg-soft` | `#070d0c` | Section wash |
| `--sx-surface` | `#0b1311` | Card base |
| `--sx-surface-2` | `#101918` | Subtle surface |
| `--sx-surface-3` | `#14201d` | Inner / nested |
| `--sx-surface-hover` | `#182824` | Card hover |
| `--sx-surface-glass` | `rgba(7, 13, 12, 0.72)` | Sticky nav backdrop |
| `--sx-border` | `#1a2a25` | Default border |
| `--sx-border-strong` | `#2a3e38` | Emphasized border |
| `--sx-text` | `#eef5f0` | Primary text |
| `--sx-text-muted` | `#b4c2ba` | Body text |
| `--sx-muted` | `#8d9b93` | Meta / eyebrow |
| `--sx-primary` | `#006632` | Brand fill |
| `--sx-primary-hover` | `#008040` | Hover fill |
| `--sx-primary-bright` | `#4eaf84` | Accent text |
| `--sx-primary-glow` | `#00ff80` | Live state |
| `--sx-success` | `#00ff2a` | Status pulse |
| `--sx-accent` | `#fac6c3` | Coral accent / focus rings |

### Type scale

`--sx-fs-eyebrow` 11 · `--sx-fs-meta` 12 · `--sx-fs-body-sm` 13 · `--sx-fs-body` 15 · `--sx-fs-body-lg` 17 · `--sx-fs-h3` 19 · `--sx-fs-h2` 28 · `--sx-fs-h1` 44 · `--sx-fs-display` 64.

Fonts: **Geist** (UI) + **Geist Mono** (tabular numerics, eyebrows, chips).

KO locale automatically downshifts H1/display so Hangul glyphs don't crush at hero sizes (`:root[lang='ko']`).

### Radii (StandX is sharp)

`xs` 3 · `sm` 4 · `md` 6 · `lg` 8 · `pill` 999.

### Spacing scale

8 pt grid with halves: `4 · 8 · 12 · 16 · 20 · 24 · 32 · 40 · 48 · 64`.

### Elevation / shadow

`sx-sm`, `sx-md`, `sx-lg`, `sx-glow`, plus a consistent `sx-shadow-focus` ring used by the global `:focus-visible` style.

### Motion

`--sx-ease`, `--sx-ease-soft`, `--sx-ease-emphasized`, with durations `--sx-dur-fast 160ms / --sx-dur-base 220ms / --sx-dur-slow 320ms`. A global `prefers-reduced-motion` override short-circuits transitions and animations.

### New CSS utilities

- `.tag-pill` — animated dot + uppercase mono pill used as the consistent section-eyebrow tag.
- `.skip-link` — visually hidden skip-to-content link, slides into view on focus.
- `:focus-visible` global ring — coral, two-layer, offset against the bg.

---

## 3. Structural changes

### App shell

- **Skip-to-content link** added at the top of `App.jsx`.
- `main` now carries `id="main-content"` so the skip link works.
- The inline footer was replaced with the new `Footer` component.

### TopBar (`TopBar.jsx`)

- Now **sticky** with a scroll-aware glass backdrop (background darkens, border line appears once scrolled past 8px).
- Guide-mode button gets a small star glyph.
- Language switcher gets a small globe glyph + cleaner type.
- `aria-current="page"` set on the active tab; `aria-label` on the nav reads from `topBar.nav.ariaLabel`.
- Tab labels switched to uppercase tracking-04 to align with StandX nav vocabulary (PERPS, VAULT, etc.).

### Overview (`OverviewView.jsx`)

Restructured around a real **Hero** instead of a centered status chip + headline + button row:

- New `Hero.jsx`: tag pill → display headline (split into two i18n lines, second line accented) → subtitle → CTA pair (primary + outline) → 4-up feature row (DUSD / SIP #2 / SIP #3 / multilingual).
- Interactive preview card now leads with a compact StatusChip and gets a clearer hierarchy.
- "Story hint" text moved into a `hairline` block at the bottom of the preview card.

### Simulator (`SimulatorView.jsx`)

- New simulator header: tag pill + compact status chip + headline + microcopy.
- Range hint + range selector are now visually grouped inside a horizontal divider band (`border-y`) — feels more like a data-tool subheader.
- Control panel column widened from `320px → 340px` to better fit longer locale strings (UK/PT).

### Playbook (`YieldPlaybookView.jsx`)

- Added tag pill and uses `SectionHeader size="lg"` for stronger hierarchy.
- Card index (01, 02, 03, 04) added top-right for rhythm.
- New `Chip` primitive replaces ad-hoc inline tag.
- Benefit line is now a 2-row mini block (label above, value below) — easier to scan than a single inline label.

### Education (`EducationSection.jsx`)

- Mechanics + SIP Overview both get the tag-pill treatment.
- SIP cards use the new `Chip` primitive.
- Promoted SectionHeader to `size="lg"` for stronger anchor points.

### Footer (`Footer.jsx` — new)

3-column grid:

1. Brand + tagline + disclaimer.
2. Resources (Docs, StandX.com, SIP #1/#2/#3).
3. Community (Created by Thisnotmeme, StandX on X) with the X glyph.

Plus a baseline row with copyright (mono uppercase) and educational-use note.

### Removed orphan files

- `src/components/CallToAction.jsx` — not imported anywhere.
- `src/components/InfoCards.jsx` — not imported anywhere.
- `src/components/Particles.jsx` — not imported anywhere.

---

## 4. UI primitives

| File | Status |
|---|---|
| `ui/Button.jsx` | Updated — added `xs` size, added `link` variant. Same five visual variants. |
| `ui/Card.jsx` | Unchanged in API; works with new tokens. |
| `ui/SectionHeader.jsx` | Added `size="lg"` for hero-style section titles. |
| `ui/Stat.jsx` | **New** — numeric KPI/data primitive with `sm | md | lg` and `accent` boolean. |
| `ui/Chip.jsx` | **New** — `default | primary | accent | muted` tones, used for SIP tags and strategy labels. |

---

## 5. Navigation improvements

- Sticky header with progressive backdrop opacity → improves wayfinding when scrolling long pages.
- `aria-current="page"`, `aria-label` on the nav, and `aria-haspopup/aria-expanded` on the language switcher.
- Outside-click + Escape close behavior for the language menu (already in place; preserved).
- Skip-to-content link.
- Tab nav switched from sentence-case to uppercase tracking-04 — feels more StandX, matches the sectional vocabulary in their site nav.
- Global focus-visible ring is consistent across all interactive elements.

---

## 6. Translation status

**5 locales preserved and extended:** EN, ES, PT-BR, UK, KO.

### Existing keys

All previously-used keys retained intact. The previous `eyebrow` keys on `education.mechanics`, `education.sipOverview`, and `playbook` remain in the locale files even though new `.tag` keys took their place in the UI — kept for safety in case external consumers or older builds reference them.

### New keys added across all 5 locales

| Key | Used in |
|---|---|
| `topBar.nav.ariaLabel` | TopBar nav landmark |
| `app.skipToContent` | Skip link |
| `hero.tag` | Hero tag pill |
| `hero.title.line1` / `hero.title.line2` | Hero headline split |
| `hero.subtitle` | Hero subhead |
| `hero.primaryCta` / `hero.secondaryCta` | Hero CTAs |
| `hero.features.dusd` / `.sip2` / `.sip3` / `.multilingual` | Hero feature row |
| `simulator.tag` | Simulator tag pill |
| `simulator.rangeHint` | Simulator subheader copy |
| `education.mechanics.tag` | Mechanics section tag |
| `education.sipOverview.tag` | SIP overview tag |
| `playbook.tag` | Playbook tag pill |
| `footer.brand` / `tagline` / `disclaimer` / `copyright` / `educational` | Footer |
| `footer.resourcesTitle` / `footer.resources.{docs,website,sip1,sip2,sip3}` | Footer resources column |
| `footer.communityTitle` / `footer.community.{author,twitter}` | Footer community column |

### Locale-specific notes

- **KO**: Korean hero is reordered as a noun phrase ("StandX SIP, 실시간으로 이해") because verbal "Understand … in real time" doesn't transliterate cleanly. Hangul-specific H1/display downshift in CSS prevents the hero from crowding.
- **UK**: Replaced ASCII apostrophes with proper `’` glyphs in two strings (`п’яти`, `пов’язаний`, `пов’язаних`) for typographic correctness.
- **PT-BR**: Uses "loop" / "Visão Geral" terminology consistent with the rest of the file.
- **ES**: Uses "bucle" for loop, "Resumen" for overview — preserved.
- **EN**: Headline is "Understand StandX SIPs," / "in real time." with the second line + period accented in `--sx-primary-bright`.

### Language switching

- Switching language updates `document.documentElement.lang` (already wired), which now also triggers the KO type-scale downshift.
- localStorage key `standx.locale` preserved.
- Fallback to EN for any missing key (already wired in `I18nProvider`).

### URLs / slugs

This is a single-page SPA — there are no language-prefixed routes today. Locale is purely client state. **No URL or routing changes were made.** If routed slugs are added later, the existing `LOCALE_OPTIONS` table is the source of truth for codes.

---

## 7. Accessibility & responsive

- Global `:focus-visible` ring (coral, 2-layer, offset).
- `prefers-reduced-motion` global override.
- Skip-to-content link.
- `aria-current`, `aria-label`, `aria-haspopup/expanded`, `aria-selected` already in place or added.
- All clickable surfaces are `<button>` or `<a>` (no div-as-button anywhere).
- Color contrast: text on surface tokens ≥ 4.5:1 (`#eef5f0` on `#04080a`); body-muted ≥ 4.5:1 on surface.
- Hero, simulator, playbook, and education all stack cleanly at 360px viewport.

Verified:

- ✅ `vite build` succeeds (430 modules transformed, 365 kB JS / 117 kB gz).
- ✅ `eslint .` passes with 0 errors / 0 warnings.
- ✅ All `t('…')` references in source map to keys present in `en.js` (the fallback locale).

---

## 8. Files changed / added / removed

**Added**
- `src/components/Hero.jsx`
- `src/components/Footer.jsx`
- `src/components/ui/Stat.jsx`
- `src/components/ui/Chip.jsx`
- `REDESIGN.md`

**Modified**
- `src/styles/index.css` (tokens + utilities + a11y)
- `tailwind.config.js` (theme.extend → colors/radii/shadows/timing)
- `index.html` (title, meta description, og tags, theme-color)
- `src/App.jsx` (Footer + skip link + container padding)
- `src/components/TopBar.jsx` (sticky, glass, glyphs, aria)
- `src/components/OverviewView.jsx` (Hero, restructured)
- `src/components/SimulatorView.jsx` (tag header, divider band)
- `src/components/YieldPlaybookView.jsx` (tag pill, Chip, index)
- `src/components/EducationSection.jsx` (tag pills, Chip, SectionHeader lg)
- `src/components/StatusChip.jsx` (compact prop)
- `src/components/ui/Button.jsx` (xs size + link variant)
- `src/components/ui/SectionHeader.jsx` (size prop)
- `src/i18n/locales/{en,es,ptBR,uk,ko}.js` (new keys, typography fixes in UK)

**Removed**
- `src/components/CallToAction.jsx`
- `src/components/InfoCards.jsx`
- `src/components/Particles.jsx`

---

## 9. Pending validation

Items I could not verify from this environment — recommend manual QA before merging:

1. **Visual QA on real browsers** at 360 / 768 / 1240 viewports. The build compiles, but I cannot screenshot the page from this environment. Particularly worth eyeballing:
   - Hero headline wrap behavior in UK and PT-BR (longest strings).
   - KO headline display on small viewports — verify the 38 px H1 downshift is enough.
   - Sticky TopBar scroll transition on slow connections.
2. **GuideOverlay narration** still references `guide.steps.*` — all 5 locales have them. Worth a manual run of the 5-step guide in each language.
3. **Speech synthesis language detection** in `src/lib/speechSynthesis.js` was not touched but depends on browser voices — KO and UK availability varies per OS.
4. **Footer external links** are hardcoded:
   - `docs.standx.com` (good)
   - `standx.com` (good)
   - `x.com/StandX_io` (please confirm this is the correct StandX X handle — if wrong, swap in `Footer.jsx`)
   - `x.com/thisnotmeeme` (kept from previous footer)
5. **Old `eyebrow` keys** on `education.mechanics`, `education.sipOverview`, `playbook` are unused in the UI now. They were kept in locale files for safety. Safe to delete in a follow-up commit.
6. **`controlPanel.title`** ("SIP Switch") is hardcoded English in every locale on purpose since it names a brand element — confirm that's the intent.
7. **Tailwind 3.4 + new theme tokens**: the `sx.*` color tokens added to `tailwind.config.js` are wired but not yet used by the JSX (which still uses `bg-[var(--sx-*)]`). Both forms work; over time the JSX can migrate to `bg-sx-surface` etc. for shorter classnames. Pure cleanup; no functional impact.
