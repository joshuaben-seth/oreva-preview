'use client'

import { createContext, useContext, useState, ReactNode } from 'react'
import EarlyAccessBottomSheet from './EarlyAccessBottomSheet'

interface EarlyAccessContextType {
  openEarlyAccess: () => void
  closeEarlyAccess: () => void
  isOpen: boolean
}

const EarlyAccessContext = createContext<EarlyAccessContextType | undefined>(undefined)

export function useEarlyAccess() {
  const context = useContext(EarlyAccessContext)
  if (context === undefined) {
    throw new Error('useEarlyAccess must be used within an EarlyAccessProvider')
  }
  return context
}

interface EarlyAccessProviderProps {
  children: ReactNode
}

export function EarlyAccessProvider({ children }: EarlyAccessProviderProps) {
  const [isOpen, setIsOpen] = useState(false)

  const openEarlyAccess = () => setIsOpen(true)
  const closeEarlyAccess = () => setIsOpen(false)

  return (
    <EarlyAccessContext.Provider value={{ openEarlyAccess, closeEarlyAccess, isOpen }}>
      {children}
      <EarlyAccessBottomSheet isOpen={isOpen} onClose={closeEarlyAccess} />
    </EarlyAccessContext.Provider>
  )
}