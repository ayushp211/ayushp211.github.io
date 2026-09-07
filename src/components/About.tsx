import { profile } from '../data/profile'
import { Section } from './Section'

export function About() {
  return (
    <Section id="about" label="about" num="01">
      <div className="flex flex-col gap-3">
        {profile.about.map((line) => (
          <p key={line} className="max-w-[70ch] text-[color:var(--text-secondary)]">
            <span className="font-mono text-[color:var(--accent)]">{'> '}</span>
            {line}
          </p>
        ))}
      </div>
    </Section>
  )
}
