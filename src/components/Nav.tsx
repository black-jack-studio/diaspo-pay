import { useState } from 'react'
import { LogoMark } from './LogoMark'

const LINKS = [
  { href: '#accueil', label: 'Accueil' },
  { href: '#solution', label: 'La solution' },
  { href: '#investisseurs', label: 'Investisseurs' },
  { href: '#rejoindre', label: 'Rejoindre' },
  { href: '#a-propos', label: 'À propos' },
  { href: '#contact', label: 'Contact' },
]

export function Nav() {
  const [open, setOpen] = useState(false)

  return (
    <header className="fixed inset-x-0 top-4 z-50 flex justify-center px-4">
      <nav className="flex w-full max-w-[1080px] items-center gap-1 rounded-full border border-white/10 bg-[#0a0f1c]/70 py-2 pl-3 pr-2 shadow-[0_1px_0_rgba(255,255,255,0.04)] backdrop-blur-xl md:pl-4">
        <a href="#accueil" className="mr-2 flex shrink-0 items-center gap-2.5">
          <LogoMark size={26} />
          <span className="flex flex-col leading-none">
            <span className="font-display text-[15px] font-medium tracking-tight text-white">
              Diaspo<span className="text-[var(--color-accent-soft)]">·</span>Pay
            </span>
            <span className="font-mono text-[8.5px] tracking-[0.22em] text-white/40">SOLUTION +</span>
          </span>
        </a>

        <div className="hidden flex-1 items-center justify-center gap-0.5 lg:flex">
          {LINKS.slice(1).map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="rounded-full px-3.5 py-2 text-[13.5px] text-white/65 transition-colors hover:bg-white/[0.06] hover:text-white"
            >
              {l.label}
            </a>
          ))}
        </div>

        <a
          href="#contact"
          className="ml-auto hidden shrink-0 items-center gap-1.5 rounded-full bg-white px-4 py-2 text-[13px] font-semibold text-[#0a0f1c] transition-transform hover:scale-[1.03] lg:inline-flex"
        >
          Pré-inscription
        </a>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="ml-auto flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-white lg:hidden"
          aria-label="Ouvrir le menu"
        >
          <span className="relative block h-3.5 w-4.5">
            <span className={`absolute left-0 right-0 top-0 h-[1.5px] bg-white transition-transform ${open ? 'translate-y-[6px] rotate-45' : ''}`} />
            <span className={`absolute left-0 right-0 top-[6px] h-[1.5px] bg-white transition-opacity ${open ? 'opacity-0' : ''}`} />
            <span className={`absolute left-0 right-0 top-[12px] h-[1.5px] bg-white transition-transform ${open ? '-translate-y-[6px] -rotate-45' : ''}`} />
          </span>
        </button>
      </nav>

      {open && (
        <div className="absolute left-4 right-4 top-[62px] flex flex-col gap-1 rounded-3xl border border-white/10 bg-[#0a0f1c]/95 p-3 backdrop-blur-xl lg:hidden">
          {LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="rounded-2xl px-4 py-3 text-[15px] text-white/80 hover:bg-white/[0.06] hover:text-white"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="mt-1 rounded-2xl bg-white px-4 py-3 text-center text-[14px] font-semibold text-[#0a0f1c]"
          >
            Pré-inscription
          </a>
        </div>
      )}
    </header>
  )
}
