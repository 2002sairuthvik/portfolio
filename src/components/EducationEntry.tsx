import type { EducationEntry as EducationEntryData } from '../data/education'

export default function EducationEntry({
  date,
  title,
  org,
  link,
  linkLabel,
}: EducationEntryData) {
  return (
    <div className="grid grid-cols-1 gap-1.5 border-t border-line py-[22px] first:border-t-0 sm:grid-cols-[120px_1fr] sm:gap-[22px]">
      <div className="pt-0.5 text-[13px] text-faint">{date}</div>
      <div>
        <div className="text-[15.5px] font-semibold text-ink">{title}</div>
        <div className="mt-0.5 text-[14px] text-muted">{org}</div>
        {/* Only the certification has a link — conditional render on the
            optional field, same idea as the project Live link. */}
        {link && (
          <a
            href={link}
            target="_blank"
            rel="noopener"
            className="mt-2 inline-block border-b border-transparent text-[13px] text-accent hover:border-accent"
          >
            {linkLabel}
          </a>
        )}
      </div>
    </div>
  )
}
