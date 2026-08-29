import { motion } from 'framer-motion'
import worldDots from '../assets/world-dots.png'

export function WorldMapScene() {
  return (
    <div className="absolute inset-0 overflow-hidden bg-black">
      <motion.img
        src={worldDots}
        alt=""
        aria-hidden="true"
        className="absolute inset-0 h-full w-full object-cover opacity-[0.45]"
        initial={{ scale: 1.04 }}
        animate={{ scale: [1.04, 1.09, 1.04] }}
        transition={{ duration: 42, repeat: Infinity, ease: 'easeInOut' }}
      />

      {/* traveling wave of light over the same dot pattern */}
      <motion.img
        src={worldDots}
        alt=""
        aria-hidden="true"
        className="dot-wave-layer absolute inset-0 h-full w-full object-cover"
        initial={{ scale: 1.04 }}
        animate={{ scale: [1.04, 1.09, 1.04] }}
        transition={{ duration: 42, repeat: Infinity, ease: 'easeInOut' }}
      />

      {/* legibility scrim: protects the left text column and the bottom transition */}
      <div
        className="absolute inset-0"
        style={{
          background:
            'linear-gradient(100deg, rgba(2,4,10,0.92) 0%, rgba(2,4,10,0.74) 28%, rgba(2,4,10,0.32) 50%, rgba(2,4,10,0.1) 66%, rgba(2,4,10,0.24) 100%)',
        }}
      />
      <div
        className="absolute inset-0"
        style={{
          background:
            'linear-gradient(180deg, rgba(2,4,10,0.15) 0%, rgba(2,4,10,0.08) 30%, rgba(2,4,10,0.5) 70%, rgba(2,4,10,0.88) 100%)',
        }}
      />
      <div
        className="absolute inset-x-0 bottom-0 h-40"
        style={{ background: 'linear-gradient(180deg, rgba(2,4,10,0) 0%, rgba(2,4,10,1) 100%)' }}
      />
    </div>
  )
}
