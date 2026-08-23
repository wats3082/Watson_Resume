import { siteConfig } from './siteConfig'
import './App.css'

const Arrow = () => <span aria-hidden="true">↗</span>

function App() {
  const { identity, experience, projects, strengths } = siteConfig

  return (
    <div className="app-shell">
      <a className="skip-link" href="#main">Skip to content</a>
      <header className="site-header">
        <div className="header-inner">
          <a className="brand" href="#top" aria-label="Russell Watson home">
            RW<span>.</span>
          </a>
          <nav aria-label="Primary navigation">
            <a href="#about">About</a>
            <a href="#experience">Experience</a>
            <a href="#projects">Projects</a>
            <a href="#expertise">Expertise</a>
            <a href="#contact">Contact</a>
          </nav>
        </div>
      </header>

      <main id="main">
        <section className="hero" id="top" aria-labelledby="hero-title">
          <div className="hero-copy">
            <p className="eyebrow">Security-minded software engineer · Phoenix, Arizona</p>
            <h1 id="hero-title">
              I build dependable software for <em>high-stakes work.</em>
            </h1>
            <p className="hero-lede">{identity.intro}</p>
            <div className="hero-actions">
              <a className="button button-primary" href="#projects">Explore projects</a>
              <a className="button button-secondary" href={`mailto:${identity.email}`}>Start a conversation</a>
            </div>
          </div>
          <aside className="hero-proof">
            <p className="proof-label">What I bring</p>
            <strong>15 years</strong>
            <span>protecting people, assets, and systems</span>
            <div className="proof-rule" />
            <p>Asset protection discipline translated into secure, operationally grounded engineering.</p>
          </aside>
        </section>

        <section className="story section" id="about">
          <div className="section-heading">
            <p className="eyebrow">Professional background</p>
            <h2>From protecting physical operations to engineering the systems behind them.</h2>
          </div>
          <div className="story-grid">
            <article className="story-copy">
              <p className="lead">My route into software engineering started on the operational side of security.</p>
              <p>
                Over 15 years in asset protection, field engineering, security operations, and program delivery
                taught me to assess risk, investigate failures, coordinate under pressure, and design controls
                people can actually use. I carried that mindset into software.
              </p>
              <p>
                Today I build with React, TypeScript, Python, AWS, automation, and data systems. The through-line
                is unchanged: understand the environment, reduce ambiguity, and deliver a system that holds up.
              </p>
            </article>
            <div className="career-track">
              <article><span>Foundation</span><h3>Asset protection & field systems</h3><p>Risk assessment, incident response, physical security technology, and frontline operations.</p></article>
              <article><span>Expansion</span><h3>Program & security engineering</h3><p>Enterprise delivery, cloud security, automation, vulnerability remediation, and analytics.</p></article>
              <article><span>Now</span><h3>Software systems</h3><p>Human-centered applications shaped by operational constraints and security discipline.</p></article>
            </div>
          </div>
        </section>

        <section className="experience section" id="experience">
          <div className="section-heading">
            <p className="eyebrow">Experience</p>
            <h2>Security engineering grounded in operational delivery.</h2>
          </div>
          {experience.map((job) => (
            <article className="experience-card" key={`${job.company}-${job.role}`}>
              <div>
                <p className="experience-period">{job.period}</p>
                <h3>{job.role}</h3>
                <p className="experience-company">{job.company}</p>
              </div>
              <ul>{job.details.map((detail) => <li key={detail}>{detail}</li>)}</ul>
            </article>
          ))}
        </section>

        <section className="work section" id="projects">
          <div className="section-heading work-heading">
            <div><p className="eyebrow">Portfolio</p><h2>Deployed systems built around concrete problems.</h2></div>
            <p>Each project links to its working GitHub Pages experience and source repository.</p>
          </div>
          <div className="project-grid">
            {projects.map((project, index) => (
              <article className="project-card" key={project.name}>
                <div className="project-topline">
                  <span className="project-number">{String(index + 1).padStart(2, '0')}</span>
                  <span className="live-badge"><i /> Live</span>
                </div>
                <p className="project-type">{project.type}</p>
                <h3>{project.name}</h3>
                <p className="project-summary">{project.summary}</p>
                <ul className="stack" aria-label={`${project.name} technologies`}>
                  {project.stack.map((item) => <li key={item}>{item}</li>)}
                </ul>
                <div className="project-actions">
                  <a className="text-link" href={project.demo} target="_blank" rel="noreferrer" aria-label={`${project.name} live demo (opens in a new tab)`}>Live demo <Arrow /></a>
                  <a className="text-link muted" href={project.repo} target="_blank" rel="noreferrer" aria-label={`${project.name} repository (opens in a new tab)`}>Repository <Arrow /></a>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="strengths section" id="expertise">
          <div className="section-heading">
            <p className="eyebrow">Engineering lens</p>
            <h2>Operational judgment is part of the technical stack.</h2>
          </div>
          <div className="strength-grid">
            {strengths.map((strength) => (
              <article key={strength.title}>
                <span>{strength.number}</span><h3>{strength.title}</h3><p>{strength.body}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="contact section" id="contact">
          <div className="contact-card">
            <p className="eyebrow">Let’s build something dependable</p>
            <h2>Looking for an engineer who understands both systems and stakes?</h2>
            <p>Open to software, security engineering, automation, and cloud architecture opportunities.</p>
            <div className="contact-actions">
              <a className="button button-primary" href={`mailto:${identity.email}`}>Email Russell</a>
              <a className="button button-secondary" href={identity.linkedin} target="_blank" rel="noreferrer" aria-label="Russell Watson on LinkedIn (opens in a new tab)">LinkedIn</a>
              <a className="button button-secondary" href={identity.github} target="_blank" rel="noreferrer" aria-label="Russell Watson on GitHub (opens in a new tab)">GitHub</a>
            </div>
          </div>
        </section>
      </main>

      <footer><span>© {new Date().getFullYear()} Russell Watson</span><span>Designed and engineered in Phoenix, Arizona.</span></footer>
    </div>
  )
}

export default App
