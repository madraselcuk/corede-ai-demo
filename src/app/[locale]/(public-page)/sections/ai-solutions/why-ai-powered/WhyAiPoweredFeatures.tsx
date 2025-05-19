'use client'
import React from 'react'
import { useTranslations } from 'next-intl'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const WhyAiPoweredFeatures = () => {
  const t = useTranslations('pages.aiSolutions.whyAiPowered')
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.2,
  })

  return (
    <div className="flex flex-row p-2 md:p-0 gap-2 md:gap-8 w-full mt-8 text-gray-800 dark:text-white" ref={ref}>
      <motion.div
        className="flex justify-center items-center gap-4 w-full py-2 md:py-6 cursor-pointer text-center
       bg-slate-200 dark:bg-slate-900 p-2 md:p-4 rounded-xl text-xs md:text-2xl font-bold"
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        whileHover={{ y: -5, transition: { duration: 0.2, ease: 'easeOut' } }}
      >
        {t('feature-1')}
      </motion.div>
      <motion.div
        className="flex justify-center items-center gap-4 w-full py-2 md:py-6 cursor-pointer text-center
       bg-slate-200 dark:bg-slate-900 p-2 md:p-4 rounded-xl text-xs md:text-2xl font-bold"
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        whileHover={{ y: -5, transition: { duration: 0.2, ease: 'easeOut' } }}
      >
        {t('feature-2')}
      </motion.div>
      <motion.div
        className="flex justify-center items-center gap-4 w-full py-2 md:py-6 cursor-pointer text-center
       bg-slate-200 dark:bg-slate-900 p-2 md:p-4 rounded-xl text-xs md:text-2xl font-bold"
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        whileHover={{ y: -5, transition: { duration: 0.2, ease: 'easeOut' } }}
      >
        {t('feature-3')}
      </motion.div>
    </div>
  )
}

export default WhyAiPoweredFeatures
