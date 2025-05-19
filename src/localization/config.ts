import { Language } from '@common_package'

export const config = {
  fallbackLng: Language.en,
  fallbackDateLocale: 'en',
  supportedLanguages: Object.values(Language),
}

export const changeLangMessages: Record<
  Language,
  { success: string; error: string; loading: string }
> = {
  en: {
    success: 'Language has been changed!',
    error: 'Error changing language!',
    loading: 'Loading...',
  },
  tr: {
    success: 'Dil değiştirildi!',
    error: 'Dil değiştirilirken hata oluştu!',
    loading: 'Yükleniyor...',
  },
  fr: {
    success: 'La langue a été changée !',
    error: 'Erreur lors du changement de langue !',
    loading: 'Chargement...',
  },
  de: {
    success: 'Die Sprache wurde geändert!',
    error: 'Fehler beim Ändern der Sprache!',
    loading: 'Laden...',
  },
  it: {
    success: 'La lingua è stata cambiata!',
    error: 'Errore durante il cambio della lingua!',
    loading: 'Caricamento...',
  },
  pt: {
    success: 'O idioma foi alterado!',
    error: 'Erro ao alterar o idioma!',
    loading: 'Carregando...',
  },
  ru: {
    success: 'Язык был изменён!',
    error: 'Ошибка при смене языка!',
    loading: 'Загрузка...',
  },
  es: {
    success: '¡El idioma ha sido cambiado!',
    error: '¡Error al cambiar el idioma!',
    loading: 'Cargando...',
  },
}
