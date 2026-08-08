import { motion, useReducedMotion } from 'framer-motion'
import { ThreeCardTilt, ThreeHeroBackground } from '@watson/scene-kit'
import { siteConfig } from './siteConfig'
import './App.css'

const Arrow = () => <span aria-hidden="true">↗</span>

function App() {
  const { identity, projects, strengths } = siteConfig
  const reduceMotion = useReducedMotion()
  const enter = reduceMotion
    ? {}
    : {
        initial: { opacity: 0, y: 24 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true, amount: 0.15 },
        transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
      }

  return (
    <div className="app-shell">
      <header className="site-header">
        <a className="brand" href="#top" aria-label="Russell Watson home">
          RW<span>.</span>
        </a>
        <nav aria-label="Primary navigation">
          <a href="#story">Background</a>
          <a href="#work">Work</a>
          <a href="#contact">Contact</a>
          <a href={identity.linkedin} target="_blank" rel="noreferrer">
            LinkedIn <Arrow />
          </a>
        </nav>
      </header>

      <main>
        <section className="hero" id="top">
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
          <motion.div className="hero-copy" {...enter}>
            <p className="eyebrow">Security-minded software engineer · Phoenix, Arizona</p>
            <h1>
              I build dependable software for <em>high-stakes work.</em>
            </h1>
            <p className="hero-lede">
              {identity.intro}
            </p>
            <div className="hero-actions">
              <a className="button button-primary" href="#work">
                Explore case studies
              </a>
              <a className="button button-secondary" href={`mailto:${identity.email}`}>
                Start a conversation
              </a>
            </div>
          </motion.div>
          <motion.aside className="hero-proof" {...enter}>
            <p className="proof-label">What I bring</p>
            <strong>15 years</strong>
            <span>protecting people, assets, and systems</span>
            <div className="proof-rule" />
            <p>Asset protection discipline translated into secure, operationally grounded engineering.</p>
          </motion.aside>
          <a className="scroll-cue" href="#story">
            <span>Scroll to the story</span>
            <i aria-hidden="true" />
          </a>
        </section>

        <section className="story section" id="story">
          <motion.div className="section-heading" {...enter}>
            <p className="eyebrow">Professional background</p>
            <h2>From protecting physical operations to engineering the systems behind them.</h2>
          </motion.div>
          <div className="story-grid">
            <motion.article className="story-copy" {...enter}>
              <p className="lead">
                My route into software engineering started on the operational side of security.
              </p>
              <p>
                Over 15 years in asset protection, field engineering, security operations, and program
                delivery taught me to assess risk, investigate failures, coordinate under pressure, and
                design controls people can actually use. I carried that mindset into software.
              </p>
              <p>
                Today I build with React, TypeScript, Python, AWS, automation, and data systems. The
                through-line is unchanged: understand the environment, reduce ambiguity, and deliver a
                system that holds up when it matters.
              </p>
            </motion.article>
            <motion.div className="career-track" {...enter}>
              <article>
                <span>Foundation</span>
                <h3>Asset protection & field systems</h3>
                <p>Risk assessment, incident response, physical security technology, and frontline operations.</p>
              </article>
              <article>
                <span>Expansion</span>
                <h3>Program & security engineering</h3>
                <p>Enterprise delivery, cloud security, automation, vulnerability remediation, and analytics.</p>
              </article>
              <article>
                <span>Now</span>
                <h3>Software systems</h3>
                <p>Human-centered applications shaped by real operational constraints and security discipline.</p>
              </article>
            </motion.div>
          </div>
        </section>

        <section className="work section" id="work">
          <motion.div className="section-heading work-heading" {...enter}>
            <div>
              <p className="eyebrow">Selected work</p>
              <h2>Three deployed systems, each built around a concrete problem.</h2>
            </div>
            <p>Every case study links to the working product and its source.</p>
          </motion.div>

          <div className="case-list">
            {projects.map((project, index) => (
              <motion.article className="case-study" key={project.name} {...enter}>
                <ThreeCardTilt className="case-media" maxTilt={3}>
                  <img
                    src={`${import.meta.env.BASE_URL}${project.image}`}
                    alt={`${project.name} live application screenshot`}
                    loading={index === 0 ? 'eager' : 'lazy'}
                  />
                  <span className="case-number">0{index + 1}</span>
                  <span className="live-badge"><i /> Live deployment</span>
                </ThreeCardTilt>
                <div className="case-content">
                  <p className="case-kicker">{project.type}</p>
                  <h3>{project.name}</h3>
                  <dl>
                    <div>
                      <dt>Problem</dt>
                      <dd>{project.problem}</dd>
                    </div>
                    <div>
                      <dt>Architecture</dt>
                      <dd>{project.architecture}</dd>
                    </div>
                    <div>
                      <dt>Outcome</dt>
                      <dd>{project.outcome}</dd>
                    </div>
                  </dl>
                  <ul className="stack" aria-label={`${project.name} technologies`}>
                    {project.stack.map((item) => <li key={item}>{item}</li>)}
                  </ul>
                  <div className="case-actions">
                    <a className="text-link" href={project.demo} target="_blank" rel="noreferrer">
                      View live demo <Arrow />
                    </a>
                    <a className="text-link muted" href={project.repo} target="_blank" rel="noreferrer">
                      GitHub repository <Arrow />
                    </a>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </section>

        <section className="strengths section">
          <motion.div className="section-heading" {...enter}>
            <p className="eyebrow">Engineering lens</p>
            <h2>Operational judgment is part of the technical stack.</h2>
          </motion.div>
          <div className="strength-grid">
            {strengths.map((strength) => (
              <motion.article key={strength.title} {...enter}>
                <span>{strength.number}</span>
                <h3>{strength.title}</h3>
                <p>{strength.body}</p>
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
              <a className="button button-secondary" href={identity.linkedin} target="_blank" rel="noreferrer">
                Connect on LinkedIn
              </a>
              <a className="button button-secondary" href={identity.github} target="_blank" rel="noreferrer">
                View GitHub
              </a>
            </div>
          </motion.div>
        </section>
      </main>

      <footer>
        <span>© {new Date().getFullYear()} Russell Watson</span>
        <span>Designed and engineered in Phoenix, Arizona.</span>
      </footer>
    </div>
  )
}

export default App
