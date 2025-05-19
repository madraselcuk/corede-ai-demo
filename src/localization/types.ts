import { Language } from '@common_package'
import { TranslationResourceNamespace } from './resources'
import {
  Common,
  Auth,
  User,
  Blog,
  File,
  Task,
  Form,
  Faq,
  HelpCenter,
  Webinar,
  Nav,
  Enums,
  Notification,
  Subscription,
} from './types-generated'

// Define the structure of your translations
export type TranslationKeys = {
  [TranslationResourceNamespace.nav]: Nav
  [TranslationResourceNamespace.enums]: Enums
  [TranslationResourceNamespace.common]: Common
  [TranslationResourceNamespace.auth]: Auth
  [TranslationResourceNamespace.user]: User
  [TranslationResourceNamespace.blog]: Blog
  [TranslationResourceNamespace.form]: Form
  [TranslationResourceNamespace.faq]: Faq
  [TranslationResourceNamespace.helpCenter]: HelpCenter
  [TranslationResourceNamespace.webinar]: Webinar
  [TranslationResourceNamespace.file]: File
  [TranslationResourceNamespace.task]: Task
  [TranslationResourceNamespace.notification]: Notification
  [TranslationResourceNamespace.subscription]: Subscription
} & Nav &
  Enums

// Type for domain-specific translations
export type DomainTranslationKeys = {
  common: Common
  auth: Auth
  user: User
  blog: Blog
  form: Form
  faq: Faq
  helpCenter: HelpCenter
  webinar: Webinar
  file: File
  task: Task
  notification: Notification
}

// Base interface for i18n functionality
export interface BaseI18nReturn {
  i18n: {
    language: Language
    changeLanguage: (lng: Language) => Promise<void>
  }
  currentLanguage: Language
  changeLanguage: (language: Language) => Promise<void>
  isLoading: boolean
}

// Type for the translation provider props
export interface TranslationProviderProps {
  children: React.ReactNode
  defaultLanguage?: Language
  fallbackLanguage?: Language
}

// Type for the domain-specific translation provider props
export interface DomainTranslationProviderProps {
  children: React.ReactNode
  defaultLanguage?: Language
  fallbackLanguage?: Language
  domain?: keyof DomainTranslationKeys
}

// Helper type to handle nested paths
type NestedPaths<T, Prefix extends string = ''> = {
  [K in keyof T]: T[K] extends string
    ? `${Prefix}${K & string}`
    : T[K] extends object
      ? NestedPaths<T[K], `${Prefix}${K & string}.`>
      : never
}[keyof T]

// Create a type that combines all translation keys with their namespaces
export type AllTranslationKeys = {
  [K in keyof TranslationKeys]: NestedPaths<TranslationKeys[K]> extends string
    ? `${K}:${NestedPaths<TranslationKeys[K]>}`
    : never
}[keyof TranslationKeys]

export type TFunction = (
  key: AllTranslationKeys,
  options?: Record<string, any>,
) => string
