'use client'
import React from 'react'
import { useTranslations } from 'next-intl'

const TestimonialHeader: React.FC = () => {
    const t = useTranslations('pages.home.testimonials.header')
    
    return (
        <header className="flex gap-4 md:gap-16 items-end mb-16 max-md:flex-col max-md:items-start">
            <h1 className="text-6xl text-center md:text-left font-bold tracking-tighter bg-clip-text max-w-[379px] text-black dark:text-white max-md:text-5xl max-sm:text-4xl">
                {t('title')}
            </h1>
            <p className="w-full text-center md:text-left bg-clip-text text-[156px] text-black dark:text-white max-md:text-9xl max-sm:text-8xl">
                {t('counter')}
            </p>
        </header>
    )
}

export default TestimonialHeader 