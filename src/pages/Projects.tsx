import { projects } from '../data/projects'
import ProjectCard from '../components/ProjectCard'

export default function Projects() {
  return (
    <section className="mx-auto max-w-[760px] px-7 py-14">
      <div className="mb-7 text-[13px] uppercase tracking-[0.08em] text-faint">Projects</div>
      <h2 className="text-[25px] font-semibold tracking-tight text-ink">
        Systems I've built and shipped.
      </h2>
      <p className="mt-3 mb-9 max-w-[480px] text-muted">Research work is further down.</p>

      {/* Outer map: each project -> a <ProjectCard>. Inside each card, a second
          map renders its tags. That's the nested .map() you designed. */}
      {projects.map((project) => (
        <ProjectCard key={project.title} {...project} />
      ))}
    </section>
  )
}
