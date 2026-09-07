import { experience } from '../data/experience'
import { Section } from './Section'
import { TechTag } from './TechTag'
import { LogoTile } from './LogoTile'

export function Experience() {
  if (experience.length === 0) return null

  return (
    <Section id="experience" label="experience" num="03">
      <div className="flex flex-col gap-4">
        {experience.map((entry) => (
          <div
            key={`${entry.org}-${entry.role}`}
            className="glass group relative overflow-hidden p-5 transition-all duration-300 hover:-translate-y-1 hover:border-[color:var(--accent)] hover:shadow-[0_0_28px_var(--accent-glow)]"
            style={{ transitionTimingFunction: 'var(--ease-spring)' }}
          >
            <span className="absolute inset-y-0 left-0 w-0.5 bg-[color:var(--accent)] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

            <div className="flex flex-col-reverse gap-4 md:flex-row md:items-start md:gap-8">
              <div className="min-w-0 flex-1">
                <div className="flex flex-wrap items-baseline justify-between gap-x-4">
                  <h3 className="font-medium text-[color:var(--text-primary)]">{entry.role}</h3>
                  <span className="font-mono text-sm text-[color:var(--text-muted)]">
                    {entry.dateRange}
                  </span>
                </div>
                <p className="font-mono text-sm text-[color:var(--text-muted)]">
                  {entry.org} · {entry.location}
                </p>
                <p className="mt-3 text-[color:var(--text-secondary)]">{entry.description}</p>
                {entry.tags.length > 0 && (
                  <div className="mt-4 flex flex-wrap gap-2">
                    {entry.tags.map((tag) => (
                      <TechTag key={tag} label={tag} />
                    ))}
                  </div>
                )}
              </div>

              {(entry.logo || entry.monogram) && (
                <LogoTile
                  src={entry.logo}
                  monogram={entry.monogram}
                  fill={entry.logoFill}
                  alt={`${entry.org} logo`}
                  size="lg"
                />
              )}
            </div>
          </div>
        ))}
      </div>
    </Section>
  )
}
