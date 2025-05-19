// src/app/[locale]/layout.tsx
import React from 'react';
import NavMenuWrapper from './(public-page)/components/navigation/NavMenuWrapper';
import { NextIntlClientProvider } from 'next-intl'
import Footer from './(public-page)/components/footer/Footer';
import { getLocale, getMessages } from 'next-intl/server';
import { Subscription } from './(public-page)/components/subscription';
  
export default async function LocaleLayout({
    children,
}: {
    children: React.ReactNode
    params: { locale: string }
}) {
    // locale değerini params'tan al ve beklenmesi gereken bir Promise ise await edin
    const locale = await getLocale()


    // locale için çeviri verilerini yükle
    const messages = await getMessages()
    
    return (
        <NextIntlClientProvider locale={locale} messages={messages}>
            <div className="w-full overflow-x-hidden">
                <NavMenuWrapper />
                {children}
                <Subscription />
                <Footer />
            </div>  
        </NextIntlClientProvider>
    )
}
