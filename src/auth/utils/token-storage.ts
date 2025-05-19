'use client';

import Cookies from 'js-cookie';

// Constants for token names
const ACCESS_TOKEN_KEY = 'access_token';
const REFRESH_TOKEN_KEY = 'refresh_token';
const USER_KEY = 'user';

// Cookie options
const COOKIE_OPTIONS = {
  path: '/',
  secure: process.env.NODE_ENV === 'production',
  sameSite: 'strict' as const,
  expires: 30 // 30 days
};

// Server-side check
const isServer = typeof window === 'undefined';

/**
 * Token storage implementation that works in both client and server environments
 */
export const tokenStorage = {
  // Access Token
  getAccessToken: (): string | null => {
    if (isServer) return null;
    return Cookies.get(ACCESS_TOKEN_KEY) || null;
  },
  
  setAccessToken: (token: string): void => {
    if (isServer) return;
    Cookies.set(ACCESS_TOKEN_KEY, token, COOKIE_OPTIONS);
  },
  
  removeAccessToken: (): void => {
    if (isServer) return;
    Cookies.remove(ACCESS_TOKEN_KEY, { path: '/' });
  },

  // Refresh Token
  getRefreshToken: (): string | null => {
    if (isServer) return null;
    return Cookies.get(REFRESH_TOKEN_KEY) || null;
  },
  
  setRefreshToken: (token: string): void => {
    if (isServer) return;
    Cookies.set(REFRESH_TOKEN_KEY, token, COOKIE_OPTIONS);
  },
  
  removeRefreshToken: (): void => {
    if (isServer) return;
    Cookies.remove(REFRESH_TOKEN_KEY, { path: '/' });
  },

  // User data
  getUser: () => {
    if (isServer) return null;
    const userData = localStorage.getItem(USER_KEY);
    if (!userData) return null;
    try {
      return JSON.parse(userData);
    } catch (e) {
      console.error('Failed to parse user data from storage', e);
      return null;
    }
  },
  
  setUser: (user: any): void => {
    if (isServer) return;
    localStorage.setItem(USER_KEY, JSON.stringify(user));
  },
  
  removeUser: (): void => {
    if (isServer) return;
    localStorage.removeItem(USER_KEY);
  },

  // Clear all auth data
  clearAll: (): void => {
    if (isServer) return;
    tokenStorage.removeAccessToken();
    tokenStorage.removeRefreshToken();
    tokenStorage.removeUser();
  }
}; 