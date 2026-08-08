import { experience } from '../data/experience'
import { Section } from './Section'
import { TechTag } from './TechTag'

export function Experience() {
  if (experience.length === 0) return null

  return (
    <Section id="experience" label="experience">
      <div className="flex flex-col gap-8">
        {experience.map((entry) => (
          <div key={`${entry.org}-${entry.role}`}>
            <div className="flex flex-wrap items-baseline justify-between gap-x-4">
              <h3 className="font-medium text-[color:var(--text-primary)]">{entry.role}</h3>
              <span className="text-sm text-[color:var(--text-muted)]">{entry.dateRange}</span>
            </div>
            <p className="text-[color:var(--text-secondary)]">
              {entry.org} · {entry.location}
            </p>
            <p className="mt-2 text-[color:var(--text-secondary)]">{entry.description}</p>
            {entry.tags.length > 0 && (
              <div className="mt-3 flex flex-wrap gap-2">
                {entry.tags.map((tag) => (
                  <TechTag key={tag} label={tag} />
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </Section>
  )
}
