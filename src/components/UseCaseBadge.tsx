import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'

const PHRASES = [
  'Internet & mobile',
  'Loyer & charges',
  'Santé & hospitalisation',
  'Frais de scolarité',
  'Réservations & services',
  'Abonnements audiovisuels',
]

export function UseCaseBadge() {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const id = setInterval(() => setIndex((i) => (i + 1) % PHRASES.length), 5000)
    return () => clearInterval(id)
  }, [])

  return (
    <div className="absolute left-[76%] top-[62%] z-10 hidden h-[168px] w-[318px] -translate-x-1/2 -translate-y-1/2 md:block lg:h-[186px] lg:w-[358px]">
      <div className="liquid-glass-card relative h-full w-full overflow-hidden rounded-[32px]">
        <AnimatePresence>
          <motion.span
            key={index}
            initial={{ opacity: 0, y: 14, filter: 'blur(10px)' }}
            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            exit={{ opacity: 0, y: -14, filter: 'blur(10px)' }}
            transition={{ duration: 1.8, ease: [0.22, 1, 0.36, 1] }}
            className="absolute inset-0 flex items-center justify-center px-8 text-center font-display text-[21px] font-[700] leading-snug tracking-[-0.02em] text-white [text-shadow:0_1px_10px_rgba(0,0,0,0.45)] lg:text-[24px]"
          >
            {PHRASES[index]}
          </motion.span>
        </AnimatePresence>
      </div>
    </div>
  )
}
