import { Reveal, Stagger, staggerItem } from '../lib/Reveal'
import { motion } from 'framer-motion'
import {
  IconTv, IconWifi, IconHome, IconHeart, IconCap, IconCompass,
  IconShield,
} from './Icons'
import { ComparisonMockup } from './ComparisonMockup'
import { LogoMark } from './LogoMark'

const USES = [
  { icon: IconTv, title: 'Abonnements audiovisuels', body: 'Canal+, bouquets locaux : réglés directement chez l’opérateur, sans jamais changer d’application.' },
  { icon: IconWifi, title: 'Internet & mobile', body: 'Forfaits rechargés à échéance, pour que la ligne d’un proche ne coupe jamais au mauvais moment.' },
  { icon: IconHome, title: 'Loyer & charges', body: 'Le loyer payé à date, avec un justificatif conservé de votre côté, chaque mois, sans y penser.' },
  { icon: IconHeart, title: 'Santé & hospitalisation', body: 'Frais médicaux et cotisations d’assurance pris en charge dans l’instant, même en urgence familiale.' },
  { icon: IconCap, title: 'Frais de scolarité', body: 'Le règlement part directement à l’université : vous savez que l’inscription est confirmée.' },
  { icon: IconCompass, title: 'Réservations & services', body: 'Hôtel, location, taxi, avance immobilière : préparés depuis l’étranger, sans intermédiaire opaque.' },
]

const STEPS = [
  { title: 'Scannez la facture', body: 'Photographiez la facture reçue par votre proche, même manuscrite, ou choisissez l’organisme dans l’application.' },
  { title: 'L’IA la lit pour vous', body: 'Montant, émetteur, échéance : extraits automatiquement. Vous vérifiez, vous validez, zéro ressaisie.' },
  { title: 'Le paiement part à la source', body: 'L’argent est réglé directement à l’organisme émetteur, jamais sur un compte tiers. C’est le cœur du paiement ciblé.' },
  { title: 'Vous recevez la preuve', body: 'Statut, reçu, historique : remontés en temps réel, consultables à tout moment dans l’application.' },
]

function StepItem({ step, index }: { step: (typeof STEPS)[number]; index: number }) {
  return (
    <motion.div variants={staggerItem}>
      <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white/5 font-mono text-[12px] text-[var(--color-accent-soft)]">
        0{index}
      </span>
      <h3 className="mt-4 font-display text-[17px] font-medium text-white">{step.title}</h3>
      <p className="mt-2 max-w-[30ch] text-[13.5px] leading-relaxed text-white/50">{step.body}</p>
    </motion.div>
  )
}

function StepsPhoneMockup() {
  return (
    <div className="relative w-[210px] shrink-0 sm:w-[240px]">
      <div className="relative aspect-[433/882] rounded-[2.2rem] border-[3px] border-white/15 bg-[#020409] p-[3px] shadow-[0_40px_80px_-24px_rgba(0,0,0,0.7)]">
        <div className="absolute left-1/2 top-[11px] z-10 h-[16px] w-[64px] -translate-x-1/2 rounded-full bg-black" />
        <div className="relative flex h-full w-full items-center justify-center overflow-hidden rounded-[1.9rem] bg-gradient-to-b from-[#101b34] to-[#060912]">
          <LogoMark size={56} />
        </div>
      </div>
    </div>
  )
}

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
            route, ou l’échéance qu’on voulait couvrir reste impayée. Ce n’est le tort de
            personne, c’est la limite du liquide.
          </p>
        </Reveal>

        <ComparisonMockup />
      </div>

      {/* Mécanisme */}
      <div id="mecanisme" className="mx-auto mt-32 max-w-[1180px] px-6 md:px-8">
        <Reveal className="max-w-xl">
          <span className="eyebrow">Comment ça marche</span>
          <h2 className="mt-4 text-[clamp(26px,3.4vw,38px)] leading-[1.1] text-white">
            Quatre étapes. Une seule certitude.
          </h2>
        </Reveal>

        <div className="mt-16 flex flex-col items-center gap-16 lg:flex-row lg:items-center lg:justify-center lg:gap-14">
          <Stagger className="flex flex-col gap-14">
            <StepItem step={STEPS[0]} index={1} />
            <StepItem step={STEPS[1]} index={2} />
          </Stagger>

          <Reveal delay={0.15} className="shrink-0">
            <StepsPhoneMockup />
          </Reveal>

          <Stagger className="flex flex-col gap-14">
            <StepItem step={STEPS[2]} index={3} />
            <StepItem step={STEPS[3]} index={4} />
          </Stagger>
        </div>
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
              Vous vérifiez toujours avant de valider. L’IA accélère, elle ne décide jamais à
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
