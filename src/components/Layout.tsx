import { Outlet } from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'
import CommandMenu from './CommandMenu'

// Layout is the shared frame every page sits inside. <Outlet /> is the slot
// where React Router drops the component that matches the current URL
// (Home, Experience, ...). So Header + Footer render once and stay put while
// only the middle swaps as you navigate.
export default function Layout() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
      {/* Global ⌘K palette — rendered once here so it works on every page. */}
      <CommandMenu />
    </>
  )
}
