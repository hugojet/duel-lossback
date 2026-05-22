# duel-lossback.com

Single-page marketing site targeting the SEO keyword **"duel lossback"**, built as a static SPA and deployed to GitHub Pages on the custom domain `duel-lossback.com`.

## Stack

- Vite + React 19 + TypeScript
- Tailwind CSS 3 (custom `duel-*` palette, Sora + Plus Jakarta Sans + Space Mono via Google Fonts)
- Framer Motion (grid parallax hero, lift-on-hover cards, masonry testimonials)
- Recharts (scatter + horizontal bar visualisations)
- React Helmet Async (per-page meta + JSON-LD)

## Local dev

```bash
npm install --legacy-peer-deps
npm run dev
```

## Production build

```bash
npm run build
npm run preview
```

The output goes to `dist/` and is what the GitHub Actions workflow uploads to GitHub Pages.

## Deployment

Push to `main` → `.github/workflows/deploy.yml` builds and publishes to GitHub Pages. The custom domain is bound via `public/CNAME`.

## Contact

Hugo — Duel VIP host — [t.me/hugo_lossback_bot](https://t.me/hugo_lossback_bot)
