# Woods Websites - Claude Code Context

## Project Overview

Portfolio website for Woods Websites, a web design business run by two brothers (Sean and Matt Woods). Built with Next.js 16 and Tailwind CSS v4.

## Tech Stack

- **Framework**: Next.js 16.1.6 (App Router)
- **Styling**: Tailwind CSS v4 with CSS custom properties
- **Language**: TypeScript
- **Deployment**: Cloudflare Pages (planned)

## Project Structure

```
app/
├── components/          # Reusable components
│   ├── Navigation.tsx   # Header with mobile menu
│   ├── Footer.tsx       # Site footer
│   └── BeforeAfterSlider.tsx  # Interactive image comparison
├── portfolio/page.tsx   # Portfolio showcase
├── services/page.tsx    # Services offered
├── about/page.tsx       # About the team
├── contact/page.tsx     # Contact form
├── layout.tsx           # Root layout (fonts, nav, footer)
├── page.tsx             # Homepage
└── globals.css          # Global styles and CSS variables
public/images/           # Portfolio images and assets
```

## Design System

### Typography (Actual - differs from README)

- **Unbounded** (`--font-unbounded`): Bold geometric sans-serif for headlines and UI elements
- **Libre Baskerville** (`--font-libre-baskerville`): Elegant serif for body text

Usage pattern:
```tsx
style={{ fontFamily: "var(--font-unbounded)" }}  // Headlines, buttons, labels
// Body text uses Libre Baskerville via the body default
```

### Color Palette

Primary accent: **Amber** (warm gold/orange)
- `amber-500` (#f59e0b) - Primary accent, CTAs, highlights
- `amber-400` - Hover states
- `amber-300` - Gradient highlights

Background: **Zinc** (dark grays)
- `zinc-950` (#09090b) - Primary background
- `zinc-900` - Secondary sections, cards
- `zinc-800` - Borders
- `zinc-400` - Body text on dark backgrounds

Navy colors are defined but sparingly used.

### Design Style

"Editorial Brutalist" - characterized by:
- Large, bold typography with tight leading (line-height ~0.85-0.9)
- Uppercase text with wide letter-spacing for labels
- Geometric accents (lines, squares, rotated elements)
- Grain texture overlays
- High contrast (dark backgrounds, amber accents)
- Asymmetric grid layouts

## Component Patterns

### Buttons/CTAs

Primary button:
```tsx
<Link
  href="/path"
  className="px-8 py-5 bg-amber-500 text-zinc-950 font-bold text-sm uppercase tracking-wider hover:bg-amber-400 transition-all"
  style={{ fontFamily: "var(--font-unbounded)" }}
>
  Button Text
</Link>
```

Secondary button:
```tsx
<Link
  href="/path"
  className="px-8 py-5 border-2 border-white text-white hover:bg-white hover:text-zinc-950 transition-all font-bold text-sm uppercase tracking-wider"
  style={{ fontFamily: "var(--font-unbounded)" }}
>
  Button Text
</Link>
```

### Section Labels

```tsx
<p className="text-amber-500 uppercase tracking-[0.3em] text-xs" style={{ fontFamily: "var(--font-unbounded)" }}>
  Section Label
</p>
```

### Section Headers

```tsx
<h2
  className="text-5xl md:text-7xl font-black text-white leading-[0.9]"
  style={{ fontFamily: "var(--font-unbounded)" }}
>
  HEADLINE<br/>TEXT
</h2>
```

### Tags/Pills

```tsx
<span className="px-4 py-2 bg-zinc-900 border border-zinc-800 text-zinc-400 text-xs uppercase tracking-wider hover:border-amber-500/30 hover:text-amber-500 transition-colors">
  Tag
</span>
```

## Animation Classes

Defined in `globals.css`:
- `.slide-up` - Fade in from below (1.2s duration)
- `.animate-shimmer` - Text gradient animation
- `.animate-pulse-subtle` - Subtle opacity pulse
- `.animate-scroll` - Scroll indicator animation
- `.animate-fadeInUp` - Legacy fade in animation

## Responsive Breakpoints

Using Tailwind defaults:
- `md:` - 768px (tablets)
- `lg:` - 1024px (desktop)

Max content width: `max-w-[1800px]` with `px-8 lg:px-16` padding.

## Development

```bash
npm run dev      # Start dev server (localhost:3000)
npm run build    # Production build
npm run lint     # Run ESLint
```

## Known Issues / TODOs

- Ovens Soccer portfolio item shows "Coming Soon" placeholder
- Contact form needs backend implementation (currently just logs to console)

## Image Requirements

Portfolio images should be placed in `/public/images/`:
- `aviation-before.jpg`, `aviation-after.jpg`
- `svens-before.jpg`, `svens-after.jpg`
- Project screenshots as needed

## Git Workflow

Two collaborators (Sean & Matt). Simple workflow:
1. `git pull` before starting work
2. Make changes
3. `git add .` then `git commit -m "message"`
4. `git push`

Communicate to avoid editing same files simultaneously.
