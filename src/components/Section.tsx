import type { ReactNode } from 'react'
import { useInView } from '../hooks/useInView'

interface SectionProps {
  id: string
  label: string
  children: ReactNode
}

export function Section({ id, label, children }: SectionProps) {
  const [ref, inView] = useInView<HTMLElement>()

  return (
    <section
      id={id}
      ref={ref}
      className={`scroll-mt-20 border-t border-[color:var(--border)] py-12 transition-all duration-700 ease-out first:border-t-0 first:pt-0 ${
        inView ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'
      }`}
    >
      <p className="text-sm text-[color:var(--text-muted)]">
        <span className="text-[color:var(--accent)]">~/</span>
        {label}
      </p>
      <div className="mt-4">{children}</div>
    </section>
  )
}
