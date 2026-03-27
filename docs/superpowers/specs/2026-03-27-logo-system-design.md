# Woods Websites Logo System

## Summary

A bold, typographic logo system for Woods Websites built around Space Grotesk Bold with tight letter-spacing and a teal (#2ec4b6) accent period.

## Brand Direction

- **Personality:** Bold / Modern Agency — confident, heavyweight, memorable
- **Inspiration:** Vercel, Linear, Lando Norris site, Studio Freight
- **Fonts:** Space Grotesk Bold (700) — the site's existing display font
- **Colors:** White text on dark (#0a0a0a), dark text on light (#f5f5f5), dark text on teal (#2ec4b6)
- **Accent:** Teal period (#2ec4b6) at the end of the wordmark

## Logo Marks

### Primary Wordmark

**WOODS WEBSITES.**

- All caps, Space Grotesk Bold
- Tight negative letter-spacing (-1.5px at 36px reference size)
- Final period in teal (#2ec4b6)
- Three variants: on dark (white text), on light (dark text), on teal (dark text, dark period)

### WW Monogram

**WW** — no container

- Two-tone: first W in primary color (white on dark, dark on light), second W in teal (#2ec4b6)
- Letter-spacing: -4px at 48px reference size
- On teal background: both Ws in dark (#0a0a0a)
- Used for favicons, app icons, social avatars, and anywhere the full wordmark doesn't fit

## File Deliverables

### SVGs (vector, scalable)

| File | Contents | Use |
|------|----------|-----|
| `logo-primary-dark.svg` | White wordmark + teal period, transparent bg | Dark backgrounds |
| `logo-primary-light.svg` | Dark wordmark + teal period, transparent bg | Light backgrounds |
| `logo-primary-teal.svg` | Dark wordmark + dark period, transparent bg | Teal backgrounds |
| `logo-monogram-dark.svg` | White W + teal W, transparent bg | Dark backgrounds |
| `logo-monogram-light.svg` | Dark W + teal W, transparent bg | Light backgrounds |
| `logo-monogram-teal.svg` | Dark WW, transparent bg | Teal backgrounds |

### PNGs (raster, for contexts that don't support SVG)

| File | Size | Contents |
|------|------|----------|
| `logo-primary-dark.png` | 2400px wide | White wordmark on transparent |
| `logo-primary-light.png` | 2400px wide | Dark wordmark on transparent |
| `logo-monogram-dark.png` | 1024px square | WW on transparent |

### Favicons & App Icons

| File | Size | Contents |
|------|------|----------|
| `favicon.ico` | 16px + 32px (multi-size) | WW monogram on dark bg |
| `icon-192.png` | 192x192 | WW monogram on dark bg, rounded corners |
| `icon-512.png` | 512x512 | WW monogram on dark bg, rounded corners |
| `apple-touch-icon.png` | 180x180 | WW monogram on dark bg |

### Social / OG

| File | Size | Contents |
|------|------|----------|
| `og-image.png` | 1200x630 | Wordmark centered on dark bg, "Web Design & Development Studio" subtitle |

## Implementation Notes

- All SVGs use embedded text paths (not live text) so they render without font dependencies
- Favicons use a dark (#0a0a0a) background since the WW monogram needs contrast at small sizes
- The Nav component currently uses a text-based "Woods." — update to use the SVG wordmark or keep as styled text matching the logo spec (Space Grotesk Bold, tight tracking, teal period)
- Add favicon metadata to `app/layout.tsx` via Next.js metadata API
- Store all files in `public/images/logo/`

## Design Tokens

```
--logo-color-primary: #ffffff (on dark)
--logo-color-primary: #0a0a0a (on light)
--logo-color-accent: #2ec4b6
--logo-font: 'Space Grotesk', sans-serif
--logo-font-weight: 700
--logo-wordmark-tracking: -0.04em
--logo-monogram-tracking: -0.08em
```
