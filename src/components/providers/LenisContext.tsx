'use client'

import { createContext, useContext } from 'react'
import type Lenis from 'lenis'

interface LenisContextType {
  lenis: Lenis | null
}

const LenisContext = createContext<LenisContextType>({ lenis: null })

export function useLenis() {
  return useContext(LenisContext)
}

export default LenisContext
