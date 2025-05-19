import NextAuth from 'next-auth'
import appConfig from '@/configs/app.config'
import authConfig from '@/configs/auth.config'
import { getAccessToken, getRefreshToken } from '@/auth/session'

export const { handlers, signIn, signOut, auth } = NextAuth({
    pages: {
        signIn: appConfig.authenticatedEntryPath,
        error: appConfig.authenticatedEntryPath,
    },
    ...authConfig,
    callbacks: {
        ...authConfig.callbacks,
        // Override the session callback to include tokens from our custom store
        async session(params) {
            const session = await authConfig.callbacks?.session?.(params) || params.session
            
            // Add tokens from our custom store if they're not already in the session
            if (!session.accessToken) {
                const accessToken = getAccessToken()
                if (accessToken) {
                    session.accessToken = accessToken
                }
            }
            
            if (!session.refreshToken) {
                const refreshToken = getRefreshToken()
                if (refreshToken) {
                    session.refreshToken = refreshToken
                }
            }
            
            return session
        }
    }
})
