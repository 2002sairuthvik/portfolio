import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'

// Reused on every page via Layout. Nav lives in this one file only.
export default function Header() {
  // Remembered value: is the mobile menu open? Changing it re-renders the header.
  const [open, setOpen] = useState(false)

  // NavLink calls this with { isActive } for the current URL, so we can style
  // the active page — replacing the old hand-written class="active" per file.
  const linkClass = ({ isActive }: { isActive: boolean }) =>
    `transition-colors hover:text-ink ${isActive ? 'font-semibold text-ink' : 'text-muted'}`

  // Close the mobile menu whenever a link is tapped.
  const close = () => setOpen(false)

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-bg/90 backdrop-blur">
      <div className="relative mx-auto flex max-w-[760px] items-center justify-between px-7 py-5">
        <Link to="/" className="text-[15px] font-semibold tracking-tight text-ink">
          Sai Ruthvik Munugoti
        </Link>

        <button
          onClick={() => setOpen(!open)}
          className="rounded-lg border border-line px-2.5 py-1.5 text-[13.5px] md:hidden"
        >
          Menu
        </button>

        <nav
          className={`${open ? 'flex' : 'hidden'} absolute inset-x-0 top-full flex-col gap-3.5 border-b border-line bg-bg px-7 py-4 text-[13.5px] md:static md:flex md:flex-row md:items-center md:gap-6 md:border-0 md:bg-transparent md:p-0`}
        >
          {/* `end` makes "/" match only the exact home path, not every route. */}
          <NavLink to="/" end className={linkClass} onClick={close}>Home</NavLink>
          <NavLink to="/experience" className={linkClass} onClick={close}>Experience</NavLink>
          <NavLink to="/projects" className={linkClass} onClick={close}>Projects</NavLink>
          <NavLink to="/skills" className={linkClass} onClick={close}>Skills & Education</NavLink>
          <NavLink to="/contact" className={linkClass} onClick={close}>Contact</NavLink>
        </nav>
      </div>
    </header>
  )
}
