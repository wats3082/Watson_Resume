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
  const starHighlightColor = `rgb(${scene.accent})`
  const sharedStarSize = 0.075
  const sharedStarSpeed = scene.mainSpeed * 0.58
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

  return (
    <div className="app-shell" style={{ '--accent-rgb': scene.accent }}>
      <header className="title-bar">
        <ThreeHeroBackground
          className="top-stars"
          particleColor={starHighlightColor}
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
          <p className="eyebrow">Security Software & Systems Engineer</p>
          <h1>{identity.name}</h1>
          <p className="subtitle">{identity.subtitle}</p>
        </div>

        <nav className="menu-panel" aria-label="Profile sections">
          {sections.map((section) => (
            <button
              key={section.id}
              type="button"
              className={`menu-item ${active === section.id ? 'active' : ''}`}
              aria-current={active === section.id ? 'page' : undefined}
              onClick={() => setActive(section.id)}
            >
              {section.title}
            </button>
          ))}
        </nav>
        <div className="scene-actions" aria-label={`${activeSection.title} actions`}>
          {activeSection.actions?.map((action) =>
            action.type === 'section' ? (
              <button key={`${activeSection.id}-${action.label}`} type="button" className="scene-action-btn" onClick={() => setActive(action.value)}>
                {action.label}
              </button>
            ) : (
              <a
                key={`${activeSection.id}-${action.label}`}
                className="scene-action-btn"
                href={action.value}
                target="_blank"
                rel="noreferrer"
              >
                {action.label}
              </a>
            ),
          )}
        </div>
      </header>

      <main className={`main-panel ${isLongSection ? 'main-scroll' : 'main-fit'} ${active === 'projects' ? 'main-projects' : ''}`}>
        <AnimatePresence mode="wait">
          <motion.div key={active} className={`page-stage ${active === 'projects' ? 'page-stage-projects' : ''}`} {...stageAnimation}>
            <article className="content-card spotlight">
              <span className="section-tag">Portfolio Section</span>
              <h2>{activeSection.title}</h2>
              <p>{activeSection.body}</p>
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
                    <a href="https://wats3082.github.io/Project-Yelp-Clone/" target="_blank" rel="noreferrer">
                      Business Reviews Project
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
