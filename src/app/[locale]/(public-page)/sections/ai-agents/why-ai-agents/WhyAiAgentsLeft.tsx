'use client'
import React from 'react'
import Image from 'next/image'
import { Circle } from 'lucide-react'
import { useTranslations } from 'next-intl'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const WhyAiAgentsLeft = () => {
  const t = useTranslations('pages.aiAgents.whyAiAgents')
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.2,
  })
  
  return (
    <div className="flex flex-col gap-4 md:gap-8 w-full relative h-full" ref={ref}>
      <Image
        src="/img/others/ai-agent/why-ai-agents.png"
        alt="WhyAiAgents"
        className="object-contain w-[full] md:w-[600px] h-[350px] absolute left-0 md:left-5 top-0 z-10 p-4 md:p-0"
        width={500}
        height={500}
      />

      <motion.div 
        className="flex flex-row gap-4 md:gap-8 h-full z-20 mt-[220px] mr-0 md:mr-[20px] p-5 md:p-0"
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex flex-col gap-2 p-4 w-full h-full bg-violet-100 rounded-2xl">
          <div className="flex flex-row gap-2 items-center bg-violet-800 rounded-lg p-2 w-fit">
            <Circle className="w-4 h-4 text-white" />
            <p className="text-xs text-white font-bold">AI Agents</p>
          </div>
          <p className="text-sm md:text-xl font-bold text-gray-700 mb-0 md:mb-2">
            {t('aiDecisionAgents.title')}
          </p>
          <p className="text-xs md:text-sm font-medium text-gray-700">
            {t('aiDecisionAgents.description')} <br />
            · {t('aiDecisionAgents.bullet1')}
            <br />
            · {t('aiDecisionAgents.bullet2')}
            <br />
            · {t('aiDecisionAgents.bullet3')} <br />
          </p>
        </div>
        <div className="flex flex-col gap-2 p-4 w-full h-full bg-violet-100 rounded-2xl">
          <div className="flex flex-row gap-2 items-center bg-fuchsia-700 rounded-lg p-2 w-fit">
            <Circle className="w-4 h-4 text-white" />
            <p className="text-xs text-white font-bold">Data Visualization</p>
          </div>
          <p className="text-sm md:text-xl font-bold text-gray-700 mb-0 md:mb-2">
            {t('dataVisualization.title')}
          </p>
          <p className="text-xs md:text-sm font-medium text-gray-700">
            {t('dataVisualization.description')} <br />
            · {t('dataVisualization.bullet1')}
            <br />
            · {t('dataVisualization.bullet2')}
            <br />
          </p>
        </div>
      </motion.div>
    </div>
  )
}

export default WhyAiAgentsLeft
