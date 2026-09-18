'use client'

import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import ThemeToggle from './ThemeToggle'

const links = [
  { href: '/', label: 'Home' },
  { href: '/experience', label: 'Experience' },
  { href: '/projects', label: 'Projects' },
  { href: '/skills', label: 'Skills & Education' },
  { href: '/contact', label: 'Contact' },
]

export default function Header() {
  const [open, setOpen] = useState(false)
  const pathname = usePathname() // current URL path, e.g. "/projects"

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-bg/90 backdrop-blur">
      <div className="relative mx-auto flex max-w-[760px] items-center justify-between px-7 py-5">
        <Link href="/" className="text-[15px] font-semibold tracking-tight text-ink">
          Sai Ruthvik Munugoti
        </Link>

        <div className="flex items-center gap-2">
          <nav
            className={`${open ? 'flex' : 'hidden'} absolute inset-x-0 top-full flex-col gap-3.5 border-b border-line bg-bg px-7 py-4 text-[13.5px] md:static md:flex md:flex-row md:items-center md:gap-6 md:border-0 md:bg-transparent md:p-0`}
          >
            {links.map((l) => {
              // Home matches only exactly; others match their section + subpaths.
              const active = l.href === '/' ? pathname === '/' : pathname.startsWith(l.href)
              return (
                <Link
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className={`transition-colors hover:text-ink ${active ? 'font-semibold text-ink' : 'text-muted'}`}
                >
                  {l.label}
                </Link>
              )
            })}
          </nav>

          <ThemeToggle />

          <button
            onClick={() => setOpen(!open)}
            className="rounded-lg border border-line px-2.5 py-1.5 text-[13.5px] md:hidden"
          >
            Menu
          </button>
        </div>
      </div>
    </header>
  )
}
