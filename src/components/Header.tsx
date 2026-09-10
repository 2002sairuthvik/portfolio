import { useState } from 'react'

// A component is just a function returning JSX. We define it once and reuse it
// as <Header /> everywhere, so a nav change means editing ONE file.
export default function Header() {
  // useState gives us a "remembered value" React watches.
  //   open     = the current value (is the mobile menu open? starts false)
  //   setOpen  = the ONLY way to change it. Calling it tells React to re-render.
  // This replaces the old vanilla `classList.toggle('open')` — we never touch
  // the DOM by hand; we just change `open` and React redraws to match.
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-bg/90 backdrop-blur">
      <div className="relative mx-auto flex max-w-[760px] items-center justify-between px-7 py-5">
        <a href="/" className="text-[15px] font-semibold tracking-tight text-ink">
          Sai Ruthvik Munugoti
        </a>

        {/* Shown only on small screens (md:hidden). onClick flips the state. */}
        <button
          onClick={() => setOpen(!open)}
          className="rounded-lg border border-line px-2.5 py-1.5 text-[13.5px] md:hidden"
        >
          Menu
        </button>

        {/* On mobile this is a dropdown that appears only when `open` is true.
            On md+ screens the md: classes turn it back into a normal inline row.
            Notice: the open/closed decision is `${open ? 'flex' : 'hidden'}` —
            driven purely by state, not by manual DOM edits. */}
        <nav
          className={`${open ? 'flex' : 'hidden'} absolute inset-x-0 top-full flex-col gap-3.5 border-b border-line bg-bg px-7 py-4 text-[13.5px] text-muted md:static md:flex md:flex-row md:items-center md:gap-6 md:border-0 md:bg-transparent md:p-0`}
        >
          <a href="/" className="transition-colors hover:text-ink">Home</a>
          <a href="/experience" className="transition-colors hover:text-ink">Experience</a>
          <a href="/projects" className="transition-colors hover:text-ink">Projects</a>
          <a href="/skills" className="transition-colors hover:text-ink">Skills & Education</a>
          <a href="/contact" className="transition-colors hover:text-ink">Contact</a>
        </nav>
      </div>
    </header>
  )
}
