import type { ReactNode } from 'react'

// New concept: `children`. Whatever you put BETWEEN <ContactLink>...</ContactLink>
// arrives here as the `children` prop. We use it for the icon, so each link can
// pass a different icon while sharing all the styling. ReactNode is the TS type
// for "anything renderable" (an element, text, etc.).
export default function ContactLink({
  href,
  label,
  children,
}: {
  href: string
  label: string
  children: ReactNode
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener"
      className="inline-flex items-center gap-2 rounded-[20px] border border-line px-[18px] py-[11px] text-[14.5px] text-ink transition-colors hover:border-accent hover:text-accent"
    >
      {children}
      <span>{label}</span>
    </a>
  )
}
