import { motion } from 'framer-motion'
import { Reveal, Stagger, staggerItem } from '../lib/Reveal'
import familyPortrait from '../assets/community/family-portrait.jpg'
import familyHome from '../assets/community/family-home.jpg'
import familyJoy from '../assets/community/family-joy.jpg'
import marketWoman from '../assets/community/market-woman.jpg'
import marketVendor from '../assets/community/market-vendor.jpg'
import caribbeanCarnival from '../assets/community/caribbean-carnival.jpg'

const TILES = [
  { src: familyPortrait, alt: 'Famille réunie, portrait chaleureux', span: 'col-span-2 row-span-2' },
  { src: familyHome, alt: 'Famille autour de la table, à la maison', span: 'col-span-2 row-span-1' },
  { src: marketVendor, alt: 'Marché vivant en Afrique de l’Ouest', span: 'col-span-1 row-span-1' },
  { src: marketWoman, alt: 'Vie quotidienne dans les rues d’Afrique', span: 'col-span-1 row-span-1' },
  { src: familyJoy, alt: 'Famille élargie, moment de joie partagé', span: 'col-span-2 row-span-1' },
  { src: caribbeanCarnival, alt: 'Carnaval et fierté caribéenne', span: 'col-span-2 row-span-1' },
]

function Tile({ tile, index }: { tile: (typeof TILES)[number]; index: number }) {
  return (
    <motion.div
      variants={staggerItem}
      className={`group relative overflow-hidden rounded-2xl border border-white/10 ${tile.span}`}
    >
      <motion.img
        src={tile.src}
        alt={tile.alt}
        className="h-full w-full object-cover"
        initial={{ scale: 1.06 }}
        whileHover={{ scale: 1.12 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        loading={index < 2 ? 'eager' : 'lazy'}
      />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#050810]/70 via-[#050810]/5 to-transparent" />
      <div className="pointer-events-none absolute inset-0 bg-[#0b1226]/10" />
      <div className="pointer-events-none absolute inset-0 opacity-0 ring-1 ring-inset ring-[var(--color-accent-soft)]/40 transition-opacity duration-500 group-hover:opacity-100" />
    </motion.div>
  )
}

export function Community() {
  return (
    <section className="relative border-t border-white/[0.06] py-28 md:py-36">
      <div className="mx-auto max-w-[1180px] px-6 md:px-8">
        <Reveal className="max-w-2xl">
          <span className="eyebrow">La diaspora</span>
          <h2 className="mt-4 text-[clamp(28px,4vw,44px)] leading-[1.08] text-white">
            La distance n’a jamais coupé le lien.
          </h2>
          <p className="mt-6 max-w-[56ch] text-[16.5px] leading-relaxed text-white/55">
            En France ou en Europe, chaque famille garde un pied au pays. Diaspo-Pay est pensé
            pour cette communauté-là, celle qui reste présente malgré les kilomètres.
          </p>
        </Reveal>

        <Stagger
          className="mt-14 grid auto-rows-[140px] grid-cols-2 gap-3 sm:auto-rows-[160px] sm:grid-cols-4 md:auto-rows-[190px] md:gap-4"
          step={0.08}
        >
          {TILES.map((tile, i) => (
            <Tile key={tile.alt} tile={tile} index={i} />
          ))}
        </Stagger>
      </div>
    </section>
  )
}
