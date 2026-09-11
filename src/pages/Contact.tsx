import ContactLink from '../components/ContactLink'
import { MailIcon, LinkedInIcon, GitHubIcon } from '../components/icons'

export default function Contact() {
  return (
    <section className="mx-auto max-w-[760px] px-7 py-14">
      <div className="mb-7 text-[13px] uppercase tracking-[0.08em] text-faint">Get in touch</div>
      <h2 className="text-[28px] font-semibold tracking-tight text-ink">
        Building something worth building?
        <br />
        I'd like to hear about it.
      </h2>
      <p className="mt-3 max-w-[480px] text-muted">
        Open to full-time AI/ML and GenAI engineering roles — and always up for a good
        conversation. The fastest way to reach me is below.
      </p>

      {/* The icon goes BETWEEN the tags -> it becomes each ContactLink's children. */}
      <div className="mt-[26px] flex flex-wrap gap-3">
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
    </section>
  )
}
