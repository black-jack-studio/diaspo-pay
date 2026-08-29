import { Reveal } from '../lib/Reveal'
import founderPhoto from '../assets/founder-eric-koffounda.png'

export function About() {
  return (
    <section id="a-propos" className="relative border-t border-white/[0.06] bg-[#040610] py-28 md:py-36">
      <div className="mx-auto max-w-[1180px] px-6 md:px-8">
        <div className="grid items-center gap-14 lg:grid-cols-[220px_1fr] lg:gap-20">
          <Reveal className="relative mx-auto h-44 w-44 lg:mx-0 lg:h-52 lg:w-52">
            <div className="pointer-events-none absolute inset-0 rounded-full bg-[var(--color-accent)]/15 blur-[50px]" />
            <svg viewBox="0 0 200 200" className="absolute inset-0 h-full w-full" aria-hidden="true">
              <circle cx="100" cy="100" r="92" fill="none" stroke="rgba(255,255,255,0.14)" strokeWidth="1" />
              <circle cx="100" cy="100" r="78" fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="1" strokeDasharray="1 5" />
              <path id="seal-ring" d="M 100 100 m -68 0 a 68 68 0 1 1 136 0 a 68 68 0 1 1 -136 0" fill="none" />
              <text fill="#7fb0ff" fontFamily="Geist" fontSize="8.2" letterSpacing="2">
                <textPath href="#seal-ring" startOffset="2">
                  · DIASPO-PAY · FONDÉ À NÎMES · GARD · FRANCE ·
                </textPath>
              </text>
            </svg>
            <img
              src={founderPhoto}
              alt="Eric Koffounda, fondateur de Diaspo-Pay"
              className="absolute inset-0 m-auto h-[72%] w-[72%] object-contain object-bottom drop-shadow-[0_12px_30px_rgba(0,0,0,0.5)]"
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
