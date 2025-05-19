'use client'
import React from 'react'
import { useTranslations } from 'next-intl'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import GradientBorderButton from '../../../components/button/GradientBorderButton'
import { ChevronRight } from 'lucide-react'

const SuccessStoriesRight = () => {
  const t = useTranslations('pages.aiSolutions.successStories')
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
      <div className="flex flex-col gap-4">
        <p className="text-xs md:text-lg font-medium dark:text-white text-gray-700  text-center md:text-left">
          {t('story-1')}
        </p>
        <p className="text-xs md:text-lg font-medium dark:text-white text-gray-700  text-center md:text-left">
          {t('story-2')}
        </p>
        <p className="text-xs md:text-lg font-medium dark:text-white text-gray-700  text-center md:text-left">
          {t('story-3')}
        </p>
      </div>
      <div className="flex justify-center md:justify-start w-full">
        <div className="w-fit">
          <GradientBorderButton text={t('moreStory')} icon={<ChevronRight />} />
        </div>
      </div>
    </motion.div>
  )
}

export default SuccessStoriesRight
