import { Language } from '@common_package'

// Define your namespaces
export enum TranslationResourceNamespace {
  nav = 'nav',
  enums = 'enums',
  common = 'common',
  auth = 'auth',
  user = 'user',
  blog = 'blog',
  form = 'form',
  faq = 'faq',
  helpCenter = 'helpCenter',
  webinar = 'webinar',
  file = 'file',
  task = 'task',
  notification = 'notification',
  subscription = 'subscription',
}

// Default namespaces to load
export const defaultNS = [
  TranslationResourceNamespace.nav,
  TranslationResourceNamespace.enums,
  TranslationResourceNamespace.common,
  TranslationResourceNamespace.auth,
  TranslationResourceNamespace.user,
  TranslationResourceNamespace.blog,
  TranslationResourceNamespace.form,
  TranslationResourceNamespace.faq,
  TranslationResourceNamespace.helpCenter,
  TranslationResourceNamespace.webinar,
  TranslationResourceNamespace.file,
  TranslationResourceNamespace.task,
  TranslationResourceNamespace.notification,
  TranslationResourceNamespace.subscription,
] as const

// Function to load domain-specific resources
async function loadCommonResource(language: Language) {
  try {
    const content = await import(`@/localization/locale/${language}.json`)
    return content.default
  } catch (error) {
    console.warn(`Failed to load common resources for ${language}`, error)
    return {}
  }
}

// Function to load resources dynamically
export const loadResources = async (language: Language) => {
  try {
    // Load the common resources for the language
    const commonResource = await loadCommonResource(language)
    const resources: Record<string, Record<string, string>> = commonResource
    // const resources: Record<string, Record<string, string>> = {
    //   [TranslationResourceNamespace.common]: commonResource,
    // }

    // Load domain-specific resources
    // const domains = [] // Add other domains as needed
    // const domains = Object.keys(TranslationResourceNamespace).filter(
    //   // (key) => key !== TranslationResourceNamespace.common ,
    //   (key) =>
    //     key !== TranslationResourceNamespace.common &&
    //     key !== TranslationResourceNamespace.blog,
    // )
    // for (const domain of domains) {
    //   const domainResources = await loadDomainResources(domain, language)
    //   if (Object.keys(domainResources).length > 0) {
    //     resources[domain] = domainResources
    //   }
    // }

    return resources
  } catch (error) {
    console.error(`Failed to load resources for ${language}`, error)
    return {}
  }
}
