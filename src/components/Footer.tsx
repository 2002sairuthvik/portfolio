// Same idea as Header: define the footer once, reuse it everywhere.
export default function Footer() {
  return (
    <footer className="mx-auto max-w-[760px] px-7 py-8">
      <div className="flex flex-wrap items-center justify-between gap-2.5 text-[12.5px] text-faint">
        <span>Sai Ruthvik Munugoti &nbsp;·&nbsp; Canton, Michigan</span>
        <span>© 2026</span>
      </div>
    </footer>
  )
}
