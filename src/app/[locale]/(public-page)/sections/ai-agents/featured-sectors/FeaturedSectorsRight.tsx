"use client"
import React, { useState } from 'react'
import { useTranslations } from 'next-intl'
import LeftArrowButton from '../../../components/button/LeftArrowButton'
import RightArrowButton from '../../../components/button/RightArrowButton'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const FeaturedSectorsRight = () => {
  const t = useTranslations('pages.aiAgents.featuredSectors')
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.2,
  })
  
  const sectors = [
    {
      sectionTitle: t('section-1'),
      sectionDescription: t('section-1-description'),
    },
    {
      sectionTitle: t('section-2'),
      sectionDescription: t('section-2-description'),
    },
    {
      sectionTitle: t('section-3'),
      sectionDescription: t('section-3-description'),
    },
    {
      sectionTitle: t('section-4'),
      sectionDescription: t('section-4-description'),
    },
    {
      sectionTitle: t('section-5'),
      sectionDescription: t('section-5-description'),
    },
    {
      sectionTitle: t('section-6'),
      sectionDescription: t('section-6-description'),
    },
    {
      sectionTitle: t('section-7'),
      sectionDescription: t('section-7-description'),
    },
    {
      sectionTitle: t('section-8'),
      sectionDescription: t('section-8-description'),
    },
    {
      sectionTitle: t('section-9'),
      sectionDescription: t('section-9-description'),
    }

  ]

  const [current, setCurrent] = useState(0)
  const [direction, setDirection] = useState(0)

  const paginate = (newDirection: number) => {
    setDirection(newDirection)
    setCurrent((prev) => {
      let next = prev + newDirection
      if (next < 0) next = sectors.length - 1
      if (next >= sectors.length) next = 0
      return next
    })
  }

  return (
    <motion.div 
      className="flex flex-col gap-8 w-full p-4 md:p-0"
      ref={ref}
      initial={{ opacity: 0, x: 20 }}
      animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="text-5xl font-bold max-w-xl">{t('title')}</h2>
      <motion.div
        key={current}
        initial={{ opacity: 0, x: direction > 0 ? 40 : -40 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: direction > 0 ? -40 : 40 }}
        transition={{ duration: 0.4 }}
      >
        <h3 className="text-2xl font-bold max-w-xl">{sectors[current].sectionTitle}</h3>
        <p className="text-xs md:text-lg min-h-[190px] font-medium dark:text-white text-gray-700">
          {sectors[current].sectionDescription}
        </p>
      </motion.div>
      <div className="flex flex-row items-center">
        <LeftArrowButton prevSlide={() => paginate(-1)} />
        <RightArrowButton nextSlide={() => paginate(1)} />
      </div>
    </motion.div>
  )
}

export default FeaturedSectorsRight
