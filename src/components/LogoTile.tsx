interface LogoTileProps {
  /** Imported image asset. Omit and pass `monogram` for a typographic tile. */
  src?: string
  /** Short text mark (2-4 chars) used when no usable logo image exists. */
  monogram?: string
  alt: string
  /**
   * Set for logos that ship with their own background baked in (e.g. a JPEG app icon).
   * Fills the tile edge-to-edge instead of padding a transparent mark inside it.
   */
  fill?: boolean
  size?: 'sm' | 'lg'
}

const sizeClasses = {
  sm: 'h-14 w-14',
  lg: 'h-24 w-24 md:h-28 md:w-28',
} as const

/**
 * Uniform container for brand marks. Fixed square box so logos of any native aspect
 * ratio — or a text monogram — render at a consistent visual size across sections.
 */
export function LogoTile({ src, monogram, alt, fill = false, size = 'sm' }: LogoTileProps) {
  return (
    <div
      className={`flex shrink-0 items-center justify-center overflow-hidden rounded-[var(--radius)] border border-[color:var(--glass-border)] bg-[color:var(--glass-bg)] transition-all duration-300 hover:border-[color:var(--accent)] hover:shadow-[0_0_20px_var(--accent-glow)] ${
        sizeClasses[size]
      } ${fill ? '' : size === 'lg' ? 'p-4' : 'p-2'}`}
    >
      {src ? (
        <img
          src={src}
          alt={alt}
          loading="lazy"
          className={fill ? 'h-full w-full object-cover' : 'h-full w-full object-contain'}
        />
      ) : (
        <span
          className={`accent-gradient-text font-mono font-medium tracking-tight ${
            size === 'lg' ? 'text-xl' : 'text-sm'
          }`}
          aria-label={alt}
        >
          {monogram}
        </span>
      )}
    </div>
  )
}
