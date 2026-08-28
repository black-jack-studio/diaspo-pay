import logoMark from '../assets/logo-mark.png'

export function LogoMark({ size = 30 }: { size?: number }) {
  return (
    <img
      src={logoMark}
      alt=""
      aria-hidden="true"
      style={{ height: size, width: 'auto' }}
      className="shrink-0"
    />
  )
}
