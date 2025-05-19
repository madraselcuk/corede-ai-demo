'use client'
import React from 'react'
import { useTranslations } from 'next-intl'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const WhyAiPoweredLeft = () => {
  const t = useTranslations('pages.aiSolutions.whyAiPowered')
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.2,
  })

  return (
    <motion.div
      className="flex flex-col gap-8 w-full p-4 lg:p-0"
      ref={ref}
      initial={{ opacity: 0, x: -20 }}
      animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="text-3xl md:text-5xl font-bold md:max-w-md text-center md:text-left">
        {t('title')}
      </h2>
      <div>
        <p className="text-xs md:text-lg font-medium dark:text-white text-gray-700  text-center md:text-left">
          {t('description')}
        </p>
        <ul className="mt-1 list-disc list-inside text-xs md:text-lg font-medium dark:text-white text-gray-700  text-center md:text-left">
          <li>{t('list-1')}</li>
          <li>{t('list-2')}</li>
          <li>{t('list-3')}</li>
        </ul>
      </div>
    </motion.div>
  )
}

export default WhyAiPoweredLeft
