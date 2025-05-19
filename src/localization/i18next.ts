import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import { config } from './config'

// Initialize i18next without resources - they will be loaded dynamically
i18n.use(initReactI18next).init({
    debug: process.env.NODE_ENV === 'development',
    fallbackLng: config.fallbackLng,
    supportedLngs: config.supportedLanguages,
    defaultNS: 'common',
    interpolation: {
        escapeValue: false,
    },
    // Don't load resources here - we'll load them dynamically
    resources: {},
})

export default i18n
