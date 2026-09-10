// App is our top-level component. A component is just a function that
// returns markup (JSX). For now it renders a placeholder so we can confirm
// the whole React + Vite pipeline works before building the real site.
function App() {
  // Now using OUR palette tokens: text-ink, text-muted, text-faint, text-accent
  // (from @theme in index.css), plus the container width from the old design.
  return (
    <main className="mx-auto max-w-[760px] px-7 py-20">
      <p className="text-sm uppercase tracking-widest text-faint">Rebuild in progress</p>
      <h1 className="mt-4 text-4xl font-semibold text-ink">The theme is in place.</h1>
      <p className="mt-3 text-muted">
        Warm background, Instrument Sans, and the green accent — all from our tokens.
      </p>
      <a className="mt-4 inline-block text-accent" href="#">An accent-colored link →</a>
    </main>
  )
}

export default App
