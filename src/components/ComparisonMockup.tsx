import { motion } from 'framer-motion'
import { Reveal, Stagger, staggerItem } from '../lib/Reveal'
import { IconScan, IconReceipt } from './Icons'

const TRAIL = [1, 0.72, 0.44, 0.22]

export function ComparisonMockup() {
  return (
    <Reveal delay={0.1} className="mt-14 grid overflow-hidden rounded-2xl border border-white/10 md:grid-cols-2">
      <div className="flex flex-col justify-center bg-white/[0.02] p-7 md:p-9">
        <div>
          <div className="font-mono text-[10.5px] tracking-[0.14em] text-white/35">AUJOURD’HUI</div>
          <p className="mt-3 font-accent text-[22px] leading-snug text-white/70">
            Vous envoyez une somme. Le suivi s’arrête à la remise.
          </p>
        </div>

        <Stagger className="mt-7 flex items-center">
          {TRAIL.map((o, i) => (
            <motion.span key={i} variants={staggerItem} className="flex items-center">
              <span className="h-2.5 w-2.5 shrink-0 rounded-full bg-white" style={{ opacity: o }} />
              <span className="mx-1.5 h-px w-8 shrink-0 bg-white/15 sm:w-11" />
            </motion.span>
          ))}
          <motion.span
            variants={staggerItem}
            className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-dashed border-white/20 font-mono text-[11px] text-white/30 animate-[twinkle_3s_ease-in-out_infinite]"
          >
            ?
          </motion.span>
        </Stagger>
        <p className="mt-2.5 font-mono text-[10px] tracking-[0.1em] text-white/25">AUCUN SUIVI APRÈS LA REMISE</p>
      </div>

      <div className="relative flex flex-col items-center gap-7 overflow-hidden border-t border-white/10 bg-gradient-to-br from-[#101b34] to-[#0b1226] p-7 sm:flex-row sm:justify-between md:border-l md:border-t-0 md:p-9">
        <div className="pointer-events-none absolute -right-20 -top-20 h-56 w-56 rounded-full bg-[var(--color-accent)]/20 blur-[90px]" />

        <div className="relative">
          <div className="font-mono text-[10.5px] tracking-[0.14em] text-[var(--color-accent-soft)]">AVEC DIASPO-PAY</div>
          <p className="mt-3 max-w-[30ch] font-accent text-[22px] leading-snug text-white">
            Vous choisissez la facture. Elle est réglée à sa source, et vous recevez la preuve.
          </p>
        </div>

        <div className="relative shrink-0">
          <PhoneMockup />
        </div>
      </div>
    </Reveal>
  )
}

function PhoneMockup() {
  return (
    <div className="relative w-[156px] shrink-0">
      <div className="relative aspect-[433/882] rounded-[1.9rem] border-[3px] border-white/15 bg-[#020409] p-[3px] shadow-[0_30px_60px_-20px_rgba(0,0,0,0.65)]">
        <div className="absolute left-1/2 top-[9px] z-10 h-[14px] w-[54px] -translate-x-1/2 rounded-full bg-black" />
        <div className="relative h-full w-full overflow-hidden rounded-[1.6rem] bg-gradient-to-b from-[#0c1327] to-[#060912]">
          <Stagger className="flex h-full flex-col justify-center gap-2.5 px-3.5 pt-7" step={0.14}>
            <motion.div
              variants={staggerItem}
              className="flex items-center gap-1.5 font-mono text-[7px] tracking-[0.1em] text-white/35"
            >
              <IconScan className="h-3 w-3 text-[var(--color-accent-soft)]" />
              FACTURE SCANNÉE
            </motion.div>

            <motion.div variants={staggerItem} className="rounded-lg border border-white/10 bg-white/[0.04] p-2.5">
              <div className="font-mono text-[6.5px] tracking-[0.1em] text-white/35">LOYER · DAKAR</div>
              <div className="mt-1 font-display text-[14px] font-semibold text-white">120 000 XOF</div>
              <div className="mt-1 text-[7px] text-white/40">Échéance 05/09</div>
            </motion.div>

            <motion.div
              variants={staggerItem}
              className="flex items-center gap-1.5 rounded-lg bg-[var(--color-accent)]/15 p-2.5"
            >
              <IconReceipt className="h-3.5 w-3.5 shrink-0 text-[var(--color-accent-soft)]" />
              <div>
                <div className="text-[8px] font-semibold text-white">Réglé à la source</div>
                <div className="text-[6.5px] text-white/40">Preuve disponible</div>
              </div>
            </motion.div>
          </Stagger>
        </div>
      </div>
    </div>
  )
}
