import { motion } from 'framer-motion'
import { Reveal, Stagger, staggerItem } from '../lib/Reveal'
import { IconHeart, IconReceipt, IconCompass } from './Icons'
import { PageHero } from './PageHero'
import { Contact } from './Contact'

const VALUES = [
  { icon: IconHeart, title: 'Soutenir sans infantiliser', body: 'La diaspora aide avec fierté. Nos produits respectent cette dignité, dans le ton comme dans l’usage.' },
  { icon: IconReceipt, title: 'Traçabilité par défaut', body: 'Chaque décision produit répond à une question simple : l’utilisateur saura-t-il exactement ce qui a été payé ?' },
  { icon: IconCompass, title: 'Impact au pays', body: 'Payer une facture, c’est faire circuler la valeur dans l’économie locale plutôt que dans une chaîne d’intermédiaires.' },
]

const ROLES = [
  { tag: 'Produit', title: 'Développement mobile & backend', body: 'Construire l’application et les briques de paiement, avec une exigence forte de fiabilité.' },
  { tag: 'Conformité', title: 'Conformité & risque', body: 'Structurer le dispositif KYC/AML et accompagner le cadrage réglementaire du service.' },
  { tag: 'Croissance', title: 'Croissance & communauté', body: 'Fédérer la communauté diaspora en France et en Europe, animer la pré-inscription.' },
  { tag: 'Opérations', title: 'Partenariats & opérations pays', body: 'Nouer les relations avec les organismes émetteurs de factures dans les pays desservis.' },
]

export function Careers() {
  return (
    <>
      <PageHero
        eyebrow="Rejoindre l’aventure"
        title="On construit l’équipe qui portera le lancement."
        description="L’application arrive à la mi-octobre. Produit, conformité, déploiement : l’équipe se constitue dès aujourd’hui sur les corridors Europe, Afrique et Caraïbes."
        primaryCta={{ label: 'Candidature spontanée', to: '#contact' }}
        secondaryCta={{ label: 'Voir les profils recherchés', to: '#profils' }}
      />
      <section className="relative border-t border-white/[0.06] py-28 md:py-36">
      <div className="mx-auto max-w-[1180px] px-6 md:px-8">
        <Stagger className="grid gap-4 md:grid-cols-3">
          {VALUES.map((v) => (
            <motion.div key={v.title} variants={staggerItem} className="rounded-2xl border border-white/10 bg-white/[0.02] p-7">
              <v.icon className="h-6 w-6 text-[var(--color-accent-soft)]" />
              <h3 className="mt-5 font-display text-[16.5px] font-medium text-white">{v.title}</h3>
              <p className="mt-2 text-[13.5px] leading-relaxed text-white/50">{v.body}</p>
            </motion.div>
          ))}
        </Stagger>

        <div id="profils" className="mt-24">
          <Reveal>
            <span className="eyebrow">Profils recherchés</span>
            <h3 className="mt-4 font-display text-[clamp(22px,2.8vw,30px)] text-white">Quatre familles de compétences</h3>
            <p className="mt-3 text-[14px] text-white/40">
              Les intitulés définitifs seront publiés prochainement. Les candidatures spontanées sont examinées dès maintenant.
            </p>
          </Reveal>

          <Stagger className="mt-10 grid gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10 md:grid-cols-2">
            {ROLES.map((r) => (
              <motion.div key={r.title} variants={staggerItem} className="bg-[#080c17] p-8 transition-colors hover:bg-[#0c1224]">
                <span className="font-mono text-[10.5px] tracking-[0.14em] text-[var(--color-accent-soft)]">{r.tag.toUpperCase()}</span>
                <h4 className="mt-3 font-display text-[17px] font-medium text-white">{r.title}</h4>
                <p className="mt-2 text-[14px] leading-relaxed text-white/50">{r.body}</p>
              </motion.div>
            ))}
          </Stagger>
        </div>
      </div>
      </section>

      <Contact
        roles={['Candidat']}
        eyebrow="Candidature"
        title="Postulez maintenant."
        description="Vous voulez rejoindre l’aventure ? Envoyez votre profil, l’équipe fondatrice vous recontacte directement."
      />
    </>
  )
}
