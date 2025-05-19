'use client'

import { useTranslation } from 'react-i18next'
import { useTranslate } from '../translation.provider'
import { BaseI18nReturn } from '../types'
import { Language } from '@common_package'

// TODO: This logic is not working, we should refactor
interface UseDomainI18nProps {
  domain: string
}

// Type for the domain-specific i18n hook return value
type UseDomainI18nReturn = BaseI18nReturn & {
  t: (key: string, options?: Record<string, any>) => string
}

export const useDomainI18n = ({
  domain,
}: UseDomainI18nProps): UseDomainI18nReturn => {
  const { t, i18n } = useTranslation(domain)
  const { currentLanguage, changeLanguage, isLoading } = useTranslate()

  return {
    t: t as UseDomainI18nReturn['t'],
    i18n: {
      language: i18n.language as Language,
      changeLanguage: async (lng: Language) => {
        await i18n.changeLanguage(lng)
      },
    },
    currentLanguage,
    changeLanguage: async (language: string) => {
      await changeLanguage(language as Language)
    },
    isLoading,
  }
}
