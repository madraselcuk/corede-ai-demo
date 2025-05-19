'use client'

import { createContext, type ReactNode } from 'react'
import {
  useAccessToken,
  useRefreshToken,
  useSessionUser,
} from './auth-store.hook'
import type { SignedInUser, Token } from './auth.type'
import { cookieUtils } from '@/utils/cookie'

export type AuthContextType = {
  authenticated: boolean
  user?: SignedInUser
  handleSignIn: (tokens: Token, user?: SignedInUser) => void
  handleSignOut: () => void
}

export const AuthContext = createContext<AuthContextType>({
  authenticated: false,
  user: undefined,
  handleSignIn: () => {},
  handleSignOut: () => {},
})

type AuthProviderProps = { children: ReactNode }

export function AuthProvider({ children }: AuthProviderProps) {
  console.debug('AuthProvider')

  const signedIn = useSessionUser((state) => state.session.signedIn)
  const setSessionSignedIn = useSessionUser((state) => state.setSessionSignedIn)
  const user = useSessionUser((state) => state.user)
  const setUser = useSessionUser((state) => state.setUser)
  const removeSession = useSessionUser((state) => state.removeSession)

  const { accessToken, setAccessToken, removeAccessToken } = useAccessToken()
  // const { refreshToken, setRefreshToken, removeRefreshToken } =
  const { setRefreshToken, removeRefreshToken } = useRefreshToken()
  const authenticated = Boolean(accessToken && signedIn)

  const handleSignIn = async (tokens: Token, user?: SignedInUser) => {
    console.log('handleSignIn', tokens)

    // Store tokens in our custom store
    if (tokens.accessToken) {
      setAccessToken(tokens.accessToken)
      cookieUtils.setToken(tokens.accessToken)
    }

    if (tokens.refreshToken) {
      setRefreshToken(tokens.refreshToken)
    }

    setSessionSignedIn(true)

    if (user) {
      setUser(user)
    }
  }

  const handleSignOut = async () => {
    console.log('handleSignOut')

    // Clear our custom store
    removeAccessToken()
    cookieUtils.removeToken()
    removeRefreshToken()
    removeSession()
  }

  return (
    <AuthContext.Provider
      value={{
        authenticated,
        user,
        handleSignIn,
        handleSignOut,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}
