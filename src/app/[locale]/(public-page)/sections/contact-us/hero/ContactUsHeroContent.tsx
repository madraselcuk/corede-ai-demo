'use client'
import React from 'react'
import GradientBorderButton from '../../../components/button/GradientBorderButton'
import { useTranslations } from 'next-intl'

const ContactUsHeroContent = () => {
  const t = useTranslations('pages.contactUs.hero')

  const scrollToCategories = () => {
    const categoriesElement = document.getElementById('help-categories')
    if (categoriesElement) {
      categoriesElement.scrollIntoView({ behavior: 'smooth', block: 'center' })
    }
  }

  return (
    <div className="flex flex-col items-center py-14 md:py-20">
      <h1 className="text-5xl md:text-8xl font-bold mb-6 text-center animate-slide-in opacity-0 dark:text-white text-transparent bg-clip-text bg-gradient-to-r from-secondary via-tertiary to-primary-deep pb-2">
        {t('title')}
      </h1>
      <p className="text-lg md:text-xl text-center max-w-3xl mx-auto mb-10 dark:text-slate-200 text-slate-700 animate-slide-in opacity-0 [animation-delay:200ms]">
        {t('description')}
      </p>

      <div className="flex justify-center">
        <GradientBorderButton
          text={t('button')}
          className="w-fit"
          onClick={scrollToCategories}
        />
      </div>
    </div>
  )
}

export default ContactUsHeroContent
