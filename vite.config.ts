import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  // Vite runs these plugins while it compiles: React (for JSX/.tsx) and
  // Tailwind (scans our classes and generates the matching CSS).
  plugins: [react(), tailwindcss()],
})
