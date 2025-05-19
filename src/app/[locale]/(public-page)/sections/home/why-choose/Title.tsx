import React from 'react'
import { useTranslations } from 'next-intl'

const Title = () => {
    const t = useTranslations('pages.home')
    
    return (
        <h2 className="text-[56px] font-bold text-black dark:text-white text-center mt-28 mb-8 leading-tight md:text-[48px] sm:text-[36px] relative">
            {t('whyChoose.title')}
        </h2>
    )
}

export default Title 