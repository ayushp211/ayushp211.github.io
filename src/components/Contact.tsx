import { profile } from '../data/profile'
import { Section } from './Section'

export function Contact() {
  return (
    <Section id="contact" label="contact">
      <p className="text-[color:var(--text-secondary)]">
        Reach out at{' '}
        <a href={`mailto:${profile.email}`} className="text-[color:var(--accent)] hover:underline">
          {profile.email}
        </a>
        , or find me on{' '}
        <a
          href={profile.github}
          target="_blank"
          rel="noopener noreferrer"
          className="text-[color:var(--accent)] hover:underline"
        >
          GitHub
        </a>{' '}
        and{' '}
        <a
          href={profile.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="text-[color:var(--accent)] hover:underline"
        >
          LinkedIn
        </a>
        .
      </p>
    </Section>
  )
}
