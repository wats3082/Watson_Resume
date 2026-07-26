import { useState } from 'react'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { ThreeHeroBackground } from '@watson/scene-kit'
import { sceneBySection, sectionTransition, siteConfig } from './siteConfig'
import './App.css'

function App() {
  const { sections, certifications, education, experience, focusAreas, identity, projects } = siteConfig
  const reduceMotion = useReducedMotion()
  const [active, setActive] = useState('overview')
  const activeSection = sections.find((s) => s.id === active) || sections[0]
  const isLongSection = activeSection.layout === 'scroll'
  const scene = sceneBySection[active] || sceneBySection.overview
  const sharedStarSize = 0.046
  const sharedStarSpeed = scene.mainSpeed
  const sharedStarDensity = scene.mainDensity
  const sharedStarField = {
    width: 84,
    height: 30,
    depth: 36,
  }
  const sharedStarSeed = 3082
  const stageAnimation = reduceMotion
    ? {}
    : {
        initial: { opacity: 0, y: sectionTransition.initialY },
        animate: { opacity: 1, y: 0 },
        exit: { opacity: 0, y: -sectionTransition.initialY },
        transition: {
          duration: sectionTransition.duration,
          ease: sectionTransition.ease,
        },
      }

  const renderSectionAction = (action) => {
    if (action.type === 'section') {
      return (
        <button key={action.label} type="button" className="section-action" onClick={() => setActive(action.value)}>
          {action.label}
        </button>
      )
    }

    return (
      <a key={action.label} className="section-action" href={action.value} target="_blank" rel="noreferrer">
        {action.label}
      </a>
    )
  }

  return (
    <div className="app-shell" style={{ '--accent-rgb': scene.accent }}>
      <header className="title-bar">
        <ThreeHeroBackground
          className="top-stars"
          particleColor={scene.particleColor}
          particleSize={sharedStarSize}
          primaryHaloOpacity={0}
          secondaryHaloOpacity={0}
          density={sharedStarDensity}
          speed={sharedStarSpeed}
          fieldWidth={sharedStarField.width}
          fieldHeight={sharedStarField.height}
          fieldDepth={sharedStarField.depth}
          seed={sharedStarSeed}
        />
        <div className="title-copy">
          <p className="eyebrow">{identity.name}</p>
          <p className="subtitle">{identity.subtitle}</p>
        </div>

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
      </header>

      <main className={`main-panel ${isLongSection ? 'main-scroll' : 'main-fit'}`}>
        <ThreeHeroBackground
          className="main-scene"
          particleColor={scene.particleColor}
          particleSize={sharedStarSize}
          haloColor={scene.haloColor}
          secondaryHaloColor={scene.secondaryHaloColor}
          primaryHaloOpacity={0}
          secondaryHaloOpacity={0}
          density={sharedStarDensity}
          speed={sharedStarSpeed}
          fieldWidth={sharedStarField.width}
          fieldHeight={sharedStarField.height}
          fieldDepth={sharedStarField.depth}
          primaryHaloPosition={scene.primaryHaloPosition}
          secondaryHaloPosition={scene.secondaryHaloPosition}
          seed={sharedStarSeed}
        />

        <AnimatePresence mode="wait">
          <motion.div key={active} className="page-stage" {...stageAnimation}>
            <article className="content-card spotlight">
              <h2>{activeSection.title}</h2>
              <p>{activeSection.body}</p>
              {!!activeSection.actions?.length && (
                <div className="section-actions">{activeSection.actions.map((action) => renderSectionAction(action))}</div>
              )}
            </article>

            {active === 'overview' && (
              <section className="content-grid">
                <article className="content-card">
                  <h3>Education & Community</h3>
                  <p>B.S. Business & Technology</p>
                  <p>A.S. Computer Science</p>
                  <p>Community Outreach: Chandler Schools STEM Judge and Volunteer.</p>
                </article>
                <article className="content-card">
                  <h3>Core Focus Areas</h3>
                  <ul className="chip-list">
                    {focusAreas.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
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
              <section className="project-list">
                {projects.map((project) => (
                  <article key={project.name} className="project-card">
                    <a className="project-link" href={project.url} target="_blank" rel="noreferrer">
                      <h3>{project.name}</h3>
                      <p>{project.description}</p>
                      <span>Open GitHub Pages demo →</span>
                    </a>
                  </article>
                ))}
              </section>
            )}

            {active === 'contact' && (
              <section className="content-grid">
                <article className="content-card">
                  <div className="contact-profile-wrap">
                    <img
                      className="contact-profile-image"
                      src={`${import.meta.env.BASE_URL}${identity.profileImage}`}
                      alt={`${identity.name} profile`}
                    />
                  </div>
                  <h3>Email</h3>
                  <p>
                    <a href={`mailto:${identity.email}`}>{identity.email}</a>
                  </p>
                  <h3>Phone</h3>
                  <p>
                    <a href={`tel:${identity.phone}`}>{identity.phoneDisplay}</a>
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
          </motion.div>
        </AnimatePresence>
      </main>
    </div>
  )
}

export default App
