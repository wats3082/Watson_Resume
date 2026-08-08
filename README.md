# Russell Watson Portfolio

Canonical portfolio for **Russell Watson**, a security-minded software engineer in Phoenix, Arizona.

Russell brings 15 years of experience across asset protection, field systems, security operations, and
program delivery to modern software engineering. The portfolio focuses on how that operational background
shapes secure, dependable products built with React, TypeScript, JavaScript, AWS, and automation.

**Live portfolio:** <https://wats3082.github.io/Watson_Resume/>

## Featured work

| Project | Live demo | Source |
| --- | --- | --- |
| Email Your Congressman | [Open demo](https://wats3082.github.io/agentic-emailYourCongressman/) | [wats3082/agentic-emailYourCongressman](https://github.com/wats3082/agentic-emailYourCongressman) |
| Weather API v2 | [Open demo](https://wats3082.github.io/weather-api-v2/) | [wats3082/weather-api-v2](https://github.com/wats3082/weather-api-v2) |
| Abyss Diver | [Play demo](https://wats3082.github.io/Game-AbyssDiver/) | [wats3082/Game-AbyssDiver](https://github.com/wats3082/Game-AbyssDiver) |

## Architecture

This repository is an npm workspace:

```text
apps/portfolio/       React 19 + Vite portfolio application
packages/scene-kit/   Reusable Three.js backgrounds, cursor effects, and card interactions
aws-backend/          Serverless contact/backend foundation
```

The deployed site combines semantic React sections, data-driven case studies, Framer Motion transitions,
and a custom Three.js particle scene. Vite builds the application with the `/Watson_Resume/` base path,
and the GitHub Actions workflow publishes `apps/portfolio/dist` to the `gh-pages` branch.

## Local setup

Requirements: Node.js 22 and npm.

```bash
git clone https://github.com/wats3082/Watson_Resume.git
cd Watson_Resume
npm ci
npm run dev
```

Vite prints the local development URL. To create and inspect a production build:

```bash
npm run build
npm run preview
```

Run the portfolio linter with:

```bash
npm run lint --workspace portfolio
```

## Deployment

Pushes to `main` run [`.github/workflows/deploy-pages.yml`](.github/workflows/deploy-pages.yml). The
workflow installs workspace dependencies, builds the portfolio, and publishes the generated app to GitHub
Pages at the canonical URL above.

## Contact

- [LinkedIn](https://www.linkedin.com/in/r-wats3082)
- [GitHub](https://github.com/wats3082)
- [Email](mailto:russellalanwatson@gmail.com)
