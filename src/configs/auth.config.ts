import type { NextAuthConfig } from 'next-auth'
import validateCredential from '../server/actions/user/validateCredential'
import Credentials from 'next-auth/providers/credentials'
// import Github from 'next-auth/providers/github'
// import Google from 'next-auth/providers/google'

import type { SignInCredential } from '@/@types/auth'

export default {
    providers: [
        // Github({
        //     clientId: process.env.GITHUB_AUTH_CLIENT_ID,
        //     clientSecret: process.env.GITHUB_AUTH_CLIENT_SECRET,
        // }),
        // Google({
        //     clientId: process.env.GOOGLE_AUTH_CLIENT_ID,
        //     clientSecret: process.env.GOOGLE_AUTH_CLIENT_SECRET,
        // }),
        Credentials({
            async authorize(credentials) {
                /** validate credentials from backend here */
                const user = await validateCredential(
                    credentials as SignInCredential,
                )
                if (!user) {
                    return null
                }

                // Store tokens from credentials if available
                const accessToken = (credentials as any)?.accessToken
                const refreshToken = (credentials as any)?.refreshToken

                return {
                    id: user.id,
                    name: user.userName,
                    email: user.email,
                    image: user.avatar,
                    accessToken,
                    refreshToken
                }
            },
        }),
    ],
    callbacks: {
        async session(payload) {
            /** apply extra user attributes here, for example, we add 'authority' & 'id' in this section */
            const session = {
                ...payload.session,
                user: {
                    ...payload.session.user,
                    id: payload.token.sub,
                    authority: ['admin', 'user'],
                },
            }

            // Add tokens to session if available in token
            if (payload.token.accessToken) {
                session.accessToken = payload.token.accessToken as string
            }
            
            if (payload.token.refreshToken) {
                session.refreshToken = payload.token.refreshToken as string
            }

            return session
        },
        async jwt({ token, user }) {
            // Add tokens to JWT if available in user
            if (user) {
                token.accessToken = (user as any).accessToken
                token.refreshToken = (user as any).refreshToken
            }
            
            return token
        }
    },
} satisfies NextAuthConfig
