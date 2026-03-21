# Woods Websites Redesign — Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Complete visual overhaul of the Woods Websites portfolio site — new teal/black color scheme, Motion + Lenis animations, Workshop scroll-stop section, all pages redesigned.

**Architecture:** In-place rewrite of the existing Next.js 16 / Tailwind CSS v4 site. All content (copy, images, metadata, form logic) is preserved. Every visual element is rebuilt: colors, typography, animations, layouts, components. Static export for Cloudflare Pages is unchanged.

**Tech Stack:** Next.js 16.1.6, React 19, Tailwind CSS v4, Motion (framer-motion), GSAP + ScrollTrigger, Lenis smooth scroll, TypeScript.

**Spec:** `docs/superpowers/specs/2026-03-21-woods-websites-redesign-design.md`

---

## File Map

### New Files
| File | Purpose |
|------|---------|
| `app/components/SmoothScroll.tsx` | Lenis smooth scroll provider (client component) |
| `app/components/ScrollReveal.tsx` | Motion `whileInView` wrapper (replaces existing IntersectionObserver version) |
| `app/components/TextReveal.tsx` | Staggered word/line entrance animation |
| `app/components/MagneticButton.tsx` | Cursor-following hover effect for CTAs |
| `app/components/WorkshopSection.tsx` | The Workshop scroll-stop pinned animation |
| `app/components/ProcessTimeline.tsx` | Animated SVG process line for services page (client component) |

### Rewritten Files (complete replacement)
| File | Key Changes |
|------|-------------|
| `app/globals.css` | New teal color tokens (keep amber bridge until Task 20), Lenis styles, new focus/scrollbar/selection styles |
| `app/layout.tsx` | Replace Libre Baskerville with Inter + JetBrains Mono, add SmoothScroll provider |
| `app/template.tsx` | Motion AnimatePresence page transitions (replaces CSS animation) |
| `app/components/Navigation.tsx` | New design: "W" logo, teal accents, full-screen mobile overlay with Motion |
| `app/components/Footer.tsx` | New teal design, gradient accent line |
| `app/components/PageHero.tsx` | New typography, grid background, staggered Motion entrance |
| `app/components/CaseStudyCard.tsx` | New card design with teal hover glow effects |
| `app/components/CTASection.tsx` | Simplified dark + teal design |
| `app/page.tsx` | 5-section homepage: Hero, Workshop, Featured Work, Services, CTA |
| `app/portfolio/page.tsx` | New design, preserve project data |
| `app/services/page.tsx` | New design with animated process line, preserve content |
| `app/about/page.tsx` | New design, preserve story/values/skills content |
| `app/contact/page.tsx` | New design, preserve FormSubmit.co form logic exactly |

### Restyle Only
| File | Changes |
|------|---------|
| `app/privacy/page.tsx` | Replace `amber-` → teal classes, `zinc-` → new bg classes |
| `app/terms/page.tsx` | Same as privacy |

### Deleted After Rewrite
| File | Reason |
|------|--------|
| `app/prototype/page.tsx` | Prototype page, no longer needed |

---

## Task Ordering

Tasks are ordered by dependency. Each task produces a committable, non-breaking state.

```
Task 1: globals.css         ─┐
Task 2: layout.tsx           ├── Foundation (must be first)
Task 3: template.tsx         │
Task 4: SmoothScroll.tsx    ─┘
Task 5: ScrollReveal.tsx    ─┐
Task 6: TextReveal.tsx       ├── Utility components
Task 7: MagneticButton.tsx  ─┘
Task 8: Navigation.tsx      ─┐
Task 9: Footer.tsx           ├── Global shell (visible on every page)
Task 10: PageHero.tsx        │
Task 11: CTASection.tsx      │
Task 12: CaseStudyCard.tsx  ─┘
Task 13: WorkshopSection.tsx ── Signature animation
Task 14: Homepage           ── Main page (depends on Workshop + all components)
Task 15: Portfolio page     ─┐
Task 16: Services page       ├── Subpages (can be parallelized)
Task 17: About page          │
Task 18: Contact page       ─┘
Task 19: Privacy & Terms    ── Restyle
Task 20: Cleanup & verify   ── Remove prototype, final check
```

---

## Task 1: Rewrite `globals.css`

**Files:**
- Rewrite: `app/globals.css`

- [ ] **Step 1: Replace globals.css with new color system and base styles**

The entire file is rewritten. Key changes:
- Add teal primitive palette (`--teal-*`) and semantic tokens (`--bg`, `--accent`, `--text`, etc.)
- **Keep amber `@theme inline` bridge** so existing amber-* classes still work during transition (removed in Task 20)
- Add teal + semantic tokens to `@theme inline` so `bg-accent`, `text-text-muted`, `border-border`, etc. work in Tailwind
- Keep body font as `var(--font-libre-baskerville)` for now (updated to Inter in Task 2)
- Update scrollbar, selection, and focus-visible to use teal
- Remove old animation keyframes (slide-up, shimmer, pulse-subtle, scroll, page-enter, fadeInUp, scroll-reveal classes) — these are replaced by Motion
- Keep `@utility font-display` and `@utility prose-width`
- Add Lenis base styles: `html.lenis { height: auto; } .lenis.lenis-smooth { scroll-behavior: auto; }`
- Keep `prefers-reduced-motion` block but update for Lenis
- Keep grain texture as a CSS custom property for reuse

```css
@import "tailwindcss";

:root {
  /* Teal palette */
  --teal-400: #3dd5c7;
  --teal-500: #2ec4b6;
  --teal-600: #1a9e92;

  /* Semantic tokens */
  --bg:           #050505;
  --bg-alt:       #0d0d0d;
  --bg-elevated:  #111111;
  --accent:       var(--teal-500);
  --accent-hover: var(--teal-400);
  --accent-dark:  var(--teal-600);
  --accent-glow:  rgba(46, 196, 182, 0.3);
  --accent-fg:    #050505;
  --border:       rgba(46, 196, 182, 0.15);
  --border-hover: rgba(46, 196, 182, 0.4);
  --text:         #f0f0f0;
  --text-muted:   #888888;
  --text-faint:   #555555;

  /* Grain texture data URI */
  --grain: url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E");
}

@theme inline {
  /* Teal semantic tokens */
  --color-accent:       var(--accent);
  --color-accent-hover: var(--accent-hover);
  --color-accent-dark:  var(--accent-dark);
  --color-accent-fg:    var(--accent-fg);
  --color-bg:           var(--bg);
  --color-bg-alt:       var(--bg-alt);
  --color-bg-elevated:  var(--bg-elevated);
  --color-border:       var(--border);
  --color-border-hover: var(--border-hover);
  --color-text:         var(--text);
  --color-text-muted:   var(--text-muted);
  --color-text-faint:   var(--text-faint);

  /* Keep amber bridge for backward compat during transition (removed in Task 20) */
  --color-amber-50: #fffbeb;
  --color-amber-100: #fef3c7;
  --color-amber-200: #fde68a;
  --color-amber-300: #fcd34d;
  --color-amber-400: #fbbf24;
  --color-amber-500: #f59e0b;
  --color-amber-600: #d97706;
  --color-amber-700: #b45309;
  --color-amber-800: #92400e;
  --color-amber-900: #78350f;
  --color-zinc-*: initial; /* Keep zinc utilities working */
}

* { margin: 0; padding: 0; box-sizing: border-box; }

body {
  background: var(--bg);
  color: var(--text);
  font-family: var(--font-libre-baskerville); /* Updated to var(--font-inter) in Task 2 */
  font-size: clamp(1rem, 0.5vw + 0.875rem, 1.125rem);
  line-height: 1.6;
  overflow-x: hidden;
}

/* Lenis smooth scroll */
html.lenis { height: auto; }
.lenis.lenis-smooth { scroll-behavior: auto; }
.lenis.lenis-smooth [data-lenis-prevent] { overscroll-behavior: contain; }

::selection { background: var(--accent); color: var(--accent-fg); }

::-webkit-scrollbar { width: 6px; }
::-webkit-scrollbar-track { background: var(--bg-alt); }
::-webkit-scrollbar-thumb { background: var(--accent); border-radius: 0; }
::-webkit-scrollbar-thumb:hover { background: var(--accent-hover); }

@utility font-display { font-family: var(--font-unbounded); }
@utility prose-width { max-width: 65ch; }

:focus-visible {
  outline: 2px solid var(--accent);
  outline-offset: 3px;
}

@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    transition-delay: 0ms !important;
  }
  html { scroll-behavior: auto; }
  .lenis { scroll-behavior: auto !important; }
}
```

- [ ] **Step 2: Verify the dev server compiles without errors**

Run: `curl -s -o /dev/null -w "%{http_code}" http://localhost:3456/` (should return 200, page may look broken until components are updated — that's expected)

- [ ] **Step 3: Commit**

```bash
git add app/globals.css
git commit -m "feat: rewrite globals.css with teal color system and Lenis styles"
```

---

## Task 2: Update `layout.tsx`

**Files:**
- Rewrite: `app/layout.tsx`

- [ ] **Step 1: Replace fonts and update layout**

Key changes:
- Remove `Libre_Baskerville` import, add `Inter` and `JetBrains_Mono` from `next/font/google`
- Update CSS variable names: `--font-inter`, `--font-mono`
- Keep `Unbounded` as-is
- **Update `globals.css` body font**: change `var(--font-libre-baskerville)` → `var(--font-inter)`
- Update skip-to-content link: `bg-amber-500` → `bg-accent`, `text-zinc-950` → `text-accent-fg`
- Import and wrap children with `SmoothScroll` (will be created in Task 4 — import but don't wrap yet, add a TODO comment)
- Keep Navigation, Footer, Script, metadata structure
- Update metadata theme-color if present

```tsx
import type { Metadata } from "next";
import { Unbounded, Inter, JetBrains_Mono } from "next/font/google";
import Script from "next/script";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import "./globals.css";

const unbounded = Unbounded({
  subsets: ["latin"],
  weight: ["400", "600", "700", "900"],
  display: "swap",
  variable: "--font-unbounded",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
  variable: "--font-inter",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
  variable: "--font-mono",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://woodswebsites.com"),
  title: {
    default: "Woods Websites - Custom Web Design & Development",
    template: "%s | Woods Websites",
  },
  description:
    "Professional web design and development by two brothers who build fast, stunning websites tailored to your business.",
  keywords:
    "web design, web development, custom websites, platform integrations, website optimization, Cloudflare",
  openGraph: {
    title: "Woods Websites - Custom Web Design & Development",
    description:
      "Professional web design services that transform your online presence",
    url: "https://woodswebsites.com",
    siteName: "Woods Websites",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/images/og-default.jpg",
        width: 1200,
        height: 630,
        alt: "Woods Websites - Web Design That Works",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    images: ["/images/og-default.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${unbounded.variable} ${inter.variable} ${jetbrainsMono.variable}`}>
      <body className="antialiased">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-accent focus:text-accent-fg focus:font-bold focus:text-sm focus:uppercase focus:tracking-wider"
        >
          Skip to content
        </a>
        <Navigation />
        <main id="main-content" className="min-h-screen">
          {children}
        </main>
        <Footer />
        {process.env.NEXT_PUBLIC_CF_ANALYTICS_TOKEN && (
          <Script
            defer
            src="https://static.cloudflareinsights.com/beacon.min.js"
            data-cf-beacon={`{"token": "${process.env.NEXT_PUBLIC_CF_ANALYTICS_TOKEN}"}`}
            strategy="afterInteractive"
          />
        )}
      </body>
    </html>
  );
}
```

Note: SmoothScroll wrapper is added in Task 4 after the component is created.

- [ ] **Step 2: Verify dev server compiles**

- [ ] **Step 3: Commit**

```bash
git add app/layout.tsx
git commit -m "feat: update layout with Inter + JetBrains Mono fonts, teal skip-link"
```

---

## Task 3: Rewrite `template.tsx` with Motion page transitions

**Files:**
- Rewrite: `app/template.tsx`

- [ ] **Step 1: Replace CSS animation with Motion AnimatePresence**

Note: z-index 30 per spec z-index strategy. Reduced motion is handled by the `prefers-reduced-motion` CSS in globals.css which sets `transition-duration: 0.01ms` — Motion's JS animations also need handling. Use `useReducedMotion()` from Motion to conditionally disable.

```tsx
"use client";

import { motion, AnimatePresence, useReducedMotion } from "motion/react";
import { usePathname } from "next/navigation";

export default function Template({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const reducedMotion = useReducedMotion();

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={pathname}
        className="relative z-30"
        initial={reducedMotion ? false : { opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        exit={reducedMotion ? undefined : { opacity: 0 }}
        transition={{ duration: reducedMotion ? 0 : 0.3, ease: [0.16, 1, 0.3, 1] }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}
```

- [ ] **Step 2: Verify page transitions work** — navigate between pages in browser, should see fade+slide

- [ ] **Step 3: Commit**

```bash
git add app/template.tsx
git commit -m "feat: add Motion page transitions in template.tsx"
```

---

## Task 4: Create `SmoothScroll.tsx` and wire into layout

**Files:**
- Create: `app/components/SmoothScroll.tsx`
- Modify: `app/layout.tsx` (add SmoothScroll wrapper)

- [ ] **Step 1: Create SmoothScroll component**

```tsx
"use client";

import { useEffect } from "react";
import Lenis from "lenis";

export default function SmoothScroll({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) return;

    const lenis = new Lenis({
      autoRaf: true,
      syncTouch: false,
    });

    return () => {
      lenis.destroy();
    };
  }, []);

  return <>{children}</>;
}
```

- [ ] **Step 2: Add SmoothScroll to layout.tsx**

Wrap `{children}` (inside `<main>`) with `<SmoothScroll>`:

```tsx
// Add import at top:
import SmoothScroll from "./components/SmoothScroll";

// Wrap body content:
<body className="antialiased">
  <SmoothScroll>
    <a href="#main-content" ...>Skip to content</a>
    <Navigation />
    <main id="main-content" className="min-h-screen">
      {children}
    </main>
    <Footer />
  </SmoothScroll>
  {/* CF analytics script stays outside */}
</body>
```

- [ ] **Step 3: Verify smooth scrolling works** — scroll should feel buttery smooth in browser

- [ ] **Step 4: Commit**

```bash
git add app/components/SmoothScroll.tsx app/layout.tsx
git commit -m "feat: add Lenis smooth scrolling via SmoothScroll component"
```

---

## Task 5: Rewrite `ScrollReveal.tsx` with Motion

**Files:**
- Rewrite: `app/components/ScrollReveal.tsx`

- [ ] **Step 1: Replace IntersectionObserver with Motion whileInView**

```tsx
"use client";

import { motion } from "motion/react";

interface ScrollRevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}

export default function ScrollReveal({ children, className = "", delay = 0 }: ScrollRevealProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-10%" }}
      transition={{
        duration: 0.7,
        delay: delay / 1000,
        ease: [0.16, 1, 0.3, 1],
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
```

Note: `delay` prop is in milliseconds (matching existing API), converted to seconds for Motion.

- [ ] **Step 2: Verify existing ScrollReveal usages still work**

- [ ] **Step 3: Commit**

```bash
git add app/components/ScrollReveal.tsx
git commit -m "feat: rewrite ScrollReveal with Motion whileInView"
```

---

## Task 6: Create `TextReveal.tsx`

**Files:**
- Create: `app/components/TextReveal.tsx`

- [ ] **Step 1: Create staggered text reveal component**

```tsx
"use client";

import { motion } from "motion/react";

interface TextRevealProps {
  children: string;
  className?: string;
  delay?: number;
  as?: "h1" | "h2" | "h3" | "p" | "span";
}

const container = {
  hidden: {},
  visible: (delay: number) => ({
    transition: {
      staggerChildren: 0.04,
      delayChildren: delay,
    },
  }),
};

const wordVariant = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] },
  },
};

export default function TextReveal({
  children,
  className = "",
  delay = 0,
  as: Tag = "h1",
}: TextRevealProps) {
  const words = children.split(" ");

  return (
    <motion.div
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      custom={delay}
      className={className}
    >
      <Tag className="sr-only">{children}</Tag>
      <span aria-hidden className="inline">
        {words.map((word, i) => (
          <motion.span
            key={i}
            variants={wordVariant}
            className="inline-block mr-[0.25em]"
          >
            {word}
          </motion.span>
        ))}
      </span>
    </motion.div>
  );
}
```

- [ ] **Step 2: Commit**

```bash
git add app/components/TextReveal.tsx
git commit -m "feat: add TextReveal component for staggered word animations"
```

---

## Task 7: Create `MagneticButton.tsx`

**Files:**
- Create: `app/components/MagneticButton.tsx`

- [ ] **Step 1: Create magnetic hover button**

```tsx
"use client";

import { useRef, useState } from "react";
import { motion } from "motion/react";

interface MagneticButtonProps {
  children: React.ReactNode;
  className?: string;
  as?: "button" | "a";
  href?: string;
  target?: string;
  rel?: string;
  onClick?: () => void;
  type?: "button" | "submit";
  disabled?: boolean;
}

export default function MagneticButton({
  children,
  className = "",
  as: Tag = "button",
  ...props
}: MagneticButtonProps) {
  const ref = useRef<HTMLElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    setPosition({
      x: (e.clientX - centerX) * 0.15,
      y: (e.clientY - centerY) * 0.15,
    });
  };

  const handleMouseLeave = () => setPosition({ x: 0, y: 0 });

  const MotionTag = motion.create(Tag);

  return (
    <MotionTag
      ref={ref as React.Ref<HTMLElement>}
      animate={{ x: position.x, y: position.y }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={className}
      {...props}
    >
      {children}
    </MotionTag>
  );
}
```

- [ ] **Step 2: Commit**

```bash
git add app/components/MagneticButton.tsx
git commit -m "feat: add MagneticButton component for cursor-following hover"
```

---

## Task 8: Rewrite `Navigation.tsx`

**Files:**
- Rewrite: `app/components/Navigation.tsx`

- [ ] **Step 1: Complete rewrite with new design**

Key changes from existing:
- Logo: "W" letter mark in teal (not full "WOODS WEBSITES" text)
- Desktop links: Work, Services, About in `--text-muted`, Contact as teal-bordered button
- Active link: teal color (not amber)
- Scroll state: `backdrop-blur-xl`, `bg-[var(--bg)]/80`, border `var(--border)`
- Mobile: Full-screen overlay (not dropdown), staggered Motion animation per link, close button (X)
- Hamburger lines: teal colored
- All amber references replaced with teal/accent classes
- z-index: nav `z-40`, mobile overlay `z-50` (per spec)
- Use Motion `AnimatePresence` for mobile overlay entrance/exit
- Focus trap when mobile overlay is open (Escape to close)

Content to preserve:
- Same nav links: Home → `/`, Work → `/portfolio`, Services → `/services`, About → `/about`, Contact → `/contact`
- Same scroll detection threshold (20px)
- Same pathname-based active link detection
- Same close-on-route-change behavior

The component uses `"use client"`, imports from `motion/react`, `next/link`, `next/navigation`.

- [ ] **Step 2: Verify navigation works** — desktop links visible, mobile hamburger opens overlay, scroll blur activates

- [ ] **Step 3: Commit**

```bash
git add app/components/Navigation.tsx
git commit -m "feat: rewrite Navigation with teal design and full-screen mobile overlay"
```

---

## Task 9: Rewrite `Footer.tsx`

**Files:**
- Rewrite: `app/components/Footer.tsx`

- [ ] **Step 1: Complete rewrite with new design**

Key changes:
- "W" logo mark (teal) + one-line description (not full "Woods Websites" heading)
- Teal gradient accent line at top: `bg-gradient-to-r from-transparent via-[var(--accent)]/40 to-transparent`
- Nav links: same destinations, teal hover (not amber)
- Right column: "Let's build something" + email link
- Bottom: copyright + Privacy/Terms
- All amber → teal/accent
- Font: Inter for body text, Unbounded for any labels

Content to preserve:
- Same link destinations
- Same copyright format
- Same email: woodswebsites.com@gmail.com

- [ ] **Step 2: Verify footer renders correctly**

- [ ] **Step 3: Commit**

```bash
git add app/components/Footer.tsx
git commit -m "feat: rewrite Footer with teal design and gradient accent"
```

---

## Task 10: Rewrite `PageHero.tsx`

**Files:**
- Rewrite: `app/components/PageHero.tsx`

- [ ] **Step 1: Rewrite with Motion animations and new styling**

Key changes:
- Add subtle grid background (same pattern as prototype: teal lines at low opacity)
- Staggered entrance via Motion (label → headline → description, 0.15s apart)
- Teal label (not amber), teal left border on description
- Typography: Unbounded headline, Inter description
- Height: `min-h-[50vh]` with centered content
- Remove amber gradient lines

Same props interface: `{ label: string; headline: React.ReactNode; description: React.ReactNode }`

- [ ] **Step 2: Verify on any subpage (e.g., `/portfolio`)**

- [ ] **Step 3: Commit**

```bash
git add app/components/PageHero.tsx
git commit -m "feat: rewrite PageHero with Motion animations and teal design"
```

---

## Task 11: Rewrite `CTASection.tsx`

**Files:**
- Rewrite: `app/components/CTASection.tsx`

- [ ] **Step 1: Simplify and restyle**

Key changes:
- Dark background (not amber) — `var(--bg)` or `var(--bg-alt)`
- Teal CTA button (not inverted amber)
- Remove grain texture, geometric accents, secondary button variant
- Simplify to: headline (Unbounded, white) + optional subtitle + teal button
- ScrollReveal entrance animation
- Keep same props but simplify: `{ headline: ReactNode; subtitle?: string; buttonText: string; buttonHref?: string }`
- Remove `size` and `secondaryButton` props (homepage CTA is now inline in page.tsx)

- [ ] **Step 2: Commit**

```bash
git add app/components/CTASection.tsx
git commit -m "feat: rewrite CTASection with dark bg and teal CTA"
```

---

## Task 12: Rewrite `CaseStudyCard.tsx`

**Files:**
- Rewrite: `app/components/CaseStudyCard.tsx`

- [ ] **Step 1: Restyle with teal hover effects**

Key changes:
- Card bg: `var(--bg-alt)` (not zinc-900)
- Border: `var(--border)`, on hover → `var(--border-hover)` with teal glow shadow
- Title hover: teal (not amber)
- Tags: teal-bordered pills on hover
- "Visit Live Site" link: teal (not amber)
- Top accent line on hover: teal
- Image overlay gradient: from `var(--bg-alt)` not zinc-900
- Keep same props interface, same Image component usage

Content: unchanged (title, description, tags, liveUrl, image, alt)

- [ ] **Step 2: Verify cards render on `/portfolio`**

- [ ] **Step 3: Commit**

```bash
git add app/components/CaseStudyCard.tsx
git commit -m "feat: restyle CaseStudyCard with teal hover effects"
```

---

## Task 13: Create `WorkshopSection.tsx`

**Files:**
- Create: `app/components/WorkshopSection.tsx`

This is the signature scroll-stop animation. Uses the same approach as the approved prototype (Concept C) but refined.

**Note on GSAP vs Motion**: The spec mentions GSAP ScrollTrigger for this section. However, the approved prototype successfully uses Motion `useScroll`/`useTransform` with CSS `position: sticky` — this is simpler, lighter, and already proven to work. We intentionally use Motion here instead of GSAP. The `gsap` and `@gsap/react` packages remain installed as optional for future complex timeline needs.

- [ ] **Step 1: Create the Workshop scroll-pinned component**

Key implementation details:
- Client component
- Uses Motion `useScroll` + `useTransform` + `useSpring` (same as prototype)
- Container: `height: 500vh` with `position: sticky` inner viewport
- z-index: 10 (per spec)
- Monitor/desk scene centered (same as prototype)
- 8 tool cards with staggered emergence per spec keyframe map
- Desktop: all 8 cards. Mobile (`< 768px`): 6 cards (drop Security + Deploy), tighter scatter
- Use `useMediaQuery` or CSS-only responsive approach for mobile
- Each card: dark bg (`--bg-alt`), colored border, icon + label in JetBrains Mono
- Cards start at center (behind monitor) and drift to final positions
- Tagline appears at 75-90% progress
- Use exact scroll keyframes from spec (section 5, page 178-190)

Items array:
```tsx
const items = [
  { icon: "{ }", label: "Code", color: "var(--accent)", endX: -180, endY: -120, rotation: -15 },
  { icon: "◆", label: "Design", color: "#a78bfa", endX: 160, endY: -140, rotation: 10 },
  { icon: "▲", label: "Next.js", color: "var(--text)", endX: -120, endY: -220, rotation: -8 },
  { icon: "◈", label: "Tailwind", color: "#38bdf8", endX: 200, endY: -80, rotation: 12 },
  { icon: "⚡", label: "Speed", color: "#fbbf24", endX: -200, endY: -50, rotation: -20 },
  { icon: "🔒", label: "Security", color: "#f87171", endX: 100, endY: -250, rotation: 5, desktopOnly: true },
  { icon: "📱", label: "Mobile", color: "#34d399", endX: -60, endY: -280, rotation: -12 },
  { icon: "🚀", label: "Deploy", color: "var(--accent)", endX: 140, endY: -200, rotation: 18, desktopOnly: true },
];
```

This is the most complex component. Base it on the working prototype code from `app/prototype/page.tsx` (ConceptC function) but with:
- Refined scroll keyframe timing per spec
- Responsive adjustments for mobile
- JetBrains Mono for card labels
- Better visual polish (glow effects, spring physics)

- [ ] **Step 2: Verify scroll-stop animation works** — navigate to homepage (once homepage is built in Task 14)

- [ ] **Step 3: Commit**

```bash
git add app/components/WorkshopSection.tsx
git commit -m "feat: add WorkshopSection scroll-stop animation"
```

---

## Task 14: Rewrite Homepage (`page.tsx`)

**Files:**
- Rewrite: `app/page.tsx`

- [ ] **Step 1: Complete homepage rewrite with 5 sections**

The homepage is a Server Component with client sub-components imported.

**Section 1: Hero** (100vh)
- Background: `var(--bg)` with subtle grid pattern (teal lines at `--accent`/5% opacity)
- "WOODS" (white, Unbounded 900, `clamp(3rem, 8vw, 7rem)`) on line 1
- "WEBSITES" (teal, same size) on line 2
- Use TextReveal for staggered word entrance
- Tagline: "Web design & development by two brothers" (Inter, `--text-muted`)
- Two CTAs using MagneticButton:
  - "View Our Work" → `/portfolio` (filled teal bg, dark text)
  - "Get In Touch" → `/contact` (teal border, teal text, hover fills)
- Scroll indicator: bouncing `↓` arrow at bottom
- Keep structured data (JSON-LD) from existing page
- Keep metadata export

**Section 2: Workshop**
- Import and render `<WorkshopSection />`

**Section 3: Featured Work**
- Teal section label "SELECTED WORK"
- Import first 3 projects from existing `featuredProjects` array (same data)
- CaseStudyCard grid (2 cols, orphan handling)
- "View All Work →" link
- ScrollReveal on each card with stagger

**Section 4: Services Overview**
- Teal section label "WHAT WE DO"
- 3-column grid of 6 service cards (same service data from existing homepage)
- Each card: number, title (Unbounded), description (Inter), teal top-border accent on hover
- Background: `var(--bg-alt)` section
- ScrollReveal with stagger

**Section 5: CTA**
- Dark background, ~50vh
- "Let's build something." (Unbounded, large, white)
- Teal MagneticButton: "Start a Project" → `/contact`
- Simple, bold, centered

- [ ] **Step 2: Verify homepage renders correctly with all 5 sections**

Check in browser:
- Hero text reveals on load
- Workshop scroll-stop works (scroll pins, cards emerge)
- Featured work cards visible with hover effects
- Services grid with teal accents
- CTA section at bottom

- [ ] **Step 3: Commit**

```bash
git add app/page.tsx
git commit -m "feat: rewrite homepage with hero, Workshop, featured work, services, CTA"
```

---

## Task 15: Rewrite Portfolio Page

**Files:**
- Rewrite: `app/portfolio/page.tsx`

- [ ] **Step 1: Restyle with new components**

Preserve:
- Same `projects` array (4 projects with all data)
- Same metadata export

Changes:
- Use new PageHero (label "PORTFOLIO", headline "OUR WORK")
- Use new CaseStudyCard (teal hover effects)
- Use new ScrollReveal (Motion-based)
- Use new CTASection (dark bg + teal)
- Background: `var(--bg)` (replaces `bg-zinc-950` class)
- All amber references removed

- [ ] **Step 2: Verify `/portfolio` page renders**

- [ ] **Step 3: Commit**

```bash
git add app/portfolio/page.tsx
git commit -m "feat: restyle portfolio page with teal design"
```

---

## Task 16: Rewrite Services Page

**Files:**
- Rewrite: `app/services/page.tsx`

- [ ] **Step 1: Restyle with new components and animated process line**

Preserve:
- Same `services` array (6 services with features)
- Same `process` array (4 steps)
- Same `technologies` array (8 techs)
- Same metadata export

Changes:
- Use new PageHero, ScrollReveal, CTASection
- All amber → teal/accent
- Background sections: `var(--bg)` and `var(--bg-alt)`
- **Process section**: Extract into `app/components/ProcessTimeline.tsx` (client component) since it needs Motion `useScroll`:
  - Vertical SVG `<path>` drawn via `stroke-dashoffset` animated by Motion `useScroll`/`useTransform`
  - Each step revealed as line reaches it
  - The services page itself stays as a server component, importing ProcessTimeline as a client island
- Tech grid: teal hover effects (not amber)

- [ ] **Step 2: Verify `/services` page renders with animated process line**

- [ ] **Step 3: Commit**

```bash
git add app/services/page.tsx
git commit -m "feat: restyle services page with animated process line"
```

---

## Task 17: Rewrite About Page

**Files:**
- Rewrite: `app/about/page.tsx`

- [ ] **Step 1: Restyle with new components**

Preserve:
- Same story paragraphs (4 paragraphs)
- Same `values` array (6 values)
- Same `skills` array (12 skills)
- Same metadata export

Changes:
- Use new PageHero, ScrollReveal, CTASection
- All amber → teal/accent
- Story section: teal accent border on pull quote
- Values grid: teal top-border accent, teal number on hover
- Skills tags: teal hover glow
- Background: `var(--bg)` and `var(--bg-alt)` alternating sections

- [ ] **Step 2: Verify `/about` page renders**

- [ ] **Step 3: Commit**

```bash
git add app/about/page.tsx
git commit -m "feat: restyle about page with teal design"
```

---

## Task 18: Rewrite Contact Page

**Files:**
- Rewrite: `app/contact/page.tsx`

- [ ] **Step 1: Restyle while preserving form logic exactly**

Preserve EXACTLY (do not modify):
- `formData` state and `handleChange`
- `handleSubmit` function with FormSubmit.co endpoint
- `submitStatus` state management
- All form field names and values
- `contactInfo` array
- `process` array

Changes:
- Use new PageHero (label "CONTACT", headline "LET'S TALK")
- All amber → teal/accent:
  - Form input focus: `focus:border-[var(--accent)] focus:ring-2 focus:ring-[var(--accent-glow)]`
  - Submit button: teal bg (`var(--accent)`), dark text (`var(--accent-fg)`)
  - Labels: `text-[var(--text-muted)]`
  - Select arrows: teal
  - Contact info left borders: teal
  - "What Happens Next" box: teal gradient top border
  - Success message: keep green
  - Error message: keep red
- Input backgrounds: `var(--bg-alt)`
- Form container: `var(--bg-alt)` border `var(--border)`
- No metadata export needed (uses contact layout)

- [ ] **Step 2: Verify form submission still works** — fill out form, submit, check success/error states

- [ ] **Step 3: Commit**

```bash
git add app/contact/page.tsx
git commit -m "feat: restyle contact page with teal design, preserve form logic"
```

---

## Task 19: Restyle Privacy & Terms Pages

**Files:**
- Modify: `app/privacy/page.tsx`
- Modify: `app/terms/page.tsx`

- [ ] **Step 1: Find-and-replace color classes in both files**

For both files:
- `amber-500` → `accent` (or inline `[var(--accent)]` if Tailwind utility doesn't exist)
- `amber-400` → `accent-hover`
- `zinc-950` → `bg` (background)
- `zinc-900` → `bg-alt`
- `zinc-800` → `[var(--border)]`
- `zinc-400` → `[var(--text-muted)]`
- `zinc-500` → `[var(--text-faint)]`
- `text-white` → `text-[var(--text)]`

No structural changes needed.

- [ ] **Step 2: Verify both pages render correctly**

- [ ] **Step 3: Commit**

```bash
git add app/privacy/page.tsx app/terms/page.tsx
git commit -m "feat: restyle privacy and terms pages with teal color scheme"
```

---

## Task 20: Cleanup and Final Verification

**Files:**
- Delete: `app/prototype/page.tsx`

- [ ] **Step 1: Remove prototype page and amber bridge**

```bash
rm app/prototype/page.tsx
rmdir app/prototype  # remove empty directory
```

Also remove the amber `@theme inline` bridge from `globals.css` (the `--color-amber-*` entries and `--color-zinc-*` that were kept for backward compatibility). All pages should now use teal/semantic token classes only.

- [ ] **Step 2: Run build to verify everything compiles**

```bash
npm run build
```

Fix any TypeScript or build errors.

- [ ] **Step 3: Full visual verification**

Open browser and check every page:
- `/` — Hero, Workshop scroll-stop, Featured Work, Services, CTA
- `/portfolio` — PageHero, cards, CTA
- `/services` — PageHero, services grid, animated process line, tech grid, CTA
- `/about` — PageHero, story, values, skills, CTA
- `/contact` — PageHero, form (test submission), info sidebar
- `/privacy` — Correct colors
- `/terms` — Correct colors

Check on mobile viewport (Chrome DevTools responsive mode):
- Navigation hamburger → full-screen overlay
- Workshop section adapted (6 cards)
- All layouts single-column
- Touch targets adequate

- [ ] **Step 4: Commit cleanup**

```bash
git add -A
git commit -m "chore: remove prototype, fix build issues"
```

- [ ] **Step 5: Update CLAUDE.md**

Update the project's CLAUDE.md to reflect the new design system:
- Color palette section: teal replaces amber
- Typography: Inter replaces Libre Baskerville, add JetBrains Mono
- Design style: "Dark Tech-Forward" replaces "Editorial Brutalist"
- Animation stack: Motion + Lenis (mention GSAP for Workshop)
- Component patterns: update button/label/tag examples with teal classes
- Remove amber references throughout

```bash
git add CLAUDE.md
git commit -m "docs: update CLAUDE.md for teal redesign"
```
