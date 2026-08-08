import { profile } from '../data/profile'
import { Section } from './Section'

export function About() {
  return (
    <Section id="about" label="about">
      <p className="text-[color:var(--text-secondary)]">{profile.about}</p>
    </Section>
  )
}
