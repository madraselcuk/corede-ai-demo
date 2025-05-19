import { Language } from '@common_package'
import { NextRequest } from 'next/server'

/**
 * Handle locale pathname
 * @param pathname - pathname
 * @returns locale if pathname has locale, otherwise undefined
 */
export function handleLocalePathName(params: {
  pathname: string
  locales: Language[]
}): Language | undefined {
  const { pathname, locales } = params

  // check if pathname has locale
  const pathnameHasLocale = locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`,
  )

  // if pathname has locale, set locale to cookie
  if (pathnameHasLocale) {
    // get locale from pathname
    const locale: Language = pathname.split('/')[1] as Language

    return locale
  }

  return undefined
}

/**
 * Get locale from header
 * @param req - request
 * @returns locale if header has locale, otherwise undefined
 */
export function getLocaleFromHeader(req: NextRequest): Language | undefined {
  const headerLocale = req.headers
    ?.get('accept-language')
    ?.split(',')[0]
    ?.split('-')[0] as Language | undefined

  return headerLocale
}
