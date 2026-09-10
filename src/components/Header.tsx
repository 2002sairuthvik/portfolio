// A component is just a function that returns JSX (markup). We define it once
// here and reuse it as <Header /> on every page — so changing the nav means
// editing ONE file, not five. This is the fix for the copy-paste pain you hit
// when we renamed "Story" to "Contact".
//
// (For now the links are plain <a> tags; we'll upgrade them to real client-side
//  router links, with active highlighting, when we add routing.)
export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-line bg-bg/90 backdrop-blur">
      <div className="mx-auto flex max-w-[760px] items-center justify-between px-7 py-5">
        <a href="/" className="text-[15px] font-semibold tracking-tight text-ink">
          Sai Ruthvik Munugoti
        </a>
        <nav className="flex gap-6 text-[13.5px] text-muted">
          <a href="/" className="transition-colors hover:text-ink">Home</a>
          <a href="/experience" className="transition-colors hover:text-ink">Experience</a>
          <a href="/projects" className="transition-colors hover:text-ink">Projects</a>
          <a href="/skills" className="transition-colors hover:text-ink">Skills & Education</a>
          <a href="/contact" className="transition-colors hover:text-ink">Contact</a>
        </nav>
      </div>
    </header>
  )
}
