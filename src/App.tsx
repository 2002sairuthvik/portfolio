// App is our top-level component. A component is just a function that
// returns markup (JSX). For now it renders a placeholder so we can confirm
// the whole React + Vite pipeline works before building the real site.
function App() {
  // Every className below is a Tailwind "utility" — one class = one CSS rule.
  // text-3xl = font-size:1.875rem, font-bold = font-weight:700,
  // text-emerald-700 = a green color, mt-2 = margin-top:0.5rem, etc.
  return (
    <main className="m-8 font-sans">
      <h1 className="text-3xl font-bold text-emerald-700">
        React + Tailwind is running 🎉
      </h1>
      <p className="mt-2 text-gray-500">
        Styled with utility classes — notice there is no separate CSS file.
      </p>
    </main>
  )
}

export default App
