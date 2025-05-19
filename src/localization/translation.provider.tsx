'use client'

import { createContext, useContext, useEffect, useState } from 'react'
import { Language } from '@common_package'
import i18n from './i18next'
import { TranslationHelper } from './helpers/translation.helper'
import { LanguageStorageHelper } from './storage/language.storage'
import { config } from './config'
import { useTranslation } from 'react-i18next'

// ----------------------------------------------------------------------

export interface ITranslationContextProps {
  currentLanguage: Language
  changeLanguage: (language: Language) => Promise<void>
  isLoading: boolean
}

const I18nContext = createContext<ITranslationContextProps | null>(null)

export const useTranslate = (): ITranslationContextProps => {
  const context = useContext(I18nContext)
  if (!context) {
    throw new Error('useTranslate must be used within a TranslationProvider')
  }
  return context
}

export const TranslationProvider: React.FC<{
  children: React.ReactNode,
  initialLocale?: string
}> = ({
  children,
  initialLocale
}) => {
    const [isLoading, setIsLoading] = useState(true)
    const { i18n: i18nInstance } = useTranslation()

    useEffect(() => {
      // Initialize language from localStorage or fallback to initialLocale from server
      const storedLanguage = LanguageStorageHelper.getLanguage()
      const languageToUse = storedLanguage || (initialLocale as Language) || config.fallbackLng

      // Set the language
      i18nInstance.changeLanguage(languageToUse).then(() => {
        setIsLoading(false)
      })
    }, [i18nInstance, initialLocale])

    const changeLanguage = async (newLanguage: Language) => {
      setIsLoading(true)
      await TranslationHelper.changeLanguage(newLanguage)
      setIsLoading(false)
    }

    return (
      <I18nContext.Provider value={{
        currentLanguage: i18n.language as Language,
        changeLanguage,
        isLoading
      }}>
        {children}
      </I18nContext.Provider>
    )
  } 