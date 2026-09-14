import { useEffect, useMemo, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'

const pages = [
  { label: 'Home', to: '/' },
  { label: 'Experience', to: '/experience' },
  { label: 'Projects', to: '/projects' },
  { label: 'Skills & Education', to: '/skills' },
  { label: 'Contact', to: '/contact' },
]

// A dependency-free command palette. Built with plain React + Tailwind so it
// works reliably on this toolchain (shadcn's Dialog library fought the stack).
export default function CommandMenu() {
  const [open, setOpen] = useState(false)
  const [query, setQuery] = useState('')
  const [active, setActive] = useState(0) // highlighted result (for arrow keys)
  const inputRef = useRef<HTMLInputElement>(null)
  const navigate = useNavigate()

  // GLOBAL keyboard listener: Cmd/Ctrl+K toggles, Escape closes. Attached to
  // window in a useEffect; the returned function is the CLEANUP that removes it.
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

  // DERIVED state: the filtered list, recomputed only when the query changes.
  const results = useMemo(
    () => pages.filter((p) => p.label.toLowerCase().includes(query.trim().toLowerCase())),
    [query],
  )

  // When it opens, reset and focus the input. When the query changes, reset the
  // highlight to the top.
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
    navigate(to)
  }

  if (!open) return null

  return (
    // Backdrop — clicking it closes the palette.
    <div
      className="fixed inset-0 z-[100] flex items-start justify-center bg-black/40 p-4 pt-[15vh]"
      onClick={() => setOpen(false)}
    >
      {/* Panel — stopPropagation so clicks inside don't close it. */}
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
