'use client'
import React from 'react'
import GradientBorderButton from '../../../components/button/GradientBorderButton'
import { useTranslations } from 'next-intl'
import { ChevronRight } from 'lucide-react'
import BorderButton from '../../../components/button/BorderButton'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const GetOfferContent = () => {
  const t = useTranslations('pages.aiAgents.getOffer')
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.2,
  })

  return (
    <motion.div 
      className="flex flex-col items-center py-14 md:py-20"
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.5 }}
    >
      <p className="text-base font-medium text-center mb-4 dark:text-slate-200 text-slate-700 hidden md:block">
        {t('headline')}
      </p>
      <h1 className="text-3xl md:text-6xl font-bold max-w-3xl mb-6 text-center dark:text-white text-transparent bg-clip-text bg-gradient-to-r from-secondary via-tertiary to-primary-deep pb-2">
        {t('title')}
      </h1>
      <p className="text-xs md:text-xl text-center max-w-3xl mx-auto mb-10 dark:text-slate-200 text-slate-700">
        {t('description')}
      </p>

      <div className="flex flex-row gap-4">
        <div>
          <GradientBorderButton text={t('requestOfferButton')} />
        </div>
        <div>
          <BorderButton text={t('faqButton')} icon={<ChevronRight />} />
        </div>
      </div>
    </motion.div>
  )
}

export default GetOfferContent
