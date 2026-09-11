import { projects, research } from '../data/projects'
import ProjectCard from '../components/ProjectCard'

export default function Projects() {
  return (
    <section className="mx-auto max-w-[760px] px-7 py-14">
      <div className="mb-7 text-[13px] uppercase tracking-[0.08em] text-faint">Projects</div>
      <h2 className="text-[25px] font-semibold tracking-tight text-ink">
        Systems I've built and shipped.
      </h2>
      <p className="mt-3 mb-9 max-w-[480px] text-muted">Research work is further down.</p>

      {projects.map((project) => (
        <ProjectCard key={project.title} {...project} />
      ))}

      {/* Research subsection: smaller cards, no tags/links. */}
      <div className="mt-11 mb-7 text-[13px] uppercase tracking-[0.08em] text-faint">Research</div>
      {research.map((item) => (
        <div key={item.title} className="border-t border-line py-10 first:border-t-0">
          <div className="mb-2 text-[12.5px] text-accent">{item.tag}</div>
          <div className="text-[18px] font-semibold tracking-tight text-ink">{item.title}</div>
          <p className="mt-2.5 max-w-[560px] text-[14.5px] text-muted">{item.description}</p>
        </div>
      ))}

      <p className="mt-9 text-[14.5px] text-muted">
        Smaller experiments — a from-scratch BPE tokenizer, neural style transfer,
        Pegasus-based summarization, recommendation and forecasting models — live on{' '}
        <a
          href="https://github.com/2002sairuthvik"
          target="_blank"
          rel="noopener"
          className="border-b border-line text-ink transition-colors hover:border-accent hover:text-accent"
        >
          github.com/2002sairuthvik
        </a>
        .
      </p>
    </section>
  )
}
