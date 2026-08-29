import { useEffect, useRef } from 'react'
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'
import worldDots from '../assets/world-dots.png'

type Point = { x: number; y: number; label: string }

// Coordinates are hand-placed in the source image's own 1920×1080 pixel space.
const HUB: Point = { x: 1020, y: 230, label: 'FRANCE' }

const DESTINATIONS: Point[] = [
  { x: 935, y: 460, label: 'SÉNÉGAL' },
  { x: 965, y: 490, label: 'CÔTE D’IVOIRE' },
  { x: 1020, y: 480, label: 'NIGERIA' },
  { x: 1055, y: 500, label: 'CAMEROUN' },
  { x: 945, y: 340, label: 'MAROC' },
  { x: 655, y: 540, label: 'HAÏTI' },
  { x: 690, y: 555, label: 'GUADELOUPE' },
]

function arcPath(a: Point, b: Point) {
  const mx = (a.x + b.x) / 2
  const my = (a.y + b.y) / 2 - Math.abs(a.x - b.x) * 0.16
  return `M ${a.x} ${a.y} Q ${mx} ${my} ${b.x} ${b.y}`
}

export function WorldMapScene() {
  const mx = useMotionValue(0)
  const my = useMotionValue(0)
  const sx = useSpring(mx, { stiffness: 35, damping: 18, mass: 0.6 })
  const sy = useSpring(my, { stiffness: 35, damping: 18, mass: 0.6 })

  const imgX = useTransform(sx, (v) => v * -8)
  const imgY = useTransform(sy, (v) => v * -5)

  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    function onMove(e: PointerEvent) {
      const el = ref.current
      if (!el) return
      const rect = el.getBoundingClientRect()
      mx.set(((e.clientX - rect.left) / rect.width - 0.5) * 2)
      my.set(((e.clientY - rect.top) / rect.height - 0.5) * 2)
    }
    window.addEventListener('pointermove', onMove)
    return () => window.removeEventListener('pointermove', onMove)
  }, [mx, my])

  return (
    <div ref={ref} className="absolute inset-0 overflow-hidden bg-black">
      <motion.img
        src={worldDots}
        alt=""
        aria-hidden="true"
        className="absolute inset-0 h-full w-full object-cover opacity-[0.65]"
        style={{ x: imgX, y: imgY }}
        initial={{ scale: 1.04 }}
        animate={{ scale: [1.04, 1.09, 1.04] }}
        transition={{ duration: 42, repeat: Infinity, ease: 'easeInOut' }}
      />

      <motion.svg
        className="absolute inset-0 h-full w-full"
        viewBox="0 0 1920 1080"
        preserveAspectRatio="xMidYMid slice"
        style={{ x: imgX, y: imgY }}
        aria-hidden="true"
      >
        {DESTINATIONS.map((d, i) => (
          <motion.path
            key={d.label}
            d={arcPath(HUB, d)}
            fill="none"
            stroke="var(--color-accent-soft)"
            strokeWidth={2.4}
            strokeLinecap="round"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 0.6 }}
            transition={{ duration: 1.6, delay: 0.6 + i * 0.22, ease: [0.16, 1, 0.3, 1] }}
          />
        ))}

        <circle cx={HUB.x} cy={HUB.y} r={9} fill="var(--color-accent-soft)" />
        <circle cx={HUB.x} cy={HUB.y} r={9} fill="none" stroke="var(--color-accent-soft)" strokeWidth={1.5} opacity={0.5}>
          <animate attributeName="r" values="9;22;9" dur="3s" repeatCount="indefinite" />
          <animate attributeName="opacity" values="0.5;0;0.5" dur="3s" repeatCount="indefinite" />
        </circle>

        {DESTINATIONS.map((d, i) => (
          <motion.circle
            key={d.label}
            cx={d.x}
            cy={d.y}
            r={6}
            fill="var(--color-accent)"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, delay: 1.6 + i * 0.22 }}
          />
        ))}
      </motion.svg>

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
