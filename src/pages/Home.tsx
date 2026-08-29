import { Nav } from '../components/Nav'
import { Hero } from '../components/Hero'
import { Solution } from '../components/Solution'
import { Community } from '../components/Community'
import { InvestorsJoin } from '../components/InvestorsJoin'
import { Scale } from '../components/Scale'
import { About } from '../components/About'
import { Faq } from '../components/Faq'
import { Contact } from '../components/Contact'
import { Footer } from '../components/Footer'

export function Home() {
  return (
    <div className="bg-[var(--color-bg)]">
      <Nav />
      <main>
        <Hero />
        <Solution />
        <Community />
        <InvestorsJoin />
        <Scale />
        <About />
        <Faq />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
