import { Nav } from './components/Nav'
import { Hero } from './components/Hero'
import { Solution } from './components/Solution'
import { Investors } from './components/Investors'
import { Careers } from './components/Careers'
import { About } from './components/About'
import { Faq } from './components/Faq'
import { Contact } from './components/Contact'
import { Footer } from './components/Footer'

function App() {
  return (
    <div className="bg-[var(--color-bg)]">
      <Nav />
      <main>
        <Hero />
        <Solution />
        <Investors />
        <Careers />
        <About />
        <Faq />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App
