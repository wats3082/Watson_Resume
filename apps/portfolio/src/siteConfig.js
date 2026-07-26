export const siteConfig = {
  identity: {
    name: 'Russell Watson',
    subtitle:
      'Security Software and Systems Engineer with extensive experience in cloud security (AWS), incident response, automation, and enterprise system engineering.',
    profileImage: 'profile-screenshot.png',
    email: 'russellalanwatson@gmail.com',
    phone: '+14804167911',
    phoneDisplay: '(480) 416-7911',
  },
  sections: [
    {
      id: 'overview',
      title: 'Overview',
      body: 'Security Software and Systems Engineer with extensive experience in cloud security (AWS), incident response, automation, and enterprise system engineering.',
      layout: 'fit',
      actions: [
        { label: 'View Projects', type: 'section', value: 'projects' },
        { label: 'View Experience', type: 'section', value: 'experience' },
        { label: 'Portfolio 2025', type: 'link', value: 'https://wats3082.github.io/Portfolio-2025-RW/' },
      ],
    },
    {
      id: 'experience',
      title: 'Experience',
      body: 'Security engineering leadership across software delivery, SecOps, incident response, cloud hardening, and enterprise systems reliability.',
      layout: 'scroll',
      actions: [
        { label: 'View Credentials', type: 'section', value: 'credentials' },
        { label: 'Contact Me', type: 'section', value: 'contact' },
      ],
    },
    {
      id: 'credentials',
      title: 'Credentials',
      body: 'Lenel Certified Expert · PMP · Security+ · PSP · AWS Certified Data Engineer · Milestone Video Expert.',
      layout: 'fit',
      actions: [
        { label: 'View Experience', type: 'section', value: 'experience' },
        { label: 'View Projects', type: 'section', value: 'projects' },
      ],
    },
    {
      id: 'projects',
      title: 'Projects',
      body: 'Interactive demos published to GitHub Pages with production-minded engineering patterns.',
      layout: 'fit',
      actions: [
        { label: 'All Repositories', type: 'link', value: 'https://github.com/wats3082?tab=repositories' },
        { label: 'Contact Me', type: 'section', value: 'contact' },
      ],
    },
    {
      id: 'contact',
      title: 'Contact',
      body: 'Open to security engineering, automation, and cloud architecture opportunities.',
      layout: 'fit',
      actions: [
        { label: 'Email', type: 'link', value: 'mailto:russellalanwatson@gmail.com' },
        { label: 'GitHub', type: 'link', value: 'https://github.com/wats3082?tab=repositories' },
      ],
    },
  ],
  certifications: [
    'Lenel Certified Expert',
    'PMP',
    'Security+',
    'PSP Physical Security Professional',
    'AWS Certified Data Engineer',
    'Milestone Video Expert',
  ],
  education: ['B.S. Business & Technology', 'A.S. Computer Science'],
  focusAreas: [
    'Threat detection and SIEM tuning',
    'AWS IAM/KMS security controls',
    'Incident response and forensics',
    'Python, PowerShell, Java automation',
    'Ansible and MCP configuration',
    'Power BI, Tableau, QuickSight analytics',
  ],
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
    {
      company: 'Darden',
      role: 'Program Manager (Operations/Security)',
      period: '2017 — 2022',
      details: ['Coordinated with external vendors to secure critical systems and implement security best practices.'],
    },
    {
      company: 'Oklahoma City RiverSport',
      role: 'Program Manager',
      period: '2015 — 2017',
      details: ['Coordinated with external vendors to secure critical systems and implement security best practices.'],
    },
    {
      company: 'Ford Audio Video',
      role: 'Field Engineer',
      period: '2008 — 2012',
      details: ['Designed, installed, and maintained IDS/IPS solutions for hospitals, airports, and commercial spaces.'],
    },
  ],
  projects: [
    {
      name: 'Open Weather App',
      description:
        'Professional weather API dashboard built with Flask and Python, delivering reliable forecasting and local insights.',
      url: 'https://wats3082.github.io/weather-api-v2/',
    },
    {
      name: 'PyInvaders',
      description: 'Playable browser shooter with boss wave logic and tuned visual effects.',
      url: 'https://wats3082.github.io/Game-PyInvaders/',
    },
    {
      name: 'Web Scraper Automation',
      description: 'Automated data collection from Wikipedia tables into Excel-ready output for analytics and reporting.',
      url: 'https://wats3082.github.io/web-scraper-automation/',
    },
    {
      name: 'Movie Review Database',
      description: 'Searchable MongoDB-backed review system for dynamic content management and user interaction.',
      url: 'https://wats3082.github.io/movie-review-database/',
    },
    {
      name: 'Cybersecurity React Quiz',
      description: 'Interactive cybersecurity quiz experience rebuilt in React and deployed on GitHub Pages.',
      url: 'https://wats3082.github.io/Game-Cybersecurity_React_Quiz/',
    },
    {
      name: 'Project Checkout Cart',
      description: 'Stripe-style checkout frontend with dummy transaction data and an AWS-ready service architecture.',
      url: 'https://wats3082.github.io/Project-Checkout-Cart/',
    },
  ],
}

export const sceneBySection = {
  overview: {
    particleColor: '#94a3b8',
    haloColor: '#64748b',
    secondaryHaloColor: '#cbd5e1',
    accent: '245,158,11',
    mainDensity: 2.3,
    mainSpeed: 1.45,
    primaryHaloPosition: [18, 1.3, -3],
    secondaryHaloPosition: [-18, -1.8, -5],
  },
  experience: {
    particleColor: '#93c5fd',
    haloColor: '#3b82f6',
    secondaryHaloColor: '#bfdbfe',
    accent: '96,165,250',
    mainDensity: 2.5,
    mainSpeed: 1.55,
    primaryHaloPosition: [19, 1.5, -3],
    secondaryHaloPosition: [-19, -2, -5],
  },
  credentials: {
    particleColor: '#a5b4fc',
    haloColor: '#6366f1',
    secondaryHaloColor: '#c7d2fe',
    accent: '139,92,246',
    mainDensity: 2.1,
    mainSpeed: 1.35,
    primaryHaloPosition: [17, 1.2, -3],
    secondaryHaloPosition: [-17, -1.9, -5],
  },
  projects: {
    particleColor: '#5eead4',
    haloColor: '#14b8a6',
    secondaryHaloColor: '#99f6e4',
    accent: '45,212,191',
    mainDensity: 2.7,
    mainSpeed: 1.75,
    primaryHaloPosition: [20, 1.8, -3],
    secondaryHaloPosition: [-20, -2.2, -5],
  },
  contact: {
    particleColor: '#f9a8d4',
    haloColor: '#ec4899',
    secondaryHaloColor: '#fbcfe8',
    accent: '245,158,11',
    mainDensity: 2.2,
    mainSpeed: 1.3,
    primaryHaloPosition: [16, 1, -3],
    secondaryHaloPosition: [-16, -1.6, -5],
  },
}

export const sectionTransition = {
  duration: 0.5,
  ease: [0.22, 1, 0.36, 1],
  initialY: 18,
}
