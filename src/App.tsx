// App is our top-level component. A component is just a function that
// returns markup (JSX). For now it renders a placeholder so we can confirm
// the whole React + Vite pipeline works before building the real site.
function App() {
  return (
    <main style={{ fontFamily: 'system-ui, sans-serif', margin: '2rem' }}>
      <h1>React is running 🎉</h1>
      <p>The portfolio rebuild starts here.</p>
    </main>
  )
}

export default App
