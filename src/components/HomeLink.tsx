import { Link } from 'react-router-dom'
import type { HomeLink as HomeLinkData } from '../data/homeLinks'

// Internal navigation -> <Link>, so clicking swaps pages instantly (no reload).
// The `group` + `group-hover:` classes let the title turn accent-colored when
// you hover anywhere on the whole card.
export default function HomeLink({ number, title, description, to }: HomeLinkData) {
  return (
    <Link to={to} className="group block border-t border-line py-[22px] last:border-b">
      <div className="text-[12.5px] text-faint">{number}</div>
      <div className="mt-[7px] text-[19px] font-semibold text-ink transition-colors group-hover:text-accent">
        {title}
      </div>
      <div className="mt-[7px] text-[14.5px] text-muted">{description}</div>
    </Link>
  )
}
