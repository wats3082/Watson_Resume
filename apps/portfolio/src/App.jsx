import { useState } from 'react'
import { ThreeCardTilt, ThreeCursorGlow, ThreeHeroBackground } from '@watson/scene-kit'
import './App.css'

const sections = [
  {
    id: 'about',
    title: 'About',
    body: 'Principal Security Architect focused on secure software delivery, AI-enabled automation, and cloud-native security strategy.',
  },
  {
    id: 'resume',
    title: 'Resume',
    body: 'Experience across architecture leadership, security consulting, and enterprise delivery with practical engineering depth.',
  },
  {
    id: 'projects',
    title: 'Projects',
    body: 'Portfolio work spanning API platforms, weather intelligence apps, and game prototypes shipped to GitHub Pages.',
  },
  {
    id: 'contact',
    title: 'Contact',
    body: 'Reach out for consulting, architecture reviews, or collaboration on AI + security product design.',
  },
]

function App() {
  const [active, setActive] = useState('about')
  const activeSection = sections.find((s) => s.id === active) || sections[0]

  return (
    <div className="app-shell">
      <ThreeCursorGlow />
      <header className="title-bar">
        <div className="title-copy">
          <p className="eyebrow">Watson Resume · Beta Template</p>
          <h1>Russell Watson</h1>
          <p className="subtitle">Reusable 3D-first portfolio template for all future projects.</p>
        </div>
        <ThreeHeroBackground className="hero-scene" />
      </header>

      <aside className="menu-panel">
        <h2>Menu</h2>
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
      </aside>

      <main className="main-panel">
        <article className="content-card">
          <h2>{activeSection.title}</h2>
          <p>{activeSection.body}</p>
        </article>

        <section className="project-grid">
          <ThreeCardTilt className="project-card">
            <h3>Weather API v2</h3>
            <p>Journey turbulence simulation with local weather and demo-mode support.</p>
          </ThreeCardTilt>
          <ThreeCardTilt className="project-card">
            <h3>PyInvaders</h3>
            <p>Playable browser shooter with boss wave logic and tuned visual effects.</p>
          </ThreeCardTilt>
          <ThreeCardTilt className="project-card">
            <h3>Scene Kit</h3>
            <p>Shared 3D component layer you can carry into every new portfolio app.</p>
          </ThreeCardTilt>
        </section>
      </main>
    </div>
  )
}

export default App
