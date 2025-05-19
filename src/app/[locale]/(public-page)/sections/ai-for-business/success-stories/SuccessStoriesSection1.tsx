'use client'
import React from 'react'
import { useTranslations } from 'next-intl'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const SuccessStoriesSection1 = () => {
  const t = useTranslations('pages.aiForBusiness.successStories')
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
      <div className="flex flex-row gap-4 items-stretch h-[276px] md:h-[476px]">
        <div
          className="flex flex-col flex-1 gap-4 bg-slate-100 dark:bg-slate-900
      border border-slate-300 dark:border-slate-800 rounded-2xl h-full"
        >
          <div className=" flex-1 rounded-t-2xl overflow-hidden">
            <img
              src="/img/others/ai-for-business/success-stories-1.png"
              alt="ai-transformation-1"
              className="w-full h-full object-contain"
            />
          </div>
          <div className="flex flex-col gap-4 flex-1 p-4 md:p-8 ">
            <h3 className="text-base md:text-2xl font-bold">
              {t('story-1.title')}
            </h3>
            <p className="text-xs md:text-xl dark:text-slate-200 text-slate-800">{t('story-1.content')}</p>
          </div>
        </div>
        <div className="flex flex-col flex-1 md:flex-2 gap-4 md:gap-8 w-full h-[276px] md:h-[476px] relative p-0">
          <img
            src="/img/others/ai-agent/content-automation.png"
            alt="ContentAutomation"
            className="object-cover w-full h-full z-10 rounded-2xl bg-black/80 dark:bg-none"
          />
          <div className="flex p-4 md:p-6 w-fit md:w-full z-20 absolute bottom-1 md:bottom-4 text-xs md:text-xl">
            {t('story-1.description')}
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default SuccessStoriesSection1
