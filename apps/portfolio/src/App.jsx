import { lazy, Suspense } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import { siteConfig } from './siteConfig'
import './App.css'

const Arrow = () => <span aria-hidden="true">↗</span>
const ThreeHeroBackground = lazy(() =>
  import('@watson/scene-kit').then(({ ThreeHeroBackground: component }) => ({ default: component })),
)

function App() {
  const { identity, experience, projects, strengths } = siteConfig
  const reduceMotion = useReducedMotion()
  const enter = reduceMotion
    ? {}
    : {
        initial: { opacity: 0, y: 24 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true, amount: 0.12 },
        transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
      }

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
          <Suspense fallback={null}>
            <ThreeHeroBackground
              className="hero-scene"
              particleColor="#5eead4"
              particleSize={0.08}
              haloColor="#0f766e"
              primaryHaloOpacity={0.16}
              secondaryHaloColor="#f59e0b"
              secondaryHaloOpacity={0.12}
              density={1.65}
              speed={0.85}
              fieldWidth={62}
              fieldHeight={26}
              fieldDepth={32}
              primaryHaloPosition={[13, 1, -4]}
              secondaryHaloPosition={[-14, -2, -6]}
              seed={3082}
            />
          </Suspense>
          <motion.div className="hero-copy" {...enter}>
            <p className="eyebrow">Security-minded software engineer · Phoenix, Arizona</p>
            <h1 id="hero-title">
              I build dependable software for <em>high-stakes work.</em>
            </h1>
            <p className="hero-lede">{identity.intro}</p>
            <div className="hero-actions">
              <a className="button button-primary" href="#projects">Explore projects</a>
              <a className="button button-secondary" href={`mailto:${identity.email}`}>Start a conversation</a>
            </div>
          </motion.div>
          <motion.aside className="hero-proof" {...enter}>
            <p className="proof-label">What I bring</p>
            <strong>15 years</strong>
            <span>protecting people, assets, and systems</span>
            <div className="proof-rule" />
            <p>Asset protection discipline translated into secure, operationally grounded engineering.</p>
          </motion.aside>
        </section>

        <section className="story section" id="about">
          <motion.div className="section-heading" {...enter}>
            <p className="eyebrow">Professional background</p>
            <h2>From protecting physical operations to engineering the systems behind them.</h2>
          </motion.div>
          <div className="story-grid">
            <motion.article className="story-copy" {...enter}>
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
            </motion.article>
            <motion.div className="career-track" {...enter}>
              <article><span>Foundation</span><h3>Asset protection & field systems</h3><p>Risk assessment, incident response, physical security technology, and frontline operations.</p></article>
              <article><span>Expansion</span><h3>Program & security engineering</h3><p>Enterprise delivery, cloud security, automation, vulnerability remediation, and analytics.</p></article>
              <article><span>Now</span><h3>Software systems</h3><p>Human-centered applications shaped by operational constraints and security discipline.</p></article>
            </motion.div>
          </div>
        </section>

        <section className="experience section" id="experience">
          <motion.div className="section-heading" {...enter}>
            <p className="eyebrow">Experience</p>
            <h2>Security engineering grounded in operational delivery.</h2>
          </motion.div>
          {experience.map((job) => (
            <motion.article className="experience-card" key={`${job.company}-${job.role}`} {...enter}>
              <div>
                <p className="experience-period">{job.period}</p>
                <h3>{job.role}</h3>
                <p className="experience-company">{job.company}</p>
              </div>
              <ul>{job.details.map((detail) => <li key={detail}>{detail}</li>)}</ul>
            </motion.article>
          ))}
        </section>

        <section className="work section" id="projects">
          <motion.div className="section-heading work-heading" {...enter}>
            <div><p className="eyebrow">Portfolio</p><h2>Deployed systems built around concrete problems.</h2></div>
            <p>Each project links to its working GitHub Pages experience and source repository.</p>
          </motion.div>
          <div className="project-grid">
            {projects.map((project, index) => (
              <motion.article className="project-card" key={project.name} {...enter}>
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
                  <a className="text-link" href={project.demo} target="_blank" rel="noreferrer">Live demo <Arrow /></a>
                  <a className="text-link muted" href={project.repo} target="_blank" rel="noreferrer">Repository <Arrow /></a>
                </div>
              </motion.article>
            ))}
          </div>
        </section>

        <section className="strengths section" id="expertise">
          <motion.div className="section-heading" {...enter}>
            <p className="eyebrow">Engineering lens</p>
            <h2>Operational judgment is part of the technical stack.</h2>
          </motion.div>
          <div className="strength-grid">
            {strengths.map((strength) => (
              <motion.article key={strength.title} {...enter}>
                <span>{strength.number}</span><h3>{strength.title}</h3><p>{strength.body}</p>
              </motion.article>
            ))}
          </div>
        </section>

        <section className="contact section" id="contact">
          <motion.div className="contact-card" {...enter}>
            <p className="eyebrow">Let’s build something dependable</p>
            <h2>Looking for an engineer who understands both systems and stakes?</h2>
            <p>Open to software, security engineering, automation, and cloud architecture opportunities.</p>
            <div className="contact-actions">
              <a className="button button-primary" href={`mailto:${identity.email}`}>Email Russell</a>
              <a className="button button-secondary" href={identity.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
              <a className="button button-secondary" href={identity.github} target="_blank" rel="noreferrer">GitHub</a>
            </div>
          </motion.div>
        </section>
      </main>

      <footer><span>© {new Date().getFullYear()} Russell Watson</span><span>Designed and engineered in Phoenix, Arizona.</span></footer>
    </div>
  )
}

export default App
