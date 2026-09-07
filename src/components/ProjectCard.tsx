import type { Project } from '../data/types'
import { TechTag } from './TechTag'

export function ProjectCard({ project }: { project: Project }) {
  return (
    <div
      className="glass group relative overflow-hidden p-5 transition-all duration-300 hover:-translate-y-1 hover:border-[color:var(--accent)] hover:shadow-[0_0_28px_var(--accent-glow)]"
      style={{ transitionTimingFunction: 'var(--ease-spring)' }}
    >
      <span className="absolute inset-y-0 left-0 w-0.5 bg-[color:var(--accent)] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      <div className="flex flex-wrap items-baseline justify-between gap-x-4">
        <h3 className="font-medium text-[color:var(--text-primary)]">{project.title}</h3>
        <div className="flex gap-3 font-mono text-sm">
          {project.repoUrl && (
            <a
              href={project.repoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[color:var(--accent)] hover:underline"
            >
              Repo
            </a>
          )}
          {project.demoUrl && (
            <a
              href={project.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[color:var(--accent)] hover:underline"
            >
              {project.demoLabel ?? 'Demo'}
            </a>
          )}
          {project.slidesUrl && (
            <a
              href={project.slidesUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[color:var(--accent)] hover:underline"
            >
              Slides
            </a>
          )}
        </div>
      </div>
      <p className="mt-1 text-sm text-[color:var(--text-muted)]">{project.hook}</p>
      <p className="mt-2 text-[color:var(--text-secondary)]">{project.description}</p>
      {project.tags.length > 0 && (
        <div className="mt-3 flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <TechTag key={tag} label={tag} />
          ))}
        </div>
      )}
    </div>
  )
}
