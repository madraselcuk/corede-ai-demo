'use client'

import { useI18n } from '@/localization/hooks/useI18n'
import { Language } from '@common_package'
import { Button } from './ui/Button'

export const LanguageSwitcher = () => {
  const { currentLanguage, changeLanguage, isLoading } = useI18n()

  const handleLanguageChange = async (language: Language) => {
    console.log('handleLanguageChange', language)
    await changeLanguage(language)
    console.log('changeLanguage', currentLanguage)
  }

  return (
    <div className="flex gap-2">
      {Object.values(Language).map((language) => (
        <Button
          key={language}
          variant={currentLanguage === language ? 'solid' : 'plain'}
          disabled={isLoading || currentLanguage === language}
          onClick={() => handleLanguageChange(language)}
        >
          {language.toUpperCase()}
        </Button>
      ))}
    </div>
  )
}
