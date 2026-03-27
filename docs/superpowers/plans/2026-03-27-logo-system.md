# Logo System Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Create a complete logo system (SVGs, PNGs, favicons, OG image) for Woods Websites and integrate it into the Next.js site.

**Architecture:** A Node.js generation script uses opentype.js to convert Space Grotesk Bold text into SVG paths, then sharp to rasterize PNGs/favicons/OG image. The generated files land in `public/images/logo/`. Next.js metadata API wires up favicons and OG image. Nav component updated to match logo spec.

**Tech Stack:** opentype.js (font→SVG paths), sharp (SVG→PNG), Next.js metadata API

---

### Task 1: Install generation dependencies

**Files:**
- Modify: `package.json`

- [ ] **Step 1: Install opentype.js and sharp as dev dependencies**

```bash
npm install --save-dev opentype.js sharp @types/opentype.js
```

- [ ] **Step 2: Verify installation**

```bash
node -e "require('opentype.js'); require('sharp'); console.log('ok')"
```

Expected: `ok`

- [ ] **Step 3: Commit**

```bash
git add package.json package-lock.json
git commit -m "chore: add opentype.js and sharp for logo generation"
```

---

### Task 2: Download Space Grotesk Bold font file

**Files:**
- Create: `scripts/fonts/SpaceGrotesk-Bold.ttf`

The generation script needs the raw .ttf file to extract glyph paths. The site uses next/font/google which downloads at build time, so we need a local copy for the script.

- [ ] **Step 1: Create fonts directory and download Space Grotesk Bold**

```bash
mkdir -p scripts/fonts
curl -L -o scripts/fonts/SpaceGrotesk-Bold.ttf \
  "https://github.com/floriankarsten/space-grotesk/raw/master/fonts/ttf/SpaceGrotesk-Bold.ttf"
```

- [ ] **Step 2: Verify the font loads**

```bash
node -e "
const opentype = require('opentype.js');
const font = opentype.loadSync('scripts/fonts/SpaceGrotesk-Bold.ttf');
console.log('Font:', font.names.fontFamily.en);
console.log('Glyphs:', font.numGlyphs);
"
```

Expected: Font name and glyph count printed.

- [ ] **Step 3: Commit**

```bash
git add scripts/fonts/SpaceGrotesk-Bold.ttf
git commit -m "chore: add Space Grotesk Bold ttf for logo generation"
```

---

### Task 3: Create the logo generation script

**Files:**
- Create: `scripts/generate-logos.mjs`

This script does everything: reads the font, converts text to SVG paths, generates all SVG variants, then uses sharp to rasterize PNGs, favicons, and the OG image.

- [ ] **Step 1: Create `scripts/generate-logos.mjs`**

```js
import opentype from "opentype.js";
import sharp from "sharp";
import { mkdirSync, writeFileSync } from "fs";
import { join } from "path";

const OUT = join(import.meta.dirname, "..", "public", "images", "logo");
mkdirSync(OUT, { recursive: true });

// --- Config ---
const ACCENT = "#2ec4b6";
const DARK = "#0a0a0a";
const WHITE = "#ffffff";
const FONT_PATH = join(import.meta.dirname, "fonts", "SpaceGrotesk-Bold.ttf");

// --- Load font ---
const font = opentype.loadSync(FONT_PATH);

/**
 * Convert text to an SVG path string at a given font size.
 * Returns { path, width, height, baseline } where path is the `d` attribute.
 */
function textToPath(text, fontSize, letterSpacingEm = 0) {
  const scale = fontSize / font.unitsPerEm;
  const ascender = font.ascender * scale;
  const descender = font.descender * scale;
  const height = ascender - descender;

  let x = 0;
  const paths = [];

  for (let i = 0; i < text.length; i++) {
    const glyph = font.charToGlyph(text[i]);
    const glyphPath = glyph.getPath(x, ascender, fontSize);
    paths.push(glyphPath.toPathData());
    x += glyph.advanceWidth * scale + fontSize * letterSpacingEm;
  }

  return {
    pathData: paths,
    chars: text.split(""),
    width: x - fontSize * letterSpacingEm, // remove trailing space
    height,
    baseline: ascender,
  };
}

/**
 * Build an SVG string from text with per-character coloring.
 */
function buildSvg({ text, fontSize, letterSpacingEm, colorMap, padding = 20 }) {
  const result = textToPath(text, fontSize, letterSpacingEm);
  const svgWidth = Math.ceil(result.width + padding * 2);
  const svgHeight = Math.ceil(result.height + padding * 2);

  const paths = result.pathData
    .map((d, i) => {
      const char = result.chars[i];
      const color = colorMap(char, i);
      return `  <path d="${d}" fill="${color}"/>`;
    })
    .join("\n");

  return {
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${svgWidth} ${svgHeight}" width="${svgWidth}" height="${svgHeight}">
  <g transform="translate(${padding}, ${padding})">
${paths}
  </g>
</svg>`,
    width: svgWidth,
    height: svgHeight,
  };
}

// --- Generate SVGs ---

// Wordmark: "WOODS WEBSITES."
const wordmarkText = "WOODS WEBSITES.";
const wordmarkSpacing = -0.04;
const wordmarkSize = 72;

// Monogram: "WW"
const monoText = "WW";
const monoSpacing = -0.08;
const monoSize = 96;

function wordmarkColorMap(bg) {
  const textColor = bg === "dark" ? WHITE : DARK;
  const dotColor = bg === "teal" ? DARK : ACCENT;
  return (char, i) => (i === wordmarkText.length - 1 ? dotColor : textColor);
}

function monoColorMap(bg) {
  if (bg === "teal") return () => DARK;
  const firstColor = bg === "dark" ? WHITE : DARK;
  return (_char, i) => (i === 0 ? firstColor : ACCENT);
}

const svgFiles = [
  {
    name: "logo-primary-dark.svg",
    text: wordmarkText,
    fontSize: wordmarkSize,
    letterSpacingEm: wordmarkSpacing,
    colorMap: wordmarkColorMap("dark"),
  },
  {
    name: "logo-primary-light.svg",
    text: wordmarkText,
    fontSize: wordmarkSize,
    letterSpacingEm: wordmarkSpacing,
    colorMap: wordmarkColorMap("light"),
  },
  {
    name: "logo-primary-teal.svg",
    text: wordmarkText,
    fontSize: wordmarkSize,
    letterSpacingEm: wordmarkSpacing,
    colorMap: wordmarkColorMap("teal"),
  },
  {
    name: "logo-monogram-dark.svg",
    text: monoText,
    fontSize: monoSize,
    letterSpacingEm: monoSpacing,
    colorMap: monoColorMap("dark"),
  },
  {
    name: "logo-monogram-light.svg",
    text: monoText,
    fontSize: monoSize,
    letterSpacingEm: monoSpacing,
    colorMap: monoColorMap("light"),
  },
  {
    name: "logo-monogram-teal.svg",
    text: monoText,
    fontSize: monoSize,
    letterSpacingEm: monoSpacing,
    colorMap: monoColorMap("teal"),
  },
];

console.log("Generating SVGs...");
for (const file of svgFiles) {
  const { svg } = buildSvg(file);
  writeFileSync(join(OUT, file.name), svg);
  console.log(`  ✓ ${file.name}`);
}

// --- Generate PNGs from SVGs ---

async function svgToPng(svgPath, outPath, width) {
  await sharp(svgPath).resize(width).png().toFile(outPath);
  console.log(`  ✓ ${outPath.split("/").pop()}`);
}

console.log("\nGenerating PNGs...");
await svgToPng(join(OUT, "logo-primary-dark.svg"), join(OUT, "logo-primary-dark.png"), 2400);
await svgToPng(join(OUT, "logo-primary-light.svg"), join(OUT, "logo-primary-light.png"), 2400);
await svgToPng(join(OUT, "logo-monogram-dark.svg"), join(OUT, "logo-monogram-dark.png"), 1024);

// --- Generate Favicons & App Icons ---
// These need a dark background since the monogram is transparent

console.log("\nGenerating favicons & app icons...");

async function monoOnDarkBg(size, outPath, borderRadius = 0) {
  // Render monogram SVG, then composite onto dark background
  const monogramSvg = join(OUT, "logo-monogram-dark.svg");
  const iconPadding = Math.round(size * 0.15);
  const innerSize = size - iconPadding * 2;

  const monogram = await sharp(monogramSvg)
    .resize(innerSize, innerSize, { fit: "contain", background: { r: 0, g: 0, b: 0, alpha: 0 } })
    .png()
    .toBuffer();

  // Create dark background with optional rounded corners
  let bg;
  if (borderRadius > 0) {
    const rect = Buffer.from(
      `<svg width="${size}" height="${size}">
        <rect width="${size}" height="${size}" rx="${borderRadius}" ry="${borderRadius}" fill="${DARK}"/>
      </svg>`
    );
    bg = await sharp(rect).png().toBuffer();
  } else {
    bg = await sharp({
      create: { width: size, height: size, channels: 4, background: { r: 10, g: 10, b: 10, alpha: 255 } },
    })
      .png()
      .toBuffer();
  }

  await sharp(bg)
    .composite([{ input: monogram, gravity: "center" }])
    .png()
    .toFile(outPath);

  console.log(`  ✓ ${outPath.split("/").pop()} (${size}x${size})`);
}

await monoOnDarkBg(32, join(OUT, "favicon-32.png"));
await monoOnDarkBg(16, join(OUT, "favicon-16.png"));
await monoOnDarkBg(180, join(OUT, "apple-touch-icon.png"), 36);
await monoOnDarkBg(192, join(OUT, "icon-192.png"), 38);
await monoOnDarkBg(512, join(OUT, "icon-512.png"), 102);

// --- Generate favicon.ico (use 32px PNG) ---
// Next.js can use a PNG favicon directly, but we also create an .ico for legacy support
// We'll just copy the 32px as favicon.png — Next.js metadata handles the rest
console.log("\nGenerating favicon.svg for modern browsers...");

// SVG favicon — works in all modern browsers and scales perfectly
const faviconResult = buildSvg({
  text: monoText,
  fontSize: 80,
  letterSpacingEm: monoSpacing,
  colorMap: monoColorMap("dark"),
  padding: 16,
});

const faviconSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${faviconResult.width} ${faviconResult.height}" width="${faviconResult.width}" height="${faviconResult.height}">
  <rect width="100%" height="100%" rx="12" fill="${DARK}"/>
  ${faviconResult.svg.match(/<g[\s\S]*<\/g>/)?.[0] || ""}
</svg>`;
writeFileSync(join(OUT, "favicon.svg"), faviconSvg);
console.log("  ✓ favicon.svg");

// --- Generate OG Image (1200x630) ---
console.log("\nGenerating OG image...");

const ogWordmark = buildSvg({
  text: wordmarkText,
  fontSize: 64,
  letterSpacingEm: wordmarkSpacing,
  colorMap: wordmarkColorMap("dark"),
  padding: 0,
});

const ogSubtitle = "Web Design & Development Studio";
const ogSubResult = textToPath(ogSubtitle, 20, 0.12);

// Build subtitle paths manually with muted color
const ogSubPaths = ogSubResult.pathData
  .map((d) => `<path d="${d}" fill="rgba(255,255,255,0.4)"/>`)
  .join("\n    ");

const ogSvg = `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630">
  <rect width="1200" height="630" fill="${DARK}"/>
  <g transform="translate(${Math.round((1200 - ogWordmark.width + 40) / 2)}, ${Math.round((630 - 100) / 2)})">
    ${ogWordmark.svg.match(/<g[\s\S]*<\/g>/)?.[0] || ""}
  </g>
  <g transform="translate(${Math.round((1200 - ogSubResult.width) / 2)}, ${Math.round((630 + 60) / 2)})">
    ${ogSubPaths}
  </g>
</svg>`;

await sharp(Buffer.from(ogSvg)).png().toFile(join(OUT, "og-image.png"));
console.log("  ✓ og-image.png (1200x630)");

console.log("\n✅ All logo files generated in public/images/logo/");
```

- [ ] **Step 2: Run the generation script**

```bash
node scripts/generate-logos.mjs
```

Expected: All files generated in `public/images/logo/` with checkmarks for each.

- [ ] **Step 3: Visually verify SVGs in browser**

Open a few SVGs in the browser to check they look correct:

```bash
open public/images/logo/logo-primary-dark.svg
open public/images/logo/logo-monogram-dark.svg
```

Verify: text is rendered as paths (not editable text), letter-spacing looks tight, teal period/second-W is correct color.

- [ ] **Step 4: Fix any issues with the generation script**

If letter-spacing, sizing, or colors are off, adjust the constants in the script (`wordmarkSpacing`, `monoSpacing`, `wordmarkSize`, `monoSize`, padding values) and re-run.

- [ ] **Step 5: Commit all generated files and the script**

```bash
git add scripts/generate-logos.mjs public/images/logo/
git commit -m "feat: add logo generation script and all logo assets"
```

---

### Task 4: Add favicon and OG metadata to Next.js layout

**Files:**
- Modify: `src/app/layout.tsx:8-16` (metadata export)

- [ ] **Step 1: Update metadata in `src/app/layout.tsx`**

Add icons and openGraph to the existing metadata export:

```tsx
export const metadata: Metadata = {
  title: {
    default: "Woods Websites — Custom Web Design & Development",
    template: "%s | Woods Websites",
  },
  description:
    "Custom-built, high-performance websites crafted with care. No templates. No shortcuts. Web design and development by Sean and Mark Woods.",
  metadataBase: new URL("https://woodswebsites.com"),
  icons: {
    icon: [
      { url: "/images/logo/favicon.svg", type: "image/svg+xml" },
      { url: "/images/logo/favicon-32.png", sizes: "32x32", type: "image/png" },
      { url: "/images/logo/favicon-16.png", sizes: "16x16", type: "image/png" },
    ],
    apple: [{ url: "/images/logo/apple-touch-icon.png", sizes: "180x180" }],
  },
  openGraph: {
    title: "Woods Websites — Custom Web Design & Development",
    description:
      "Custom-built, high-performance websites crafted with care. No templates. No shortcuts.",
    images: [{ url: "/images/logo/og-image.png", width: 1200, height: 630 }],
  },
};
```

- [ ] **Step 2: Verify favicon loads in dev**

```bash
npm run dev
```

Open http://localhost:3000 in the browser. Check the browser tab — should show the WW monogram favicon.

- [ ] **Step 3: Commit**

```bash
git add src/app/layout.tsx
git commit -m "feat: add favicon and OG image metadata"
```

---

### Task 5: Update Nav component logo to match spec

**Files:**
- Modify: `src/components/Nav.tsx:34-42` (logo Link)

The current Nav shows "Woods." in text. Update it to show "Woods Websites." matching the logo spec — Space Grotesk Bold, tight tracking, teal period. Keep it as styled text (not the SVG) since it matches the nav's scale better and the font is already loaded.

- [ ] **Step 1: Update the logo text in Nav.tsx**

Replace the logo `<Link>` contents (lines 34–42):

```tsx
<Link href="/" className="group flex items-center gap-2">
  <span
    className="font-display text-lg font-bold"
    style={{ color: "var(--text)", letterSpacing: "-0.04em" }}
  >
    WOODS WEBSITES
    <span style={{ color: "var(--accent)" }}>.</span>
  </span>
</Link>
```

- [ ] **Step 2: Verify in browser**

Check http://localhost:3000 — nav should show "WOODS WEBSITES." in bold with tight tracking and teal period. Verify it looks good on both desktop and mobile (resize browser).

- [ ] **Step 3: Commit**

```bash
git add src/components/Nav.tsx
git commit -m "feat: update nav logo to match brand spec"
```

---

### Task 6: Add web app manifest for PWA icons

**Files:**
- Create: `public/manifest.json`

- [ ] **Step 1: Create `public/manifest.json`**

```json
{
  "name": "Woods Websites",
  "short_name": "Woods",
  "icons": [
    {
      "src": "/images/logo/icon-192.png",
      "sizes": "192x192",
      "type": "image/png"
    },
    {
      "src": "/images/logo/icon-512.png",
      "sizes": "512x512",
      "type": "image/png"
    }
  ],
  "theme_color": "#0a0a0a",
  "background_color": "#0a0a0a",
  "display": "standalone"
}
```

- [ ] **Step 2: Add manifest link to metadata in `src/app/layout.tsx`**

Add to the metadata export:

```tsx
manifest: "/manifest.json",
```

- [ ] **Step 3: Commit**

```bash
git add public/manifest.json src/app/layout.tsx
git commit -m "feat: add web app manifest with logo icons"
```

---

### Task 7: Clean up old logo file

**Files:**
- Delete: `public/images/woods-websites-logo.jpg`

- [ ] **Step 1: Check if the old logo is referenced anywhere**

```bash
grep -r "woods-websites-logo" src/ --include="*.tsx" --include="*.ts"
```

Expected: No results (the old logo is not used in the current codebase).

- [ ] **Step 2: Delete the old logo file**

```bash
rm public/images/woods-websites-logo.jpg
```

- [ ] **Step 3: Commit**

```bash
git add -u public/images/woods-websites-logo.jpg
git commit -m "chore: remove unused old logo file"
```

---

### Task 8: Final verification

- [ ] **Step 1: Run dev server and verify everything**

```bash
npm run dev
```

Check:
- [ ] Favicon shows WW monogram in browser tab
- [ ] Nav shows "WOODS WEBSITES." with teal period
- [ ] All SVGs in `public/images/logo/` open correctly in browser
- [ ] OG image looks correct: open `public/images/logo/og-image.png`

- [ ] **Step 2: Run build to ensure no errors**

```bash
npm run build
```

Expected: Build succeeds with no errors.

- [ ] **Step 3: Final commit if any fixes were needed**

Only if adjustments were made during verification.
