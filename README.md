# Watson Resume

Monorepo beta template for your portfolio and future project sites.

## Layout

- `apps/portfolio` — deployable React + Vite website
- `packages/scene-kit` — reusable 3D UI layer (`@watson/scene-kit`)

## Scene kit components

- `ThreeHeroBackground` — animated Three.js hero canvas
- `ThreeCardTilt` — interactive 3D card tilt wrapper
- `ThreeCursorGlow` — modern cursor-follow glow layer

## Commands

```bash
npm install
npm run dev
npm run build
```

## Deploy

GitHub Actions deploys `apps/portfolio/dist` to `gh-pages` from `main`.
