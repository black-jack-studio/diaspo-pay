import { Nav } from '../components/Nav'
import { Careers } from '../components/Careers'
import { Footer } from '../components/Footer'

export function JoinPage() {
  return (
    <div className="bg-[var(--color-bg)]">
      <Nav />
      <main>
        <Careers />
      </main>
      <Footer />
    </div>
  )
}
