'use client'
import React from 'react'
import { useTranslations } from 'next-intl'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const AiPoweredSolutionsRight = () => {
  const t = useTranslations('pages.aiSolutions.aiPoweredSolutions')
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
        className="flex flex-col gap-4 bg-gradient-to-t from-tertiary/50 to-transparent
      border border-slate-200 dark:border-slate-900 rounded-2xl p-4"
      >
        <div className="flex flex-col gap-4 flex-1 pb-4 ">
          <h3 className="text-xl md:text-4xl font-bold">
            {t('section-3-title')}
          </h3>
          <p className="text-xs md:text-xl text-slate-800 dark:text-slate-100">
            {t('section-3-description')}
          </p>
        </div>
        <div
          className="flex flex-col gap-4 flex-1 border border-slate-600 dark:border-gray-200/40 rounded-2xl
            dark:bg-[url('/img/others/ai-solutions/ai-powered-bg-pattern.png')] 
             bg-repeat bg-center bg-clip-content  h-[130px]  "
        >
          <div
            className=" w-full flex justify-evenly items-center
              bg-center bg-clip-content bg-no-repeat h-[130px]"
          >
            <img
              src="/img/others/ai-solutions/Icons.png"
              alt="ai-powered-bg-pattern"
            />
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default AiPoweredSolutionsRight
