import { profile } from '../data/profile'

export function Hero() {
  return (
    <header className="animate-fade-in-up flex flex-col items-start py-16">
      <p className="text-sm text-[color:var(--text-muted)]">
        <span className="text-[color:var(--accent)]">~/</span>portfolio
      </p>
      <h1 className="mt-2 text-3xl font-medium text-[color:var(--text-primary)]">
        {profile.name}
      </h1>
      <p className="mt-2 text-[color:var(--text-secondary)]">
        {profile.tagline}
        <span className="animate-blink ml-1 text-[color:var(--accent)]">_</span>
      </p>
      <div className="mt-4 flex gap-4 text-sm">
        <a
          href={profile.github}
          target="_blank"
          rel="noopener noreferrer"
          className="text-[color:var(--accent)] hover:underline"
        >
          GitHub
        </a>
        <a
          href={profile.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="text-[color:var(--accent)] hover:underline"
        >
          LinkedIn
        </a>
        <a href={`mailto:${profile.email}`} className="text-[color:var(--accent)] hover:underline">
          Email
        </a>
        <a
          href={profile.resumeUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="text-[color:var(--accent)] hover:underline"
        >
          Resume
        </a>
      </div>
    </header>
  )
}
