export function TechTag({ label }: { label: string }) {
  return (
    <span
      className="rounded-[calc(var(--radius)/2)] border border-[color:var(--glass-border)] bg-[color:var(--glass-bg)] px-2.5 py-1 font-mono text-xs text-[color:var(--text-secondary)] transition-all duration-300 hover:-translate-y-0.5 hover:border-[color:var(--accent)] hover:text-[color:var(--accent)]"
      style={{ transitionTimingFunction: 'var(--ease-spring)' }}
    >
      {label}
    </span>
  )
}
