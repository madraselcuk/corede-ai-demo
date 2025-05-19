'use client'
import React from 'react'
import { useTranslations } from 'next-intl'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const MessagingAutomationRight = () => {
  const t = useTranslations('pages.aiAgents.messagingAutomation')
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.2,
  })
  
  return (
    <motion.div 
      className="flex flex-col gap-8 w-full p-4 md:p-0"
      ref={ref}
      initial={{ opacity: 0, x: 20 }}
      animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="text-5xl font-bold max-w-xl">{t('title')}</h2>
      <div className="flex flex-col gap-2">
        <div className="flex flex-row gap-2 md:gap-4 items-center">
          <img
            src="/img/others/ai-agent/icons/messaging-automation-icon-1.svg"
            alt="Messaging Automation Icon 1"
            className="w-[18px] md:w-[24px] h-[18px] md:h-[24px] dark:invert invert-0"
          />
          <p className="text-xs md:text-lg font-medium dark:text-white text-gray-700">
            <b>{t('feature1Title')}</b> {t('feature1Description')}
          </p>
        </div>
        <div className="flex flex-row gap-2 md:gap-4 items-center">
          <img
            src="/img/others/ai-agent/icons/messaging-automation-icon-2.svg"
            alt="Messaging Automation Icon 2"
            className="w-[18px] md:w-[24px] h-[18px] md:h-[24px] dark:invert invert-0"
          />
          <p className="text-xs md:text-lg font-medium dark:text-white text-gray-700">
            <b>{t('feature2Title')}</b> {t('feature2Description')}
          </p>
        </div>
        <div className="flex flex-row gap-2 md:gap-4 items-center">
          <img
            src="/img/others/ai-agent/icons/messaging-automation-icon-3.svg"
            alt="Messaging Automation Icon 3"
            className="w-[18px] md:w-[24px] h-[18px] md:h-[24px] dark:invert invert-0"
          />
          <p className="text-xs md:text-lg font-medium dark:text-white text-gray-700">
            <b>{t('feature3Title')}</b> {t('feature3Description')}
          </p>
        </div>
        <div className="flex flex-row gap-2 md:gap-4 items-center ">
          <img
            src="/img/others/ai-agent/icons/messaging-automation-icon-4.svg"
            alt="Messaging Automation Icon 4"
            className="w-[18px] md:w-[24px] h-[18px] md:h-[24px] dark:invert invert-0 "
          />
          <p className="text-xs md:text-lg font-medium dark:text-white text-gray-700">
            <b>{t('feature4Title')}</b> {t('feature4Description')}
          </p>
        </div>
      </div>
    </motion.div>
  )
}

export default MessagingAutomationRight
