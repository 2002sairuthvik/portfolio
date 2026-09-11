// A tiny reusable pill. It takes one prop, `label`, typed inline as a string.
export default function Tag({ label }: { label: string }) {
  return (
    <span className="rounded-[20px] border border-line px-3 py-1.5 text-[13px] text-muted">
      {label}
    </span>
  )
}
