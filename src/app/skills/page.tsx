import type { Metadata } from 'next'
import { skillGroups } from '@/data/skills'
import { education } from '@/data/education'
import SkillGroup from '@/components/SkillGroup'
import EducationEntry from '@/components/EducationEntry'

export const metadata: Metadata = { title: 'Skills & Education — Sai Ruthvik Munugoti' }

export default function SkillsPage() {
  return (
    <section className="mx-auto max-w-[760px] px-7 py-14">
      <div className="mb-7 text-[13px] uppercase tracking-[0.08em] text-faint">Skills &amp; Education</div>
      <h2 className="text-[25px] font-semibold tracking-tight text-ink">
        What I work with, and where it came from.
      </h2>

      <div className="mt-8">
        {skillGroups.map((group) => (
          <SkillGroup key={group.title} {...group} />
        ))}
      </div>

      <div className="mt-[52px] mb-7 text-[13px] uppercase tracking-[0.08em] text-faint">Education</div>
      {education.map((entry) => (
        <EducationEntry key={entry.title} {...entry} />
      ))}
    </section>
  )
}
