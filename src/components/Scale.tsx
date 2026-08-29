import { Tiles } from './Tiles'
import { Reveal } from '../lib/Reveal'
import { Counter } from '../lib/Counter'

export function Scale() {
  return (
    <section className="relative overflow-hidden border-t border-white/[0.06] bg-[#040610] py-16 md:py-24">
      <Tiles />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,transparent_15%,rgba(4,6,16,0.6)_75%,rgba(4,6,16,0.92)_100%)]" />

      <div className="relative z-10 mx-auto max-w-[720px] px-6 text-center md:px-8">
        <Reveal>
          <span className="eyebrow">L’échelle du sujet</span>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="mt-6 flex items-baseline justify-center font-display text-[clamp(56px,11vw,140px)] leading-none text-white">
            <Counter to={100} big />
            <span className="ml-3 text-[var(--color-accent-soft)]">Md€</span>
          </div>
        </Reveal>

        <Reveal delay={0.25}>
          <p className="mx-auto mt-8 max-w-[46ch] text-[16.5px] leading-relaxed text-white/55">
            envoyés chaque année par la diaspora vers l’Afrique, soit environ{' '}
            <span className="font-medium text-white/85">6&nbsp;% du PIB africain</span>.
          </p>
        </Reveal>

        <Reveal delay={0.35}>
          <div className="mt-7 font-mono text-[10.5px] tracking-[0.14em] text-white/30">
            SOURCE · BANQUE MONDIALE, 2024
          </div>
        </Reveal>
      </div>
    </section>
  )
}
