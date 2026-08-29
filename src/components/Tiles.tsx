import { motion } from 'framer-motion'

export function Tiles({ rows = 50, cols = 8 }: { rows?: number; cols?: number }) {
  return (
    <div className="pointer-events-none absolute inset-0 flex justify-center overflow-hidden">
      {new Array(rows).fill(0).map((_, i) => (
        <div key={i} className="relative h-16 w-16 shrink-0 border-l border-white/10 md:h-20 md:w-20">
          {new Array(cols).fill(0).map((_, j) => (
            <motion.div
              key={j}
              whileHover={{ backgroundColor: 'rgba(127,176,255,0.14)', transition: { duration: 0 } }}
              className="pointer-events-auto h-16 w-16 border-t border-r border-white/10 md:h-20 md:w-20"
            />
          ))}
        </div>
      ))}
    </div>
  )
}
