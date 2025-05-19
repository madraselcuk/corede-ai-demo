import React from 'react'
import { useTranslations } from 'next-intl'
import Spline from '@splinetool/react-spline/next'
import GradientBorderButton from '../../../components/button/GradientBorderButton'
import BorderButton from '../../../components/button/BorderButton'
import { ChevronRight } from 'lucide-react'

const HeroContent = () => {
  const t = useTranslations('pages.home.hero')

  return (
    <div className="flex flex-col-reverse md:flex-row gap-8 mt-20 items-center py-20 mx-2 md:mx-0">
      <div className="flex-2 w-full animate-slide-in opacity-0">
        <h1 className="text-base font-semibold mb-2 uppercase text-center md:text-left animate-slide-in opacity-0">
          {t('upperTitle')}
        </h1>
        <h1 className="text-6xl font-bold mb-4 text-center md:text-left animate-slide-in opacity-0 [animation-delay:200ms]">
          {t('title')}
        </h1>
        <h2 className="text-3xl font-semibold mb-6 text-center md:text-left animate-slide-in opacity-0 [animation-delay:400ms]">
          {t('subtitle')}
        </h2>
        <p className="text-xl font-medium dark:text-slate-200 text-slate-800 mb-8 text-center md:text-left animate-slide-in opacity-0 [animation-delay:600ms]">
          {t('description')}
        </p>
        <div className="flex flex-col md:flex-row gap-4 animate-slide-in opacity-0 [animation-delay:800ms]">
          <div>
            <GradientBorderButton text={t('requestDemo')} />
          </div>
          <div>
            <BorderButton text={t('learnMore')} icon={<ChevronRight />} />
          </div>
        </div>
      </div>
      <div className="flex-1 animate-slide-in-late hidden md:block">
        <Spline scene="https://prod.spline.design/b-Q91IzB7DrN7SOC/scene.splinecode" />
      </div>
    </div>
  )
}

export default HeroContent
