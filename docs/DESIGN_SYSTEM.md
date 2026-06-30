# Design System

> Living document. Updated by the `/designer` skill after each design session.
> Source of truth for tokens, patterns, and decisions — if it's here, use it; if you're adding something new, add it here.

---

## App identity

**ForestGan** — forest kindergarten website for parents (prospective and enrolled). Light, warm, nature-inspired aesthetic. The entire visual language must feel welcoming, calm, and connected to nature.

---

## Color tokens

Defined in `src/app/globals.css` as CSS custom properties. **Light theme** (`color-scheme: light`).

| Token | Value | Usage |
|---|---|---|
| `--color-bg` | `#f8f6f2` | Page background — warm cream |
| `--color-surface` | `#ffffff` | Cards, navbar, panels |
| `--color-surface-raised` | `#f0ede6` | Card hover states, subtle fills |
| `--color-border` | `#e0dbd2` | All borders and dividers |
| `--color-text-primary` | `#1e1c18` | Headings and body text |
| `--color-text-secondary` | `#7a746e` | Captions, muted labels |
| `--color-accent` | `#4a7c59` | CTAs, links, focus rings — forest green |
| `--color-accent-dim` | `rgba(74,124,89,0.10)` | Icon badge backgrounds |
| `--color-accent-hover` | `#346045` | Accent on hover |
| `--color-accent-border` | `rgba(74,124,89,0.25)` | Borders on accent-tinted elements |
| `--color-hero-bg` | `#dde8e1` | Hero section background — soft sage |
| `--radius-pill` | `100px` | Full pill shape for badges |

**Contrast ratios (WCAG):**
- `--color-text-primary` (#1e1c18) on `--color-bg` (#f8f6f2): ≈ 15:1 — AAA
- `#ffffff` on `--color-accent` (#4a7c59): ≈ 5.4:1 — AA (used for button text)
- `--color-accent` on `--color-bg`: ≈ 4.8:1 — AA (used for link text)

---

## Spacing scale

Base unit: **4px**. All spacing uses these tokens — no raw px values in components.

| Token | Value | Common use |
|---|---|---|
| `--space-1` | 4px | Tiny gaps (icon + label) |
| `--space-2` | 8px | Tight internal padding |
| `--space-3` | 16px | Default component padding (mobile) |
| `--space-4` | 24px | Default component padding (desktop), card padding |
| `--space-5` | 32px | Section gaps |
| `--space-6` | 48px | Section padding |
| `--space-8` | 64px | Large section separators, section vertical padding |
| `--space-10` | 80px | Hero / page-level padding |

---

## Typography

Fonts loaded via Next.js font system (`var(--font-geist-sans)`). Geist Sans is used throughout — it reads as friendly and modern without being clinical.

| Role | Mobile | Desktop | Weight | Line-height |
|---|---|---|---|---|
| Hero heading (h1) | 40px | 64px | 700 | 1.1 |
| Section heading (h2) | 28px | 36px | 700 | 1.2 |
| Card title (h3) | 18px | 18px | 600 | 1.3 |
| Body / card description | 16px | 16px | 400 | 1.7 |
| Nav links | 15px | 15px | 500 | — |
| Eyebrow labels | 12px | 12px | 600 | — |
| Caption / footer text | 13px | 13px | 400 | 1.5 |

**Eyebrow label style:** `text-transform: uppercase`, `letter-spacing: 0.08em`, `color: var(--color-accent)` — used above section headings and the hero to establish context.

---

## Breakpoints

Mobile-first. All components start at mobile and layer up.

| Name | Min-width | Notes |
|---|---|---|
| mobile | — | Default (no media query) |
| tablet | 768px | Grid columns increase; footer becomes 3-col |
| desktop | 1024px | Typography scales up; intro goes 2-col |

Max content width: **1080px**, centered with `margin: 0 auto`, side padding `var(--space-3)` mobile / `var(--space-4)` tablet+.

---

## Border radius

| Context | Radius | Rationale |
|---|---|---|
| Cards | 16px | Slightly rounder than older dark-theme cards (12px) — signals warmth and friendliness |
| Buttons | 8px | Consistent and actionable |
| Icon badge circles | 12px | Softer, pairs with card radius |
| Navbar | 0 | Full-width strip, no rounding needed |
| Pill badges | 100px (`--radius-pill`) | Full pill for read-only metadata chips |

---

## Interaction states

| State | Pattern |
|---|---|
| Hover (nav links) | `color: var(--color-accent)`, `transition: color 150ms ease` |
| Hover (cards) | `background: var(--color-surface-raised)`, border → `var(--color-accent-border)`, `translateY(-2px)` |
| Hover (primary button) | `background: var(--color-accent-hover)`, `transform: translateY(-1px)` |
| Focus-visible | `outline: 2px solid var(--color-accent)`, `outline-offset: 3px` |
| Reduced motion | Suppress all `transform` transitions; keep color transitions |

Touch targets: minimum **44×44px** on all interactive elements.

---

## Elevation model

No box shadows. Elevation via background color steps:

```
bg → surface → surface-raised
#f8f6f2 → #ffffff → #f0ede6
```

---

## Button spec

**Primary CTA:**
- `background: var(--color-accent)`, `color: #ffffff`, `font-size: 15px`, `font-weight: 600`
- `padding: 12px 28px`, `border-radius: 8px`, `border: none`
- `min-height: 44px`
- Hover: `background: var(--color-accent-hover)`, `transform: translateY(-1px)`
- Focus: `outline: 2px solid var(--color-accent)`, `outline-offset: 3px`
- Use `<a>` styled as button for anchor CTAs; `<button>` only for JS actions

**Secondary / ghost:**
- Text only: `color: var(--color-accent)`, underline on hover — no background

---

## Component inventory

| Component | Location | Status | Notes |
|---|---|---|---|
| ForestNavbar | `src/components/ForestNavbar/` | Stable | Main site nav — site name left, links right |
| ForestHero | `src/components/ForestHero/` | Stable | Full-width sage hero with tagline + CTA |
| ForestIntro | `src/components/ForestIntro/` | Stable | 2-col intro section, image placeholder right |
| ValueCard | `src/components/ValueCard/` | Stable | Icon + title + description card, 16px radius |
| ValuesSection | `src/components/ValuesSection/` | Stable | 4-card grid with section heading |
| ForestFooter | `src/components/ForestFooter/` | Stable | 3-col desktop, stacked mobile |
| Navbar (legacy) | `src/components/Navbar/` | Legacy — do not use | Claude Code portfolio dark theme |
| Footer (legacy) | `src/components/Footer/` | Legacy — do not use | Claude Code portfolio dark theme |
| Hero (legacy) | `src/components/Hero/` | Legacy — do not use | Claude Code portfolio dark theme |
| FeatureCard (legacy) | `src/components/FeatureCard/` | Legacy — do not use | Claude Code portfolio dark theme |
| Features (legacy) | `src/components/Features/` | Legacy — do not use | Claude Code portfolio dark theme |
| TokenCounter (legacy) | `src/components/TokenCounter/` | Legacy — do not use | Claude Code utility |
| Icons (legacy) | `src/components/icons/` | Legacy — do not use | Claude Code portfolio icons |

---

## Eyebrow + heading pattern

Used above every major section and in the hero:
- Eyebrow: 12px 600, `color: var(--color-accent)`, `text-transform: uppercase`, `letter-spacing: 0.08em`, `margin-bottom: var(--space-2)`
- Heading: section heading size, `color: var(--color-text-primary)`
- On section headers: center-align on mobile; keep centered on desktop for full-width sections

---

## Image placeholder pattern

Until real photos are available, image slots use:
- `background: var(--color-surface-raised)`, `border-radius: 16px`, `min-height: 320px`
- Flex-centered content: a leaf emoji 🌿 at 40px + "Photos coming soon" in `--color-text-secondary` 13px
- This signals intent without needing assets

---

## Accessibility contract

- Single `<h1>` per page (hero); section titles are `<h2>`; card titles are `<h3>`
- `<nav aria-label="Main navigation">`
- All interactive elements have visible focus rings (see Interaction states)
- Min touch target: 44×44px
- `<html lang="en">` set in layout.tsx
