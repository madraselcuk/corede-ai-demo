# i18n Integration

This folder contains the integration of i18next with Next.js internationalization. It combines both server-side and client-side internationalization capabilities.

## Structure

- `i18next.ts` - Initializes i18next
- `config.ts` - Configuration for i18next
- `resources.ts` - Defines namespaces and resource loading
- `translation.context.tsx` - Provides a React context for translations
- `i18n-provider.tsx` - Client-side provider for i18next
- `storage/language.storage.ts` - Helper for storing language preferences
- `helpers/translation.helper.tsx` - Helper functions for translations
- `hooks/useI18n.tsx` - Hook for using translations in components

## How to Use

### In Client Components

```tsx
'use client'

import { useI18n } from '@/localization/hooks/useI18n'
import { TranslationResourceNamespace } from '@/localization/resources'

export const MyComponent = () => {
  // Use the common namespace by default
  const { t } = useI18n()

  // Or specify a namespace
  const { t: tAuth } = useI18n(TranslationResourceNamespace.auth)

  return (
    <div>
      <h1>{t('title')}</h1>
      <p>{tAuth('login.welcome')}</p>
    </div>
  )
}
```

### Changing Language

```tsx
'use client'

import { useI18n } from '@/localization/hooks/useI18n'
import { Language } from '@common_package'

export const LanguageSwitcher = () => {
  const { currentLanguage, changeLanguage } = useI18n()

  return (
    <div>
      <button onClick={() => changeLanguage(Language.en)}>English</button>
      <button onClick={() => changeLanguage(Language.tr)}>Turkish</button>
    </div>
  )
}
```

### Adding New Translations

1. Add your translation files to the appropriate domain folder
2. Update the `loadResources` function in `resources.ts` to load your new translations

## Integration with Next.js

This implementation works alongside Next.js's built-in internationalization:

- Server-side routing and locale detection is handled by Next.js
- Client-side translations and language switching are handled by i18next
- Both systems are synchronized through cookies and localStorage

## Adding New Languages

1. Add the new language to the `Language` enum in `@common_package`
2. Add translation files for the new language
3. Update the `dateLocales.ts` file to include the new language
4. Add the new language to the `messages` folder at the root of the project
