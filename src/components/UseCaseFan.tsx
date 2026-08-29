'use client'

import { useState, useEffect, useRef, useCallback } from 'react'
import gsap from 'gsap'

export interface UseCaseItem {
  icon: React.ComponentType<{ className?: string }>
  title: string
  color: string
}

interface UseCaseFanProps {
  items: UseCaseItem[]
}

const MAX_VISIBLE = 3
const HALF = 1

const FAN_POSITIONS = [
  { rot: -10, scale: 0.76, x: -6.5, y: 1.3, zIndex: 1 },
  { rot: 0, scale: 1.0, x: 0, y: 0, zIndex: 10 },
  { rot: 10, scale: 0.76, x: 6.5, y: 1.3, zIndex: 1 },
]

function getResponsiveMultiplier(width: number) {
  if (width < 400) return 0.62
  if (width < 480) return 0.72
  if (width < 640) return 0.85
  return 1.0
}

function getSlotConfig(totalCards: number, slot: number) {
  if (totalCards >= MAX_VISIBLE) return FAN_POSITIONS[slot]
  const center = totalCards >> 1
  const distance = totalCards > 1 ? (slot - center) / center : 0
  const absDistance = Math.abs(distance)
  return {
    rot: distance * 10,
    scale: 1.0 - 0.24 * absDistance * absDistance,
    x: distance * 6.5,
    y: absDistance * absDistance * 1.3,
    zIndex: 10 - Math.abs(slot - center),
  }
}

function getBrightness(zIndex: number) {
  return zIndex >= 10 ? 1.08 : Math.max(0.32, 0.32 + zIndex * 0.06)
}

const ARROW_CLASSES =
  "relative flex items-center justify-center rounded-full border border-white/10 bg-white/5 backdrop-blur-[16px] text-white/50 cursor-pointer shrink-0 z-30 outline-none shadow-[0_4px_20px_rgba(0,0,0,0.4)] hover:border-white/25 hover:text-white/80 active:opacity-70 transition-colors duration-300"

function UseCaseCard({ item }: { item: UseCaseItem }) {
  const Icon = item.icon
  return (
    <div className="glow-border h-[152px] w-[164px] rounded-2xl sm:h-[168px] sm:w-[184px]">
      <div className="relative z-[2] flex h-full w-full flex-col items-center justify-center gap-3 overflow-hidden rounded-2xl bg-[#0e1119] p-4 text-center shadow-[0_12px_32px_-16px_rgba(0,0,0,0.7)]">
        <div
          className="pointer-events-none absolute -right-8 -top-10 h-28 w-28 rounded-full blur-2xl"
          style={{ background: item.color, opacity: 0.35 }}
        />
        <div className="relative" style={{ color: item.color }}>
          <Icon className="h-7 w-7" />
        </div>
        <h3 className="relative font-display text-[14px] font-medium leading-tight text-white">{item.title}</h3>
      </div>
    </div>
  )
}

export default function UseCaseFan({ items }: UseCaseFanProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const isAnimating = useRef(false)
  const hasEntered = useRef(false)
  const directionRef = useRef<'left' | 'right' | null>(null)
  const prevVisible = useRef<Set<number>>(new Set())

  const totalCards = items.length
  const needsPagination = totalCards > MAX_VISIBLE
  const [centerIndex, setCenterIndex] = useState(needsPagination ? HALF : totalCards >> 1)

  const getVisibleMap = useCallback(
    (center: number) => {
      const map = new Map<number, number>()
      if (!needsPagination) {
        items.forEach((_, i) => map.set(i, i))
        return map
      }
      for (let slot = 0; slot < MAX_VISIBLE; slot++) {
        map.set(((center + slot - HALF) % totalCards + totalCards) % totalCards, slot)
      }
      return map
    },
    [totalCards, needsPagination, items],
  )

  const cycle = useCallback(
    (direction: 'left' | 'right') => {
      if (isAnimating.current || !needsPagination) return
      isAnimating.current = true
      directionRef.current = direction
      setCenterIndex((prev) =>
        direction === 'right' ? (prev + 1) % totalCards : (prev - 1 + totalCards) % totalCards,
      )
    },
    [totalCards, needsPagination],
  )

  useEffect(() => {
    const container = containerRef.current
    if (!container || !totalCards) return

    const cardElements = Array.from(container.querySelectorAll<HTMLElement>('.fan-card'))
    if (!cardElements.length) return

    const visibleMap = getVisibleMap(centerIndex)
    const previouslyVisible = prevVisible.current
    const direction = directionRef.current
    const isFirstMount = !hasEntered.current
    const multiplier = getResponsiveMultiplier(window.innerWidth)
    const slotCount = needsPagination ? MAX_VISIBLE : totalCards
    const config = (slot: number) => getSlotConfig(slotCount, slot)

    isAnimating.current = true

    cardElements.forEach((card, cardIndex) => {
      const slot = visibleMap.get(cardIndex)
      const wasVisible = previouslyVisible.has(cardIndex)

      if (slot !== undefined) {
        const { x, y, rot, scale, zIndex } = config(slot)
        const target = {
          x: `${x * multiplier}rem`,
          y: `${y * multiplier}rem`,
          rotation: rot,
          scale,
          opacity: 1,
          zIndex,
          filter: `brightness(${getBrightness(zIndex)})`,
        }

        if (isFirstMount) {
          gsap.set(card, { x: 0, y: '3rem', rotation: 0, scale: 0.5, opacity: 0 })
          gsap.to(card, { ...target, duration: 1.2, ease: 'elastic.out(1.05,.78)', delay: 0.2 + slot * 0.06 })
        } else if (!wasVisible) {
          const enterX = direction === 'right' ? 14 : -14
          gsap.set(card, { x: `${enterX}rem`, y: `${y * multiplier}rem`, rotation: direction === 'right' ? 30 : -30, scale: 0.5, opacity: 0 })
          gsap.to(card, { ...target, duration: 0.6, ease: 'power2.out' })
        } else {
          gsap.to(card, { ...target, duration: 0.5, ease: 'power2.out' })
        }
      } else if (wasVisible) {
        const exitX = direction === 'right' ? -14 : 14
        gsap.to(card, { x: `${exitX}rem`, opacity: 0, scale: 0.5, rotation: direction === 'right' ? -30 : 30, duration: 0.4, ease: 'power2.in', zIndex: 0 })
      } else if (isFirstMount) {
        gsap.set(card, { opacity: 0, scale: 0.3, x: 0, y: 0, zIndex: 0 })
      }
    })

    prevVisible.current = new Set(visibleMap.keys())

    const unlockDelay = isFirstMount ? 1600 : 700
    const unlockTimer = setTimeout(() => {
      isAnimating.current = false
      if (isFirstMount) hasEntered.current = true
    }, unlockDelay)

    return () => {
      clearTimeout(unlockTimer)
    }
  }, [centerIndex, totalCards, getVisibleMap, needsPagination])

  if (!totalCards) return null

  const chevron = (direction: 'left' | 'right') => (
    <svg className="relative z-[2] h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <polyline points={direction === 'left' ? '15 18 9 12 15 6' : '9 18 15 12 9 6'} />
    </svg>
  )

  return (
    <div className="flex flex-col items-center">
      <div ref={containerRef} className="fan-layout relative flex h-[212px] w-[460px] items-center justify-center sm:h-[236px] sm:w-[500px]">
        {items.map((item, index) => (
          <div key={index} className="fan-card absolute left-1/2 top-1/2 -ml-[82px] -mt-[76px] sm:-ml-[92px] sm:-mt-[84px]">
            <UseCaseCard item={item} />
          </div>
        ))}
      </div>

      {needsPagination && (
        <div className="z-30 mt-6 flex items-center justify-center gap-3">
          <button className={`${ARROW_CLASSES} h-9 w-9`} onClick={() => cycle('left')} aria-label="Précédent">
            {chevron('left')}
          </button>
          <div className="flex items-center gap-2">
            {items.map((_, i) => (
              <span
                key={i}
                className={`h-1.5 w-1.5 rounded-full transition-all duration-300 ${
                  i === centerIndex ? 'scale-[1.3] bg-white/80' : 'bg-white/15'
                }`}
              />
            ))}
          </div>
          <button className={`${ARROW_CLASSES} h-9 w-9`} onClick={() => cycle('right')} aria-label="Suivant">
            {chevron('right')}
          </button>
        </div>
      )}
    </div>
  )
}
