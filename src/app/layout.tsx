import ThemeProvider from '@/components/template/Theme/ThemeProvider'
import pageMetaConfig from '@/configs/page-meta.config'
import LocaleProvider from '@/components/template/LocaleProvider'
import NavigationProvider from '@/components/template/Navigation/NavigationProvider'
import ReduxProvider from '@/providers/redux-provider'
import { getNavigation } from '@/server/actions/navigation/getNavigation'
import { getTheme } from '@/server/actions/theme'
import { getLocale, getMessages } from 'next-intl/server'
import type { ReactNode } from 'react'
import '@/assets/styles/app.css'
import { AuthProvider } from '@/auth/session'

export const metadata = {
  ...pageMetaConfig,
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: ReactNode
}>) {
  //   const session = await auth()

  const locale = await getLocale()

  const messages = await getMessages()

  const navigationTree = await getNavigation()

  const theme = await getTheme()


  return (
    <html
      className={theme.mode === 'dark' ? 'dark' : 'light'}
      lang={locale}
      dir={theme.direction}
      suppressHydrationWarning
    >
      <body suppressHydrationWarning>
        <LocaleProvider locale={locale} messages={messages}>
          <ThemeProvider locale={locale} theme={theme}>
            <NavigationProvider navigationTree={navigationTree}>
              <ReduxProvider>
                <AuthProvider>{children}</AuthProvider>
              </ReduxProvider>
            </NavigationProvider>
          </ThemeProvider>
        </LocaleProvider>
      </body>
    </html>
  )
}
