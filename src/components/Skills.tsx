import { skills } from '../data/skills'
import { Section } from './Section'
import { TechTag } from './TechTag'

export function Skills() {
  if (skills.length === 0) return null

  return (
    <Section id="skills" label="skills" num="05">
      <div className="flex flex-col gap-6">
        {skills.map((group) => (
          <div key={group.category}>
            <h3 className="font-mono text-sm text-[color:var(--text-muted)]">{group.category}</h3>
            <div className="mt-2 flex flex-wrap gap-2">
              {group.items.map((item) => (
                <TechTag key={item} label={item} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </Section>
  )
}
