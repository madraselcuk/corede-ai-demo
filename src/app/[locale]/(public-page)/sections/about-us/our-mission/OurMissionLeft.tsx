'use client'
import React from 'react'
import { useTranslations } from 'next-intl'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const OurMissionLeft = () => {
  const t = useTranslations('pages.aboutUs.ourMission')
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.2,
  })

  return (
    <motion.div 
      className="flex flex-col gap-8 w-full p-4 md:p-0"
      ref={ref}
      initial={{ opacity: 0, x: -20 }}
      animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="text-5xl font-bold max-w-lg">{t('title')}</h2>
      <div className="flex flex-col gap-2 dark:text-white text-black text-xs md:text-lg">
        <p>{t('description1')}</p>
        <p>{t('description2')}</p>
      </div>
    </motion.div>
  )
}

export default OurMissionLeft
