'use client'

import { useState } from 'react'
import { sendContactMessage } from '@/app/contact/actions'

// A Client Component (needs state + a submit handler). Notice the magic: it
// imports the server action and calls it like a normal async function —
// Next quietly does the client→server call for us. No fetch, no API route.
export default function ContactForm() {
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle')
  const [error, setError] = useState('')

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setStatus('sending')
    setError('')
    const formData = new FormData(e.currentTarget)
    const result = await sendContactMessage(formData) // runs on the SERVER
    if (result.ok) {
      setStatus('sent')
    } else {
      setStatus('error')
      setError(result.message)
    }
  }

  if (status === 'sent') {
    return (
      <p className="rounded-xl border border-line bg-panel px-5 py-4 text-[15px] text-ink">
        Thanks — your message is on its way. I&apos;ll get back to you soon. 🎉
      </p>
    )
  }

  const field =
    'w-full rounded-lg border border-line bg-transparent px-4 py-2.5 text-[15px] text-ink outline-none transition-colors placeholder:text-faint focus:border-accent'

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-3">
      <input name="name" required placeholder="Your name" className={field} />
      <input name="email" type="email" required placeholder="Your email" className={field} />
      <textarea name="message" required rows={4} placeholder="Your message" className={`${field} resize-y`} />
      <div className="flex items-center gap-3">
        <button
          type="submit"
          disabled={status === 'sending'}
          className="rounded-[20px] bg-ink px-5 py-[11px] text-[13.5px] text-bg transition-colors hover:bg-accent disabled:opacity-60"
        >
          {status === 'sending' ? 'Sending…' : 'Send message'}
        </button>
        {status === 'error' && <span className="text-[13px] text-red-600">{error}</span>}
      </div>
    </form>
  )
}
