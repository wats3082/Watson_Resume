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
| Portfolio 2025 (previous portfolio) | [Open archive](https://wats3082.github.io/Portfolio-2025-RW/) | [wats3082/Portfolio-2025-RW](https://github.com/wats3082/Portfolio-2025-RW) |

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

| Tier | Repo | Step 1 | Step 2 | Step 3 | Status |
|------|------|--------|--------|--------|--------|
| TIER 1 - IMMEDIATE (Last 2 weeks) | Portfolio-2025-RW | Archive legacy content | Deprecate old navigation paths | Preserve historical references | pending |
| TIER 1 - IMMEDIATE (Last 2 weeks) | agentic-emailYourCongressman (CivicDraft) | Enhance AI Prompt | Add Email Templates | Track Response Metrics | pending |
| TIER 1 - IMMEDIATE (Last 2 weeks) | Watson_Resume | Optimize Performance | Expand Case Studies | Mobile UX Polish | pending |
| TIER 1 - IMMEDIATE (Last 2 weeks) | Project-Web-Scraper (Pipeline Studio) | Add Authentication | Database Integration | Export Formats | pending |
| TIER 1 - IMMEDIATE (Last 2 weeks) | Project-Yelp-Clone (Local Lens) | Real Map Integration | Review System | Mobile App | pending |
| TIER 1 - IMMEDIATE (Last 2 weeks) | System-video-vms-software | Core VMS Engine | Multi-Camera Support | Analytics & Search | pending |
| TIER 1 - IMMEDIATE (Last 2 weeks) | Project-Database-GUI (Database Workbench) | Query Builder | Multi-Database Support | Performance Profiling | pending |
| TIER 1 - IMMEDIATE (Last 2 weeks) | System-pacs-security (Sentinel Ops) | Security Audit Trail | Real-time Alerts | Integration APIs | pending |
| TIER 1 - IMMEDIATE (Last 2 weeks) | Project-Cybersecurity-Quiz (Secure Decisions) | Content Expansion | Leaderboard | Certification Track | pending |
| TIER 1 - IMMEDIATE (Last 2 weeks) | System-security-kpi (Sentinel KPIs) | Dashboard Customization | Report Generation | Predictive Analytics | pending |
| TIER 1 - IMMEDIATE (Last 2 weeks) | Project-Photo-TuME (Lumina) | Photo Organization | Editing Tools | Sharing & Collaboration | pending |
| TIER 2 - SECONDARY (Early August) | Project-API-Platform | API documentation refresh | Rate-limit visibility | Developer onboarding guides | pending |
| TIER 2 - SECONDARY (Early August) | Project-Cloud-Infra | Infrastructure cost review | Environment hardening | Deployment automation | pending |
| TIER 2 - SECONDARY (Early August) | Project-Task-Tracker | Workflow prioritization | Bulk actions | Notification tuning | pending |
| TIER 2 - SECONDARY (Early August) | Project-Customer-Portal | Authentication polish | Self-service settings | Support handoff | pending |
| TIER 2 - SECONDARY (Early August) | Project-Data-Dashboard | KPI drilldowns | CSV exports | Role-based views | pending |
| TIER 2 - SECONDARY (Early August) | Project-Mobile-Companion | Offline sync | Push alerts | Simplified onboarding | pending |
| TIER 2 - SECONDARY (Early August) | Project-AI-Assistant | Prompt library | Conversation memory | Safety controls | pending |
| TIER 2 - SECONDARY (Early August) | Project-Reporting-Console | Scheduled reports | Chart themes | PDF delivery | pending |
| TIER 2 - SECONDARY (Early August) | Project-Ops-Hub | Incident timeline | Runbook links | Maintenance planning | pending |
| TIER 2 - SECONDARY (Early August) | Project-Site-Relaunch | Content migration | SEO cleanup | Accessibility review | pending |

## Contact

- [LinkedIn](https://www.linkedin.com/in/r-wats3082)
- [GitHub](https://github.com/wats3082)
- [Email](mailto:russellalanwatson@gmail.com)
