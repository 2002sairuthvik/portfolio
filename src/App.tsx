import Header from './components/Header'
import Footer from './components/Footer'

// App now COMPOSES smaller components. The <>...</> is a "Fragment" — it lets us
// return several elements (Header, main, Footer) without wrapping them in an
// extra <div>. Notice Header/Footer are used like custom HTML tags: <Header />.
function App() {
  return (
    <>
      <Header />
      <main className="mx-auto max-w-[760px] px-7 py-16">
        <p className="text-muted">Page content will go here next.</p>
      </main>
      <Footer />
    </>
  )
}

export default App
