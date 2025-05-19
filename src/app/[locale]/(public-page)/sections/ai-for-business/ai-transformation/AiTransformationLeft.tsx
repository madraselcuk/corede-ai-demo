'use client'
import React from 'react'
import { useTranslations } from 'next-intl'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const AiTransformationLeft = () => {
  const t = useTranslations('pages.aiForBusiness.aiTransformation')
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
      <div
        className="flex flex-col gap-4 bg-slate-100 dark:bg-slate-900
      border border-slate-200 dark:border-slate-800 rounded-2xl"
      >
        <div className="flex-1 rounded-t-2xl overflow-hidden">
          <img
            src="/img/others/ai-for-business/ai-transformation-1.jpg"
            alt="ai-transformation-1"
            className="w-full h-[264px] object-cover"
          />
        </div>
        <div className="flex flex-col gap-4 flex-2 p-4 md:p-8 ">
          <h3 className="text-xl md:text-4xl font-bold">
            {t('section-1.title')}
          </h3>
          <ul className="list-disc list-inside text-slate-800 dark:text-slate-100 text-xs md:text-xl">
            <li>{t('section-1.item-1')}</li>
            <li>{t('section-1.item-2')}</li>
            <li>{t('section-1.item-3')}</li>
          </ul>
        </div>
      </div>
    </motion.div>
  )
}

export default AiTransformationLeft
