import { useEffect, useMemo, useRef } from 'react'
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'
import earthHero from '../assets/earth-hero-2.avif'

type Star = { x: number; y: number; size: number; delay: number; duration: number }

function useStars(count: number): Star[] {
  return useMemo(
    () =>
      Array.from({ length: count }, () => ({
        x: 40 + Math.random() * 60,
        y: Math.random() * 55,
        size: 1 + Math.random() * 1.6,
        delay: Math.random() * 6,
        duration: 3 + Math.random() * 4,
      })),
    [count],
  )
}

export function SpaceScene() {
  const stars = useStars(45)
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
        style={{ x: imgX, y: imgY, objectPosition: '68% 78%', filter: 'blur(2.5px)' }}
        initial={{ scaleX: -1.14, scaleY: 1.14 }}
        animate={{ scaleX: [-1.14, -1.22, -1.14], scaleY: [1.14, 1.22, 1.14] }}
        transition={{ duration: 34, repeat: Infinity, ease: 'easeInOut' }}
      />

      {/* extra twinkle accents, over the clear black span of sky */}
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

      {/* legibility scrim: protects the left text column and the bottom transition */}
      <div
        className="absolute inset-0"
        style={{
          background:
            'linear-gradient(100deg, rgba(2,4,10,0.9) 0%, rgba(2,4,10,0.72) 26%, rgba(2,4,10,0.28) 48%, rgba(2,4,10,0.08) 64%, rgba(2,4,10,0.2) 100%)',
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
