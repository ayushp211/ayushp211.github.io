import { Nav } from './components/Nav'
import { Hero } from './components/Hero'
import { About } from './components/About'
import { Education } from './components/Education'
import { Experience } from './components/Experience'
import { Projects } from './components/Projects'
import { Contact } from './components/Contact'

function App() {
  return (
    <>
      <Nav />
      <main className="mx-auto max-w-[720px] px-6">
        <Hero />
        <About />
        <Education />
        <Experience />
        <Projects />
        <Contact />
      </main>
    </>
  )
}

export default App
