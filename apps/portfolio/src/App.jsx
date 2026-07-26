import { useState } from 'react'
import { ThreeCardTilt, ThreeCursorGlow, ThreeHeroBackground } from '@watson/scene-kit'
import './App.css'

const sections = [
  {
    id: 'overview',
    title: 'Overview',
    body: 'Security Software and Systems Engineer with extensive experience in cloud security (AWS), incident response, automation, and enterprise system engineering.',
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
    actions: [
      { label: 'View Credentials', type: 'section', value: 'credentials' },
      { label: 'Contact Me', type: 'section', value: 'contact' },
    ],
  },
  {
    id: 'credentials',
    title: 'Credentials',
    body: 'Lenel Certified Expert · PMP · Security+ · PSP · AWS Certified Data Engineer · Milestone Video Expert.',
    actions: [
      { label: 'View Experience', type: 'section', value: 'experience' },
      { label: 'View Projects', type: 'section', value: 'projects' },
    ],
  },
  {
    id: 'projects',
    title: 'Projects',
    body: 'Interactive demos published to GitHub Pages with production-minded engineering patterns.',
    actions: [
      { label: 'All Repositories', type: 'link', value: 'https://github.com/wats3082?tab=repositories' },
      { label: 'Contact Me', type: 'section', value: 'contact' },
    ],
  },
  {
    id: 'contact',
    title: 'Contact',
    body: 'Open to security engineering, automation, and cloud architecture opportunities.',
    actions: [
      { label: 'Email', type: 'link', value: 'mailto:russellalanwatson@gmail.com' },
      { label: 'GitHub', type: 'link', value: 'https://github.com/wats3082?tab=repositories' },
    ],
  },
]

const certifications = [
  'Lenel Certified Expert',
  'PMP',
  'Security+',
  'PSP Physical Security Professional',
  'AWS Certified Data Engineer',
  'Milestone Video Expert',
]

const education = ['B.S. Business & Technology', 'A.S. Computer Science']

const focusAreas = [
  'Threat detection and SIEM tuning',
  'AWS IAM/KMS security controls',
  'Incident response and forensics',
  'Python, PowerShell, Java automation',
  'Ansible and MCP configuration',
  'Power BI, Tableau, QuickSight analytics',
]

const experience = [
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
]

const projects = [
  {
    name: 'Open Weather App',
    description: 'Professional weather API dashboard built with Flask and Python, delivering reliable forecasting and local insights.',
    url: 'https://wats3082.github.io/weather-api-v2/',
    image: `${import.meta.env.BASE_URL}project-weather.jpg`,
  },
  {
    name: 'PyInvaders',
    description: 'Playable browser shooter with boss wave logic and tuned visual effects.',
    url: 'https://wats3082.github.io/Game-PyInvaders/',
    image: `${import.meta.env.BASE_URL}project-pyinvaders.jpg`,
  },
  {
    name: 'Web Scraper Automation',
    description: 'Automated data collection from Wikipedia tables into Excel-ready output for analytics and reporting.',
    url: 'https://wats3082.github.io/web-scraper-automation/',
    image: `${import.meta.env.BASE_URL}project-scraper.jpg`,
  },
  {
    name: 'Movie Review Database',
    description: 'Searchable MongoDB-backed review system for dynamic content management and user interaction.',
    url: 'https://wats3082.github.io/movie-review-database/',
    image: `${import.meta.env.BASE_URL}project-movie.jpg`,
  },
]

function App() {
  const [active, setActive] = useState('overview')
  const activeSection = sections.find((s) => s.id === active) || sections[0]
  const scrollSections = new Set(['experience', 'projects'])
  const sectionNeedsScroll = scrollSections.has(active)

  return (
    <div className="app-shell">
      <ThreeCursorGlow color="148,163,184" />
      <header className="title-bar">
        <ThreeHeroBackground className="hero-scene" particleColor="#94a3b8" haloColor="#64748b" />
        <div className="title-copy">
          <p className="eyebrow">Russell Watson</p>
          <h1>Security Software & Systems Engineer</h1>
          <p className="subtitle">{sections[0].body}</p>
        </div>
        <div className="profile-wrap">
          <img
            className="profile-image"
            src={`${import.meta.env.BASE_URL}profile-screenshot.jpg`}
            alt="Russell Watson profile"
          />
        </div>
      </header>

      <nav className="menu-panel" aria-label="Profile sections">
        {sections.map((section) => (
          <button
            key={section.id}
            type="button"
            className={`menu-item ${active === section.id ? 'active' : ''}`}
            onClick={() => setActive(section.id)}
          >
            {section.title}
          </button>
        ))}
      </nav>

      <main className={`main-panel ${sectionNeedsScroll ? 'section-scroll' : 'section-fit'}`}>
        <article className="content-card spotlight">
          <h2>{activeSection.title}</h2>
          <p>{activeSection.body}</p>
          <div className="section-actions">
            {activeSection.actions?.map((action) =>
              action.type === 'section' ? (
                <button key={action.label} type="button" className="section-btn" onClick={() => setActive(action.value)}>
                  {action.label}
                </button>
              ) : (
                <a key={action.label} className="section-btn section-link" href={action.value} target="_blank" rel="noreferrer">
                  {action.label}
                </a>
              ),
            )}
          </div>
        </article>

        {active === 'overview' && (
          <section className="content-grid">
            <article className="content-card">
              <h3>Core Focus Areas</h3>
              <ul className="chip-list">
                {focusAreas.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
            <article className="content-card">
              <h3>Education & Community</h3>
              <p>B.S. Business & Technology</p>
              <p>A.S. Computer Science</p>
              <p>Community Outreach: Chandler Schools STEM Judge and Volunteer.</p>
            </article>
          </section>
        )}

        {active === 'experience' && (
          <section className="stack-list">
            {experience.map((job) => (
              <article key={`${job.company}-${job.period}`} className="content-card timeline-card">
                <div className="timeline-header">
                  <h3>
                    {job.role} · {job.company}
                  </h3>
                  <span>{job.period}</span>
                </div>
                <ul className="detail-list">
                  {job.details.map((detail) => (
                    <li key={detail}>{detail}</li>
                  ))}
                </ul>
              </article>
            ))}
          </section>
        )}

        {active === 'credentials' && (
          <section className="content-grid">
            <article className="content-card">
              <h3>Certifications</h3>
              <ul className="detail-list">
                {certifications.map((cert) => (
                  <li key={cert}>{cert}</li>
                ))}
              </ul>
            </article>
            <article className="content-card">
              <h3>Education</h3>
              <ul className="detail-list">
                {education.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
          </section>
        )}

        {active === 'projects' && (
          <section className="project-grid">
            {projects.map((project) => (
              <ThreeCardTilt key={project.name} className="project-card">
                <a className="project-link" href={project.url} target="_blank" rel="noreferrer">
                  <div className="project-media">
                    <img src={project.image} alt={`${project.name} preview`} loading="lazy" />
                  </div>
                  <h3>{project.name}</h3>
                  <p>{project.description}</p>
                  <span>Open GitHub Pages demo →</span>
                </a>
              </ThreeCardTilt>
            ))}
          </section>
        )}

        {active === 'contact' && (
          <section className="content-grid">
            <article className="content-card">
              <h3>Email</h3>
              <p>
                <a href="mailto:russellalanwatson@gmail.com">russellalanwatson@gmail.com</a>
              </p>
              <h3>Phone</h3>
              <p>
                <a href="tel:+14804167911">(480) 416-7911</a>
              </p>
            </article>
            <article className="content-card">
              <h3>Links</h3>
              <p>
                <a href="https://github.com/wats3082?tab=repositories" target="_blank" rel="noreferrer">
                  GitHub Repositories
                </a>
              </p>
              <p>
                <a href="https://wats3082.github.io/Portfolio-2025-RW/" target="_blank" rel="noreferrer">
                  Portfolio 2025
                </a>
              </p>
            </article>
          </section>
        )}
      </main>
    </div>
  )
}

export default App
