import { Reveal, Stagger, staggerItem } from '../lib/Reveal'
import { motion } from 'framer-motion'
import {
  IconTv, IconWifi, IconHome, IconHeart, IconCap, IconCompass,
  IconScan, IconSparkle, IconSend, IconReceipt, IconShield,
} from './Icons'

const USES = [
  { icon: IconTv, title: 'Abonnements audiovisuels', body: 'Canal+, bouquets locaux — réglés directement chez l’opérateur, sans jamais changer d’application.' },
  { icon: IconWifi, title: 'Internet & mobile', body: 'Forfaits rechargés à échéance, pour que la ligne d’un proche ne coupe jamais au mauvais moment.' },
  { icon: IconHome, title: 'Loyer & charges', body: 'Le loyer payé à date, avec un justificatif conservé de votre côté — chaque mois, sans y penser.' },
  { icon: IconHeart, title: 'Santé & hospitalisation', body: 'Frais médicaux et cotisations d’assurance pris en charge dans l’instant, même en urgence familiale.' },
  { icon: IconCap, title: 'Frais de scolarité', body: 'Le règlement part directement à l’université — vous savez que l’inscription est confirmée.' },
  { icon: IconCompass, title: 'Réservations & services', body: 'Hôtel, location, taxi, avance immobilière — préparés depuis l’étranger, sans intermédiaire opaque.' },
]

const STEPS = [
  { icon: IconScan, title: 'Scannez la facture', body: 'Photographiez la facture reçue par votre proche, même manuscrite — ou choisissez l’organisme dans l’application.' },
  { icon: IconSparkle, title: 'L’IA la lit pour vous', body: 'Montant, émetteur, échéance : extraits automatiquement. Vous vérifiez, vous validez — zéro ressaisie.' },
  { icon: IconSend, title: 'Le paiement part à la source', body: 'L’argent est réglé directement à l’organisme émetteur, jamais sur un compte tiers. C’est le cœur du paiement ciblé.' },
  { icon: IconReceipt, title: 'Vous recevez la preuve', body: 'Statut, reçu, historique : remontés en temps réel, consultables à tout moment dans l’application.' },
]

export function Solution() {
  return (
    <section id="solution" className="relative border-t border-white/[0.06] py-28 md:py-36">
      <div className="mx-auto max-w-[1180px] px-6 md:px-8">
        <Reveal className="max-w-2xl">
          <span className="eyebrow">Le constat</span>
          <h2 className="mt-4 text-[clamp(28px,4vw,44px)] leading-[1.08] text-white">
            Aider, ce n’est pas la question.
            <br />
            Savoir que ça arrive, si.
          </h2>
          <p className="mt-6 max-w-[56ch] text-[16.5px] leading-relaxed text-white/55">
            Chaque année, la diaspora envoie de l’argent liquide à ses proches restés au pays.
            L’intention est entière. Mais une fois la somme remise, elle échappe : réaffectée en
            route, ou l’échéance qu’on voulait couvrir reste impayée. Ce n’est le tort de personne
            — c’est la limite du liquide.
          </p>
        </Reveal>

        <Reveal delay={0.1} className="mt-14 grid overflow-hidden rounded-2xl border border-white/10 md:grid-cols-2">
          <div className="bg-white/[0.02] p-8 md:p-10">
            <div className="font-mono text-[10.5px] tracking-[0.14em] text-white/35">AUJOURD’HUI</div>
            <p className="mt-4 font-display text-[20px] italic leading-snug text-white/70">
              Vous envoyez une somme. Le suivi s’arrête à la remise.
            </p>
          </div>
          <div className="border-t border-white/10 bg-gradient-to-br from-[#101b34] to-[#0b1226] p-8 md:border-l md:border-t-0 md:p-10">
            <div className="font-mono text-[10.5px] tracking-[0.14em] text-[var(--color-accent-soft)]">AVEC DIASPO-PAY</div>
            <p className="mt-4 font-display text-[20px] italic leading-snug text-white">
              Vous choisissez la facture. Elle est réglée à sa source — vous recevez la preuve.
            </p>
          </div>
        </Reveal>
      </div>

      {/* Mécanisme */}
      <div id="mecanisme" className="mx-auto mt-32 max-w-[1180px] px-6 md:px-8">
        <Reveal className="max-w-xl">
          <span className="eyebrow">Comment ça marche</span>
          <h2 className="mt-4 text-[clamp(26px,3.4vw,38px)] leading-[1.1] text-white">
            Quatre étapes. Une seule certitude.
          </h2>
        </Reveal>

        <Stagger className="mt-14 grid gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10 md:grid-cols-4">
          {STEPS.map((s, i) => (
            <motion.div key={s.title} variants={staggerItem} className="group relative bg-[#080c17] p-7 transition-colors hover:bg-[#0c1224]">
              <div className="flex items-center justify-between">
                <s.icon className="h-6 w-6 text-[var(--color-accent-soft)]" />
                <span className="font-mono text-[11px] text-white/25">0{i + 1}</span>
              </div>
              <h3 className="mt-6 font-display text-[17px] font-medium text-white">{s.title}</h3>
              <p className="mt-2.5 text-[13.5px] leading-relaxed text-white/50">{s.body}</p>
            </motion.div>
          ))}
        </Stagger>
      </div>

      {/* Cas d'usage */}
      <div className="mx-auto mt-32 max-w-[1180px] px-6 md:px-8">
        <Reveal className="max-w-xl">
          <span className="eyebrow">Cas d’usage</span>
          <h2 className="mt-4 text-[clamp(26px,3.4vw,38px)] leading-[1.1] text-white">
            Les dépenses du quotidien, prises en charge à la source.
          </h2>
        </Reveal>

        <Stagger className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {USES.map((u) => (
            <motion.div
              key={u.title}
              variants={staggerItem}
              className="rounded-2xl border border-white/10 bg-white/[0.02] p-7 transition-colors hover:border-white/20 hover:bg-white/[0.04]"
            >
              <u.icon className="h-6 w-6 text-[var(--color-accent-soft)]" />
              <h3 className="mt-5 font-display text-[16.5px] font-medium text-white">{u.title}</h3>
              <p className="mt-2 text-[13.5px] leading-relaxed text-white/50">{u.body}</p>
            </motion.div>
          ))}
        </Stagger>
      </div>

      {/* IA + sécurité */}
      <div className="mx-auto mt-32 max-w-[1180px] px-6 md:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
          <Reveal>
            <span className="eyebrow">Le rôle de l’intelligence artificielle</span>
            <h2 className="mt-4 text-[clamp(22px,2.6vw,30px)] leading-[1.15] text-white">
              Même une facture écrite à la main, elle sait la lire.
            </h2>
            <p className="mt-5 max-w-[52ch] text-[15px] leading-relaxed text-white/55">
              Beaucoup d’établissements au pays n’ont pas de facturation numérique. Diaspo-Pay
              intègre une lecture assistée par IA capable d’interpréter une facture photographiée,
              y compris manuscrite, pour en extraire l’organisme, la référence et le montant dû.
              Vous vérifiez toujours avant de valider — l’IA accélère, elle ne décide jamais à
              votre place.
            </p>
            <div className="mt-7 flex flex-wrap gap-2">
              {['Facture imprimée', 'Facture manuscrite', 'Référence client', 'Montant dû'].map((t) => (
                <span key={t} className="rounded-full border border-white/10 bg-white/[0.03] px-3.5 py-1.5 font-mono text-[11px] tracking-wide text-white/50">
                  {t}
                </span>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.1} className="rounded-2xl border border-white/10 bg-white/[0.02] p-8 md:p-9">
            <IconShield className="h-7 w-7 text-[var(--color-accent-soft)]" />
            <h3 className="mt-5 font-display text-[19px] font-medium text-white">Sécurité & conformité</h3>
            <p className="mt-3 text-[14.5px] leading-relaxed text-white/55">
              Diaspo-Pay est une fintech en cours de lancement. Avant toute ouverture au public,
              le dispositif de conformité est finalisé : vérification d’identité (KYC), contrôle
              de la licéité des opérations et lutte contre le blanchiment (AML).
            </p>
            <p className="mt-3 text-[14.5px] leading-relaxed text-white/55">
              Aucune opération de paiement n’est proposée sur ce site : il présente la solution et
              permet de se pré-inscrire. Aucune donnée bancaire n’est collectée ici.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
