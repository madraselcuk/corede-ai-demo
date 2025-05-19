'use client'
import React, { useState, useEffect } from 'react'
import { useTranslations } from 'next-intl'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

interface CounterProps {
  end: number
  suffix?: string
  duration?: number
}

const Counter = ({ end, suffix = '', duration = 1.5 }: CounterProps) => {
  const [count, setCount] = useState(0)
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  useEffect(() => {
    if (inView) {
      let startTime: number | undefined
      const animateCount = (timestamp: number) => {
        if (!startTime) startTime = timestamp
        const progress = Math.min(
          (timestamp - startTime) / (duration * 1000),
          1,
        )
        setCount(Math.floor(progress * end))
        
        if (progress < 1) {
          requestAnimationFrame(animateCount)
        }
      }
      
      requestAnimationFrame(animateCount)
    }
  }, [inView, end, duration])

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  )
}

// 24/7 için özel sayaç bileşeni
const SpecialCounter = () => {
  const [hour, setHour] = useState(0)
  const [day, setDay] = useState(0)
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  useEffect(() => {
    if (inView) {
      // Saat sayacı
      let hourStartTime: number | undefined
      const animateHour = (timestamp: number) => {
        if (!hourStartTime) hourStartTime = timestamp
        const progress = Math.min(
          (timestamp - hourStartTime) / 1700, // 1.7 saniye
          1,
        )
        setHour(Math.floor(progress * 24))
        
        if (progress < 1) {
          requestAnimationFrame(animateHour)
        }
      }
      
      // Gün sayacı - daha yavaş
      let dayStartTime: number | undefined
      const animateDay = (timestamp: number) => {
        if (!dayStartTime) dayStartTime = timestamp
        const progress = Math.min(
          (timestamp - dayStartTime) / 2300, // 2.3 saniye
          1,
        )
        setDay(Math.floor(progress * 7))
        
        if (progress < 1) {
          requestAnimationFrame(animateDay)
        }
      }
      
      requestAnimationFrame(animateHour)
      requestAnimationFrame(animateDay)
    }
  }, [inView])

  return (
    <span ref={ref}>
      {hour}/{day}
    </span>
  )
}

const OverviewStatistics = () => {
  const t = useTranslations('pages.aiAgents.overview.statistics')
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  })
  
  return (
    <motion.div
      className="flex flex-row gap-4  w-full justify-between items-start p-4 md:p-0"
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex flex-1 flex-col items-center gap-2">
        <h3 className="text-[36px] md:text-[112px] font-bold text-transparent bg-clip-text bg-gradient-to-l from-secondary via-tertiary to-primary">
          <Counter end={48} suffix="%+" duration={1.8} />
        </h3>
        <p className="text-xs md:text-xl text-center font-medium dark:text-white text-gray-700">
          {t('processAcceleration.label')}
        </p>
      </div>

      <div className="flex flex-1 flex-col gap-2 items-center">
        <h3 className="text-[36px] md:text-[112px] font-bold text-transparent bg-clip-text bg-gradient-to-r from-secondary via-tertiary to-primary">
          <Counter end={35} suffix="%+" duration={2.2} />
        </h3>
        <p className="text-xs md:text-xl text-center font-medium dark:text-white text-gray-700">
          {t('costSaving.label')}
        </p>
      </div>

      <div className="flex flex-1 items-center flex-col gap-2">
        <h3 className="text-[36px] md:text-[112px] font-bold text-transparent bg-clip-text bg-gradient-to-l from-secondary via-tertiary to-primary">
          <SpecialCounter />
        </h3>
        <p className="text-xs md:text-xl text-center font-medium dark:text-white text-gray-700">
          {t('infrastructure.label')}
        </p>
      </div>
    </motion.div>
  )
}

export default OverviewStatistics
