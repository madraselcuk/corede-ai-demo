'use client'

import { useEffect, useState } from 'react'
import { I18nextProvider } from 'react-i18next'
import i18n from './i18next'
import { TranslationProvider } from './translation.provider'
import { loadResources } from './resources'
import { Language } from '@common_package'
import { defaultNS } from './resources'

interface I18nProviderProps {
  children: React.ReactNode
  locale: string
}

export function I18nClientProvider({ children, locale }: I18nProviderProps) {
  const [isReady, setIsReady] = useState(false)

  useEffect(() => {
    const initI18n = async () => {
      // Load resources for the current language
      const resources = await loadResources(locale as Language)

      // Add resources to i18next
      Object.entries(resources).forEach(([namespace, translations]) => {
        i18n.addResourceBundle(locale, namespace, translations, true, true)
      })

      // Set default namespaces
      i18n.options.defaultNS = defaultNS[0]
      i18n.options.ns = defaultNS

      // Set the language
      await i18n.changeLanguage(locale)

      setIsReady(true)
    }

    initI18n()
  }, [locale])

  if (!isReady) {
    // You could show a loading indicator here
    return null
  }

  return (
    <I18nextProvider i18n={i18n}>
      <TranslationProvider initialLocale={locale}>
        {children}
      </TranslationProvider>
    </I18nextProvider>
  )
} 