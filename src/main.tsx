import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import App from './App.tsx'
import { ThemeProvider } from './components/theme-provider'

// ThemeProvider wraps everything so any component (e.g. the Header toggle) can
// read/change the theme via useTheme(). BrowserRouter wraps the app so <Routes>,
// <NavLink>, etc. can read and change the URL via the History API.
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ThemeProvider>
  </StrictMode>,
)
