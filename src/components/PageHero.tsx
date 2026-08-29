import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import type { ReactNode } from 'react'
import { WorldMapScene } from './WorldMapScene'

type CTA = { label: string; to: string }

export function PageHero({
  eyebrow,
  title,
  description,
  primaryCta,
  secondaryCta,
}: {
  eyebrow: string
  title: ReactNode
  description: string
  primaryCta?: CTA
  secondaryCta?: CTA
}) {
  return (
    <section className="relative flex min-h-[100svh] flex-col justify-end overflow-hidden pt-32">
      <WorldMapScene />

      <div className="relative z-10 mx-auto w-full max-w-[1500px] px-6 pb-20 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 26 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className="eyebrow">{eyebrow}</span>
          <h1 className="mt-6 max-w-none font-display text-[clamp(40px,7.6vw,80px)] font-[750] leading-[1.04] tracking-[-0.03em] text-white">
            {title}
          </h1>
          <p className="mt-7 max-w-[52ch] text-[17px] leading-relaxed text-white/60 md:text-[18.5px]">
            {description}
          </p>

          {(primaryCta || secondaryCta) && (
            <div className="mt-10 flex flex-wrap items-center gap-6">
              {primaryCta && (
                <Link
                  to={primaryCta.to}
                  className="group inline-flex items-center gap-2 rounded-full bg-white px-7 py-4 text-[15px] font-semibold text-[#0a0f1c] shadow-[0_0_0_0_rgba(76,141,255,0)] transition-all hover:shadow-[0_0_36px_4px_rgba(76,141,255,0.35)]"
                >
                  {primaryCta.label}
                  <span className="transition-transform group-hover:translate-x-1">→</span>
                </Link>
              )}
              {secondaryCta && (
                <Link
                  to={secondaryCta.to}
                  className="text-[14.5px] font-medium text-white/70 underline decoration-white/25 underline-offset-4 transition-colors hover:text-white hover:decoration-white/60"
                >
                  {secondaryCta.label}
                </Link>
              )}
            </div>
          )}
        </motion.div>
      </div>
    </section>
  )
}
