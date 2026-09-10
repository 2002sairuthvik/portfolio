import Tag from './Tag'
import type { Project } from '../data/projects'

// One card, driven entirely by props (a Project). Two ideas to notice:
//  1. NESTED .map(): tags.map(...) runs INSIDE this component, which is itself
//     rendered by a .map() on the Projects page.
//  2. OPTIONAL fields: `detail && (...)` and `liveUrl && (...)` — we only render
//     those pieces when the optional prop is actually present.
export default function ProjectCard({
  tag,
  title,
  description,
  detail,
  tags,
  liveUrl,
  codeUrl,
}: Project) {
  const linkClass =
    'rounded-[20px] border border-line px-4 py-2 text-[13px] text-ink transition-colors hover:border-accent hover:text-accent'

  return (
    <div className="border-t border-line py-10 first:border-t-0">
      <div className="mb-2 text-[12.5px] text-accent">{tag}</div>
      <div className="text-[21px] font-semibold tracking-tight text-ink">{title}</div>
      <p className="mt-2.5 max-w-[560px] text-[14.5px] text-muted">{description}</p>

      {detail && (
        <p className="mt-3.5 max-w-[560px] text-[14.5px] leading-[1.7] text-muted">{detail}</p>
      )}

      {/* Nested map: each tag string -> a <Tag> pill. */}
      <div className="mt-4 flex flex-wrap gap-2">
        {tags.map((t) => (
          <Tag key={t} label={t} />
        ))}
      </div>

      {/* External links are plain <a target="_blank"> — NOT router links. */}
      {(liveUrl || codeUrl) && (
        <div className="mt-[18px] flex flex-wrap gap-2.5">
          {liveUrl && (
            <a href={liveUrl} target="_blank" rel="noopener" className={linkClass}>
              Live →
            </a>
          )}
          {codeUrl && (
            <a href={codeUrl} target="_blank" rel="noopener" className={linkClass}>
              Code →
            </a>
          )}
        </div>
      )}
    </div>
  )
}
