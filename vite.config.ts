import path from 'path'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  // Vite runs these plugins while it compiles: React (for JSX/.tsx) and
  // Tailwind (scans our classes and generates the matching CSS).
  plugins: [react(), tailwindcss()],
  // Path alias so "@/..." means "src/..." — shadcn components import this way.
  resolve: {
    alias: {
      '@': path.resolve(import.meta.dirname, './src'),
    },
    // Force a single copy of React so Radix/cmdk (used by shadcn) don't end up
    // with their own instance — fixes "Invalid hook call / multiple copies".
    dedupe: ['react', 'react-dom'],
  },
  // Pre-bundle React consistently so dependencies (Radix/cmdk) share the same
  // instance during dev.
  optimizeDeps: {
    include: ['react', 'react-dom', 'react/jsx-runtime'],
  },
})
