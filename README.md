# Russell Watson Portfolio

Canonical portfolio for **Russell Watson**, a security-minded software engineer in Phoenix, Arizona.

Russell brings 15 years of experience across asset protection, field systems, security operations, and
program delivery to modern software engineering. The portfolio focuses on how that operational background
shapes secure, dependable products built with React, TypeScript, JavaScript, AWS, and automation.

**Live portfolio:** <https://wats3082.github.io/Watson_Resume/>

## Deployed work

| Project | Live demo | Source |
| --- | --- | --- |
| Sentinel Ops | [Open demo](https://wats3082.github.io/System-pacs-security/) | [wats3082/System-pacs-security](https://github.com/wats3082/System-pacs-security) |
| Sentinel KPIs | [Open demo](https://wats3082.github.io/System-security-kpi/) | [wats3082/System-security-kpi](https://github.com/wats3082/System-security-kpi) |
| Pipeline Studio | [Open demo](https://wats3082.github.io/Project-Web-Scraper/) | [wats3082/Project-Web-Scraper](https://github.com/wats3082/Project-Web-Scraper) |
| Local Lens | [Open demo](https://wats3082.github.io/Project-Yelp-Clone/) | [wats3082/Project-Yelp-Clone](https://github.com/wats3082/Project-Yelp-Clone) |
| Lumina | [Open demo](https://wats3082.github.io/Project-Photo-TuME/) | [wats3082/Project-Photo-TuME](https://github.com/wats3082/Project-Photo-TuME) |
| Database Workbench | [Open demo](https://wats3082.github.io/Project-Database-GUI/) | [wats3082/Project-Database-GUI](https://github.com/wats3082/Project-Database-GUI) |
| CivicDraft | [Open demo](https://wats3082.github.io/agentic-emailYourCongressman/) | [wats3082/agentic-emailYourCongressman](https://github.com/wats3082/agentic-emailYourCongressman) |
| Secure Decisions | [Open demo](https://wats3082.github.io/Project-Cybersecurity-Quiz/) | [wats3082/Project-Cybersecurity-Quiz](https://github.com/wats3082/Project-Cybersecurity-Quiz) |

## Architecture

This repository is an npm workspace:

```text
apps/portfolio/       React 19 + Vite portfolio application
packages/scene-kit/   Reusable Three.js backgrounds, cursor effects, and card interactions
aws-backend/          Serverless contact/backend foundation
```

The deployed site combines semantic React sections, data-driven case studies, Framer Motion transitions,
and a custom Three.js particle scene. Vite builds the application with the `/Watson_Resume/` base path,
and the GitHub Actions workflow publishes `apps/portfolio/dist` through GitHub Pages.

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
workflow installs locked workspace dependencies, lints and builds the portfolio, then publishes the generated
app with GitHub's official Pages actions at the canonical URL above.

## Roadmap

Track active workstreams across the highest-priority repositories from recent activity.

| Repo | Step 1 | Step 2 | Step 3 | Status |
| --- | --- | --- | --- | --- |
| agentic-emailYourCongressman (CivicDraft) | Enhance AI prompt quality | Add reusable issue-based email templates | Track response metrics and outcomes | pending |
| Watson_Resume | Optimize site performance | Expand case-study detail | Polish mobile UX and layout consistency | in progress |
| Project-Web-Scraper (Pipeline Studio) | Add authentication and access control | Add persistent scrape history | Add CSV/JSON/XML export support | pending |
| Project-Yelp-Clone (Local Lens) | Integrate live map and geolocation | Build review submission and moderation | Prepare mobile companion experience | pending |
| System-video-vms-software | Build core ingest-storage-playback engine | Add multi-camera stream support | Add analytics and event search | pending |
| Project-Database-GUI (Database Workbench) | Add visual query builder | Expand multi-database support | Add query performance profiling | pending |

## Contact

- [LinkedIn](https://www.linkedin.com/in/r-wats3082)
- [GitHub](https://github.com/wats3082)
- [Email](mailto:russellalanwatson@gmail.com)
