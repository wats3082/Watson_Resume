export const siteConfig = {
  identity: {
    name: 'Russell Watson',
    intro:
      'I combine 15 years in asset protection and security operations with hands-on software engineering to turn complex, risk-sensitive workflows into clear, resilient products.',
    email: 'russellalanwatson@gmail.com',
    linkedin: 'https://www.linkedin.com/in/r-wats3082',
    github: 'https://github.com/wats3082',
  },
  experience: [
    {
      company: 'Amazon',
      role: 'Security Software Engineer',
      period: '2022 — Present',
      details: [
        'Leading modern software development for security programs including CI/CD, code review, and sprint execution.',
        'Strengthened identity governance by leading enterprise password rotation initiatives with AWS native security services.',
        'Improved detection and response with tuned alerting, threat hunting workflows, and high-volume incident triage.',
        'Built automated security workflows using Python, PowerShell, and AI agents to accelerate remediation cycles.',
        'Executed vulnerability remediation and patching across application servers, terminal servers, and cloud workloads.',
      ],
    },
  ],
  projects: [
    {
      name: 'Sentinel Ops',
      type: 'Security operations platform',
      summary:
        'A browser simulation of access decisions, investigations, device health, video metadata, and operational KPIs, backed by a deployable AWS architecture.',
      stack: ['React', 'TypeScript', 'AWS CDK', 'DynamoDB'],
      demo: 'https://wats3082.github.io/System-pacs-security/',
      repo: 'https://github.com/wats3082/System-pacs-security',
    },
    {
      name: 'Sentinel KPIs',
      type: 'Security analytics',
      summary:
        'A security dashboard that normalizes operational control measurements into posture scoring, trends, and a prioritized remediation queue.',
      stack: ['React', 'TypeScript', 'Express', 'AWS'],
      demo: 'https://wats3082.github.io/System-security-kpi/',
      repo: 'https://github.com/wats3082/System-security-kpi',
    },
    {
      name: 'Pipeline Studio',
      type: 'Data engineering',
      summary:
        'A safe browser simulation for a configurable web-scraping pipeline with bounded collection, provenance, and JSONL or CSV export.',
      stack: ['React', 'Node.js', 'Data pipelines', 'GitHub Pages'],
      demo: 'https://wats3082.github.io/Project-Web-Scraper/',
      repo: 'https://github.com/wats3082/Project-Web-Scraper',
    },
    {
      name: 'Local Lens',
      type: 'Local discovery',
      summary:
        'A local-first Phoenix business discovery product with multidimensional search, profiles, validated reviews, and browser persistence.',
      stack: ['React', 'Vite', 'Local storage', 'Node test'],
      demo: 'https://wats3082.github.io/Project-Yelp-Clone/',
      repo: 'https://github.com/wats3082/Project-Yelp-Clone',
    },
    {
      name: 'Lumina',
      type: 'Private photo library',
      summary:
        'A local-first photo library for importing, searching, favoriting, tagging, and organizing images without uploading them.',
      stack: ['React', 'Vite', 'IndexedDB', 'Browser APIs'],
      demo: 'https://wats3082.github.io/Project-Photo-TuME/',
      repo: 'https://github.com/wats3082/Project-Photo-TuME',
    },
    {
      name: 'Database Workbench',
      type: 'Safe data operations',
      summary:
        'An explicitly sandboxed browser companion to a SQLite desktop tool, demonstrating validated CRUD, schema inspection, and safe queries.',
      stack: ['Python', 'SQLite', 'JavaScript', 'Transactions'],
      demo: 'https://wats3082.github.io/Project-Database-GUI/',
      repo: 'https://github.com/wats3082/Project-Database-GUI',
    },
    {
      name: 'CivicDraft',
      type: 'Privacy-aware civic tech',
      summary:
        'A transparent workflow that helps constituents verify a federal representative and create an editable, deterministic message draft.',
      stack: ['React', 'TypeScript', 'Vite', 'Vitest'],
      demo: 'https://wats3082.github.io/agentic-emailYourCongressman/',
      repo: 'https://github.com/wats3082/agentic-emailYourCongressman',
    },
    {
      name: 'Secure Decisions',
      type: 'Cybersecurity learning',
      summary:
        'Scenario-based defensive practice with immediate explanations, remediation guidance, local progress, and category analytics.',
      stack: ['React', 'TypeScript', 'Local storage', 'GitHub Pages'],
      demo: 'https://wats3082.github.io/Project-Cybersecurity-Quiz/',
      repo: 'https://github.com/wats3082/Project-Cybersecurity-Quiz',
    },
    {
      name: 'Portfolio 2025',
      type: 'Previous portfolio · Live archive',
      summary:
        'The previous static portfolio, retained as a live snapshot of earlier security architecture, cloud, and automation work.',
      stack: ['HTML', 'CSS', 'JavaScript', 'GitHub Pages'],
      demo: 'https://wats3082.github.io/Portfolio-2025-RW/',
      repo: 'https://github.com/wats3082/Portfolio-2025-RW',
    },
  ],
  strengths: [
    {
      number: '01',
      title: 'Security by context',
      body: 'I start with threat, impact, and operator reality so controls protect the system without fighting the people using it.',
    },
    {
      number: '02',
      title: 'Architecture with seams',
      body: 'Clear boundaries between interface, services, data, and infrastructure keep systems testable and ready to evolve.',
    },
    {
      number: '03',
      title: 'Delivery under pressure',
      body: 'Incident response and program leadership inform how I prioritize, communicate tradeoffs, and close the loop.',
    },
  ],
}
