import { Language } from '@common_package'

export class LanguageStorageHelper {
  static readonly sessionKey = 'language'

  static setLanguage = (payload: Language): void => {
    if (typeof window !== 'undefined') {
      localStorage.setItem(LanguageStorageHelper.sessionKey, payload)
    }
  }

  static removeLanguage = (): void => {
    if (typeof window !== 'undefined') {
      localStorage.removeItem(LanguageStorageHelper.sessionKey)
    }
  }

  static getLanguage = (fallbackLng?: Language): Language => {
    if (typeof window !== 'undefined') {
      return (
        (localStorage.getItem(this.sessionKey) as Language) ??
        fallbackLng ??
        Language.en
      )
    }
    return fallbackLng ?? Language.en
  }
}
