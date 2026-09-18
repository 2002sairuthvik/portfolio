import type { Metadata } from 'next'
import ContactForm from '@/components/ContactForm'
import ContactLink from '@/components/ContactLink'
import { MailIcon, LinkedInIcon, GitHubIcon } from '@/components/icons'

export const metadata: Metadata = { title: 'Contact — Sai Ruthvik Munugoti' }

export default function ContactPage() {
  return (
    <section className="mx-auto max-w-[760px] px-7 py-14">
      <div className="mb-7 text-[13px] uppercase tracking-[0.08em] text-faint">Get in touch</div>
      <h2 className="text-[28px] font-semibold tracking-tight text-ink">
        Building something worth building?
        <br />
        I&apos;d like to hear about it.
      </h2>
      <p className="mt-3 max-w-[480px] text-muted">
        Open to full-time AI/ML and GenAI engineering roles — and always up for a good
        conversation. Drop me a message below.
      </p>

      <div className="mt-8 max-w-[480px]">
        <ContactForm />
      </div>

      <div className="mt-10 border-t border-line pt-8">
        <div className="mb-4 text-[13px] text-faint">Or reach me directly</div>
        <div className="flex flex-wrap gap-3">
          <ContactLink href="mailto:msairuthvik@gmail.com" label="Email">
            <MailIcon />
          </ContactLink>
          <ContactLink href="https://www.linkedin.com/in/sai-ruthvik-munugoti-368908213/" label="LinkedIn">
            <LinkedInIcon />
          </ContactLink>
          <ContactLink href="https://github.com/2002sairuthvik" label="GitHub">
            <GitHubIcon />
          </ContactLink>
        </div>
      </div>
    </section>
  )
}
