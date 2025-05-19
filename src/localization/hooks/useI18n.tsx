'use client'

import { useTranslation } from 'react-i18next'
import { useTranslate } from '../translation.provider'
import { BaseI18nReturn, AllTranslationKeys } from '../types'
import { Language } from '@common_package'

// Type for the i18n hook return value
type UseI18nReturn = BaseI18nReturn & {
  t: (key: AllTranslationKeys, options?: Record<string, any>) => string
}

export const useI18n = (): UseI18nReturn => {
  const { t, i18n } = useTranslation()
  const { currentLanguage, changeLanguage, isLoading } = useTranslate()

  const typedT = (key: AllTranslationKeys, options?: Record<string, any>) => {
    return t(key, options) as string
  }

  return {
    t: typedT,
    i18n: {
      language: i18n.language as Language,
      changeLanguage: async (lng: Language) => {
        await i18n.changeLanguage(lng)
      },
    },
    currentLanguage,
    changeLanguage: async (language: Language) => {
      await changeLanguage(language)
    },
    isLoading,
  }
}
