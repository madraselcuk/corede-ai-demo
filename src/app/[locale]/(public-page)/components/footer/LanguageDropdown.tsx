'use client'

import React, { useState, useRef, useEffect } from 'react'
import Link from 'next/link'
import { useLocale } from 'next-intl'
import { IoChevronDown } from 'react-icons/io5'
import { setLocale } from '@/server/actions/locale'

interface Language {
  code: string
  name: string
  nativeName: string
}

const languages: Language[] = [
  { code: 'tr', name: 'Turkish', nativeName: 'Türkçe' },
  { code: 'en', name: 'English', nativeName: 'English' },
  { code: 'de', name: 'German', nativeName: 'Deutsch' }
]

const LanguageDropdown: React.FC = () => {
  const locale = useLocale()
  const [isOpen, setIsOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)

  const currentLanguage = languages.find(lang => lang.code === locale) || languages[0]

  const toggleDropdown = () => {
    setIsOpen(!isOpen)
  }

  const handleLanguageChange = async (languageCode: string) => {
    // Dil değişikliğini çerezlere kaydet
    await setLocale(languageCode)
    setIsOpen(false)
  }

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={toggleDropdown}
        className="flex items-center space-x-1 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white text-xs sm:text-sm font-medium transition-colors duration-200"
      >
        <span>{currentLanguage.code.toUpperCase()}</span>
        <IoChevronDown className={`h-3 w-3 sm:h-4 sm:w-4 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      {isOpen && (
        <div className="absolute bottom-full mb-2 right-0 w-28 sm:w-32 bg-white dark:bg-gray-800 shadow-lg rounded-md overflow-hidden z-10">
          <div className="py-1">
            {languages.map((language) => (
              <Link
                key={language.code}
                href={`/${language.code}`}
                locale={language.code}
                className={`block px-3 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm ${
                  locale === language.code
                    ? 'bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400'
                    : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
                }`}
                onClick={() => handleLanguageChange(language.code)}
              >
                {language.nativeName}
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

export default LanguageDropdown 