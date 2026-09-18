'use client'

import { useEffect, useMemo, useRef, useState } from 'react'
import { useRouter } from 'next/navigation'

const pages = [
  { label: 'Home', to: '/' },
  { label: 'Experience', to: '/experience' },
  { label: 'Projects', to: '/projects' },
  { label: 'Skills & Education', to: '/skills' },
  { label: 'Contact', to: '/contact' },
]

// Dependency-free command palette (same as the Vite version) — the only change
// for Next is navigation: React Router's useNavigate → next/navigation useRouter.
export default function CommandMenu() {
  const [open, setOpen] = useState(false)
  const [query, setQuery] = useState('')
  const [active, setActive] = useState(0)
  const inputRef = useRef<HTMLInputElement>(null)
  const router = useRouter()

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key.toLowerCase() === 'k' && (e.metaKey || e.ctrlKey)) {
        e.preventDefault()
        setOpen((o) => !o)
      } else if (e.key === 'Escape') {
        setOpen(false)
      }
    }
    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [])

  const results = useMemo(
    () => pages.filter((p) => p.label.toLowerCase().includes(query.trim().toLowerCase())),
    [query],
  )

  useEffect(() => {
    if (open) {
      setQuery('')
      setActive(0)
      requestAnimationFrame(() => inputRef.current?.focus())
    }
  }, [open])
  useEffect(() => setActive(0), [query])

  const go = (to: string) => {
    setOpen(false)
    router.push(to)
  }

  if (!open) return null

  return (
    <div
      className="fixed inset-0 z-[100] flex items-start justify-center bg-black/40 p-4 pt-[15vh]"
      onClick={() => setOpen(false)}
    >
      <div
        className="w-full max-w-md overflow-hidden rounded-xl border border-line bg-panel shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <input
          ref={inputRef}
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === 'ArrowDown') {
              e.preventDefault()
              setActive((a) => Math.min(a + 1, results.length - 1))
            } else if (e.key === 'ArrowUp') {
              e.preventDefault()
              setActive((a) => Math.max(a - 1, 0))
            } else if (e.key === 'Enter') {
              e.preventDefault()
              if (results[active]) go(results[active].to)
            }
          }}
          placeholder="Jump to a page…"
          className="w-full border-b border-line bg-transparent px-4 py-3 text-[15px] text-ink outline-none placeholder:text-faint"
        />
        <ul className="max-h-72 overflow-auto p-1.5">
          {results.length === 0 && (
            <li className="px-3 py-2 text-[14px] text-faint">No results found.</li>
          )}
          {results.map((p, i) => (
            <li key={p.to}>
              <button
                onClick={() => go(p.to)}
                onMouseEnter={() => setActive(i)}
                className={`w-full rounded-md px-3 py-2 text-left text-[14px] transition-colors ${
                  i === active ? 'bg-ink/5 text-ink' : 'text-muted'
                }`}
              >
                {p.label}
              </button>
            </li>
          ))}
        </ul>
        <div className="border-t border-line px-4 py-2 text-[11px] text-faint">
          ↑↓ navigate · Enter open · Esc close
        </div>
      </div>
    </div>
  )
}
