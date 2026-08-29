import { Link } from 'react-router-dom'
import { LogoMark } from './LogoMark'

export function Footer() {
  return (
    <footer className="relative border-t border-white/[0.06] bg-[#040610] py-16">
      <div className="mx-auto max-w-[1180px] px-6 md:px-8">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="flex items-center gap-2.5">
              <LogoMark size={22} />
              <span className="font-display text-[15px] font-medium text-white">Diaspo·Pay</span>
            </div>
            <p className="mt-4 max-w-[30ch] text-[13.5px] leading-relaxed text-white/40">
              La fintech qui permet à la diaspora afro-caribéenne de régler directement les
              factures de ses proches, avec traçabilité totale.
            </p>
          </div>
          <div>
            <div className="font-mono text-[10.5px] tracking-[0.14em] text-white/35">NAVIGATION</div>
            <div className="mt-4 flex flex-col gap-2.5 text-[13.5px] text-white/55">
              <Link to="/#solution" className="hover:text-white">La solution</Link>
              <Link to="/investisseurs" className="hover:text-white">Investisseurs</Link>
              <Link to="/rejoindre" className="hover:text-white">Rejoindre</Link>
              <Link to="/#a-propos" className="hover:text-white">À propos</Link>
            </div>
          </div>
          <div>
            <div className="font-mono text-[10.5px] tracking-[0.14em] text-white/35">CONTACT</div>
            <div className="mt-4 flex flex-col gap-2.5 text-[13.5px] text-white/55">
              <span>Nîmes, Gard, France</span>
              <a href="mailto:contact@diaspopaypro.fr" className="hover:text-white">contact@diaspopaypro.fr</a>
            </div>
          </div>
          <div>
            <div className="font-mono text-[10.5px] tracking-[0.14em] text-white/35">INFORMATIONS LÉGALES</div>
            <div className="mt-4 flex flex-col gap-2.5 text-[13.5px] text-white/55">
              <a href="#" className="hover:text-white">Mentions légales</a>
              <a href="#" className="hover:text-white">Politique de confidentialité</a>
            </div>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-2 border-t border-white/10 pt-6 font-mono text-[10.5px] text-white/25 sm:flex-row sm:items-center sm:justify-between">
          <span>DIASPO-PAY® · MARQUE DÉPOSÉE · BREVET INPI FR2606158</span>
          <span>SERVICE DE PAIEMENT NON ENCORE OUVERT AU PUBLIC</span>
        </div>
      </div>

      <div className="mt-16 select-none overflow-hidden px-6 text-center">
        <div
          className="whitespace-nowrap font-display font-[800] leading-[0.85] tracking-[-0.04em] text-white/[0.07]"
          style={{ fontSize: 'clamp(40px, 12vw, 160px)' }}
        >
          Diaspo·Pay
        </div>
        <div className="mt-3 font-mono text-[10.5px] tracking-[0.3em] text-white/25 sm:text-[12px]">
          SOLUTION +
        </div>
      </div>
    </footer>
  )
}
