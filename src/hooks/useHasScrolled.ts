import { useEffect, useState } from 'react'

/**
 * True once the user has scrolled meaningfully past the top.
 *
 * Used to release the hero-gated section reveal early: someone who scrolls during
 * the hero intro should never be shown blank sections waiting on an animation.
 */
export function useHasScrolled(threshold = 40): boolean {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    if (window.scrollY > threshold) {
      setScrolled(true)
      return
    }

    const onScroll = () => {
      if (window.scrollY > threshold) {
        setScrolled(true)
        window.removeEventListener('scroll', onScroll)
      }
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [threshold])

  return scrolled
}
