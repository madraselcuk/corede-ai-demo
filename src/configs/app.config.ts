export type AppConfig = {
  appPrefix: string
  authenticatedEntryPath: string
  unAuthenticatedEntryPath: string
  locale: string
  activeNavTranslation: boolean
  accessTokenPersistStrategy: 'localStorage' | 'sessionStorage' | 'cookies'
}

const appConfig: AppConfig = {
  appPrefix: '/app',
  authenticatedEntryPath: '/app/home',
  unAuthenticatedEntryPath: '/sign-in',
  locale: 'en',
  activeNavTranslation: true,
  accessTokenPersistStrategy: 'cookies',
}

export default appConfig
