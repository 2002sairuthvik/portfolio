import Link from 'next/link'
import type { HomeLink as HomeLinkData } from '@/data/homeLinks'

// Internal navigation via next/link. No interactivity, so this stays a Server
// Component (next/link works fine inside Server Components).
export default function HomeLink({ number, title, description, to }: HomeLinkData) {
  return (
    <Link href={to} className="group block border-t border-line py-[22px] last:border-b">
      <div className="text-[12.5px] text-faint">{number}</div>
      <div className="mt-[7px] text-[19px] font-semibold text-ink transition-colors group-hover:text-accent">
        {title}
      </div>
      <div className="mt-[7px] text-[14.5px] text-muted">{description}</div>
    </Link>
  )
}
