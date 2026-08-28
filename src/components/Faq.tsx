import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Reveal, Stagger, staggerItem } from '../lib/Reveal'

const ITEMS = [
  {
    q: 'Diaspo-Pay est-il déjà opérationnel ?',
    a: 'Diaspo-Pay est une fintech en cours de lancement. Avant toute ouverture au public, le dispositif de conformité est finalisé : vérification d’identité (KYC), contrôle de la licéité des opérations et lutte contre le blanchiment (AML). Ce site présente la solution et permet de se pré-inscrire. Aucune opération de paiement n’y est proposée, aucune donnée bancaire n’est collectée.',
  },
  {
    q: 'Comment l’IA lit-elle les factures ?',
    a: 'Diaspo-Pay intègre une lecture assistée par IA capable d’interpréter une facture photographiée, y compris manuscrite, pour en extraire l’organisme, la référence et le montant dû. Vous vérifiez toujours avant de valider : l’IA accélère, elle ne décide jamais à votre place.',
  },
  {
    q: 'Comment l’argent est-il protégé contre les détournements ?',
    a: 'Le paiement est ciblé : la facture réelle est réglée directement chez l’organisme émetteur, jamais sur un compte tiers. Chaque règlement est traçable de bout en bout, avec reçu et historique consultables à tout moment.',
  },
  {
    q: 'L’innovation Diaspo-Pay est-elle protégée ?',
    a: 'Oui. La marque Diaspo-Pay est déposée, ainsi qu’un brevet (INPI FR2606158). Les démarches d’extension internationale sont en cours.',
  },
  {
    q: 'À qui s’adresse Diaspo-Pay ?',
    a: 'À la diaspora afro-caribéenne en France et en Europe, avec des corridors visés vers l’Afrique et les Caraïbes.',
  },
  {
    q: 'Quel est le modèle économique ?',
    a: 'Une commission proportionnelle est appliquée à la facture réglée. Les éléments financiers détaillés sont présentés en rendez-vous, dans un cadre adapté à une due diligence.',
  },
]

function FaqItem({ item, isOpen, onToggle }: { item: (typeof ITEMS)[number]; isOpen: boolean; onToggle: () => void }) {
  return (
    <motion.div
      variants={staggerItem}
      className="rounded-2xl border border-white/10 bg-white/[0.02] transition-colors hover:border-white/15"
    >
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={isOpen}
        className="flex w-full items-center justify-between gap-6 px-6 py-5 text-left md:px-7"
      >
        <span className="font-display text-[15.5px] font-medium text-white md:text-[16.5px]">{item.q}</span>
        <span className="relative h-4 w-4 shrink-0 text-white/40">
          <span className="absolute left-0 top-1/2 h-px w-4 -translate-y-1/2 bg-current" />
          <motion.span
            className="absolute left-0 top-1/2 h-px w-4 -translate-y-1/2 bg-current"
            animate={{ rotate: isOpen ? 0 : 90 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            style={{ originX: 0.5, originY: 0.5 }}
          />
        </span>
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden"
          >
            <p className="px-6 pb-6 text-[14.5px] leading-relaxed text-white/55 md:px-7">{item.a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

export function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section id="faq" className="relative border-t border-white/[0.06] bg-[#040610] py-28 md:py-36">
      <div className="mx-auto max-w-[860px] px-6 md:px-8">
        <Reveal className="text-center">
          <span className="eyebrow">Questions fréquentes</span>
          <h2 className="mt-4 text-[clamp(26px,3.4vw,38px)] leading-[1.1] text-white">
            Tout ce qu’on nous demande.
          </h2>
        </Reveal>

        <Stagger className="mt-14 flex flex-col gap-3">
          {ITEMS.map((item, i) => (
            <FaqItem
              key={item.q}
              item={item}
              isOpen={openIndex === i}
              onToggle={() => setOpenIndex(openIndex === i ? null : i)}
            />
          ))}
        </Stagger>
      </div>
    </section>
  )
}
