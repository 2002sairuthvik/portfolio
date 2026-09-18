import Link from 'next/link'
import { homeLinks } from '@/data/homeLinks'
import HomeLink from '@/components/HomeLink'

export default function Home() {
  return (
    <section className="mx-auto max-w-[760px] px-7 pt-[88px] pb-16">
      <div className="text-[14px] text-muted">AI / ML Engineer &nbsp;·&nbsp; Michigan, USA</div>

      <h1 className="mt-[18px] max-w-[600px] text-[clamp(34px,5.4vw,52px)] font-semibold leading-[1.12] tracking-[-0.02em] text-ink">
        Building the reasoning layer underneath AI systems.
      </h1>

      <p className="mt-[22px] max-w-[520px] text-[18px] text-muted">
        I&apos;m finishing my M.S. in Computer Science at Texas Tech University, where my work has
        ranged from retinal-imaging classification to organoid microscopy analysis. Outside
        research, I build and ship full systems — a video RAG pipeline, a real-time surveillance
        platform, a booking system built to hold up under real load.
      </p>
      <p className="mt-3.5 max-w-[520px] text-[18px] text-muted">
        Open to full-time AI/ML and GenAI engineering roles — startups first, but I&apos;m listening
        either way.
      </p>

      <div className="mt-8 flex flex-wrap gap-3">
        <Link
          href="/projects"
          className="rounded-[20px] bg-ink px-5 py-[11px] text-[13.5px] text-bg transition-colors hover:bg-accent"
        >
          See the work
        </Link>
        <Link
          href="/contact"
          className="rounded-[20px] border border-line px-5 py-[11px] text-[13.5px] text-ink transition-colors hover:border-accent hover:text-accent"
        >
          Get in touch
        </Link>
      </div>

      <div className="mt-14">
        {homeLinks.map((link) => (
          <HomeLink key={link.number} {...link} />
        ))}
      </div>
    </section>
  )
}
