import { Language } from '@/@package/common'
import { COOKIES_KEY } from '@/constants/app.constant'
import Cookies from 'js-cookie'

export const cookieUtils = {
  setToken(token: string) {
    // if (typeof window === 'undefined') return;
    Cookies.set(COOKIES_KEY.ACCESS_TOKEN, token, {
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'strict',
      path: '/',
      expires: 7, // 7 days
    })
  },

  getToken(): string | undefined {
    // if (typeof window === 'undefined') return undefined;
    return Cookies.get(COOKIES_KEY.ACCESS_TOKEN)
  },

  removeToken() {
    // if (typeof window === 'undefined') return
    Cookies.remove(COOKIES_KEY.ACCESS_TOKEN, { path: '/' })
  },

  setLocale(locale: Language) {
    // if (typeof window === 'undefined') return
    Cookies.set(COOKIES_KEY.LOCALE, locale, {
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'strict',
      path: '/',
      expires: 30, // 30 days
    })
  },

  getLocale(): Language | undefined {
    // if (typeof window === 'undefined') return undefined
    return Cookies.get(COOKIES_KEY.LOCALE) as Language | undefined
  },

  removeLocale() {
    // if (typeof window === 'undefined') return
    Cookies.remove(COOKIES_KEY.LOCALE, { path: '/' })
  },
}
