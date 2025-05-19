'use client'
import React from 'react'
import GradientBorderButton from '../../../components/button/GradientBorderButton'
import { useTranslations } from 'next-intl'
import BorderButton from '../../../components/button/BorderButton'
import { ChevronRight } from 'lucide-react'

const AiForBusinessHeroContent = () => {
  const t = useTranslations('pages.aiForBusiness.hero')
  const scrollToCategories = () => {
    const categoriesElement = document.getElementById('help-categories')
    if (categoriesElement) {
      categoriesElement.scrollIntoView({ behavior: 'smooth', block: 'center' })
    }
  }

  return (
    <div className="flex flex-col items-center py-14 md:py-20">
      <h1 className="text-3xl md:text-6xl font-bold max-w-5xl mb-6 text-center animate-slide-in opacity-0 dark:text-white text-transparent bg-clip-text bg-gradient-to-r from-secondary via-tertiary to-primary-deep pb-2">
        {t('title')}
      </h1>
      <p className="text-lg md:text-xl text-center max-w-5xl mx-auto mb-5 md:mb-10 dark:text-slate-200 text-slate-700 animate-slide-in opacity-0 [animation-delay:200ms]">
        {t('description')}
      </p>

      <div className="flex justify-center gap-4 md:gap-8 mt-10 md:mt-20">
        <GradientBorderButton
          text={t('button-1')}
          className="w-fit"
          onClick={scrollToCategories}
        />
        <BorderButton
          text={t('button-2')}
          className="w-96"
          onClick={scrollToCategories}
          icon={<ChevronRight />}
        />
      </div>
    </div>
  )
}

export default AiForBusinessHeroContent
