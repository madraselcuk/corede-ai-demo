'use client'
import { useEffect } from 'react'
import { NextIntlClientProvider } from 'next-intl'
import { dateLocales } from '@/localization/dateLocales'
import dayjs from 'dayjs'
import { I18nClientProvider } from '@/localization/i18n.provider'

import type { AbstractIntlMessages } from 'next-intl'

type LocaleProvider = {
    messages: AbstractIntlMessages
    children: React.ReactNode
    locale: string
}

const LocaleProvider = ({ messages, children, locale }: LocaleProvider) => {
    useEffect(() => {
        dateLocales[locale]().then(() => {
            dayjs.locale(locale)
        })
    }, [locale])

    return (
        <NextIntlClientProvider messages={messages} locale={locale} timeZone="UTC">
            <I18nClientProvider locale={locale}>
                {children}
            </I18nClientProvider>
        </NextIntlClientProvider>
    )
}

export default LocaleProvider
