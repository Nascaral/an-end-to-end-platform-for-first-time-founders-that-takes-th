# Founder Guide — Marketing Site

Next.js 14 App Router marketing website for Founder Guide.

## Stack

- Next.js 14 (App Router)
- TypeScript
- Tailwind CSS
- Google Fonts: Space Grotesk + Inter

## Getting started

```bash
# 1. Install dependencies
npm install

# 2. Copy environment variables
cp .env.example .env.local

# 3. Add your logo
# Place your logo at: public/logo.png

# 4. Run the dev server (http://localhost:3000)
npm run dev
```

## Build for production

```bash
npm run build
npm run start
```

## Environment variables

See `.env.example`. No secrets are required for the static marketing site.

## Notes

- All sections are in `components/` — edit each independently.
- Brand colors are defined in `tailwind.config.ts` and `globals.css`.
- Logo is referenced from `public/logo.png` — replace with your actual asset.
