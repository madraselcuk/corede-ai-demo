'use client'
import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { useTranslations } from 'next-intl'

const CompanyHistoryLeft = () => {
  const t = useTranslations('pages.aboutUs.companyHistory')

  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.2,
  })

  return (
    <motion.div
      className="flex flex-col gap-4 w-full justify-between"
      ref={ref}
      initial={{ opacity: 0, x: -20 }}
      animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex flex-col gap-4 md:gap-8">
        <h2 className="text-3xl md:text-5xl font-bold">{t('title')}</h2>
        <p className="text-xs md:text-lg max-w-lg dark:text-white text-gray-900">
          {t('description')}
        </p>
      </div>
      <div className="w-full flex flex-col md:flex-row gap-4 md:gap-8  mb-4 md:mb-0 justify-between items-end dark:text-white text-gray-900">
        <motion.div
          className="flex flex-row md:flex-col gap-4 w-full p-4 items-center md:items-start 
          dark:bg-gray-800/30 rounded-2xl shadow-2xl dark:border dark:border-gray-700/50 relative overflow-hidden"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {/* Arka plan dekoratif elementler */}
          <div className="absolute -bottom-40 -left-30 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl"></div>
          <p className="text-6xl md:text-9xl font-bold  ">01</p>
          <div className="flex flex-col gap-2">
            <p className="text-base md:text-xl font-bold">{t('title-1')}</p>
            <div className="w-full h-0.5 bg-black/10" />
            <p className="text-xs md:text-base">{t('content-1')}</p>
          </div>
        </motion.div>
        <motion.div
          className="flex flex-row md:flex-col gap-4 w-full p-4 items-center md:items-start mr-0 md:mr-4
          dark:bg-gray-800/30 rounded-2xl shadow-2xl dark:border dark:border-gray-700/50 relative overflow-hidden"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          {/* Arka plan dekoratif elementler */}
          <div className="absolute -bottom-30 -left-30 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl"></div>
          <p className="text-6xl md:text-9xl font-bold">02</p>
          <div className="flex flex-col gap-2">
            <p className="text-base md:text-xl font-bold">{t('title-2')}</p>
            <div className="w-full h-0.5 bg-black/10" />
            <p className="text-xs md:text-base">{t('content-2')}</p>
          </div>
        </motion.div>
      </div>
    </motion.div>
  )
}

export default CompanyHistoryLeft
