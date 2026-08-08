import { education } from '../data/education'
import { Section } from './Section'
import { TechTag } from './TechTag'

export function Education() {
  return (
    <Section id="education" label="education">
      <div className="flex flex-col gap-1">
        <div className="flex flex-wrap items-baseline justify-between gap-x-4">
          <h3 className="font-medium text-[color:var(--text-primary)]">{education.school}</h3>
          <span className="text-sm text-[color:var(--text-muted)]">{education.location}</span>
        </div>
        <p className="text-[color:var(--text-secondary)]">{education.degree}</p>
        {education.concentrations && education.concentrations.length > 0 && (
          <p className="text-sm text-[color:var(--text-muted)]">
            Concentrations: {education.concentrations.join(', ')}
          </p>
        )}
        <p className="text-sm text-[color:var(--text-muted)]">{education.graduation}</p>
        {education.gpa && (
          <p className="text-sm text-[color:var(--text-muted)]">GPA: {education.gpa}</p>
        )}
      </div>
      {education.coursework && education.coursework.length > 0 && (
        <div className="mt-4 flex flex-wrap gap-2">
          {education.coursework.map((course) => (
            <TechTag key={course} label={course} />
          ))}
        </div>
      )}
    </Section>
  )
}
