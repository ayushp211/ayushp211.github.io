import { useScrollSpy } from '../hooks/useScrollSpy'

const sections = [
  { id: 'about', label: 'about' },
  { id: 'education', label: 'education' },
  { id: 'experience', label: 'experience' },
  { id: 'projects', label: 'projects' },
  { id: 'contact', label: 'contact' },
] as const

const sectionIds = sections.map((s) => s.id)

export function Nav() {
  const activeId = useScrollSpy(sectionIds)

  return (
    <nav className="sticky top-0 z-10 border-b border-[color:var(--border)] bg-[color:var(--bg)]/90 backdrop-blur">
      <div className="mx-auto flex max-w-[720px] items-center gap-6 overflow-x-auto px-6 py-4 text-sm">
        {sections.map((s) => {
          const isActive = activeId === s.id
          return (
            <a
              key={s.id}
              href={`#${s.id}`}
              className={`after:bg-[color:var(--accent)] relative shrink-0 pb-1 transition-colors duration-200 after:absolute after:bottom-0 after:left-0 after:h-px after:transition-all after:duration-300 ${
                isActive
                  ? 'text-[color:var(--accent)] after:w-full'
                  : 'text-[color:var(--text-secondary)] after:w-0 hover:text-[color:var(--text-primary)] hover:after:w-full'
              }`}
            >
              {s.label}
            </a>
          )
        })}
      </div>
    </nav>
  )
}
