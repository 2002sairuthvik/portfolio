import type { Metadata } from 'next'
import { experience } from '@/data/experience'
import Entry from '@/components/Entry'

export const metadata: Metadata = { title: 'Experience — Sai Ruthvik Munugoti' }

export default function ExperiencePage() {
  return (
    <section className="mx-auto max-w-[760px] px-7 py-14">
      <div className="mb-7 text-[13px] uppercase tracking-[0.08em] text-faint">Experience</div>
      <h2 className="text-[25px] font-semibold tracking-tight text-ink">A fairly linear path.</h2>
      <p className="mt-3 mb-9 max-w-[480px] text-muted">
        Each stop handed the next one a tool it needed — dashboards taught me to read data,
        research taught me to trust (or distrust) a model&apos;s output.
      </p>

      {experience.map((item) => (
        <Entry key={item.title} {...item} />
      ))}
    </section>
  )
}
