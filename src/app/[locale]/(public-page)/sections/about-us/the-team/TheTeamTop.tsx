'use client'
import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import LeftArrowButton from '../../../components/button/LeftArrowButton'
import RightArrowButton from '../../../components/button/RightArrowButton'
import { useTranslations } from 'next-intl'

const TheTeamTop = () => {
  const t = useTranslations('pages.aboutUs.theTeam')

  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.2,
  })

  // Slider kontrol fonksiyonları
  const handlePrevSlide = () => {
    if (typeof window !== 'undefined' && window.slidePrevTeam) {
      window.slidePrevTeam()
    }
  }

  const handleNextSlide = () => {
    if (typeof window !== 'undefined' && window.slideNextTeam) {
      window.slideNextTeam()
    }
  }

  return (
    <motion.div
      className="flex flex-row gap-4 w-full justify-between items-end"
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
      <div className="flex flex-row">
        <LeftArrowButton prevSlide={handlePrevSlide} />
        <RightArrowButton nextSlide={handleNextSlide} />
      </div>
    </motion.div>
  )
}

export default TheTeamTop
