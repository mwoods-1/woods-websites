# Woods Websites - Claude Code Context

## Project Overview

Portfolio website for Woods Websites, a web design business run by two brothers (Sean and Matt Woods). Built with Next.js 16 and Tailwind CSS v4.

## Tech Stack

- **Framework**: Next.js 16.1.6 (App Router)
- **Styling**: Tailwind CSS v4 with CSS custom properties
- **Language**: TypeScript
- **Animation**: Motion (framer-motion) for page transitions, scroll reveals, text reveals, magnetic hover
- **Smooth Scroll**: Lenis
- **Deployment**: Cloudflare Pages (planned)

## Project Structure

```
app/
├── components/
│   ├── Navigation.tsx      # Header with "W" logo, full-screen mobile overlay
│   ├── Footer.tsx          # 3-column footer (server component)
│   ├── CaseStudyCard.tsx   # Portfolio project card with teal glow hover
│   ├── CTASection.tsx      # Call-to-action banner
│   ├── PageHero.tsx        # Animated page hero (client component, Motion)
│   ├── ScrollReveal.tsx    # Scroll-triggered fade-in (Motion whileInView)
│   ├── TextReveal.tsx      # Staggered word-by-word entrance animation
│   ├── MagneticButton.tsx  # Cursor-following hover effect
│   ├── SmoothScroll.tsx    # Lenis smooth scroll wrapper
│   └── WorkshopSection.tsx # Signature scroll-stop animation with floating cards
├── portfolio/page.tsx      # Portfolio showcase
├── services/page.tsx       # Services offered
├── about/page.tsx          # About the team
├── contact/page.tsx        # Contact form
├── privacy/page.tsx        # Privacy policy
├── terms/page.tsx          # Terms of service
├── layout.tsx              # Root layout (fonts, nav, footer, SmoothScroll)
├── template.tsx            # Page transitions (Motion AnimatePresence)
├── page.tsx                # Homepage (hero, workshop, work, services, CTA)
└── globals.css             # Global styles and CSS variables
public/images/              # Portfolio images and assets
```

## Design System

### Typography

- **Unbounded** (`--font-unbounded`): Bold geometric sans-serif for headlines and UI elements. Applied via `font-display` utility.
- **Inter** (`--font-inter`): Clean sans-serif for body text. Set as body default.
- **JetBrains Mono** (`--font-mono`): Monospace for accent text and code.

### Color Palette

Primary accent: **Teal**
- `--teal-500` (#2ec4b6) — Primary accent, CTAs, highlights
- `--teal-400` (#3dd5c7) — Hover states
- `--teal-600` (#1a9e92) — Dark accent variant

Background: **Near-black**
- `--bg` (#050505) — Primary background
- `--bg-alt` (#0d0d0d) — Secondary sections, cards
- `--bg-elevated` (#111111) — Elevated surfaces

Text:
- `--text` (#f0f0f0) — Primary text
- `--text-muted` (#888888) — Body text
- `--text-faint` (#555555) — Secondary/meta text

### Color System Architecture

The color system uses semantic CSS custom properties in `globals.css`. All components use semantic tokens exclusively — no hardcoded color values.

```css
/* Semantic tokens (in :root) */
--accent:       var(--teal-500);
--accent-hover: var(--teal-400);
--accent-fg:    #050505;        /* Text ON accent backgrounds */
--accent-glow:  rgba(46, 196, 182, 0.3);
--border:       rgba(46, 196, 182, 0.15);
--border-hover: rgba(46, 196, 182, 0.4);
```

These are bridged to Tailwind via `@theme inline`, enabling utilities like `bg-accent`, `text-text-muted`, `border-border`, etc.

### How to Rebrand (Full Color Swap)

1. Open `app/globals.css`
2. Update the teal palette values (`--teal-400/500/600`)
3. Update semantic tokens if needed (`--accent-fg`, `--accent-glow`, `--border`, `--border-hover`)
4. All components update automatically

### Design Style

"Editorial Brutalist" — characterized by:
- Large, bold typography with tight leading (line-height ~0.85-0.9)
- Uppercase text with wide letter-spacing for labels
- High contrast (near-black backgrounds, teal accents)
- Scroll-driven animations (Workshop section)
- Minimal geometric accents
- `font-display` utility for Unbounded headlines

## Component Patterns

### Buttons/CTAs

Primary button (use MagneticButton for hover effect):
```tsx
<MagneticButton
  as="a"
  href="/path"
  className="bg-accent text-accent-fg font-display font-bold text-sm uppercase tracking-wider px-8 py-5 hover:bg-accent-hover transition-colors"
>
  Button Text
</MagneticButton>
```

Secondary button:
```tsx
<MagneticButton
  as="a"
  href="/path"
  className="border border-accent text-accent font-display font-bold text-sm uppercase tracking-wider px-8 py-5 hover:bg-accent hover:text-accent-fg transition-colors"
>
  Button Text
</MagneticButton>
```

### Section Labels

```tsx
<p className="font-display text-accent uppercase tracking-[0.3em] text-xs mb-6">
  Section Label
</p>
```

### Section Headers

```tsx
<h2 className="font-display text-5xl md:text-6xl font-black text-[var(--text)] leading-[0.9]">
  HEADLINE<br />TEXT
</h2>
```

### Tags/Pills

```tsx
<span className="font-display px-6 py-4 bg-[var(--bg-alt)] border border-[var(--border)] text-[var(--text-muted)] text-sm uppercase tracking-wider hover:border-[var(--border-hover)] hover:text-accent transition-colors">
  Tag
</span>
```

## Animation System

All animations use **Motion** (framer-motion). No CSS keyframe animations.

- **Page transitions**: `template.tsx` — `AnimatePresence` with fade+slide
- **Scroll reveals**: `ScrollReveal.tsx` — `whileInView` with configurable delay
- **Text reveals**: `TextReveal.tsx` — staggered word-by-word entrance
- **Magnetic hover**: `MagneticButton.tsx` — cursor-following spring physics
- **Workshop scroll-stop**: `WorkshopSection.tsx` — `useScroll`/`useTransform`/`useSpring` with 500vh sticky container
- **Smooth scrolling**: `SmoothScroll.tsx` — Lenis integration
- All animations respect `prefers-reduced-motion`

### Z-Index Strategy

- Content: 0
- Scroll-pinned (Workshop): 10
- Page transitions: 30
- Navigation: 40
- Mobile overlay: 50

## Responsive Breakpoints

Using Tailwind defaults:
- `md:` — 768px (tablets)
- `lg:` — 1024px (desktop)

Max content width: `max-w-[1800px]` with `px-6 md:px-12 lg:px-24` padding.

## Development

```bash
npm run dev      # Start dev server (localhost:3000)
npm run build    # Production build
npm run lint     # Run ESLint
```

## Known Issues / TODOs

- Contact form needs backend implementation (currently logs to console)

## Image Requirements

Portfolio images should be placed in `/public/images/`:
- `aviation-card.jpg`, `svens-card.jpg`, `ovens-card.jpg`, `kingdom-card.jpg` (case study cards)

## Git Workflow

Two collaborators (Sean & Matt). Simple workflow:
1. `git pull` before starting work
2. Make changes
3. `git add .` then `git commit -m "message"`
4. `git push`

Communicate to avoid editing same files simultaneously.
