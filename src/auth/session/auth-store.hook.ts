'use client'

import { tokenStorage } from '@/auth/utils/token-storage'
import { create } from 'zustand'
import { persist, createJSONStorage } from 'zustand/middleware'
import { SignedInUser } from './auth.type'

type Session = {
  signedIn: boolean
}

type AuthState = {
  session: Session
  user?: SignedInUser
}

type AuthAction = {
  setSessionSignedIn: (payload: boolean) => void
  setUser: (payload: Partial<SignedInUser>) => void
  removeSession: () => void
}

// Check if we're in a browser environment
const isBrowser = typeof window !== 'undefined'

// Create a fallback storage for server-side rendering
const noopStorage = {
  getItem: () => null,
  setItem: () => {},
  removeItem: () => {},
}

const initialState: AuthState = {
  session: {
    signedIn: false,
  },
  user: undefined,
}

export const useSessionUser = create<AuthState & AuthAction>()(
  persist(
    (set) => ({
      ...initialState,
      setSessionSignedIn: (payload) =>
        set((state) => ({
          session: {
            ...state.session,
            signedIn: payload,
          },
        })),
      setUser: (payload) =>
        set((state) => ({
          user: {
            ...state.user,
            ...payload,
          },
        })),
      removeSession: () =>
        set((state) => ({
          session: {
            ...state.session,
            signedIn: false,
          },
          user: undefined,
        })),
    }),
    {
      name: 'sessionUser',
      storage: createJSONStorage(() =>
        isBrowser ? localStorage : noopStorage,
      ),
    },
  ),
)

export const useAccessToken = () => {
  const setAccessToken = (token: string) => {
    tokenStorage.setAccessToken(token)
  }

  const removeAccessToken = () => {
    tokenStorage.removeAccessToken()
  }

  return {
    setAccessToken,
    removeAccessToken,
    accessToken: tokenStorage.getAccessToken(),
  }
}

// export function getAccessToken() {
//   return tokenStorage.getAccessToken()
// }

// export function setAccessToken(token: string) {
//   return tokenStorage.setAccessToken(token)
// }

export const useRefreshToken = () => {
  const setRefreshToken = (token: string) => {
    tokenStorage.setRefreshToken(token)
  }

  const removeRefreshToken = () => {
    tokenStorage.removeRefreshToken()
  }

  return {
    setRefreshToken,
    removeRefreshToken,
    refreshToken: tokenStorage.getRefreshToken(),
  }
}

// export function getRefreshToken() {
//   return tokenStorage.getRefreshToken()
// }

// export function setRefreshToken(token: string) {
//   return tokenStorage.setRefreshToken(token)
// }
