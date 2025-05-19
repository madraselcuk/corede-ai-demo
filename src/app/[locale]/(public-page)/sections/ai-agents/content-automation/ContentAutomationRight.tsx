'use client'
import React from 'react'
import Image from 'next/image'
import { useTranslations } from 'next-intl'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const ContentAutomationRight = () => {
  const t = useTranslations('pages.aiAgents.contentAutomation')
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.2,
  })

  return (
    <motion.div 
      className="flex flex-col gap-4 md:gap-8 w-full h-full relative p-4 md:p-0"
      ref={ref}
      initial={{ opacity: 0, scale: 0.95 }}
      animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.5 }}
    >
      <Image
        src="/img/others/ai-agent/content-automation.png"
        alt="ContentAutomation"
        className="object-contain w-full h-full z-10 rounded-2xl bg-black/80 dark:bg-none"
        width={500}
        height={500}
      />
      <div className="flex p-4 md:p-6 w-fit md:w-full z-20 absolute bottom-4 text-xs md:text-base">
        {t('description')}
      </div>
    </motion.div>
  )
}

export default ContentAutomationRight
