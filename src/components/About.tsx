import { Reveal } from '../lib/Reveal'

export function About() {
  return (
    <section id="a-propos" className="relative border-t border-white/[0.06] bg-[#040610] py-28 md:py-36">
      <div className="mx-auto max-w-[1180px] px-6 md:px-8">
        <div className="grid items-center gap-14 lg:grid-cols-[220px_1fr] lg:gap-20">
          <Reveal className="mx-auto lg:mx-0">
            <svg viewBox="0 0 200 200" className="h-44 w-44 lg:h-52 lg:w-52" aria-hidden="true">
              <circle cx="100" cy="100" r="92" fill="none" stroke="rgba(255,255,255,0.14)" strokeWidth="1" />
              <circle cx="100" cy="100" r="78" fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="1" strokeDasharray="1 5" />
              <path id="seal-ring" d="M 100 100 m -68 0 a 68 68 0 1 1 136 0 a 68 68 0 1 1 -136 0" fill="none" />
              <text fill="#7fb0ff" fontFamily="IBM Plex Mono" fontSize="8.2" letterSpacing="2">
                <textPath href="#seal-ring" startOffset="2">
                  · DIASPO-PAY · FONDÉ À NÎMES · GARD · FRANCE ·
                </textPath>
              </text>
              <text x="100" y="94" textAnchor="middle" fill="#f4f5f8" fontFamily="Fraunces" fontSize="17" fontStyle="italic">E.K.</text>
              <text x="100" y="114" textAnchor="middle" fill="#7fb0ff" fontFamily="IBM Plex Mono" fontSize="8">FONDATEUR</text>
            </svg>
          </Reveal>

          <Reveal delay={0.1}>
            <span className="eyebrow">Le mot du fondateur</span>
            <blockquote className="mt-5 font-display text-[clamp(22px,3vw,32px)] italic leading-[1.3] text-white/90">
              « Aider un proche, ce n’est pas seulement envoyer une somme. C’est s’assurer que
              l’échéance est réglée, et que la valeur reste dans l’économie du pays. »
            </blockquote>
            <cite className="mt-6 block font-mono text-[11px] not-italic tracking-[0.1em] text-white/40">
              ERIC KOFFOUNDA — FONDATEUR DE DIASPO-PAY, NÎMES (GARD)
            </cite>
          </Reveal>
        </div>

        <div className="mt-24 grid gap-14 lg:grid-cols-2 lg:gap-20">
          <Reveal>
            <span className="eyebrow">Pourquoi Diaspo-Pay</span>
            <h2 className="mt-4 font-display text-[clamp(24px,3vw,32px)] leading-[1.15] text-white">
              Née à Nîmes, pensée pour les deux rives.
            </h2>
            <p className="mt-6 text-[15px] leading-relaxed text-white/55">
              Dans la diaspora, l’entraide n’est pas un supplément : elle fait partie de
              l’équilibre familial. Chaque mois, des factures attendent au pays — un abonnement,
              un loyer, une inscription universitaire, une hospitalisation.
            </p>
            <p className="mt-4 text-[15px] leading-relaxed text-white/55">
              Envoyer de l’argent, on sait faire. Savoir avec certitude que cette facture-là a été
              réglée, beaucoup moins. C’est ce manque qui a donné naissance à Diaspo-Pay : payer
              la dépense elle-même, chez l’organisme qui l’a émise, et recevoir la preuve du
              règlement.
            </p>
          </Reveal>

          <Reveal delay={0.1} className="space-y-6">
            <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-7">
              <div className="font-mono text-[10.5px] tracking-[0.14em] text-[var(--color-accent-soft)]">« SOLUTION + »</div>
              <p className="mt-3 text-[14.5px] leading-relaxed text-white/55">
                Le signe exprime l’ambition d’aller au-delà du simple transfert : au paiement
                s’ajoutent la traçabilité, le reçu, le suivi et des services concrets au pays.
                C’est ce « plus » qui définit Diaspo-Pay.
              </p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-7">
              <div className="font-mono text-[10.5px] tracking-[0.14em] text-[var(--color-accent-soft)]">AMBITION</div>
              <p className="mt-3 text-[14.5px] leading-relaxed text-white/55">
                La solution s’adresse à la diaspora afro-caribéenne en France et en Europe, avec
                des corridors visés vers l’Afrique et les Caraïbes.
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
