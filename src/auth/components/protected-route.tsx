'use client'

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import appConfig from '@/configs/app.config'
import { REDIRECT_URL_KEY } from '@/constants/app.constant'
import { useAuth } from '../session'

interface ProtectedRouteProps {
  children: React.ReactNode
  redirectPath?: string
}

/**
 * Component that protects routes on the client side
 * Redirects to login if not authenticated
 */
export default function ProtectedRoute({
  children,
  redirectPath,
}: ProtectedRouteProps) {
  const { authenticated } = useAuth()
  const router = useRouter()

  useEffect(() => {
    // Skip during loading to prevent flash redirects
    if (!authenticated) {
      const searchParams = new URLSearchParams()

      if (redirectPath) {
        searchParams.set(REDIRECT_URL_KEY, redirectPath)
      }

      const redirectUrl = `${appConfig.unAuthenticatedEntryPath}?${searchParams.toString()}`
      router.replace(redirectUrl)
    }
  }, [authenticated, redirectPath, router])

  // Show nothing while loading or if not authenticated
  if (!authenticated) {
    return null
  }

  // Render children if authenticated
  return <>{children}</>
}
