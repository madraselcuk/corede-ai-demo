'use client'

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import appConfig from '@/configs/app.config'
import { useAuth } from '../session'

interface PublicRouteProps {
  children: React.ReactNode
  redirectAuthenticated?: boolean
}

/**
 * Component for public routes
 * Can optionally redirect authenticated users away
 */
export default function PublicRoute({
  children,
  redirectAuthenticated = false,
}: PublicRouteProps) {
  const { authenticated } = useAuth()
  const router = useRouter()

  useEffect(() => {
    // If configured to redirect authenticated users and user is authenticated
    if (redirectAuthenticated && authenticated) {
      router.replace(appConfig.authenticatedEntryPath)
    }
  }, [authenticated, redirectAuthenticated, router])

  // Show nothing during redirect
  if (redirectAuthenticated) {
    return null
  }

  // If we're redirecting authenticated users and the user is authenticated, show nothing
  if (redirectAuthenticated && authenticated) {
    return null
  }

  // Otherwise render children
  return <>{children}</>
}
