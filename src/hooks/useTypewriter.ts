import { useEffect, useState } from 'react'

export function useTypewriter(text: string, speedMs = 45): [string, boolean] {
  const [output, setOutput] = useState('')
  const [done, setDone] = useState(false)

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setOutput(text)
      setDone(true)
      return
    }

    setOutput('')
    setDone(false)
    let i = 0
    const interval = setInterval(() => {
      i += 1
      setOutput(text.slice(0, i))
      if (i >= text.length) {
        clearInterval(interval)
        setDone(true)
      }
    }, speedMs)

    return () => clearInterval(interval)
  }, [text, speedMs])

  return [output, done]
}
