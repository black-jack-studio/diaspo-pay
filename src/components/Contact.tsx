import { useState, type FormEvent, type ReactNode } from 'react'
import { Reveal } from '../lib/Reveal'

const inputClass =
  'w-full rounded-xl border border-white/12 bg-white/[0.03] px-4 py-3.5 text-[14.5px] text-white placeholder:text-white/30 outline-none transition-colors focus:border-[var(--color-accent)] focus:bg-white/[0.05]'

export function Contact({
  roles = ['Futur utilisateur'],
  eyebrow = 'Parlons-en',
  title = 'Soyez prévenu à l’ouverture.',
  description = 'Laissez vos coordonnées, votre message arrive directement à l’équipe fondatrice, à Nîmes.',
}: {
  roles?: string[]
  eyebrow?: string
  title?: ReactNode
  description?: string
}) {
  const [role, setRole] = useState(roles[0])
  const [sent, setSent] = useState(false)
  const [sending, setSending] = useState(false)
  const [error, setError] = useState<string | null>(null)

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setError(null)
    setSending(true)

    const data = new FormData(e.currentTarget)

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          role,
          name: data.get('name'),
          email: data.get('email'),
          phone: data.get('phone'),
          country: data.get('country'),
          message: data.get('message'),
        }),
      })

      if (!res.ok) throw new Error()
      setSent(true)
    } catch {
      setError('L’envoi a échoué. Réessayez ou écrivez-nous directement à contact@diaspopaypro.fr.')
    } finally {
      setSending(false)
    }
  }

  return (
    <section id="contact" className="relative border-t border-white/[0.06] py-28 md:py-36">
      <div className="mx-auto max-w-[1180px] px-6 md:px-8">
        <Reveal className="max-w-2xl">
          <span className="eyebrow">{eyebrow}</span>
          <h2 className="mt-4 text-[clamp(28px,4.4vw,50px)] leading-[1.06] text-white">
            {title}
          </h2>
          <p className="mt-6 max-w-[54ch] text-[16.5px] leading-relaxed text-white/55">
            {description}
          </p>
        </Reveal>

        <div className="mt-16 grid gap-8 lg:grid-cols-[1.3fr_1fr] lg:gap-12">
          <Reveal delay={0.1} className="rounded-2xl border border-white/10 bg-white/[0.02] p-7 md:p-10">
            {sent ? (
              <div className="flex flex-col items-start gap-3 py-10">
                <span className="font-accent text-[28px] text-white">C’est noté.</span>
                <p className="max-w-[42ch] text-[14.5px] leading-relaxed text-white/55">
                  Votre message est bien arrivé à l’équipe Diaspo-Pay. Vous serez prévenu dès
                  l’ouverture, et recontacté directement si votre demande l’exige.
                </p>
              </div>
            ) : (
              <form className="space-y-6" onSubmit={onSubmit}>
                {roles.length > 1 && (
                  <div>
                    <div className="mb-3 font-mono text-[10.5px] tracking-[0.14em] text-white/40">JE SUIS</div>
                    <div className="flex flex-wrap gap-2">
                      {roles.map((r) => (
                        <button
                          key={r}
                          type="button"
                          onClick={() => setRole(r)}
                          className={`rounded-full border px-4 py-2 text-[13px] font-medium transition-colors ${
                            role === r
                              ? 'border-white bg-white text-[#0a0f1c]'
                              : 'border-white/15 text-white/60 hover:border-white/30 hover:text-white'
                          }`}
                        >
                          {r}
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                <div className="grid gap-4 sm:grid-cols-2">
                  <input name="name" className={inputClass} placeholder="Nom complet" required />
                  <input name="email" className={inputClass} type="email" placeholder="Email" required />
                  <input name="phone" className={inputClass} placeholder="Téléphone (optionnel)" />
                  <input name="country" className={inputClass} placeholder="Pays de résidence" />
                </div>
                <textarea name="message" className={`${inputClass} min-h-32 resize-none`} placeholder="Message" />

                {error && <p className="text-[13.5px] text-red-400">{error}</p>}

                <button
                  type="submit"
                  disabled={sending}
                  className="inline-flex items-center gap-2 rounded-full bg-white px-7 py-3.5 text-[14.5px] font-semibold text-[#0a0f1c] transition-all hover:shadow-[0_0_30px_2px_rgba(76,141,255,0.3)] disabled:opacity-60"
                >
                  {sending ? 'Envoi…' : 'Envoyer le message →'}
                </button>
                <p className="font-mono text-[10.5px] leading-relaxed text-white/30">
                  VOS DONNÉES SERVENT UNIQUEMENT À TRAITER VOTRE DEMANDE. AUCUNE INFORMATION BANCAIRE N’EST COLLECTÉE.
                </p>
              </form>
            )}
          </Reveal>

          <Reveal delay={0.18} className="space-y-4">
            <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-7">
              <div className="font-mono text-[10.5px] tracking-[0.14em] text-white/40">COORDONNÉES</div>
              <div className="mt-4 space-y-2 text-[14.5px] text-white/70">
                <a href="mailto:contact@diaspopaypro.fr" className="block hover:text-white">contact@diaspopaypro.fr</a>
                <span className="block text-white/50">Nîmes, Gard, France</span>
              </div>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-7">
              <div className="font-mono text-[10.5px] tracking-[0.14em] text-white/40">RÉSEAUX</div>
              <div className="mt-4 flex flex-col gap-2 text-[14.5px] text-white/70">
                <a href="https://wa.me/33652406073" target="_blank" rel="noreferrer" className="hover:text-white">WhatsApp →</a>
                <a href="https://www.linkedin.com/in/eric-koffounda-871b04124/" target="_blank" rel="noreferrer" className="hover:text-white">LinkedIn →</a>
              </div>
            </div>
            <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-[#101b34] to-[#0b1226] p-7">
              <div className="font-mono text-[10.5px] tracking-[0.14em] text-[var(--color-accent-soft)]">BON À SAVOIR</div>
              <p className="mt-3 text-[13.5px] leading-relaxed text-white/60">
                L’application n’est pas encore ouverte : aucune facture ne peut être réglée depuis
                ce site. Diaspo-Pay finalise son dispositif de conformité (KYC/AML) avant
                l’ouverture, prévue avec le lancement à la mi-octobre.
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
