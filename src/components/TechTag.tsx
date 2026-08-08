export function TechTag({ label }: { label: string }) {
  return (
    <span className="rounded border border-[color:var(--border)] bg-[color:var(--surface)] px-2 py-1 text-xs text-[color:var(--text-secondary)] transition-colors duration-200 hover:border-[color:var(--accent)] hover:text-[color:var(--accent)]">
      {label}
    </span>
  )
}
