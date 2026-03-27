/**
 * Logo Generation Script
 * Generates all logo assets for Woods Websites using Space Grotesk Bold font.
 * Converts text to SVG paths (no live text) and rasterizes to PNG with sharp.
 */

import opentype from 'opentype.js';
import sharp from 'sharp';
import { readFileSync, writeFileSync, mkdirSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, '..');

// ─── Config ──────────────────────────────────────────────────────────────────

const FONT_PATH = join(__dirname, 'fonts', 'SpaceGrotesk-Bold.woff');
const OUT_DIR = join(ROOT, 'public', 'images', 'logo');

const COLORS = {
  ACCENT: '#2ec4b6',
  DARK: '#0a0a0a',
  WHITE: '#ffffff',
};

// ─── Load Font ────────────────────────────────────────────────────────────────

const fontBuf = readFileSync(FONT_PATH);
const font = opentype.parse(fontBuf.buffer);
console.log(`Font loaded: ${font.names.fullName?.en ?? 'Space Grotesk Bold'} (${font.glyphs.length} glyphs)`);

mkdirSync(OUT_DIR, { recursive: true });

// ─── Helpers ─────────────────────────────────────────────────────────────────

/**
 * Render a string of characters to an array of SVG path elements.
 * Returns { paths, totalWidth, ascender, descender } all in font units.
 *
 * @param {string} text
 * @param {number} fontSize   - font units scale (unitsPerEm = 1000 assumed)
 * @param {number} letterSpacingEm  - e.g. -0.04 for -4%
 * @param {Array<{char:string, fill:string}>|null} colorMap  - per-char fill overrides
 * @param {string} defaultFill
 */
function textToPaths(text, fontSize, letterSpacingEm, colorMap, defaultFill) {
  const scale = fontSize / font.unitsPerEm;
  const letterSpacingUnits = letterSpacingEm * font.unitsPerEm;

  let x = 0;
  const paths = [];

  for (let i = 0; i < text.length; i++) {
    const char = text[i];
    const glyph = font.charToGlyph(char);
    const fill = colorMap?.[i] ?? defaultFill;

    if (char !== ' ') {
      const path = glyph.getPath(x * scale, 0, fontSize);
      const d = path.toPathData(3);
      if (d && d.trim()) {
        paths.push(`<path d="${d}" fill="${fill}"/>`);
      }
    }

    x += (glyph.advanceWidth ?? 0) + letterSpacingUnits;
  }

  const totalWidth = x * scale;
  const ascender = (font.ascender / font.unitsPerEm) * fontSize;
  const descender = Math.abs(font.descender / font.unitsPerEm) * fontSize;

  return { paths, totalWidth, ascender, descender };
}

/**
 * Build a standalone SVG string (transparent background).
 */
function buildSVG(paths, width, height, viewBox) {
  const vb = viewBox ?? `0 0 ${width} ${height}`;
  return [
    `<svg xmlns="http://www.w3.org/2000/svg" viewBox="${vb}" width="${width}" height="${height}">`,
    ...paths,
    '</svg>',
  ].join('\n');
}

/**
 * Build an SVG with a solid dark background and optional rounded rect.
 */
function buildSVGOnDark(paths, width, height, cornerRadius = 0) {
  const rx = cornerRadius > 0 ? ` rx="${cornerRadius}"` : '';
  return [
    `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${width} ${height}" width="${width}" height="${height}">`,
    `<rect width="${width}" height="${height}"${rx} fill="${COLORS.DARK}"/>`,
    ...paths,
    '</svg>',
  ].join('\n');
}

// ─── Wordmark ─────────────────────────────────────────────────────────────────

/**
 * Build wordmark SVG paths.
 * "WOODS WEBSITES." — letter-spacing -0.04em, teal period (or all dark for teal variant)
 *
 * @param {string} primaryColor  - color for non-period chars
 * @param {string} periodColor   - color for the "."
 */
function buildWordmarkPaths(primaryColor, periodColor, fontSize = 80) {
  const text = 'WOODS WEBSITES.';
  const LETTER_SPACING = -0.04;

  // Build per-char color map
  const colorMap = text.split('').map((ch) => (ch === '.' ? periodColor : primaryColor));

  return textToPaths(text, fontSize, LETTER_SPACING, colorMap, primaryColor);
}

/**
 * Build a wordmark SVG with 40px padding on all sides.
 */
function buildWordmarkSVG(primaryColor, periodColor) {
  const PADDING = 40;
  const FONT_SIZE = 80;
  const { paths, totalWidth, ascender, descender } = buildWordmarkPaths(primaryColor, periodColor, FONT_SIZE);

  const svgWidth = Math.ceil(totalWidth + PADDING * 2);
  const svgHeight = Math.ceil(ascender + descender + PADDING * 2);

  // Translate paths so text sits properly inside the padding
  // getPath uses y=0 as baseline; ascender is above baseline, descender below
  const tx = PADDING;
  const ty = PADDING + ascender;

  const translatedPaths = paths.map((p) =>
    p.replace('<path ', `<path transform="translate(${tx.toFixed(1)},${ty.toFixed(1)})" `)
  );

  return buildSVG(translatedPaths, svgWidth, svgHeight);
}

// Wordmark variants
const wordmarkVariants = [
  { name: 'logo-primary-dark.svg', primary: COLORS.WHITE, period: COLORS.ACCENT },
  { name: 'logo-primary-light.svg', primary: COLORS.DARK, period: COLORS.ACCENT },
  { name: 'logo-primary-teal.svg', primary: COLORS.DARK, period: COLORS.DARK },
];

console.log('\nGenerating wordmark SVGs...');
for (const v of wordmarkVariants) {
  const svg = buildWordmarkSVG(v.primary, v.period);
  const outPath = join(OUT_DIR, v.name);
  writeFileSync(outPath, svg, 'utf8');
  console.log(`  ✓ ${v.name}`);
}

// ─── Monogram ─────────────────────────────────────────────────────────────────

/**
 * Build monogram "WW" SVG.
 * First W = primary color, second W = teal (or dark for teal variant).
 * Letter-spacing -0.08em.
 */
function buildMonogramSVG(firstColor, secondColor) {
  const text = 'WW';
  const FONT_SIZE = 120;
  const LETTER_SPACING = -0.08;
  const PADDING = 20;

  const colorMap = [firstColor, secondColor];
  const { paths, totalWidth, ascender, descender } = textToPaths(
    text,
    FONT_SIZE,
    LETTER_SPACING,
    colorMap,
    firstColor
  );

  const svgWidth = Math.ceil(totalWidth + PADDING * 2);
  const svgHeight = Math.ceil(ascender + descender + PADDING * 2);

  const tx = PADDING;
  const ty = PADDING + ascender;

  const translatedPaths = paths.map((p) =>
    p.replace('<path ', `<path transform="translate(${tx.toFixed(1)},${ty.toFixed(1)})" `)
  );

  return buildSVG(translatedPaths, svgWidth, svgHeight);
}

const monogramVariants = [
  { name: 'logo-monogram-dark.svg', first: COLORS.WHITE, second: COLORS.ACCENT },
  { name: 'logo-monogram-light.svg', first: COLORS.DARK, second: COLORS.ACCENT },
  { name: 'logo-monogram-teal.svg', first: COLORS.DARK, second: COLORS.DARK },
];

console.log('\nGenerating monogram SVGs...');
for (const v of monogramVariants) {
  const svg = buildMonogramSVG(v.first, v.second);
  const outPath = join(OUT_DIR, v.name);
  writeFileSync(outPath, svg, 'utf8');
  console.log(`  ✓ ${v.name}`);
}

// ─── PNG Wordmarks ────────────────────────────────────────────────────────────

console.log('\nGenerating PNG wordmarks...');

async function svgToPNG(svgPath, outPath, width) {
  await sharp(svgPath).resize({ width }).png().toFile(outPath);
}

const wordmarkPNGs = [
  { svg: 'logo-primary-dark.svg', png: 'logo-primary-dark.png', width: 2400 },
  { svg: 'logo-primary-light.svg', png: 'logo-primary-light.png', width: 2400 },
];

for (const p of wordmarkPNGs) {
  await svgToPNG(join(OUT_DIR, p.svg), join(OUT_DIR, p.png), p.width);
  console.log(`  ✓ ${p.png}`);
}

// Monogram PNG — square 1024px
// We build a fresh SVG on dark background for the monogram PNG
function buildMonogramOnDarkSVG(size) {
  const FONT_SIZE = size * 0.65;
  const LETTER_SPACING = -0.08;

  const { paths, totalWidth, ascender, descender } = textToPaths(
    'WW',
    FONT_SIZE,
    LETTER_SPACING,
    [COLORS.WHITE, COLORS.ACCENT],
    COLORS.WHITE
  );

  const contentWidth = totalWidth;
  const contentHeight = ascender + descender;
  const tx = (size - contentWidth) / 2;
  const ty = (size - contentHeight) / 2 + ascender;

  const translatedPaths = paths.map((p) =>
    p.replace('<path ', `<path transform="translate(${tx.toFixed(1)},${ty.toFixed(1)})" `)
  );

  return buildSVGOnDark(translatedPaths, size, size, 0);
}

const monoSVG = buildMonogramOnDarkSVG(1024);
const monoSVGPath = join(OUT_DIR, '_monogram-1024-tmp.svg');
writeFileSync(monoSVGPath, monoSVG, 'utf8');
await sharp(monoSVGPath).resize({ width: 1024, height: 1024 }).png().toFile(join(OUT_DIR, 'logo-monogram-dark.png'));
console.log(`  ✓ logo-monogram-dark.png`);

// ─── Favicons ─────────────────────────────────────────────────────────────────

console.log('\nGenerating favicons...');

/**
 * Build a favicon SVG at given size. Uses a rounded dark background.
 */
function buildFaviconSVG(size) {
  const cornerRadius = Math.round(size * 0.18);
  const FONT_SIZE = size * 0.62;
  const LETTER_SPACING = -0.08;

  const { paths, totalWidth, ascender, descender } = textToPaths(
    'WW',
    FONT_SIZE,
    LETTER_SPACING,
    [COLORS.WHITE, COLORS.ACCENT],
    COLORS.WHITE
  );

  const contentWidth = totalWidth;
  const contentHeight = ascender + descender;
  const tx = (size - contentWidth) / 2;
  const ty = (size - contentHeight) / 2 + ascender;

  const translatedPaths = paths.map((p) =>
    p.replace('<path ', `<path transform="translate(${tx.toFixed(1)},${ty.toFixed(1)})" `)
  );

  return buildSVGOnDark(translatedPaths, size, size, cornerRadius);
}

// favicon.svg — scalable, used as the <link rel="icon" type="image/svg+xml">
const faviconSVG = buildFaviconSVG(32);
writeFileSync(join(OUT_DIR, 'favicon.svg'), faviconSVG, 'utf8');
console.log(`  ✓ favicon.svg`);

// Raster favicon sizes
const faviconSizes = [
  { name: 'favicon-16.png', size: 16 },
  { name: 'favicon-32.png', size: 32 },
  { name: 'apple-touch-icon.png', size: 180 },
  { name: 'icon-192.png', size: 192 },
  { name: 'icon-512.png', size: 512 },
];

for (const f of faviconSizes) {
  const svg = buildFaviconSVG(f.size);
  const tmpPath = join(OUT_DIR, `_favicon-${f.size}-tmp.svg`);
  writeFileSync(tmpPath, svg, 'utf8');
  await sharp(tmpPath).resize({ width: f.size, height: f.size }).png().toFile(join(OUT_DIR, f.name));
  console.log(`  ✓ ${f.name}`);
}

// ─── OG Image ─────────────────────────────────────────────────────────────────

console.log('\nGenerating OG image...');

async function buildOGImage() {
  const WIDTH = 1200;
  const HEIGHT = 630;
  const WORDMARK_FONT_SIZE = 72;
  const SUBTITLE_FONT_SIZE = 28;
  const LETTER_SPACING = -0.04;

  // Build wordmark paths
  const wm = buildWordmarkPaths(COLORS.WHITE, COLORS.ACCENT, WORDMARK_FONT_SIZE);
  const wmTx = (WIDTH - wm.totalWidth) / 2;
  const wmTy = HEIGHT / 2 - 10; // slightly above center (baseline)

  const wmPaths = wm.paths.map((p) =>
    p.replace('<path ', `<path transform="translate(${wmTx.toFixed(1)},${wmTy.toFixed(1)})" `)
  );

  // Build subtitle paths
  const subtitle = 'Web Design & Development Studio';
  const subResult = textToPaths(subtitle, SUBTITLE_FONT_SIZE, 0.08, null, COLORS.WHITE);
  const subTx = (WIDTH - subResult.totalWidth) / 2;
  const subTy = wmTy + wm.descender + SUBTITLE_FONT_SIZE * 1.4;

  // Make subtitle slightly dimmer by using opacity
  const subPaths = subResult.paths.map((p) =>
    p
      .replace('<path ', `<path opacity="0.5" transform="translate(${subTx.toFixed(1)},${subTy.toFixed(1)})" `)
  );

  const ogSVG = [
    `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${WIDTH} ${HEIGHT}" width="${WIDTH}" height="${HEIGHT}">`,
    `<rect width="${WIDTH}" height="${HEIGHT}" fill="${COLORS.DARK}"/>`,
    ...wmPaths,
    ...subPaths,
    '</svg>',
  ].join('\n');

  const tmpPath = join(OUT_DIR, '_og-tmp.svg');
  writeFileSync(tmpPath, ogSVG, 'utf8');
  await sharp(tmpPath).resize({ width: WIDTH, height: HEIGHT }).png().toFile(join(OUT_DIR, 'og-image.png'));
  console.log(`  ✓ og-image.png`);
}

await buildOGImage();

// ─── Cleanup temp files ───────────────────────────────────────────────────────

import { readdirSync, unlinkSync } from 'fs';

const tmpFiles = readdirSync(OUT_DIR).filter((f) => f.startsWith('_') && f.endsWith('.svg'));
for (const f of tmpFiles) {
  unlinkSync(join(OUT_DIR, f));
}
console.log(`\nCleaned up ${tmpFiles.length} temp file(s).`);

// ─── Summary ─────────────────────────────────────────────────────────────────

console.log('\n✅ All logo assets generated successfully!');
console.log(`Output: ${OUT_DIR}`);

const allFiles = readdirSync(OUT_DIR).sort();
console.log(`\nFiles (${allFiles.length}):`);
for (const f of allFiles) {
  console.log(`  ${f}`);
}
