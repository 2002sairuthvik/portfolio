import Tag from './Tag'
// The data type is also named SkillGroup, so we import it under an alias to
// avoid a name clash with this component.
import type { SkillGroup as SkillGroupData } from '../data/skills'

export default function SkillGroup({ title, description, tags }: SkillGroupData) {
  return (
    <div className="border-t border-line py-6 first:border-t-0">
      <h3 className="text-[15.5px] font-semibold text-ink">{title}</h3>
      <p className="mt-1.5 max-w-[460px] text-[14.5px] text-muted">{description}</p>
      <div className="mt-4 flex flex-wrap gap-2">
        {tags.map((t) => (
          <Tag key={t} label={t} />
        ))}
      </div>
    </div>
  )
}
