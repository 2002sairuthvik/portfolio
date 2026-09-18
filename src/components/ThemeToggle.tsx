'use client'

import { Moon, Sun } from 'lucide-react'
import { useTheme } from './theme-provider'

// A plain button (no shadcn dependency) that flips the theme via our Context.
export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme()
  return (
    <button
      onClick={toggleTheme}
      aria-label="Toggle light/dark theme"
      className="rounded-lg p-2 text-muted transition-colors hover:bg-ink/5 hover:text-ink"
    >
      {theme === 'dark' ? <Sun className="size-4" /> : <Moon className="size-4" />}
    </button>
  )
}
