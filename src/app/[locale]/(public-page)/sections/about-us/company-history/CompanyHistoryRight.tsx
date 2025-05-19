'use client'
import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { useTranslations } from 'next-intl'

const CompanyHistoryRight = () => {
    const t = useTranslations('pages.aboutUs.companyHistory')

  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.2,
  })

  return (
    <motion.div 
      className="flex flex-col md:flex-row items-end justify-between gap-4 md:gap-8  w-full dark:text-white text-gray-900"
      ref={ref}
      initial={{ opacity: 0, x: 20 }}
      animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
      transition={{ duration: 0.5 }}
    >
      <motion.div
        className="flex flex-row md:flex-col gap-4 w-full p-4 items-center md:items-start ml-0 md:ml-4
        dark:bg-gray-800/30 rounded-2xl shadow-2xl dark:border dark:border-gray-700/50 relative overflow-hidden"
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        {/* Arka plan dekoratif elementler */}
        <div className="absolute -bottom-20 -left-30 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl"></div>
        <p className="text-6xl md:text-9xl font-bold">03</p>
        <div className="flex flex-col gap-2">
          <p className="text-base md:text-xl font-bold">{t('title-3')}</p>
          <div className="w-full h-0.5 bg-black/10" />
          <p className="text-xs md:text-base">
            {t('content-3')}
          </p>
        </div>
      </motion.div>

      <motion.div
        className="flex flex-row md:flex-col gap-4 w-full p-4 items-center md:items-start
        dark:bg-gray-800/30 rounded-2xl shadow-2xl dark:border dark:border-gray-700/50 relative overflow-hidden"
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        {/* Arka plan dekoratif elementler */}
        <div className="absolute bottom-0 -left-30 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl"></div>
        <p className="text-6xl md:text-9xl font-bold">04</p>
        <div className="flex flex-col gap-2">
          <p className="text-base md:text-xl font-bold">{t('title-4')}</p>
          <div className="w-full h-0.5 bg-black/10" />
          <p className="text-xs md:text-base">
            {t('content-4')}
          </p>
        </div>
      </motion.div>
    </motion.div>
  )
}

export default CompanyHistoryRight
