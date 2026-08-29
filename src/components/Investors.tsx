import { motion } from 'framer-motion'
import { Reveal, Stagger, staggerItem } from '../lib/Reveal'

const TIMELINE = [
  { tag: 'Mi-octobre', title: 'Lancement de l’application', body: 'Première version disponible pour les utilisateurs pré-inscrits.' },
  { tag: 'En cours', title: 'Dispositif de conformité', body: 'Déploiement KYC/AML et cadrage réglementaire avant ouverture du service.' },
  { tag: 'À suivre', title: 'Partenariats de facturation', body: 'Discussions avec des organismes émetteurs et acteurs institutionnels.' },
  { tag: 'Horizon', title: 'Extensions internationales', body: 'Poursuite de la protection industrielle, nouveaux corridors.' },
]

export function Investors() {
  return (
    <section id="investisseurs" className="relative border-t border-white/[0.06] bg-[#040610] py-28 md:py-36">
      <div className="mx-auto max-w-[1180px] px-6 md:px-8">
        <Reveal className="max-w-2xl">
          <span className="eyebrow">Investisseurs</span>
          <h2 className="mt-4 text-[clamp(28px,4vw,44px)] leading-[1.08] text-white">
            Un flux structurel. Une approche différente.
          </h2>
          <p className="mt-6 max-w-[58ch] text-[16.5px] leading-relaxed text-white/55">
            Les acteurs historiques du transfert répondent au besoin d’acheminer de l’argent. Le
            besoin non couvert est ailleurs : s’assurer que la dépense visée a bien été réglée.
            Diaspo-Pay adresse ce manque avec une innovation protégée.
          </p>
        </Reveal>

        <div className="mt-24">
          <Reveal>
            <span className="eyebrow">Calendrier</span>
            <h3 className="mt-4 font-display text-[clamp(22px,2.8vw,30px)] text-white">Les prochaines étapes</h3>
          </Reveal>

          <Stagger className="mt-10 grid gap-6 md:grid-cols-4">
            {TIMELINE.map((t, i) => (
              <motion.div key={t.title} variants={staggerItem} className="border-t border-white/15 pt-5">
                <div className="font-mono text-[10.5px] tracking-[0.14em] text-[var(--color-accent-soft)]">{t.tag}</div>
                <h4 className="mt-3 font-display text-[16px] font-medium text-white">{t.title}</h4>
                <p className="mt-2 text-[13.5px] leading-relaxed text-white/50">{t.body}</p>
                <div className="mt-4 font-mono text-[10px] text-white/20">0{i + 1}/04</div>
              </motion.div>
            ))}
          </Stagger>
        </div>

        <Reveal className="mt-20 flex flex-col items-start gap-5 rounded-2xl border border-white/10 bg-gradient-to-br from-[#101b34] to-[#0b1226] p-9 sm:flex-row sm:items-center sm:justify-between">
          <p className="max-w-[42ch] font-display text-[19px] leading-snug text-white">
            Les projections et les éléments confidentiels se partagent en rendez-vous direct.
          </p>
          <a
            href="#contact"
            className="inline-flex shrink-0 items-center gap-2 rounded-full bg-white px-6 py-3.5 text-[14px] font-semibold text-[#0a0f1c] transition-transform hover:scale-[1.03]"
          >
            Échanger avec le fondateur →
          </a>
        </Reveal>
      </div>
    </section>
  )
}
