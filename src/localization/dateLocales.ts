export const dateLocales: {
    [key: string]: () => Promise<ILocale>
} = {
    en: () => import('dayjs/locale/en'),
    tr: () => import('dayjs/locale/tr'),
    es: () => import('dayjs/locale/es'),
    zh: () => import('dayjs/locale/zh'),
    ar: () => import('dayjs/locale/ar'),
}
