import { Reveal, Stagger, staggerItem } from '../lib/Reveal'
import { motion } from 'framer-motion'
import {
  IconTv, IconWifi, IconHome, IconHeart, IconCap, IconCompass,
} from './Icons'
import { ComparisonMockup } from './ComparisonMockup'
import { LogoMark } from './LogoMark'
import UseCaseFan from './UseCaseFan'

const USES = [
  { icon: IconTv, title: 'Abonnements audiovisuels', color: '#a78bfa' },
  { icon: IconWifi, title: 'Internet & mobile', color: '#7fb0ff' },
  { icon: IconHome, title: 'Loyer & charges', color: '#e8a54b' },
  { icon: IconHeart, title: 'Santé & hospitalisation', color: '#fb7185' },
  { icon: IconCap, title: 'Frais de scolarité', color: '#34d399' },
  { icon: IconCompass, title: 'Réservations & services', color: '#fb923c' },
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
      <span className="font-mono text-[13px] text-[var(--color-accent-soft)]">
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
        <div className="flex flex-col items-center gap-12 lg:flex-row lg:items-center lg:justify-start lg:gap-14">
          <Reveal className="max-w-md lg:shrink-0">
            <span className="eyebrow">Cas d’usage</span>
            <h2 className="mt-4 text-[clamp(26px,3.4vw,38px)] leading-[1.1] text-white">
              Les dépenses du quotidien, prises en charge à la source.
            </h2>
          </Reveal>

          <Reveal delay={0.1}>
            <UseCaseFan items={USES} />
          </Reveal>
        </div>
      </div>

    </section>
  )
}
