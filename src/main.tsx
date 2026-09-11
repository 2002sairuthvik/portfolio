import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import App from './App.tsx'

// BrowserRouter must wrap the whole app so that <Routes>, <NavLink>, etc.
// anywhere inside can read and change the URL. It uses the browser's History
// API (clean URLs like /projects) — no server round-trip on navigation.
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>,
)
