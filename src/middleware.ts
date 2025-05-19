import { NextRequest, NextResponse } from 'next/server'
import {
  authRoutes as _authRoutes,
  publicRoutes as _publicRoutes,
} from '@/configs/routes.config'
import appConfig from '@/configs/app.config'
import { COOKIES_KEY, REDIRECT_URL_KEY } from '@/constants/app.constant'
import { Language } from '@common_package'
import { getLocaleFromHeader, handleLocalePathName } from './middleware.utils'

export const locales = [Language.en, Language.tr]
export const defaultLocale = Language.tr

// Convert route objects to path arrays
const publicRoutes = Object.entries(_publicRoutes).map(([key]) => key)
const authRoutes = Object.entries(_authRoutes).map(([key]) => key)

/**
 * Checks if a path matches a route pattern that may include path parameters
 * (e.g., "/en/blog/:id" matches "/en/blog/123")
 */
function matchesRoutePattern(path: string, routePattern: string): boolean {
  // Convert route pattern to regex
  // Replace :paramName with a regex pattern that matches any segment
  const patternAsRegex = routePattern
    .replace(/:[^/]+/g, '[^/]+')
    .replace(/\//g, '\\/')
  
  const regex = new RegExp(`^${patternAsRegex}$`)
  return regex.test(path)
}

/**
 * Middleware function that runs before requests are completed
 * Handles authentication and redirects
 */
export default function middleware(req: NextRequest) {
  const { nextUrl } = req
  console.log('nextUrl', nextUrl)
  console.log('req.url', req.url)
  const { pathname } = nextUrl
  const response = NextResponse.next()

  // Determine route type
  const isPublicRoute = publicRoutes.includes(pathname) || 
                      publicRoutes.some(route => matchesRoutePattern(pathname, route))
  const isAuthRoute = authRoutes.includes(pathname) ||
                      authRoutes.some(route => matchesRoutePattern(pathname, route))
  
  let locale: Language = defaultLocale
  const localeInPathname = handleLocalePathName({
    pathname,
    locales,
  })
  const cookieLocale = req.cookies.get(COOKIES_KEY.LOCALE)?.value as
    | Language
    | undefined
  const headerLocale = getLocaleFromHeader(req)

  if (localeInPathname && locales.includes(localeInPathname)) {
    locale = localeInPathname
    response.cookies.set(COOKIES_KEY.LOCALE, locale, { path: '/' })
    console.log('localeInPathname', localeInPathname)
  } else if (cookieLocale && locales.includes(cookieLocale)) {
    locale = cookieLocale
    console.log('cookieLocale', cookieLocale)
  } else if (headerLocale && locales.includes(headerLocale)) {
    locale = headerLocale
    response.cookies.set(COOKIES_KEY.LOCALE, locale, { path: '/' })
    console.log('headerLocale', headerLocale)
  }

  // if auth route, redirect to next
  if (isAuthRoute) {
    return NextResponse.next()
  }

  // if public route, redirect to locale pathname
  if (isPublicRoute) {
    if (!!localeInPathname) {
      // if locale is in pathname, redirect to next
      return NextResponse.next()
    } else {
      // if locale is not in pathname, redirect to locale pathname
      const newUrl = new URL(`/${locale}${pathname}`, req.url)
      const response = NextResponse.redirect(newUrl)
      return response
    }
  }

  // Check if user is authenticated by looking for access token in cookies
  const accessToken = req.cookies.get(COOKIES_KEY.ACCESS_TOKEN)?.value
  console.log('accessToken', accessToken)
  const isSignedIn = !!accessToken

  // if protected route and user is not signed in, redirect to login
  if (!isSignedIn) {
    // Build the redirect URL with the original path as a callback
    let callbackUrl = pathname
    if (nextUrl.search) {
      callbackUrl += nextUrl.search
    }
    // Redirect to login with callback URL
    return NextResponse.redirect(
      new URL(
        `${appConfig.unAuthenticatedEntryPath}?${REDIRECT_URL_KEY}=${encodeURIComponent(callbackUrl)}`,
        nextUrl,
      ),
    )
  }

  return NextResponse.next()
}

/**
 * Configure which routes the middleware applies to
 */
export const config = {
  matcher: ['/((?!.+\\.[\\w]+$|_next|api/auth).*)', '/', '/(api)(.*)'],
}
