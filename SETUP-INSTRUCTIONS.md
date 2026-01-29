# Woods Websites - Setup Instructions

## Portfolio Images Needed

Copy your portfolio images into `/public/images/` with these exact filenames:

1. **aviation-before.png** - Screenshot of Aviation Expeditions old site
2. **aviation-after.png** - Screenshot of Aviation Expeditions new site
3. **svens-before.png** - Screenshot of Sven's Hostel old site
4. **svens-after.png** - Screenshot of Sven's Hostel new site
5. **ovens-new.png** - Screenshot of Ovens Soccer site
6. **woods-websites-logo.jpg** - Your company logo (optional, currently using "W" initial)

## Original Photos Location

Your original photos should be at: `/Users/markwoods/woods-websites/public-photos/`

If they're not there, check your backup or original source folder.

## Running the Development Server

```bash
cd /Users/markwoods/woods-websites
npm run dev
```

Then open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
woods-websites/
├── app/
│   ├── components/
│   │   ├── Navigation.tsx       # Header with menu
│   │   ├── Footer.tsx           # Footer component
│   │   └── BeforeAfterSlider.tsx # Interactive slider for portfolio
│   ├── layout.tsx               # Root layout with fonts
│   ├── page.tsx                 # Homepage
│   └── globals.css              # Global styles & color system
├── public/
│   └── images/                  # Put your portfolio images here!
└── package.json
```

## Design System

### Colors
- **Navy** (primary): Navy blue for text, headers, sections
- **Orange** (accent): Orange for CTAs, highlights, energy
- **Slate**: Neutral grays for body text

### Typography
- **Fraunces**: Display serif for headlines (distinctive, editorial)
- **DM Sans**: Clean sans-serif for body text (readable, friendly)

## What's Built

✅ Homepage with:
- Hero section with gradient background
- Before/After sliders for Aviation Expeditions & Svens Hostel
- Placeholder for Ovens Soccer (will show image when you add it)
- Services overview
- Call-to-action sections

✅ Navigation with mobile menu
✅ Footer with links
✅ Responsive design (mobile-first)

## Next Steps

1. Add your portfolio images to `/public/images/`
2. Run `npm run dev` to see the site
3. We'll build out the remaining pages:
   - Full Portfolio page
   - Services page
   - About page
   - Contact form

## Git & Collaboration

This repo is set up with Git for easy collaboration with your brother:

```bash
# Check status
git status

# Create a new commit
git add .
git commit -m "Your message here"

# When ready to push to GitHub (you'll need to create the repo first)
git remote add origin https://github.com/your-username/woods-websites.git
git push -u origin main
```

## Deployment to Cloudflare Pages

When ready to deploy:

1. Push your repo to GitHub
2. Go to Cloudflare Pages dashboard
3. Connect your GitHub repo
4. Build settings:
   - **Build command**: `npm run build`
   - **Build output directory**: `.next`
   - **Framework preset**: Next.js

Cloudflare will automatically deploy on every push to main!
