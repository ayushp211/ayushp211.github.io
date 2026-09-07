import type { ReactNode } from 'react'
import { useInView } from '../hooks/useInView'
import { useHeroReady } from '../hooks/useHeroReady'
import { useHasScrolled } from '../hooks/useHasScrolled'

interface SectionProps {
  id: string
  label: string
  num: string
  children: ReactNode
}

export function Section({ id, label, num, children }: SectionProps) {
  const [ref, inView] = useInView<HTMLElement>()
  const heroReady = useHeroReady()
  const hasScrolled = useHasScrolled()
  // Hold sections back for the hero intro, but release immediately if the user
  // scrolls — nobody should be shown a blank page waiting on an animation.
  const visible = (heroReady || hasScrolled) && inView

  return (
    <section
      id={id}
      ref={ref}
      className={`scroll-mt-20 border-t border-[color:var(--border)] py-12 transition-all duration-700 ease-out first:border-t-0 first:pt-0 ${
        visible ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'
      }`}
    >
      <div className="flex flex-col gap-4 md:flex-row md:gap-12">
        <div className="font-mono text-sm md:sticky md:top-24 md:h-fit md:w-36 md:shrink-0">
          <span className="accent-gradient-text font-medium">{num}</span>
          <p className="text-[color:var(--text-muted)]">
            <span className="text-[color:var(--accent)]">~/</span>
            {label}
          </p>
        </div>
        <div className="min-w-0 flex-1">{children}</div>
      </div>
    </section>
  )
}
