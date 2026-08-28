import { motion } from 'framer-motion'
import { SpaceScene } from './SpaceScene'

const CORRIDORS = [
  'SÉNÉGAL', 'CÔTE D’IVOIRE', 'CAMEROUN', 'MALI', 'RD CONGO', 'GUINÉE',
  'BÉNIN', 'TOGO', 'MAROC', 'ALGÉRIE', 'GHANA', 'NIGERIA',
  'HAÏTI', 'GUADELOUPE', 'MARTINIQUE', 'GUYANE',
]

export function Hero() {
  return (
    <section id="accueil" className="relative flex min-h-[100svh] flex-col justify-end overflow-hidden pt-32">
      <SpaceScene />

      <div className="relative z-10 mx-auto w-full max-w-[1180px] px-6 pb-20 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 26 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-3xl"
        >
          <span className="eyebrow">La fintech de la diaspora</span>
          <h1 className="mt-5 font-display text-[clamp(40px,8.4vw,76px)] font-[750] leading-[0.98] tracking-[-0.03em] text-white">
            Le paiement sans frontières
            <br />
            pour la diaspora.
          </h1>
          <p className="mt-7 max-w-[52ch] text-[17px] leading-relaxed text-white/60 md:text-[18.5px]">
            Diaspo-Pay règle directement les factures de vos proches à l’étranger : loyer, santé,
            scolarité, abonnements. Votre argent arrive à destination, avec une preuve à chaque
            paiement.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-6">
            <a
              href="#contact"
              className="group inline-flex items-center gap-2 rounded-full bg-white px-7 py-4 text-[15px] font-semibold text-[#0a0f1c] shadow-[0_0_0_0_rgba(76,141,255,0)] transition-all hover:shadow-[0_0_36px_4px_rgba(76,141,255,0.35)]"
            >
              Obtenir l’app
              <span className="transition-transform group-hover:translate-x-1">→</span>
            </a>
            <a
              href="#solution"
              className="text-[14.5px] font-medium text-white/70 underline decoration-white/25 underline-offset-4 transition-colors hover:text-white hover:decoration-white/60"
            >
              Voir comment ça marche
            </a>
          </div>

          <div className="mt-14 flex flex-wrap items-center gap-x-3 gap-y-2 font-mono text-[11px] tracking-[0.08em] text-white/35">
            <span>MARQUE DÉPOSÉE INPI</span>
            <span className="opacity-40">·</span>
            <span>BREVET FR2606158</span>
            <span className="opacity-40">·</span>
            <span>LANCEMENT MI-OCTOBRE 2026</span>
          </div>
        </motion.div>
      </div>

      <div className="relative z-10 border-t border-white/[0.06] py-4">
        <div className="flex overflow-hidden">
          <div className="flex shrink-0 animate-marquee items-center gap-8 pr-8">
            {[...CORRIDORS, ...CORRIDORS].map((c, i) => (
              <span key={i} className="flex items-center gap-8 font-mono text-[11px] tracking-[0.14em] text-white/25">
                {c}
                <span className="text-white/15">✦</span>
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
