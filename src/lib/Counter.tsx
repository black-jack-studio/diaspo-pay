import { useEffect, useRef, useState } from 'react'
import { useInView, useMotionValue, useSpring } from 'framer-motion'

export function Counter({
  to,
  suffix = '',
  className = '',
}: {
  to: number
  suffix?: string
  className?: string
}) {
  const ref = useRef<HTMLSpanElement>(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })
  const mv = useMotionValue(0)
  const spring = useSpring(mv, { stiffness: 50, damping: 22 })
  const [display, setDisplay] = useState(0)

  useEffect(() => {
    if (inView) mv.set(to)
  }, [inView, mv, to])

  useEffect(() => {
    const unsub = spring.on('change', (v) => setDisplay(Math.round(v)))
    return () => unsub()
  }, [spring])

  return (
    <span ref={ref} className={className}>
      {display}
      {suffix}
    </span>
  )
}
