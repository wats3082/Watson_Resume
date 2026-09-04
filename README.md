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

## AI execution detail (top 6)

Use the template below for each roadmap step so prompts produce implementation-ready output instead of high-level suggestions.

```text
Role: You are my senior engineer. Execute this roadmap step with production-ready detail.

Repo: <repo-name>
Step: <step-title>
Goal: <single measurable outcome>
Current state: <what exists now>
Constraints: <stack, budget, deadlines, no-breaking-changes>

Deliver exactly:
1) Scope: in-scope and out-of-scope
2) Technical plan: architecture, files/modules, API/data changes, security/performance/accessibility impact
3) Implementation tasks: ordered checklist, dependencies, effort estimate, risk level
4) Code output: file-level diffs/patches and exact commands
5) Validation: test cases, manual QA, rollback steps
6) Done criteria: measurable acceptance criteria and evidence to capture
```

### 1. Portfolio-2025-RW - Archive legacy content

- Goal: Preserve historical portfolio without active maintenance and point all traffic to Watson_Resume.
- Current state: Legacy site still listed in deployed table and likely reachable from direct links.
- Constraints: No link rot; keep public archive available; no rewrite of old codebase.
- Success metric: 100 percent of intentional old-entry clicks reach Watson_Resume or archive landing in one hop.
- Evidence: Before/after link map, redirect test results, updated README references.
- Prompt payload:
  - Scope: catalog all inbound links, preserve archive path, add deprecation notice.
  - Technical plan: identify GitHub Pages routing and README/nav references.
  - Implementation tasks: add redirect/deprecation page, update links, verify HTTP behavior.
  - Validation: test top inbound URLs and fallback routes.
  - Done criteria: deprecation banner visible and no broken links.

### 2. agentic-emailYourCongressman (CivicDraft) - Enhance AI prompt

- Goal: Improve output quality and personalization while preventing unsafe or fabricated claims.
- Current state: Prompt exists but likely generic and not segmented by issue type or tone.
- Constraints: Keep response latency acceptable; maintain respectful civic tone; no hallucinated facts.
- Success metric: Higher prompt pass-rate on rubric (clarity, personalization, factual grounding).
- Evidence: Prompt diff, evaluation rubric results across 10 sample issues, failed-case log.
- Prompt payload:
  - Scope: prompt rewrite, issue taxonomy, guardrails, and output schema.
  - Technical plan: structured system prompt + few-shot examples + citation requirement.
  - Implementation tasks: define schema, add templates, tune token budget.
  - Validation: run A/B prompts on fixed test set and score rubric.
  - Done criteria: new prompt outperforms baseline on agreed metrics.

### 3. Watson_Resume - Optimize performance

- Goal: Improve page speed and responsiveness without reducing visual identity.
- Current state: Three.js effects and animation likely drive bundle and runtime cost.
- Constraints: Preserve design language; avoid breaking GitHub Pages deployment.
- Success metric: LCP under 2.5 seconds on desktop and mobile emulation for landing route.
- Evidence: Lighthouse before/after, bundle size delta, FPS capture for hero scene.
- Prompt payload:
  - Scope: initial route performance and heavy assets only.
  - Technical plan: code-splitting, image optimization, deferred scene initialization.
  - Implementation tasks: prioritize top offenders by impact.
  - Validation: repeatable perf run profile and regression checks.
  - Done criteria: target metrics met and no visual regressions.

### 4. Project-Web-Scraper (Pipeline Studio) - Add authentication

- Goal: Protect scraping workflows and user data with secure account access controls.
- Current state: Feature likely works without identity boundaries or per-user limits.
- Constraints: Keep onboarding simple; secure secrets; no plaintext tokens.
- Success metric: Authenticated-only scrape actions with per-user access enforcement.
- Evidence: Auth flow diagram, role matrix, test results for unauthorized access paths.
- Prompt payload:
  - Scope: login, session/token lifecycle, protected endpoints/UI guards.
  - Technical plan: choose auth pattern, secret storage, and rate-limit coupling.
  - Implementation tasks: schema changes, middleware, UI flow updates.
  - Validation: negative tests for bypass attempts and token expiry handling.
  - Done criteria: unauthorized scrape attempts consistently blocked.

### 5. Project-Yelp-Clone (Local Lens) - Real map integration

- Goal: Replace placeholder location behavior with reliable, production-like map and search flow.
- Current state: Mock map/location data likely drives listings and pins.
- Constraints: API quota awareness; graceful degradation when geolocation denied.
- Success metric: Accurate pin placement and location-based filtering on live data.
- Evidence: Demo scenarios (city search, near-me, denied geolocation), API usage report.
- Prompt payload:
  - Scope: map provider integration, geocoding, marker clustering, filter sync.
  - Technical plan: data pipeline from query to map + list consistency.
  - Implementation tasks: provider adapter, caching, error states.
  - Validation: edge tests for ambiguous addresses and empty results.
  - Done criteria: map/list stay synchronized across all filter transitions.

### 6. System-video-vms-software - Core VMS engine

- Goal: Deliver stable ingest-storage-playback loop for at least one camera stream profile.
- Current state: Project is active but core pipeline maturity is unclear.
- Constraints: Prioritize reliability over feature breadth; explicit failure handling required.
- Success metric: Sustained ingest and playback without data loss for defined test duration.
- Evidence: Pipeline architecture doc, throughput logs, failure recovery test output.
- Prompt payload:
  - Scope: ingest, storage indexing, retrieval/playback baseline.
  - Technical plan: stream handling model, retention policy, and storage format.
  - Implementation tasks: pipeline stages, observability hooks, retry strategy.
  - Validation: load simulation, disconnect/reconnect behavior, corruption checks.
  - Done criteria: baseline SLO met for uptime and playback continuity.

## Contact

- [LinkedIn](https://www.linkedin.com/in/r-wats3082)
- [GitHub](https://github.com/wats3082)
- [Email](mailto:russellalanwatson@gmail.com)
