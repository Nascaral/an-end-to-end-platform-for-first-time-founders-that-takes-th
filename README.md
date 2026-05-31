# Founder AI Guide — Website

Next.js 14 App Router marketing site for FounderAI Guide.

## Stack

- **Next.js 14** (App Router)
- **TypeScript**
- **Tailwind CSS 3**
- **Google Fonts** (Space Grotesk + Inter)

## Getting started

```bash
# 1. Install dependencies
npm install

# 2. Copy environment file (no values required for the static site)
cp .env.example .env.local

# 3. Run locally (http://localhost:3000)
npm run dev
```

## Production build

```bash
npm run build
npm start
```

## Notes

- Place your actual `logo.png` file in `public/logo.png` — the placeholder in this repo is empty.
- No backend or database is configured; this is a pure marketing site with Next.js route handlers available for future form/waitlist endpoints.
- The site is intentionally honest about unvalidated assumptions per the validation snapshot (PIVOT verdict at build time). Copy does not paper over the hidden assumptions surfaced during validation.
