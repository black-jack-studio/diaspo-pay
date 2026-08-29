import { useEffect, useRef, useState } from 'react'
import { motion, useInView, useMotionValue, useSpring } from 'framer-motion'

export function Counter({
  to,
  suffix = '',
  className = '',
  big = false,
}: {
  to: number
  suffix?: string
  className?: string
  big?: boolean
}) {
  const ref = useRef<HTMLSpanElement>(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })
  const mv = useMotionValue(0)
  const spring = useSpring(mv, big ? { stiffness: 42, damping: 11 } : { stiffness: 50, damping: 22 })
  const [display, setDisplay] = useState(0)

  useEffect(() => {
    if (inView) mv.set(to)
  }, [inView, mv, to])

  useEffect(() => {
    const unsub = spring.on('change', (v) => setDisplay(Math.round(v)))
    return () => unsub()
  }, [spring])

  return (
    <motion.span
      ref={ref}
      className={className}
      initial={big ? { opacity: 0, scale: 0.5 } : undefined}
      animate={inView && big ? { opacity: 1, scale: 1 } : undefined}
      transition={big ? { type: 'spring', stiffness: 180, damping: 14 } : undefined}
    >
      {display}
      {suffix}
    </motion.span>
  )
}
