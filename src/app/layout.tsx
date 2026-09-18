import type { Metadata } from 'next'
import { Instrument_Sans } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/components/theme-provider'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

const instrument = Instrument_Sans({
  subsets: ['latin'],
  variable: '--font-instrument',
})

export const metadata: Metadata = {
  title: 'Sai Ruthvik Munugoti — AI/ML Engineer',
  description:
    'Sai Ruthvik Munugoti — AI/ML Engineer. M.S. Computer Science, Texas Tech University. Applied ML, computer vision, and GenAI systems.',
}

// The root layout wraps every page. ThemeProvider (client) provides the theme
// to everything; Header + Footer are the shared chrome; {children} is the page.
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={instrument.variable} suppressHydrationWarning>
      <body>
        <ThemeProvider>
          <Header />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}
