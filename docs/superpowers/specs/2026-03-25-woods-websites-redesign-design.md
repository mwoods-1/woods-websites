# Woods Websites — Full Redesign Design Spec

## Overview

A complete rebuild of woodswebsites.com — the portfolio and lead-generation site for Woods Websites, a web design and development business run by brothers Sean and Mark Woods. The site itself must demonstrate the quality of work they deliver: polished, animated, modern, and fast.

**Core goals:**
1. Make an immediate visual impression — visitors should think "these guys know what they're doing"
2. Showcase client work in a scalable, data-driven portfolio
3. Generate leads with low-friction contact points throughout
4. Work flawlessly on mobile
5. Load fast

---

## Tech Stack

- **Framework:** Next.js (App Router, Server Components by default)
- **Styling:** Tailwind CSS
- **Components:** shadcn/ui as the base component library, customized for brand
- **Animations:** Motion (Framer Motion) for scroll-driven and entrance animations
- **Fonts:** Expressive display font for headings (e.g., Space Grotesk, Clash Display — to be prototyped), clean sans for body (e.g., Inter, Geist Sans), monospace for tech accents (e.g., JetBrains Mono, Geist Mono)
- **Deployment:** Vercel
- **Form handling:** To be determined (FormSubmit.co currently, may upgrade)

---

## Design Language

### Color Palette

| Token | Value | Usage |
|-------|-------|-------|
| `--bg` | `#050505` | Page background |
| `--bg-alt` | `#0d0d0d` | Card/elevated surface background |
| `--bg-elevated` | `#111111` | Modals, nav, higher surfaces |
| `--accent` | `#2ec4b6` | Primary accent (teal), CTAs, links, highlights |
| `--text` | `#f0f0f0` | Primary text |
| `--text-muted` | `rgba(255,255,255,0.5)` | Secondary/supporting text |
| `--border` | `rgba(255,255,255,0.1)` | Subtle borders |

The accent color (`#2ec4b6`) is a starting point inherited from the Workshop animation. Final shade to be confirmed once a new logo is designed.

### Typography

- **Display/headings:** Bold, expressive typeface. Used for hero headlines, section titles, page titles. High weight (700-900).
- **Body:** Clean, readable sans-serif. Used for paragraphs, descriptions, UI text.
- **Mono:** Monospace for tech labels, code references, the Workshop animation cards, subtle category tags.

Font choices will be prototyped in-browser before committing.

### Animation Strategy

One major scroll-stop animation (the Workshop) serves as the signature moment. The rest of the site uses subtler, layered animations:

| Technique | Where Used | Details |
|-----------|-----------|---------|
| **Scroll-stop (sticky)** | Homepage Workshop section only | 500vh container, monitor + floating tech cards |
| **Scroll-reveal** | All pages — sections, cards, images | Fade + slide up on viewport entry, triggered once |
| **Staggered entry** | Service grids, portfolio cards, nav items | Sequential delay (50-100ms between items) |
| **Text reveal** | Section headings, hero text, testimonials | Words/lines mask-slide up as they enter viewport |
| **Parallax** | Hero background, section transitions | Subtle depth — background moves slower than content |

All animations should be performant (GPU-composited transforms/opacity only), respect `prefers-reduced-motion`, and feel smooth rather than flashy.

---

## Site Structure

### Navigation (Global)

- **Desktop:** Sticky top bar. Logo (W mark + "Woods Websites") left-aligned. Links right-aligned: Portfolio, Services, About, Contact (styled as accent button).
- **Mobile:** Logo left, hamburger right. Full-screen overlay menu with staggered link reveals.
- **Behavior:** Transparent on hero, picks up `--bg-elevated` background on scroll. Smooth transition.

### Pages

1. Homepage
2. Portfolio (index)
3. Portfolio / [project] (individual project pages)
4. Services
5. About
6. Contact
7. Privacy Policy
8. Terms of Service

---

## Page Designs

### 1. Homepage

Seven sections, each with its own animation treatment:

**① Hero**
- Mono-styled category label: "Web Design & Development"
- Large display heading with accent-colored keyword: "We build websites that **make businesses grow**"
- Supporting tagline: "Custom-built, high-performance websites crafted with care. No templates. No shortcuts."
- Two CTAs: "Start a Project" (solid accent) + "View Our Work" (outline/ghost)
- Text reveal animation on heading

**② Trust Strip**
- Subtle section: "Trusted by businesses across industries"
- Row of client names (text for now, logos when available)
- Very muted styling — not a hero element, just a quiet confidence signal
- Scroll-reveal entrance

**③ The Workshop (Scroll-Stop Animation)**
- Existing `WorkshopSection.tsx` component
- 500vh sticky container
- Monitor with "W" logo rises into view
- Floating tech cards (Code, Design, Next.js, Tailwind, Speed, Security, Mobile, Deploy) emerge and spread
- Tagline fades in at bottom: "Everything you need, crafted with care"
- Uses CSS variables from the design system

**④ Services Preview**
- Heading: "Everything your business needs to **win online**"
- Process timeline: Discovery → Design → Build → Launch → Support (horizontal pill badges)
- 4-column grid of key services (icon + title + one-liner): Design & Dev, Redesigns, Performance, Integrations
- "See All Services →" link
- Staggered entry animation on grid items

**⑤ Portfolio Preview**
- Heading: "Our **Work**" with accent on "Work"
- Subheading: "Recent projects we're proud of"
- "View All →" link to portfolio page
- 2x2 grid of project cards (image, title, type + industry tag)
- Cards link to individual project pages
- Scroll-reveal on cards

**⑥ Testimonial**
- Large quotation mark accent
- Client quote (italic, larger text)
- Client name (accent color) + business name + industry
- Text reveal animation
- Placeholder content until real testimonial is sourced

**⑦ CTA + Footer**
- CTA: "Ready to talk about **your project?**" + "Get In Touch" button + email
- Footer below: logo, nav links (Portfolio, Services, About, Contact, Privacy, Terms), copyright
- Subtle gradient background on CTA area

---

### 2. Portfolio Page (Index)

- Page hero: "Our **Work**" with subtitle
- Grid of all project cards (responsive — 1 col mobile, 2 col tablet, 3 col desktop)
- Each card: screenshot image, project name, type badge (Redesign / New Build / Integration), industry tag
- Cards link to individual project pages
- Scroll-reveal staggered entrance
- CTA section at bottom

**Data model for projects:**

```typescript
interface Project {
  slug: string;           // URL-friendly identifier
  name: string;           // "Aviation Expeditions"
  url: string;            // "https://aviation-expeditions.com"
  type: string;           // "Redesign" | "New Build" | "Redesign + Integration"
  industry: string;       // "Tourism" | "Hospitality" | "Sports" | "Property Services"
  description: string;    // Short card description
  cardImage: string;      // Card thumbnail path
  content: {              // Detail page content
    heroImage: string;
    challenge: string;    // What the client needed
    approach: string;     // How we solved it
    result: string;       // The outcome
    screenshots: string[];
    testimonial?: {
      quote: string;
      author: string;
      role: string;
    };
  };
}
```

Projects are stored as a TypeScript data file (`data/projects.ts`) exporting an array of `Project` objects. Adding a new client means adding an entry to the array — no new page code needed. Dynamic routes (`app/portfolio/[slug]/page.tsx`) render from this data.

---

### 3. Portfolio / [project] (Individual Project Page)

- Hero: full-width project screenshot with project name overlay
- Project metadata bar: type badge, industry, link to live site
- Content sections:
  - **The Challenge** — what the client needed (2-3 paragraphs)
  - **Our Approach** — how we built it, key decisions (2-3 paragraphs)
  - **The Result** — outcomes, what changed (1-2 paragraphs)
  - **Screenshots** — scrollable gallery or grid of project screenshots
  - **Testimonial** (if available) — client quote
- Back link: "← Back to Portfolio"
- CTA section at bottom
- Next/previous project navigation

---

### 4. Services Page

- Page hero: "Our **Services**" with subtitle
- **Process narrative section:** Discovery → Design → Build → Launch → Support
  - Each step as a card/section with heading, 2-3 sentence description
  - Horizontal timeline on desktop, vertical on mobile
  - Staggered reveal animation

- **Primary services** (hero treatment — larger cards, more detail, these are the lead offering):
  - Custom Website Design & Development
  - Website Redesigns & Modernization
  - E-Commerce Solutions
  - Third-Party Platform Integrations (booking, payments, CRM)
  - Performance Optimization & SEO

  These are displayed prominently — websites are the core business and the primary service being sold.

- **Additional services** (secondary grid — smaller cards, positioned as "we also offer"):
  - Ongoing Maintenance & Support
  - Custom Software Solutions / Web Applications
  - Brand & Digital Strategy
  - Analytics & Conversion Optimization
  - Responsive & Mobile-First Development
  - Accessibility & Compliance (WCAG)
  - API Development & Integration
  - Content Management Systems

  Visual hierarchy makes it clear: websites first, everything else is supplementary expertise.

- CTA section at bottom

---

### 5. About Page

- Page hero: "About **Us**" with subtitle
- **Story section:** Professional but warm narrative about Sean and Mark Woods — two brothers, how they started, why they care about craft
- **Values/approach section:** 3-4 key values (e.g., "Quality over quantity", "No templates", "Built to perform", "Ongoing partnership")
  - Cards or simple grid with icon + title + short description
- **Tech stack section** (optional): Tools and technologies we use — displayed as a subtle badge grid (Next.js, React, Tailwind, Vercel, etc.)
- CTA section at bottom

---

### 6. Contact Page

- Page hero: "Let's **Talk**" with subtitle
- **Contact form:**
  - Name (required)
  - Email (required)
  - Company/Business name (optional)
  - Project type (dropdown: New Website, Redesign, Other)
  - Budget range (optional — radio buttons or dropdown)
  - Project details (textarea)
  - Submit button
- **Alternative contact info:** Email address, response time expectation
- Form submissions delivered via email (FormSubmit.co or Resend — to be decided during implementation)

---

### 7. Privacy Policy & 8. Terms of Service

- Simple, clean text pages
- Page hero with title
- Rendered from markdown or static content
- Standard legal content
- Minimal styling — readable, professional

---

## Responsive Behavior

- **Mobile-first** approach in implementation
- **Breakpoints:** sm (640px), md (768px), lg (1024px), xl (1280px) — Tailwind defaults
- **Navigation:** Collapses to hamburger menu below md
- **Portfolio grid:** 1 col on mobile, 2 col on md, 2-3 col on lg
- **Service grid:** 1 col on mobile, 2 col on md, 3-4 col on lg
- **Workshop animation:** Already handles mobile (hides `desktopOnly` cards)
- **Typography:** Fluid sizing using clamp() for headings

---

## SEO & Performance

- **Metadata:** Unique title and description per page, OpenGraph images
- **Sitemap:** Auto-generated via Next.js sitemap.ts
- **robots.txt:** Allow all, reference sitemap
- **Images:** Next.js `<Image>` component for automatic optimization
- **Fonts:** next/font for zero layout shift
- **Core Web Vitals:** Target all green scores — LCP < 2.5s, CLS < 0.1, INP < 200ms
- **Lighthouse:** Target 90+ on all categories

---

## Content Requirements

Before the site can fully launch, the following content is needed:

- [ ] Project screenshots for all 4 portfolio entries
- [ ] Written content for each project (challenge, approach, result)
- [ ] At least one client testimonial
- [ ] Sean and Mark bios/photos for the About page
- [ ] Privacy Policy and Terms of Service text
- [ ] New logo (can launch with text "W" placeholder)
- [ ] Contact form destination email configuration

Placeholder content will be used during development where real content isn't available yet.

---

## Inspiration Sources

- **landonorris.com** — Bold personal brand, scroll storytelling, accent-colored keywords, minimal nav, large type
- **noomoagency.com** — Agency portfolio, rich project cards with tags, testimonials, awards section, dark aesthetic, contact form embedded
- **animejs.com** — Animation techniques, interactive code demos, potential animation library
- **kriss.ai/home/server-room** — Immersive 3D, aspirational visual spectacle
