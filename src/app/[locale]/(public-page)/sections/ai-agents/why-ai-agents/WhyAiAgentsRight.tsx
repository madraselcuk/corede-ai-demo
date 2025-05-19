'use client'
import React from 'react'
import { Check } from 'lucide-react'
import { useTranslations } from 'next-intl'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const WhyAiAgentsRight = () => {
  const t = useTranslations('pages.aiAgents.whyAiAgents')
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.2,
  })
  
  return (
    <motion.div 
      className="flex flex-col gap-8 w-full p-4 md:p-0" 
      ref={ref}
      initial={{ opacity: 0, x: 20 }}
      animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="text-5xl font-bold max-w-md">{t('title')}</h2>
      <div className="flex flex-col gap-2">
        <div className="flex flex-row gap-2 md:gap-4 items-center max-w-lg">
          <Check className="w-6 h-6 dark:text-white text-gray-700" />
          <p className="text-xs md:text-lg font-medium dark:text-white text-gray-700">
            {t('feature1')}
          </p>
        </div>
        <div className="flex flex-row gap-2 md:gap-4 items-center max-w-lg">
          <Check className="w-6 h-6 dark:text-white text-gray-700" />
          <p className="text-xs md:text-lg font-medium dark:text-white text-gray-700">
            {t('feature2')}
          </p>
        </div>
        <div className="flex flex-row gap-2 md:gap-4 items-center max-w-lg">
          <Check className="w-6 h-6 dark:text-white text-gray-700" />
          <p className="text-xs md:text-lg font-medium dark:text-white text-gray-700">
            {t('feature3')}
          </p>
        </div>
      </div>
    </motion.div>
  )
}

export default WhyAiAgentsRight
