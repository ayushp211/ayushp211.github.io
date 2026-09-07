import { useState } from 'react'
import { profile } from '../data/profile'
import { useScrollSpy } from '../hooks/useScrollSpy'
import { useScrollProgress } from '../hooks/useScrollProgress'

const sections = [
  { id: 'about', label: 'about' },
  { id: 'education', label: 'education' },
  { id: 'experience', label: 'experience' },
  { id: 'projects', label: 'projects' },
  { id: 'skills', label: 'skills' },
] as const

const sectionIds = sections.map((s) => s.id)

export function Nav() {
  const activeId = useScrollSpy(sectionIds)
  const progress = useScrollProgress()
  const [menuOpen, setMenuOpen] = useState(false)

  const linkClass = (isActive: boolean) =>
    `relative shrink-0 pb-1 transition-colors duration-200 after:absolute after:bottom-0 after:left-0 after:h-px after:bg-[color:var(--accent)] after:transition-all after:duration-300 ${
      isActive
        ? 'text-[color:var(--accent)] after:w-full'
        : 'text-[color:var(--text-secondary)] after:w-0 hover:text-[color:var(--text-primary)] hover:after:w-full'
    }`

  return (
    <nav className="sticky top-0 z-20 border-b border-[color:var(--border)] bg-[color:var(--nav-bg)] shadow-[0_4px_24px_rgba(0,0,0,0.45)] backdrop-blur-[14px]">
      <div className="mx-auto flex max-w-[1000px] items-center justify-between gap-6 px-6 py-3 font-mono text-sm">
        <a
          href="#top"
          aria-label="Back to top"
          title="Back to top"
          onClick={() => setMenuOpen(false)}
          className="group flex shrink-0 items-center gap-2 rounded-[var(--radius)] border border-[color:var(--glass-border)] bg-[color:var(--glass-bg)] px-3 py-1.5 transition-all duration-300 hover:border-[color:var(--accent)] hover:shadow-[0_0_18px_var(--accent-glow)]"
          style={{ transitionTimingFunction: 'var(--ease-spring)' }}
        >
          <span className="text-[color:var(--accent)]">~/</span>
          <span className="accent-gradient-text font-medium">{profile.name}</span>
          <span className="text-[color:var(--accent)] opacity-0 transition-opacity duration-300 group-hover:opacity-100">
            ↑
          </span>
        </a>

        <div className="hidden items-center gap-6 md:flex">
          {sections.map((s) => (
            <a key={s.id} href={`#${s.id}`} className={linkClass(activeId === s.id)}>
              {s.label}
            </a>
          ))}
          <a
            href={profile.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-[var(--radius)] border border-[color:var(--accent)] px-3 py-1 text-[color:var(--accent)] transition-all duration-300 hover:bg-[color:var(--accent-bg)] hover:shadow-[0_0_16px_var(--accent-glow)]"
            style={{ transitionTimingFunction: 'var(--ease-spring)' }}
          >
            resume
          </a>
        </div>

        <button
          type="button"
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
          className="rounded-[var(--radius)] border border-[color:var(--glass-border)] bg-[color:var(--glass-bg)] px-3 py-1.5 text-[color:var(--text-secondary)] transition-all duration-300 hover:border-[color:var(--accent)] hover:text-[color:var(--accent)] md:hidden"
        >
          {menuOpen ? '[ close ]' : '[ menu ]'}
        </button>
      </div>

      {menuOpen && (
        <div className="flex flex-col gap-3 border-t border-[color:var(--glass-border)] px-6 py-4 font-mono text-sm md:hidden">
          {sections.map((s) => (
            <a
              key={s.id}
              href={`#${s.id}`}
              onClick={() => setMenuOpen(false)}
              className={linkClass(activeId === s.id)}
            >
              {s.label}
            </a>
          ))}
          <a
            href={profile.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setMenuOpen(false)}
            className="text-[color:var(--accent)]"
          >
            resume
          </a>
        </div>
      )}

      <div
        className="h-px origin-left bg-gradient-to-r from-[color:var(--accent)] to-[color:var(--accent-2)] transition-transform duration-150"
        style={{ transform: `scaleX(${progress})` }}
      />
    </nav>
  )
}
