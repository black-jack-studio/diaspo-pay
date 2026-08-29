import type { VercelRequest, VercelResponse } from '@vercel/node'

const TO_EMAIL = process.env.CONTACT_TO_EMAIL || 'contact@diaspopaypro.fr'
const FROM_EMAIL = 'Diaspo-Pay <onboarding@resend.dev>'

function escapeHtml(value: string) {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
}

function buildEmailHtml(fields: { role: string; name: string; email: string; phone?: string; country?: string; message?: string }) {
  const rows: Array<[string, string | undefined]> = [
    ['Rôle', fields.role],
    ['Nom complet', fields.name],
    ['Email', fields.email],
    ['Téléphone', fields.phone],
    ['Pays de résidence', fields.country],
  ]

  const rowsHtml = rows
    .filter(([, value]) => value)
    .map(
      ([label, value]) => `
        <tr>
          <td style="padding:10px 16px;color:#8a93a6;font:13px -apple-system,Helvetica,Arial,sans-serif;white-space:nowrap;vertical-align:top;border-bottom:1px solid #eef0f4;">${label}</td>
          <td style="padding:10px 16px;color:#0a0f1c;font:14px -apple-system,Helvetica,Arial,sans-serif;border-bottom:1px solid #eef0f4;">${escapeHtml(value!)}</td>
        </tr>`,
    )
    .join('')

  const messageHtml = fields.message
    ? `
      <div style="background:#ffffff;border:1px solid #e5e7eb;border-top:none;padding:20px 16px;">
        <div style="color:#8a93a6;font:11px -apple-system,Helvetica,Arial,sans-serif;letter-spacing:0.08em;margin-bottom:8px;">MESSAGE</div>
        <div style="color:#0a0f1c;font:14px/1.6 -apple-system,Helvetica,Arial,sans-serif;white-space:pre-wrap;">${escapeHtml(fields.message)}</div>
      </div>`
    : ''

  return `
    <div style="font-family:-apple-system,Helvetica,Arial,sans-serif;max-width:560px;margin:0 auto;">
      <div style="background:#0a0f1c;padding:24px;border-radius:12px 12px 0 0;">
        <span style="color:#ffffff;font-size:18px;font-weight:600;">Diaspo·Pay</span>
        <div style="color:#7c9eff;font-size:12px;letter-spacing:0.08em;margin-top:6px;">NOUVEAU CONTACT — ${escapeHtml(fields.role.toUpperCase())}</div>
      </div>
      <table style="width:100%;border-collapse:collapse;background:#ffffff;border:1px solid #e5e7eb;border-top:none;">
        ${rowsHtml}
      </table>
      ${messageHtml}
      <div style="background:#f8f9fb;border:1px solid #e5e7eb;border-top:none;border-radius:0 0 12px 12px;padding:14px 16px;color:#8a93a6;font:11px -apple-system,Helvetica,Arial,sans-serif;">
        Reçu depuis le formulaire de diaspo-pay.com
      </div>
    </div>
  `
}

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'POST') {
    res.status(405).json({ error: 'Méthode non autorisée' })
    return
  }

  const { role, name, email, phone, country, message } = (req.body ?? {}) as Record<string, string>

  if (!name || !email) {
    res.status(400).json({ error: 'Nom et email requis' })
    return
  }

  const apiKey = process.env.RESEND_API_KEY
  if (!apiKey) {
    res.status(500).json({ error: 'Configuration email manquante côté serveur' })
    return
  }

  const safeRole = role || 'Futur utilisateur'

  try {
    const resendRes = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: FROM_EMAIL,
        to: [TO_EMAIL],
        reply_to: email,
        subject: `Nouveau contact — ${safeRole} — ${name}`,
        html: buildEmailHtml({ role: safeRole, name, email, phone, country, message }),
      }),
    })

    if (!resendRes.ok) {
      const detail = await resendRes.text()
      res.status(502).json({ error: 'Échec de l’envoi de l’email', detail })
      return
    }

    res.status(200).json({ ok: true })
  } catch {
    res.status(500).json({ error: 'Erreur serveur' })
  }
}
