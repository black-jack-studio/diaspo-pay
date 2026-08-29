import { Nav } from '../components/Nav'
import { Investors } from '../components/Investors'
import { Footer } from '../components/Footer'

export function InvestorsPage() {
  return (
    <div className="bg-[var(--color-bg)]">
      <Nav />
      <main>
        <Investors />
      </main>
      <Footer />
    </div>
  )
}
