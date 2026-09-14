import { createContext, useContext, useEffect, useState } from 'react'
import type { ReactNode } from 'react'

type Theme = 'light' | 'dark'

type ThemeContextValue = {
  theme: Theme
  toggleTheme: () => void
}

// createContext makes a shared "channel". Whatever the Provider puts on it,
// any component nested inside can read with useContext — no prop-passing.
const ThemeContext = createContext<ThemeContextValue | undefined>(undefined)

// Decide the starting theme: a previously saved choice wins; otherwise follow
// the visitor's OS setting (prefers-color-scheme).
function getInitialTheme(): Theme {
  try {
    const saved = localStorage.getItem('theme')
    if (saved === 'light' || saved === 'dark') return saved
  } catch {
    // localStorage can be unavailable (private mode) — fall through.
  }
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
}

export function ThemeProvider({ children }: { children: ReactNode }) {
  // The ONE piece of theme state, held here at the top of the app.
  const [theme, setTheme] = useState<Theme>(getInitialTheme)

  // useEffect runs AFTER React renders. Every time `theme` changes we:
  //   1. add/remove the `.dark` class on <html> (which swaps the CSS variables)
  //   2. remember the choice in localStorage so it survives a reload.
  useEffect(() => {
    const root = document.documentElement // this is the <html> element
    root.classList.toggle('dark', theme === 'dark')
    try {
      localStorage.setItem('theme', theme)
    } catch {
      // ignore if storage is blocked
    }
  }, [theme])

  const toggleTheme = () => setTheme((t) => (t === 'dark' ? 'light' : 'dark'))

  // Provider makes { theme, toggleTheme } available to everything inside it.
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}

// A small custom hook so components just call useTheme() instead of importing
// the context object every time. It also guards against being used outside the
// Provider.
export function useTheme() {
  const ctx = useContext(ThemeContext)
  if (!ctx) throw new Error('useTheme must be used inside a <ThemeProvider>')
  return ctx
}
