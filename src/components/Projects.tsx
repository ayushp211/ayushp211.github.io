import { projects } from '../data/projects'
import { Section } from './Section'
import { ProjectCard } from './ProjectCard'

export function Projects() {
  if (projects.length === 0) return null

  return (
    <Section id="projects" label="projects" num="04">
      <div className="flex flex-col gap-4">
        {projects.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>
    </Section>
  )
}
