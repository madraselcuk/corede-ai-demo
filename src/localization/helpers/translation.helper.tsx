import { Language } from '@common_package'
import { LanguageStorageHelper } from '../storage/language.storage'
import i18n from '../i18next'
import { setLocale } from '@/server/actions/locale'

export class TranslationHelper {
  static async changeLanguage(lang: Language) {
    // Update client-side storage
    LanguageStorageHelper.setLanguage(lang)

    // Update i18next language
    i18n.changeLanguage(lang)

    // Update server-side cookie
    await setLocale(lang)
  }

  static getCurrentLanguage(): Language {
    return i18n.language as Language
  }
} 