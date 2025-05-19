import { redirect } from 'next/navigation'
import appConfig from '@/configs/app.config'
import { REDIRECT_URL_KEY } from '@/constants/app.constant'
import { tokenStorage } from './token-storage'

// // Constants for token names
// const ACCESS_TOKEN_KEY = 'auth_access_token';
// const REFRESH_TOKEN_KEY = 'auth_refresh_token';

// /**
//  * Get the access token from cookies on the server
//  */
// export async function getServerAccessToken(): Promise<string | null> {
//   const cookieStore = await cookies();
//   const token = cookieStore.get(ACCESS_TOKEN_KEY);
//   return token?.value || null;
// }

// /**
//  * Get the refresh token from cookies on the server
//  */
// export async function getServerRefreshToken(): Promise<string | null> {
//   const cookieStore = await cookies();
//   const token = cookieStore.get(REFRESH_TOKEN_KEY);
//   return token?.value || null;
// }

/**
 * Check if the user is authenticated on the server
 */
export function isAuthenticated(): boolean {
  // return !!getServerAccessToken();
  return !!tokenStorage.getAccessToken()
}

/**
 * Redirect unauthenticated users to the login page
 * @param redirectPath Optional path to redirect to after login
 */
export function requireAuth(redirectPath?: string): void {
  if (!isAuthenticated()) {
    const searchParams = new URLSearchParams()

    if (redirectPath) {
      searchParams.set(REDIRECT_URL_KEY, redirectPath)
    }

    const redirectUrl = `${appConfig.unAuthenticatedEntryPath}?${searchParams.toString()}`
    redirect(redirectUrl)
  }
}

/**
 * Redirect authenticated users away from auth pages
 */
export function redirectIfAuthenticated(): void {
  if (isAuthenticated()) {
    redirect(appConfig.authenticatedEntryPath)
  }
}
