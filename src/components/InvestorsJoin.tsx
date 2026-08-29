import { Link } from 'react-router-dom'
import { Reveal } from '../lib/Reveal'

export function InvestorsJoin() {
  return (
    <section className="relative border-t border-white/[0.06] bg-[#040610] py-16 md:py-24">
      <div className="mx-auto max-w-[1180px] px-6 md:px-8">
        <div className="grid gap-12 rounded-[32px] bg-white p-8 sm:p-12 md:grid-cols-2 md:gap-0 md:divide-x md:divide-black/10 md:p-16">
          <Reveal className="md:pr-16">
            <span className="eyebrow" style={{ color: 'var(--color-accent-deep)' }}>Investisseurs</span>
            <h2 className="mt-4 font-display text-[clamp(24px,3vw,32px)] leading-[1.1] text-[#0a0f1c]">
              Un flux structurel. Une approche différente.
            </h2>
            <p className="mt-5 max-w-[50ch] text-[15px] leading-relaxed text-[#0a0f1c]/60">
              Les acteurs historiques répondent au besoin d’acheminer de l’argent. Diaspo-Pay
              adresse le vrai manque : s’assurer que la dépense visée a bien été réglée.
            </p>
            <Link
              to="/investisseurs"
              className="mt-7 inline-flex items-center gap-2 rounded-full bg-[#0a0f1c] px-6 py-3.5 text-[14px] font-semibold text-white transition-transform hover:scale-[1.03]"
            >
              En savoir plus →
            </Link>
          </Reveal>

          <Reveal delay={0.1} className="md:pl-16">
            <span className="eyebrow" style={{ color: 'var(--color-accent-deep)' }}>Rejoindre l’aventure</span>
            <h2 className="mt-4 font-display text-[clamp(24px,3vw,32px)] leading-[1.1] text-[#0a0f1c]">
              On construit l’équipe qui portera le lancement.
            </h2>
            <p className="mt-5 max-w-[42ch] text-[15px] leading-relaxed text-[#0a0f1c]/60">
              L’application arrive à la mi-octobre. Produit, conformité, déploiement : l’équipe
              se constitue dès aujourd’hui sur les corridors Europe, Afrique et Caraïbes.
            </p>
            <Link
              to="/rejoindre"
              className="mt-7 inline-flex items-center gap-2 rounded-full border border-black/15 px-6 py-3.5 text-[14px] font-semibold text-[#0a0f1c] transition-colors hover:border-black/30 hover:bg-black/[0.04]"
            >
              Voir les profils recherchés →
            </Link>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
