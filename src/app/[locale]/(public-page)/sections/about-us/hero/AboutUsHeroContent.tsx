'use client'
import React from 'react'
import GradientBorderButton from '../../../components/button/GradientBorderButton'
import { useTranslations } from 'next-intl'
import { ChevronRight } from 'lucide-react'

const AboutUsHeroContent = () => {
  const t = useTranslations('pages.aboutUs')
  const scrollToCategories = () => {
    const categoriesElement = document.getElementById('our-mission')
    if (categoriesElement) {
      categoriesElement.scrollIntoView({ behavior: 'smooth', block: 'center' })
    }
  }

  return (
    <div className="flex flex-col items-center py-14 md:py-20">
      <h1 className="text-3xl md:text-6xl font-bold max-w-3xl mb-6 text-center animate-slide-in opacity-0 dark:text-white text-transparent bg-clip-text bg-gradient-to-r from-secondary via-tertiary to-primary-deep pb-2">
        {t('title')}
      </h1>
      <p className="text-lg md:text-xl text-center max-w-3xl mx-auto mb-10 dark:text-slate-200 text-slate-700 animate-slide-in opacity-0 [animation-delay:200ms]">
        {t('description')}
      </p>

      <div className="flex justify-center">
        <GradientBorderButton
          text={t('learnMore')}
          className="w-fit"
          onClick={scrollToCategories}
          icon={<ChevronRight />}
        />
      </div>
    </div>
  )
}

export default AboutUsHeroContent
