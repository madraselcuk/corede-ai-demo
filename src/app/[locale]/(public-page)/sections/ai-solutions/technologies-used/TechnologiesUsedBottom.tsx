'use client'
import React from 'react'
import { useTranslations } from 'next-intl'
import { Cloud, Globe, ShieldHalf, Smartphone, Sparkles, SquareCode } from 'lucide-react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const TechnologiesUsedBottom = () => {
  const t = useTranslations('pages.aiSolutions.technologiesUsed')

  const technologies = [
    {
      icon: (
        <SquareCode className="w-[42px] md:w-[60px] h-[42px] md:h-[60px] text-violet-300" />
      ),
      title: t('feature-1'),
      description: t('description-1'),
    },
    {
      icon: (
        <Globe className="w-[42px] md:w-[60px] h-[42px] md:h-[60px] text-violet-300" />
      ),
      title: t('feature-2'),
      description: t('description-2'),
    },
    {
      icon: (
        <Smartphone className="w-[42px] md:w-[60px] h-[42px] md:h-[60px] text-violet-300" />
      ),
      title: t('feature-3'),
      description: t('description-3'),
    },
    {
      icon: (
        <Cloud className="w-[42px] md:w-[60px] h-[42px] md:h-[60px] text-violet-300" />
      ),
      title: t('feature-4'),
      description: t('description-4'),
    },
    {
      icon: (
        <Sparkles className="w-[42px] md:w-[60px] h-[42px] md:h-[60px] text-violet-300" />
      ),
      title: t('feature-5'),
      description: t('description-5'),
    },
    {
      icon: (
        <ShieldHalf className="w-[42px] md:w-[60px] h-[42px] md:h-[60px] text-violet-300" />
      ),
      title: t('feature-6'),
      description: t('description-6'),
    },
  ]

  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.5 }}
      className="grid grid-cols-2 md:grid-cols-3 gap-8"
    >
      {technologies.map((technology) => (
        <motion.div
          key={technology.title}
          whileHover={{ y: -8 }}
          transition={{ type: 'tween', duration: 0.22, ease: 'easeOut' }}
          className="flex flex-col gap-4 bg-gradient-to-br from-slate-200 to-slate-100 dark:from-slate-900  dark:to-slate-800 rounded-2xl p-4 text-white \
h-[200px] md:h-[239px] border border-slate-400 dark:border-slate-600 justify-center items-center cursor-pointer"
        >
          {technology.icon}
          <h3 className="text-lg md:text-3xl font-bold text-center">{technology.title}</h3>
          <p className="text-xs md:text-xl text-center text-slate-900 dark:text-slate-100 ">{technology.description}</p>
        </motion.div>
      ))}
    </motion.div>
  )
}

export default TechnologiesUsedBottom
