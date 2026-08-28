import { useEffect, useMemo, useRef } from 'react'
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'
import earthHero from '../assets/earth-hero.jpg'

type Star = { x: number; y: number; size: number; delay: number; duration: number }

function useStars(count: number): Star[] {
  return useMemo(
    () =>
      Array.from({ length: count }, () => ({
        x: Math.random() * 100,
        y: Math.random() * 34,
        size: 1 + Math.random() * 1.6,
        delay: Math.random() * 6,
        duration: 3 + Math.random() * 4,
      })),
    [count],
  )
}

export function SpaceScene() {
  const stars = useStars(50)
  const mx = useMotionValue(0)
  const my = useMotionValue(0)
  const sx = useSpring(mx, { stiffness: 35, damping: 18, mass: 0.6 })
  const sy = useSpring(my, { stiffness: 35, damping: 18, mass: 0.6 })

  const imgX = useTransform(sx, (v) => v * -10)
  const imgY = useTransform(sy, (v) => v * -6)

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
        src={earthHero}
        alt=""
        aria-hidden="true"
        className="absolute inset-0 h-full w-full object-cover"
        style={{ x: imgX, y: imgY, objectPosition: 'center 32%' }}
        initial={{ scale: 1.14 }}
        animate={{ scale: [1.14, 1.22, 1.14] }}
        transition={{ duration: 34, repeat: Infinity, ease: 'easeInOut' }}
      />

      {/* extra twinkle accents, confined to the black upper band */}
      <div className="absolute inset-0">
        {stars.map((s, i) => (
          <span
            key={i}
            className="absolute rounded-full bg-white"
            style={{
              left: `${s.x}%`,
              top: `${s.y}%`,
              width: s.size,
              height: s.size,
              animation: `twinkle ${s.duration}s ease-in-out infinite`,
              animationDelay: `${s.delay}s`,
            }}
          />
        ))}
      </div>

      {/* legibility scrim: light over the black sky, heavy by the time we reach the bright clouds */}
      <div
        className="absolute inset-0"
        style={{
          background:
            'linear-gradient(180deg, rgba(3,5,10,0.55) 0%, rgba(3,5,10,0.30) 22%, rgba(3,6,13,0.42) 42%, rgba(3,6,14,0.72) 62%, rgba(2,4,10,0.92) 82%, rgba(2,4,10,0.98) 100%)',
        }}
      />
      <div
        className="absolute inset-x-0 bottom-0 h-40"
        style={{ background: 'linear-gradient(180deg, rgba(2,4,10,0) 0%, rgba(2,4,10,1) 100%)' }}
      />
    </div>
  )
}
