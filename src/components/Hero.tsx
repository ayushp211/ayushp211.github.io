import { useEffect } from 'react'
import headshotImg from '../assets/headshot.jpg'
import { profile } from '../data/profile'
import { useTypewriter } from '../hooks/useTypewriter'

const links = [
  { label: 'LinkedIn', href: profile.linkedin, external: true },
  { label: 'Resume', href: profile.resumeUrl, external: true },
  { label: 'Email', href: `mailto:${profile.email}`, external: false },
  { label: 'GitHub', href: profile.github, external: true },
] as const

interface HeroProps {
  onSequenceDone?: () => void
}

export function Hero({ onSequenceDone }: HeroProps) {
  const [typedTagline, taglineDone] = useTypewriter(profile.tagline)

  useEffect(() => {
    if (!taglineDone) return

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      onSequenceDone?.()
      return
    }

    const lastLinkDelayMs = (links.length - 1) * 100 + 300
    const timeout = setTimeout(() => onSequenceDone?.(), lastLinkDelayMs)
    return () => clearTimeout(timeout)
  }, [taglineDone, onSequenceDone])

  return (
    <header className="animate-fade-in-up flex flex-col-reverse items-start justify-between gap-8 py-16 sm:flex-row sm:items-center">
      <div className="flex flex-col items-start">
        <p className="font-mono text-sm text-[color:var(--text-muted)]">
          <span className="text-[color:var(--accent)]">~/</span>portfolio
        </p>
        <h1 className="mt-2 font-mono text-4xl font-medium tracking-tight text-[color:var(--text-primary)] md:text-5xl">
          {profile.name}
        </h1>
        <p className="mt-3 font-mono text-[color:var(--text-secondary)] md:text-lg">
          {typedTagline}
          <span className="animate-blink ml-1 text-[color:var(--accent)]">_</span>
        </p>
        <div className="mt-5 flex gap-4 font-mono text-sm">
          {links.map((link, index) => (
            <a
              key={link.label}
              href={link.href}
              {...(link.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
              className={`text-[color:var(--accent)] transition-all duration-300 ease-out hover:underline ${
                taglineDone ? 'translate-y-0 opacity-100' : 'translate-y-1 opacity-0'
              }`}
              style={{ transitionDelay: taglineDone ? `${index * 100}ms` : '0ms' }}
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
      <div className="group relative shrink-0">
        <div className="absolute -inset-2 rounded-full bg-gradient-to-br from-[color:var(--accent)] to-[color:var(--accent-2)] opacity-20 blur-xl transition-opacity duration-500 group-hover:opacity-40" />
        <img
          src={headshotImg}
          alt={`${profile.name} headshot`}
          width={208}
          height={208}
          className="relative h-44 w-44 rounded-full border-2 border-[color:var(--glass-border)] object-cover transition-colors duration-300 group-hover:border-[color:var(--accent)] md:h-52 md:w-52"
        />
      </div>
    </header>
  )
}
