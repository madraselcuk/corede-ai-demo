import React from 'react'
import { useTranslations } from 'next-intl'

const TechnologiesUsedTop = () => {
  const t = useTranslations('pages.aiSolutions.technologiesUsed')

  return (
    <div className="flex flex-col w-full gap-8">
      <h2 className="text-3xl md:text-5xl font-bold text-center">
        {t('title')}
      </h2>
      <p className="text-sm md:text-lg text-center max-w-3xl mx-auto text-slate-900 dark:text-slate-100" >
        {t('description')}
      </p>
    </div>
  )
}

export default TechnologiesUsedTop
