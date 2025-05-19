import React from 'react'
import { useTranslations } from 'next-intl'

const SuccessStoriesTop = () => {
  const t = useTranslations('pages.aiForBusiness.successStories')

  return (
    <div className="flex flex-col gap-8 w-full items-center md:items-start">
      <h2 className="text-3xl md:text-5xl font-bold max-w-sm md:max-w-lg text-center md:text-left">
        {t('title')}
      </h2>
    </div>
  )
}

export default SuccessStoriesTop
