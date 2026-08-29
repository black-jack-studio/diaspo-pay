import { Reveal } from '../lib/Reveal'
import founderPhoto from '../assets/founder-eric-koffounda.png'

export function About() {
  return (
    <section id="a-propos" className="relative border-t border-white/[0.06] bg-[#040610] py-16 md:py-24">
      <div className="mx-auto max-w-[1180px] px-6 md:px-8">
        <div className="grid items-center gap-14 lg:grid-cols-[340px_1fr] lg:gap-10">
          <Reveal className="relative mx-auto w-72 aspect-[1169/940] lg:mx-0 lg:w-[340px]">
            <div className="pointer-events-none absolute inset-0 rounded-full bg-[var(--color-accent)]/15 blur-[60px]" />
            <img
              src={founderPhoto}
              alt="Eric Koffounda, fondateur de Diaspo-Pay"
              className="absolute inset-0 h-full w-full object-contain object-top"
              style={{ maskImage: 'linear-gradient(to bottom, black 65%, transparent 96%)', WebkitMaskImage: 'linear-gradient(to bottom, black 65%, transparent 96%)' }}
            />
          </Reveal>

          <Reveal delay={0.1}>
            <span className="eyebrow">Le mot du fondateur</span>
            <blockquote className="mt-5 font-accent text-[clamp(24px,3.4vw,36px)] leading-[1.3] text-white/90">
              « Aider un proche, ce n’est pas seulement envoyer une somme. C’est s’assurer que
              l’échéance est réglée, et que la valeur reste dans l’économie du pays. »
            </blockquote>
            <cite className="mt-6 block font-mono text-[11px] not-italic tracking-[0.1em] text-white/40">
              ERIC KOFFOUNDA · FONDATEUR DE DIASPO-PAY, NÎMES (GARD)
            </cite>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
