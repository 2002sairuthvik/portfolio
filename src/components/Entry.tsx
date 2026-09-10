import type { ExperienceEntry } from '../data/experience'

// "Props" are the inputs a component receives, passed in like HTML attributes.
// Here the props ARE one ExperienceEntry, so TypeScript guarantees whoever uses
// <Entry> passes exactly { date, title, org, description }. We destructure them
// straight out in the parameter list. The {values} in the JSX below drop each
// prop into the markup.
export default function Entry({ date, title, org, description }: ExperienceEntry) {
  return (
    <div className="grid grid-cols-1 gap-1.5 border-t border-line py-[22px] first:border-t-0 sm:grid-cols-[120px_1fr] sm:gap-[22px]">
      <div className="pt-0.5 text-[13px] text-faint">{date}</div>
      <div>
        <div className="text-[15.5px] font-semibold text-ink">{title}</div>
        <div className="mt-0.5 text-[14px] text-muted">{org}</div>
        <div className="mt-2 max-w-[420px] text-[14.5px] text-muted">{description}</div>
      </div>
    </div>
  )
}
