'use client'

import { SessionProvider as NextAuthSessionProvider } from 'next-auth/react'
import { AuthProvider } from '@/auth/session'
import { ReactNode } from 'react'

interface SessionProviderProps {
  children: ReactNode
}

export function SessionProvider({ children }: SessionProviderProps) {
  return (
    <NextAuthSessionProvider>
      <AuthProvider>
        {children}
      </AuthProvider>
    </NextAuthSessionProvider>
  )
} 