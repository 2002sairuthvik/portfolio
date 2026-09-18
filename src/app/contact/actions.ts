'use server'

// "use server" marks everything in this file as Server Actions — functions that
// run ONLY on the server (never shipped to the browser). That's why it's safe to
// read the secret RESEND_API_KEY here.
import { Resend } from 'resend'

export type ContactResult = { ok: boolean; message: string }

export async function sendContactMessage(formData: FormData): Promise<ContactResult> {
  const name = String(formData.get('name') ?? '').trim()
  const email = String(formData.get('email') ?? '').trim()
  const message = String(formData.get('message') ?? '').trim()

  // Basic server-side validation (never trust the client alone).
  if (!name || !email || !message) {
    return { ok: false, message: 'Please fill in every field.' }
  }

  const apiKey = process.env.RESEND_API_KEY
  if (!apiKey) {
    return { ok: false, message: 'Email is not configured yet (missing RESEND_API_KEY).' }
  }

  try {
    const resend = new Resend(apiKey)
    const { error } = await resend.emails.send({
      // Resend's shared sender — allowed to email your own account address.
      from: 'Portfolio Contact <onboarding@resend.dev>',
      to: 'msairuthvik@gmail.com',
      replyTo: email, // so you can just hit "reply" to answer the sender
      subject: `Portfolio message from ${name}`,
      text: `From: ${name} <${email}>\n\n${message}`,
    })
    if (error) {
      console.error('Resend error:', error)
      return { ok: false, message: 'Could not send — please email me directly.' }
    }
    return { ok: true, message: 'Sent!' }
  } catch (err) {
    console.error('Resend threw:', err)
    return { ok: false, message: 'Something went wrong — please email me directly.' }
  }
}
