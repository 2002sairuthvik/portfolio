import type { Metadata } from 'next'
import { Instrument_Sans } from 'next/font/google'
import './globals.css'

// next/font self-hosts Instrument Sans and gives us a CSS variable to use.
const instrument = Instrument_Sans({
  subsets: ['latin'],
  variable: '--font-instrument',
})

// This metadata is rendered into the server HTML <head> — the SEO / link-preview
// win we talked about. Bots see this without running any JavaScript.
export const metadata: Metadata = {
  title: 'Sai Ruthvik Munugoti — AI/ML Engineer',
  description:
    'Sai Ruthvik Munugoti — AI/ML Engineer. M.S. Computer Science, Texas Tech University. Applied ML, computer vision, and GenAI systems.',
}

// The root layout replaces index.html + main.tsx: the <html>/<body> shell,
// written in React and rendered on the server. `children` is the current page.
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={instrument.variable} suppressHydrationWarning>
      <body>{children}</body>
    </html>
  )
}
