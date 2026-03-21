# Woods Websites — Full Redesign Spec

**Date**: 2026-03-21
**Status**: Approved
**Scope**: Complete visual overhaul of the Woods Websites portfolio site

---

## 1. Overview

Complete redesign of the Woods Websites portfolio/agency site. The existing Next.js 16 / Tailwind CSS v4 project is retained, but every visual element — colors, typography (partial), layout, navigation, animations, and page designs — is rebuilt from scratch. Content (copy, portfolio data, service descriptions) is preserved from the existing site.

### Goals

- Replace the amber/zinc "Editorial Brutalist" aesthetic with a dark teal/black tech-forward design
- Add smooth scrolling, scroll-triggered animations, scroll-stop pinned sections, and page transitions
- Create a signature "Workshop" scroll-stop animation on the homepage
- Achieve a bold, immersive, Awwwards-quality experience
- Full mobile optimization

### Non-Goals

- Individual case study detail pages (Phase 2, out of scope)
- Backend changes (FormSubmit.co contact form remains)
- New content creation (reuse existing copy)
- Deployment changes (remains static export for Cloudflare Pages)

---

## 2. Brand Identity

### Color Palette

Derived from the Woods Websites logo (dark charcoal + teal/cyan).

**Note**: The existing codebase uses semantic tokens `--surface`, `--accent`, `--foreground`, etc. This redesign **renames** them for clarity. The old names are fully replaced — no dual naming.

| Old Token | New Token | New Value | Usage |
|-----------|-----------|-----------|-------|
| `--surface` | `--bg` | `#050505` | Primary background |
| `--surface-alt` | `--bg-alt` | `#0d0d0d` | Cards, elevated surfaces |
| *(new)* | `--bg-elevated` | `#111111` | Nav bar, browser chrome elements |
| `--accent` | `--accent` | `#2ec4b6` | Primary teal accent, CTAs, highlights |
| `--accent-hover` | `--accent-hover` | `#3dd5c7` | Hover states |
| *(new)* | `--accent-dark` | `#1a9e92` | Pressed/active states |
| *(new)* | `--accent-glow` | `rgba(46,196,182,0.3)` | Glow effects, box-shadows |
| `--accent-fg` | `--accent-fg` | `#050505` | Text on teal backgrounds |
| `--surface-border` | `--border` | `rgba(46,196,182,0.15)` | Subtle borders |
| *(new)* | `--border-hover` | `rgba(46,196,182,0.4)` | Hovered borders |
| `--foreground` | `--text` | `#f0f0f0` | Primary text |
| `--foreground-muted` | `--text-muted` | `#888888` | Body text, descriptions |
| `--foreground-faint` | `--text-faint` | `#555555` | Meta text, timestamps |

### Typography

- **Unbounded** (kept): Headlines, buttons, labels, navigation links. Weights: 400, 600, 700, 900.
- **Inter** (new, replaces Libre Baskerville): Body text, descriptions, form inputs. Weights: 400, 500, 600.
- **JetBrains Mono** (new, accent font): Code snippets, tech labels, monospace accents in The Workshop. Weights: 400, 700.

Font loading via `next/font/google` with CSS variables (`--font-unbounded`, `--font-inter`, `--font-mono`).

### Design Language

- Dark, immersive backgrounds with subtle grid/particle textures
- Teal accent color used sparingly for maximum impact (CTAs, borders, glow effects, labels)
- Clean layouts with generous whitespace
- Sharp corners (no rounded-xl softness — matches bold/tech aesthetic)
- Grain texture overlay retained (subtle)

---

## 3. Animation Stack

### Libraries

| Library | Version | Purpose | Size |
|---------|---------|---------|------|
| **motion** (framer-motion) | latest | Component animations, scroll reveals, page transitions, useScroll/useTransform | ~32KB |
| **gsap** + **@gsap/react** | latest | Complex scroll-pinned timeline (The Workshop section) via ScrollTrigger | ~23KB core |
| **lenis** | latest | Smooth scrolling sitewide | ~5KB |

### Animation Patterns

1. **Lenis Smooth Scroll**: Applied globally via a `SmoothScroll` client component wrapping the app. Uses `autoRaf: true`. Disabled on elements with `data-lenis-prevent`. Respects `prefers-reduced-motion`.

2. **Scroll-Triggered Reveals**: Replace existing `ScrollReveal` component with Motion `whileInView`. Standard reveal: fade up with stagger (`y: 40 → 0`, `opacity: 0 → 1`, staggerChildren: 0.1). Applied to cards, text blocks, grid items.

3. **Page Transitions**: Motion `AnimatePresence` in `template.tsx`. Fade + slide up on enter, fade on exit. Duration: 0.3s.

4. **Scroll-Stop Pinned Sections**: CSS `position: sticky` + Motion `useScroll`/`useTransform` for the Workshop section. Container height 500vh, viewport pinned with scroll-driven animation progress.

5. **Interactive Hovers**: Teal border glow on cards, slight scale (1.02), magnetic pull effect on CTA buttons (cursor-following transform).

6. **Text Animations**: Staggered character/word reveal on hero headlines using Motion variants.

### Reduced Motion

All animations wrapped in a `prefers-reduced-motion` check. When enabled:
- Smooth scrolling disabled (native scroll)
- All entrance animations instant (no delay/duration)
- Scroll-stop sections show final state immediately
- Page transitions disabled

---

## 4. Global Components

### Navigation (`Navigation.tsx`)

**Desktop (>= 768px)**:
- Fixed position, full width
- Left: "W" logo mark in teal (links to `/`)
- Right: Text links — Work, Services, About — in `--text-muted`, hover → `--text`
- Far right: "Contact" as teal-bordered button, hover → filled teal
- On scroll (> 20px): backdrop blur (`backdrop-filter: blur(12px)`), subtle `--bg/80` background, bottom border `--border`
- Font: Unbounded, 0.75rem, uppercase, tracking-wider

**Mobile (< 768px)**:
- Fixed bar: "W" logo left, hamburger icon right (three teal lines)
- Hamburger opens full-screen overlay:
  - Background: `--bg` at 98% opacity with backdrop blur
  - Links stacked vertically, large (2rem+), Unbounded font
  - Staggered entrance animation (Motion, 0.05s per link)
  - "Contact" link styled as teal button at bottom
  - Close button (X) top-right
  - Overlay closes on link click or X

### Footer (`Footer.tsx`)

- Background: `--bg` with top border (`--border`)
- Left column: "W" logo mark + one-line description in `--text-muted`
- Center: Quick nav links (same as header)
- Right: "Let's build something" + email link
- Bottom row: Copyright + Privacy/Terms links
- Teal gradient accent line at top of footer
- Font: Inter for body, Unbounded for any labels

### Page Hero (`PageHero.tsx`)

- Full-width section, ~50vh height
- Teal uppercase label (0.7rem, tracking-widest, Unbounded)
- Large headline (clamp 2.5rem–5rem, Unbounded, weight 900, `--text`)
- Description text with teal left border accent (Inter, `--text-muted`, italic)
- Staggered entrance animation (label → headline → description)
- Subtle grid background pattern

### Smooth Scroll Provider (`SmoothScroll.tsx`)

- Client component
- Initializes Lenis instance
- Provides RAF loop
- Cleans up on unmount
- Wraps `{children}` — placed in root layout

---

## 5. Page Designs

### Homepage (`/` — `page.tsx`)

**Section 1: Hero** (100vh)
- Full viewport dark background with subtle animated grid
- "WOODS" (large, white, Unbounded 900) on one line
- "WEBSITES" (large, teal, Unbounded 900) below
- Tagline: "Web design & development by two brothers" (Inter, `--text-muted`)
- Two CTAs: "View Our Work" (filled teal) + "Get In Touch" (teal border)
- Scroll indicator at bottom (animated bouncing arrow)
- Staggered text reveal animation on load

**Section 2: The Workshop (scroll-stop)** (~500vh scroll distance, pinned 100vh)
- Concept C from the approved prototype
- Monitor/desk scene centered
- 8 tool cards float up and scatter as user scrolls:
  - `{ }` Code, `◆` Design, `▲` Next.js, `◈` Tailwind, `⚡` Speed, `🔒` Security, `📱` Mobile, `🚀` Deploy
- Each card: dark background, colored border accent, icon + label
- Cards emerge from behind the monitor and drift to their final positions
- Final state tagline: "Everything you need, crafted with care"
- **Scroll-to-animation keyframe map** (progress 0.0–1.0 over 500vh):
  - `0.00–0.15`: Monitor/desk fades in, slides up from y:80
  - `0.10–0.25`: Card 1 (Code) emerges, drifts to position
  - `0.15–0.30`: Card 2 (Design) emerges
  - `0.20–0.40`: Card 3 (Next.js) emerges
  - `0.25–0.45`: Card 4 (Tailwind) emerges
  - `0.30–0.50`: Card 5 (Speed) emerges
  - `0.35–0.55`: Card 6 (Security) emerges
  - `0.40–0.60`: Card 7 (Mobile) emerges
  - `0.45–0.65`: Card 8 (Deploy) emerges
  - `0.65–0.80`: All cards settle into final scattered positions (spring ease)
  - `0.75–0.90`: Tagline fades in
  - `0.90–1.00`: Hold final state, then release scroll pin
- On mobile: fewer cards (6 — drop Security and Deploy), tighter scatter, smaller elements

**Section 3: Featured Work** (auto height)
- Teal section label: "SELECTED WORK"
- 2-3 portfolio cards (largest/best projects)
- Cards: project screenshot, title (Unbounded), description (Inter), tech tags
- Hover: image scales, teal border glow, card lifts slightly
- Scroll-revealed with stagger
- "View All Work →" link at bottom

**Section 4: Services Overview** (auto height)
- Teal section label: "WHAT WE DO"
- Bento grid or 3-column grid of service cards
- Each card: icon/symbol, service name (Unbounded), one-line description (Inter)
- Teal top-border accent on each card
- Scroll-revealed with stagger

**Section 5: CTA** (50vh)
- Dark background
- "Let's build something." (large, Unbounded)
- Teal CTA button: "Start a Project"
- Minimal, bold, impactful

### Portfolio (`/portfolio/page.tsx`)

- PageHero: label "PORTFOLIO", headline "OUR WORK"
- Responsive grid: 2 columns desktop, 1 column mobile
- 4 CaseStudyCards (Aviation Expeditions, Sven's Basecamp, Ovens Soccer, Kingdom Property Care)
- Each card uses existing content (title, description, tags, liveUrl, image)
- New visual treatment: dark card bg, teal border on hover, image with overlay gradient
- Tags as teal-bordered pills
- "Visit Live Site →" link with hover animation
- Bottom CTA: "Ready to join them?" section

### Services (`/services/page.tsx`)

- PageHero: label "SERVICES", headline "WHAT WE OFFER"
- 6 service cards in responsive grid (3 cols desktop, 2 tablet, 1 mobile):
  1. Custom Website Design
  2. Website Redesigns
  3. Third-Party Integrations
  4. Performance Optimization
  5. SEO
  6. Ongoing Support
- Each card: icon, title (Unbounded), description (Inter), teal accent
- "How We Work" process section:
  - 4 steps: Discovery → Design → Development → Launch
  - Connected by an animated teal SVG line (vertical `<path>`) that draws via `stroke-dashoffset` driven by Motion `useScroll` progress
  - Each step revealed sequentially as the line reaches it
- "Tech We Use" grid: 8 tech items with subtle hover effects

### About (`/about/page.tsx`)

- PageHero: label "ABOUT", headline "WHO WE ARE"
- Story section: 2-3 paragraphs about Sean and Matt
  - Large pull quote with teal accent border
  - Clean Inter typography
- Values grid: 6 cards (Quality, Communication, Durability, Performance, Mobile, Improvement)
  - Teal accent on each, scroll-revealed with stagger
- Skills section: tag cloud with teal hover glow

### Contact (`/contact/page.tsx`)

- PageHero: label "CONTACT", headline "LET'S TALK"
- Two-column layout (sidebar + form):
  - Left: "Get Started Today" intro, email/response time/consultation info, "What Happens Next" process
  - Right: Form with fields — Name, Email, Phone, Company, Project Type, Budget, Timeline, Message
- Form styling:
  - Dark input backgrounds (`--bg-alt`)
  - Teal border on focus with glow ring
  - Teal submit button (full width)
  - Loading spinner on submit
  - Success/error messages
- Backend: FormSubmit.co (unchanged)
- On mobile: single column, sidebar stacks above form

### Privacy & Terms

- Apply new color scheme and typography
- No structural changes
- Teal accent for links and section headers

---

## 6. Component Architecture

### New Components

| Component | Type | Purpose |
|-----------|------|---------|
| `SmoothScroll.tsx` | Client | Lenis smooth scroll provider |
| `ScrollReveal.tsx` | Client | Motion `whileInView` wrapper (replaces current) |
| `WorkshopSection.tsx` | Client | The Workshop scroll-stop animation |
| `TextReveal.tsx` | Client | Staggered text entrance animation |
| `MagneticButton.tsx` | Client | Cursor-following magnetic hover effect for CTAs |

### Modified Components

| Component | Changes |
|-----------|---------|
| `Navigation.tsx` | Complete rewrite — new design, full-screen mobile overlay |
| `Footer.tsx` | Complete rewrite — new design, teal accents |
| `PageHero.tsx` | Rewrite — new typography, animations, grid background |
| `CaseStudyCard.tsx` | Rewrite — new card design with teal hover effects |
| `CTASection.tsx` | Rewrite — simplified, bold design |

### Page Transitions (`template.tsx`)

`template.tsx` is **kept** (not removed) because Next.js App Router requires it for route-change remounting. It wraps children in Motion `AnimatePresence` + a `motion.div` with enter/exit variants. `layout.tsx` persists across routes and cannot detect navigation — `template.tsx` re-mounts on every route change, which is exactly what AnimatePresence needs.

```
template.tsx → <AnimatePresence mode="wait"><motion.div key={pathname}>{children}</motion.div></AnimatePresence>
```

### File Changes

| File | Action |
|------|--------|
| `globals.css` | Complete rewrite — new color tokens, new animation classes, Lenis styles |
| `layout.tsx` | Update fonts (add Inter, JetBrains Mono), add SmoothScroll provider, update metadata colors |
| `page.tsx` | Complete rewrite — new homepage with 5 sections |
| `portfolio/page.tsx` | Rewrite with new design |
| `services/page.tsx` | Rewrite with new design |
| `about/page.tsx` | Rewrite with new design |
| `contact/page.tsx` | Rewrite with new design, keep FormSubmit.co logic |
| `privacy/page.tsx` | Restyle only |
| `terms/page.tsx` | Restyle only |

---

## 7. Content Mapping

All content is reused from the existing site. No new copywriting needed.

| Content | Source | Destination |
|---------|--------|-------------|
| Portfolio projects (4) | `portfolio/page.tsx` | Same file, new design |
| Service descriptions (6) | `services/page.tsx` | Same file, new design |
| About story + values | `about/page.tsx` | Same file, new design |
| Contact form fields | `contact/page.tsx` | Same file, same backend |
| Stats (50+ projects, etc.) | `page.tsx` | Homepage, possibly in hero or services |
| SEO metadata | All pages | Preserved, update theme-color to teal |
| Structured data (JSON-LD) | `page.tsx` | Preserved |
| Portfolio images | `/public/images/` | Reused |

---

## 8. Mobile Optimization

- All layouts responsive (mobile-first where practical)
- The Workshop: reduced to 6 items, tighter scatter, smaller cards on `< 768px`
- Navigation: hamburger → full-screen overlay
- Typography: `clamp()` for all headline sizes
- Touch targets: minimum 44px
- Cards: single column on mobile
- Form: full-width single column
- Scroll-stop sections: reduced scroll distance on mobile for shorter scroll commitment
- `Lenis` smooth scroll: `syncTouch: false` for native mobile scroll feel

---

## 9. Z-Index Strategy

| Layer | z-index | Element |
|-------|---------|---------|
| Base content | 0 | Page sections, cards |
| Scroll-pinned sections | 10 | Workshop sticky container |
| Page transition overlay | 30 | AnimatePresence motion.div |
| Navigation bar | 40 | Fixed header |
| Mobile nav overlay | 50 | Full-screen menu |

---

## 10. Performance

- **Motion tree-shaking**: Import only used features (`useScroll`, `useTransform`, `motion`, `AnimatePresence`)
- **GSAP**: Only loaded on homepage (The Workshop uses it); other pages use Motion only
- **Images**: Continue using `next/image` with priority on above-fold images
- **Fonts**: `next/font/google` with `display: swap`, subset to latin
- **Static export**: Unchanged, all pages pre-rendered
- **Bundle**: Motion (~32KB) + GSAP core (~23KB) + Lenis (~5KB) = ~60KB total animation overhead (gzipped)
- **LCP target**: < 2.5s
- **CLS target**: 0 (fonts preloaded, images sized)

---

## 11. Accessibility

- Semantic HTML maintained (headings hierarchy, landmarks, `<main>`)
- Skip-to-content link preserved
- Focus-visible: 2px teal outline with offset
- `prefers-reduced-motion`: all animations disabled
- Color contrast: teal on dark passes WCAG AA for large text; body text `#f0f0f0` on `#050505` passes AAA
- Alt text on all images
- Form labels and required field indicators
- Mobile nav overlay: focus trap when open, Escape to close
- ARIA labels on hamburger button, close button

---

## 12. Dependencies

### New packages (already installed)

```
motion        — React animation library
gsap          — Timeline animation engine
@gsap/react   — GSAP React integration
lenis         — Smooth scroll library
```

### New font

```
Inter          — via next/font/google (no package needed)
JetBrains Mono — via next/font/google (no package needed)
```

### Unchanged

```
next 16.1.6, react 19.2.3, tailwindcss 4.x, typescript, sharp, eslint
```

---

## 13. Out of Scope (Future Phases)

- Individual case study detail pages (`/portfolio/[slug]`)
- Blog or insights section
- Dark/light mode toggle (site is dark-only)
- CMS integration
- Backend API for contact form
- Deployment pipeline changes
- Analytics dashboard
