'use client'

import { useState, useEffect, useRef, useCallback } from 'react'
import gsap from 'gsap'

export interface UseCaseItem {
  icon: React.ComponentType<{ className?: string }>
  title: string
}

interface UseCaseFanProps {
  items: UseCaseItem[]
}

const MAX_VISIBLE = 3
const HALF = 1

const FAN_POSITIONS = [
  { rot: -10, scale: 0.88, x: -8, y: 0.7, zIndex: 1 },
  { rot: 0, scale: 1.0, x: 0, y: 0, zIndex: 10 },
  { rot: 10, scale: 0.88, x: 8, y: 0.7, zIndex: 1 },
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
    scale: 1.0 - 0.12 * absDistance * absDistance,
    x: distance * 8,
    y: absDistance * absDistance * 0.7,
    zIndex: 10 - Math.abs(slot - center),
  }
}

const ARROW_CLASSES =
  "relative flex items-center justify-center rounded-full border border-white/10 bg-white/5 backdrop-blur-[16px] text-white/50 cursor-pointer shrink-0 z-30 outline-none shadow-[0_4px_20px_rgba(0,0,0,0.4)] hover:border-white/25 hover:text-white/80 active:opacity-70 transition-colors duration-300"

function UseCaseCard({ item }: { item: UseCaseItem }) {
  const Icon = item.icon
  return (
    <div className="flex h-[128px] w-[136px] flex-col items-center justify-center gap-3 rounded-2xl border border-white/10 bg-white/[0.03] p-4 text-center shadow-[0_12px_32px_-16px_rgba(0,0,0,0.6)] sm:h-[136px] sm:w-[148px]">
      <Icon className="h-6 w-6 text-[var(--color-accent-soft)]" />
      <h3 className="font-display text-[12.5px] font-medium leading-tight text-white">{item.title}</h3>
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

    // Hover interactions
    const visibleEntries: { el: HTMLElement; slot: number }[] = []
    cardElements.forEach((el, i) => {
      const slot = visibleMap.get(i)
      if (slot !== undefined) visibleEntries.push({ el, slot })
    })
    visibleEntries.sort((a, b) => a.slot - b.slot)

    let activeSlot: number | null = null
    let leaveTimer: ReturnType<typeof setTimeout> | null = null
    const centerSlot = visibleEntries.length >> 1

    const updateHoverLayout = (hoveredSlot: number | null) => {
      const mult = getResponsiveMultiplier(window.innerWidth)

      visibleEntries.forEach(({ el, slot }) => {
        const base = config(slot)
        let targetX = base.x * mult
        let targetY = base.y * mult
        let targetRot = base.rot
        let targetScale = base.scale
        let delay = 0

        if (hoveredSlot !== null) {
          const distance = Math.abs(slot - hoveredSlot)
          delay = distance * 0.02

          if (slot === hoveredSlot) {
            targetY -= 0.9 * mult
            targetScale *= 1.08
          } else {
            const normalized = centerSlot > 0 ? (slot - centerSlot) / centerSlot : 0
            const pushStrength = 2.6 * (1 - Math.abs(normalized)) * (1 + 0.2 * Math.max(0, 3 - distance))

            if (slot < hoveredSlot) {
              targetX -= pushStrength * mult
              targetRot -= 3 / (distance + 1)
            } else {
              targetX += pushStrength * mult
              targetRot += 3 / (distance + 1)
            }
          }
        } else {
          delay = Math.abs(slot - centerSlot) * 0.02
        }

        gsap.to(el, {
          x: `${targetX}rem`,
          y: `${targetY}rem`,
          rotation: targetRot,
          scale: targetScale,
          duration: 0.5,
          delay,
          ease: 'elastic.out(1,.75)',
          overwrite: 'auto',
        })
        gsap.set(el, { zIndex: base.zIndex })
      })
    }

    const enterHandlers = visibleEntries.map(({ el, slot }) => {
      const handler = () => {
        if (isAnimating.current) return
        if (leaveTimer) {
          clearTimeout(leaveTimer)
          leaveTimer = null
        }
        if (activeSlot !== slot) {
          activeSlot = slot
          updateHoverLayout(slot)
        }
      }
      el.addEventListener('mouseenter', handler)
      return { el, handler }
    })

    const onMouseLeave = () => {
      if (isAnimating.current) return
      if (leaveTimer) clearTimeout(leaveTimer)
      leaveTimer = setTimeout(() => {
        activeSlot = null
        updateHoverLayout(null)
      }, 50)
    }
    container.addEventListener('mouseleave', onMouseLeave)

    const onResize = () => {
      if (!isAnimating.current) updateHoverLayout(activeSlot)
    }
    window.addEventListener('resize', onResize)

    return () => {
      enterHandlers.forEach(({ el, handler }) => el.removeEventListener('mouseenter', handler))
      container.removeEventListener('mouseleave', onMouseLeave)
      window.removeEventListener('resize', onResize)
      if (leaveTimer) clearTimeout(leaveTimer)
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
      <div ref={containerRef} className="fan-layout relative flex h-[170px] w-[320px] items-center justify-center sm:h-[182px] sm:w-[340px]">
        {items.map((item, index) => (
          <div key={index} className="fan-card absolute left-1/2 top-1/2 -ml-[68px] -mt-[64px] sm:-ml-[74px] sm:-mt-[68px]">
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
