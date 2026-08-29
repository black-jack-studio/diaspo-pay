import { Link } from 'react-router-dom'
import { Reveal } from '../lib/Reveal'

export function InvestorsJoin() {
  return (
    <section className="relative border-t border-white/[0.06] bg-[#040610] py-28 md:py-36">
      <div className="mx-auto max-w-[1180px] px-6 md:px-8">
        <div className="grid gap-16 md:grid-cols-2 md:gap-0 md:divide-x md:divide-white/10">
          <Reveal className="md:pr-16">
            <span className="eyebrow">Investisseurs</span>
            <h2 className="mt-4 font-display text-[clamp(24px,3vw,32px)] leading-[1.1] text-white">
              Un flux structurel. Une approche différente.
            </h2>
            <p className="mt-5 max-w-[42ch] text-[15px] leading-relaxed text-white/55">
              Les acteurs historiques répondent au besoin d’acheminer de l’argent. Diaspo-Pay
              adresse le vrai manque : s’assurer que la dépense visée a bien été réglée.
            </p>
            <Link
              to="/investisseurs"
              className="mt-7 inline-flex items-center gap-2 rounded-full bg-white px-6 py-3.5 text-[14px] font-semibold text-[#0a0f1c] transition-transform hover:scale-[1.03]"
            >
              En savoir plus →
            </Link>
          </Reveal>

          <Reveal delay={0.1} className="md:pl-16">
            <span className="eyebrow">Rejoindre l’aventure</span>
            <h2 className="mt-4 font-display text-[clamp(24px,3vw,32px)] leading-[1.1] text-white">
              On construit l’équipe qui portera le lancement.
            </h2>
            <p className="mt-5 max-w-[42ch] text-[15px] leading-relaxed text-white/55">
              L’application arrive à la mi-octobre. Produit, conformité, déploiement : l’équipe
              se constitue dès aujourd’hui sur les corridors Europe, Afrique et Caraïbes.
            </p>
            <Link
              to="/rejoindre"
              className="mt-7 inline-flex items-center gap-2 rounded-full border border-white/20 px-6 py-3.5 text-[14px] font-semibold text-white transition-colors hover:border-white/40 hover:bg-white/[0.06]"
            >
              Voir les profils recherchés →
            </Link>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
