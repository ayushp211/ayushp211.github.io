import { useState } from 'react'
import { Nav } from './components/Nav'
import { Hero } from './components/Hero'
import { About } from './components/About'
import { Education } from './components/Education'
import { Experience } from './components/Experience'
import { Projects } from './components/Projects'
import { Skills } from './components/Skills'
import { HeroReadyContext } from './hooks/useHeroReady'

function App() {
  const [heroReady, setHeroReady] = useState(false)

  return (
    <>
      <span id="top" />
      <Nav />
      <main className="mx-auto max-w-[1000px] px-6">
        <Hero onSequenceDone={() => setHeroReady(true)} />
        <HeroReadyContext.Provider value={heroReady}>
          <About />
          <Education />
          <Experience />
          <Projects />
          <Skills />
        </HeroReadyContext.Provider>
      </main>
    </>
  )
}

export default App
