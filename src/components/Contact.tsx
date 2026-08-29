import { useState, type FormEvent, type ReactNode } from 'react'
import { Reveal } from '../lib/Reveal'

const inputClass =
  'w-full rounded-xl border border-black/12 bg-black/[0.03] px-4 py-3 text-[14.5px] text-[#0a0f1c] placeholder:text-black/35 outline-none transition-colors focus:border-[var(--color-accent-deep)] focus:bg-black/[0.05]'

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
    <section id="contact" className="relative border-t border-white/[0.06] bg-[#040610] py-20 md:py-28">
      <div className="mx-auto max-w-[1180px] px-6 md:px-8">
        <div className="rounded-[32px] bg-white p-8 sm:p-10 md:p-12">
          <Reveal className="max-w-2xl">
            <span className="eyebrow" style={{ color: 'var(--color-accent-deep)' }}>{eyebrow}</span>
            <h2 className="mt-3 text-[clamp(26px,3.6vw,42px)] leading-[1.06] text-[#0a0f1c]">
              {title}
            </h2>
            <p className="mt-4 max-w-[54ch] text-[15.5px] leading-relaxed text-[#0a0f1c]/60">
              {description}
            </p>
          </Reveal>

          <div className="mt-10 grid gap-8 lg:grid-cols-[1.3fr_1fr] lg:gap-12">
            <Reveal delay={0.1} className="rounded-2xl border border-black/10 bg-black/[0.02] p-6 md:p-8">
              {sent ? (
                <div className="flex flex-col items-start gap-3 py-6">
                  <span className="font-accent text-[28px] text-[#0a0f1c]">C’est noté.</span>
                  <p className="max-w-[42ch] text-[14.5px] leading-relaxed text-[#0a0f1c]/60">
                    Votre message est bien arrivé à l’équipe Diaspo-Pay. Vous serez prévenu dès
                    l’ouverture, et recontacté directement si votre demande l’exige.
                  </p>
                </div>
              ) : (
                <form className="space-y-4" onSubmit={onSubmit}>
                  {roles.length > 1 && (
                    <div>
                      <div className="mb-3 font-mono text-[10.5px] tracking-[0.14em] text-black/40">JE SUIS</div>
                      <div className="flex flex-wrap gap-2">
                        {roles.map((r) => (
                          <button
                            key={r}
                            type="button"
                            onClick={() => setRole(r)}
                            className={`rounded-full border px-4 py-2 text-[13px] font-medium transition-colors ${
                              role === r
                                ? 'border-[#0a0f1c] bg-[#0a0f1c] text-white'
                                : 'border-black/15 text-black/60 hover:border-black/30 hover:text-[#0a0f1c]'
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
                  <textarea name="message" className={`${inputClass} min-h-24 resize-none`} placeholder="Message" />

                  {error && <p className="text-[13.5px] text-red-600">{error}</p>}

                  <button
                    type="submit"
                    disabled={sending}
                    className="inline-flex items-center gap-2 rounded-full bg-[#0a0f1c] px-7 py-3.5 text-[14.5px] font-semibold text-white transition-all hover:shadow-[0_0_30px_2px_rgba(76,141,255,0.3)] disabled:opacity-60"
                  >
                    {sending ? 'Envoi…' : 'Envoyer le message →'}
                  </button>
                  <p className="font-mono text-[10.5px] leading-relaxed text-black/35">
                    VOS DONNÉES SERVENT UNIQUEMENT À TRAITER VOTRE DEMANDE. AUCUNE INFORMATION BANCAIRE N’EST COLLECTÉE.
                  </p>
                </form>
              )}
            </Reveal>

            <Reveal delay={0.18} className="space-y-3">
              <div className="rounded-2xl border border-black/10 bg-black/[0.02] p-6">
                <div className="font-mono text-[10.5px] tracking-[0.14em] text-black/40">COORDONNÉES</div>
                <div className="mt-3 space-y-2 text-[14.5px] text-[#0a0f1c]/70">
                  <a href="mailto:contact@diaspopaypro.fr" className="block hover:text-[#0a0f1c]">contact@diaspopaypro.fr</a>
                  <span className="block text-[#0a0f1c]/50">Nîmes, Gard, France</span>
                </div>
              </div>
              <div className="rounded-2xl border border-black/10 bg-black/[0.02] p-6">
                <div className="font-mono text-[10.5px] tracking-[0.14em] text-black/40">RÉSEAUX</div>
                <div className="mt-3 flex flex-col gap-2 text-[14.5px] text-[#0a0f1c]/70">
                  <a href="https://wa.me/33652406073" target="_blank" rel="noreferrer" className="hover:text-[#0a0f1c]">WhatsApp →</a>
                  <a href="https://www.linkedin.com/in/eric-koffounda-871b04124/" target="_blank" rel="noreferrer" className="hover:text-[#0a0f1c]">LinkedIn →</a>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  )
}
