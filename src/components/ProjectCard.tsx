import Tag from './Tag'
import ProjectDiagram from './ProjectDiagram'
import type { Project } from '../data/projects'

export default function ProjectCard({
  tag,
  title,
  description,
  detail,
  evalTable,
  researchNote,
  diagram,
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

      {/* detail is now an array of paragraphs — one <p> per item. */}
      {detail?.map((para, i) => (
        <p key={i} className="mt-3.5 max-w-[560px] text-[14.5px] leading-[1.7] text-muted">
          {para}
        </p>
      ))}

      {/* Data-driven table: map headers, then map rows, then map each row's cells. */}
      {evalTable && (
        <table className="mt-[18px] w-full border-collapse text-[13px]">
          <thead>
            <tr>
              {evalTable.headers.map((h, i) => (
                <th
                  key={h}
                  className={`border-b border-line py-2 pr-3 text-left text-[12px] font-medium uppercase tracking-[0.04em] ${i === 0 ? 'text-ink' : 'text-faint'}`}
                >
                  {h}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {evalTable.rows.map((row) => (
              <tr key={row.cells[0]}>
                {row.cells.map((cell, i) => (
                  <td
                    key={i}
                    className={`border-b border-line py-2 pr-3 ${
                      i === 0 || row.best ? 'font-semibold text-ink' : 'text-muted'
                    }`}
                  >
                    {cell}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      )}

      {researchNote && <div className="mt-6 text-[13px] text-faint">{researchNote}</div>}

      {diagram && <ProjectDiagram kind={diagram} />}

      <div className="mt-4 flex flex-wrap gap-2">
        {tags.map((t) => (
          <Tag key={t} label={t} />
        ))}
      </div>

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
