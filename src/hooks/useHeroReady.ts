import { createContext, useContext } from 'react'

export const HeroReadyContext = createContext(false)

export function useHeroReady(): boolean {
  return useContext(HeroReadyContext)
}
