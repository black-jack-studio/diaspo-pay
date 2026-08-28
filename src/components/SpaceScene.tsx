import { useEffect, useMemo, useRef } from 'react'
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'

type Star = { x: number; y: number; size: number; delay: number; duration: number; bright: boolean }

function useStars(count: number): Star[] {
  return useMemo(
    () =>
      Array.from({ length: count }, () => {
        const bright = Math.random() < 0.12
        return {
          x: Math.random() * 100,
          y: Math.random() * 62,
          size: bright ? 1.6 + Math.random() * 1.4 : 0.6 + Math.random() * 1.1,
          delay: Math.random() * 6,
          duration: 3 + Math.random() * 4,
          bright,
        }
      }),
    [count],
  )
}

export function SpaceScene() {
  const stars = useStars(160)
  const mx = useMotionValue(0)
  const my = useMotionValue(0)
  const sx = useSpring(mx, { stiffness: 35, damping: 18, mass: 0.6 })
  const sy = useSpring(my, { stiffness: 35, damping: 18, mass: 0.6 })

  const planetX = useTransform(sx, (v) => v * -16)
  const planetY = useTransform(sy, (v) => v * -9)
  const starX = useTransform(sx, (v) => v * -30)
  const starY = useTransform(sy, (v) => v * -18)

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
    <div ref={ref} className="absolute inset-0 overflow-hidden bg-[var(--color-bg)]">
      <div
        className="absolute inset-0"
        style={{
          background:
            'radial-gradient(140% 90% at 50% 0%, #0a1224 0%, #060911 46%, #030509 100%)',
        }}
      />

      <motion.div className="absolute inset-0" style={{ x: starX, y: starY }}>
        {stars.map((s, i) => (
          <span
            key={i}
            className="absolute rounded-full bg-white"
            style={{
              left: `${s.x}%`,
              top: `${s.y}%`,
              width: s.size,
              height: s.size,
              boxShadow: s.bright ? '0 0 6px 1px rgba(180,205,255,0.7)' : undefined,
              animation: `twinkle ${s.duration}s ease-in-out infinite`,
              animationDelay: `${s.delay}s`,
            }}
          />
        ))}
      </motion.div>

      <div
        className="absolute left-1/2 -bottom-[46vw] md:-bottom-[34vw] h-[100vw] w-[100vw] md:h-[64vw] md:w-[64vw] -translate-x-1/2 rounded-full blur-3xl opacity-50"
        style={{ background: 'radial-gradient(circle, rgba(76,141,255,0.55), rgba(76,141,255,0) 68%)' }}
        aria-hidden="true"
      />

      <motion.div
        className="absolute left-1/2 -bottom-[42vw] md:-bottom-[30vw] h-[92vw] w-[92vw] md:h-[56vw] md:w-[56vw] -translate-x-1/2 rounded-full"
        style={{
          x: planetX,
          y: planetY,
          animation: 'drift 22s ease-in-out infinite',
          background:
            'radial-gradient(circle at 36% 26%, #2a4a80 0%, #182a52 24%, #0e1c3a 44%, #081326 66%, #030509 100%)',
          boxShadow:
            '0 -8px 90px 10px rgba(120,170,255,0.28), inset -50px -36px 130px rgba(0,0,0,0.6), inset 22px 14px 100px rgba(150,190,255,0.14)',
        }}
        aria-hidden="true"
      >
        <div className="absolute inset-0 overflow-hidden rounded-full opacity-70 mix-blend-screen">
          <div
            className="absolute top-[8%] left-[16%] h-[38%] w-[46%] rounded-full blur-2xl"
            style={{ background: 'radial-gradient(circle, rgba(130,180,255,0.35), transparent 70%)' }}
          />
          <div
            className="absolute top-[32%] left-[48%] h-[30%] w-[40%] rounded-full blur-2xl"
            style={{ background: 'radial-gradient(circle, rgba(160,205,255,0.2), transparent 70%)' }}
          />
        </div>
        <div className="absolute -inset-px rounded-full" style={{ boxShadow: 'inset 0 0 0 1px rgba(150,190,255,0.22)' }} />
      </motion.div>

      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[var(--color-bg)]/0" />
    </div>
  )
}
