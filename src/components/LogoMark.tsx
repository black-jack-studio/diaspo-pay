export function LogoMark({ size = 30 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 40 40" fill="none" aria-hidden="true">
      <defs>
        <linearGradient id="lm-back" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#8b6bff" />
          <stop offset="1" stopColor="#4c8dff" />
        </linearGradient>
        <linearGradient id="lm-mid" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#4c8dff" />
          <stop offset="1" stopColor="#7fb0ff" />
        </linearGradient>
        <mask id="lm-notch">
          <rect x="0" y="0" width="40" height="40" fill="#fff" />
          <circle cx="27" cy="13.5" r="6.4" fill="#000" />
        </mask>
      </defs>
      <rect x="11" y="15" width="21" height="15" rx="4" transform="rotate(-8 21.5 22.5)" fill="url(#lm-back)" opacity="0.9" />
      <rect x="9" y="12" width="21" height="15" rx="4" transform="rotate(-4 19.5 19.5)" fill="url(#lm-mid)" opacity="0.95" />
      <g mask="url(#lm-notch)">
        <rect x="6" y="8" width="23" height="17" rx="4.5" fill="#f4f5f8" />
      </g>
      <circle cx="12.4" cy="19.7" r="1.05" fill="#0c1220" />
      <circle cx="15.5" cy="19.7" r="1.05" fill="#0c1220" />
      <circle cx="18.6" cy="19.7" r="1.05" fill="#0c1220" />
    </svg>
  )
}
