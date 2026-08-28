type IconProps = { className?: string }
const base = { fill: 'none', stroke: 'currentColor', strokeWidth: 1.4, strokeLinecap: 'round' as const, strokeLinejoin: 'round' as const }

export function IconTv({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} {...base}>
      <rect x="3" y="6" width="18" height="12" rx="2" />
      <path d="M8 21h8M12 18v3" />
    </svg>
  )
}

export function IconWifi({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} {...base}>
      <path d="M4 9c4.4-3.6 11.6-3.6 16 0" />
      <path d="M7 12.5c2.9-2.2 7.1-2.2 10 0" />
      <path d="M10 16c1.2-.9 2.8-.9 4 0" />
      <circle cx="12" cy="18.6" r="0.9" fill="currentColor" stroke="none" />
    </svg>
  )
}

export function IconHome({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} {...base}>
      <path d="M4 11.5 12 4l8 7.5" />
      <path d="M6 10v9.5a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V10" />
      <path d="M10 20.5v-6h4v6" />
    </svg>
  )
}

export function IconHeart({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} {...base}>
      <path d="M12 20s-7.5-4.6-9.6-9.3C.9 7.2 2.7 4 6.1 4c2 0 3.4 1.1 4.4 2.6C11.5 5.1 12.9 4 14.9 4c3.4 0 5.2 3.2 3.7 6.7C20.5 15.4 12 20 12 20Z" />
      <path d="M9 11h2l1-2 2 4 1-2h2" />
    </svg>
  )
}

export function IconCap({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} {...base}>
      <path d="m2 8 10-4 10 4-10 4-10-4Z" />
      <path d="M6 10.5V15c0 1.4 2.7 3 6 3s6-1.6 6-3v-4.5" />
      <path d="M22 8v6" />
    </svg>
  )
}

export function IconCompass({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} {...base}>
      <circle cx="12" cy="12" r="9" />
      <path d="m15 9-4.5 2-2 4.5 4.5-2 2-4.5Z" />
    </svg>
  )
}

export function IconScan({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} {...base}>
      <path d="M4 8V6a2 2 0 0 1 2-2h2M20 8V6a2 2 0 0 0-2-2h-2M4 16v2a2 2 0 0 0 2 2h2M20 16v2a2 2 0 0 1-2 2h-2" />
      <path d="M4 12h16" />
    </svg>
  )
}

export function IconSparkle({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} {...base}>
      <path d="M12 3v4M12 17v4M3 12h4M17 12h4" />
      <path d="M12 8a4 4 0 0 0 4 4 4 4 0 0 0-4 4 4 4 0 0 0-4-4 4 4 0 0 0 4-4Z" />
    </svg>
  )
}

export function IconSend({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} {...base}>
      <path d="m3 11 18-7-7 18-2.5-7.5L3 11Z" />
    </svg>
  )
}

export function IconReceipt({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} {...base}>
      <path d="M6 3h12v18l-2.5-1.5L13 21l-2-1.5L9 21l-2.5-1.5L4 21V5a2 2 0 0 1 2-2Z" />
      <path d="M8 8h8M8 12h8M8 16h4" />
    </svg>
  )
}

export function IconShield({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} {...base}>
      <path d="M12 3 4 6v6c0 4.6 3.4 7.6 8 9 4.6-1.4 8-4.4 8-9V6l-8-3Z" />
      <path d="m9 12 2 2 4-4" />
    </svg>
  )
}
