'use client'
import React, { useState, useEffect } from 'react'
import { useTranslations } from 'next-intl'
import { useLocale } from 'next-intl'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

interface CounterProps {
  end: number
  suffixStart?: string
  suffixEnd?: string
  duration?: number
  toFixed?: number
}

const Counter = ({
  end,
  suffixStart = '',
  suffixEnd = '',
  duration = 1.5,
  toFixed = 0,
}: CounterProps) => {
  const [count, setCount] = useState(0)
  const [isComplete, setIsComplete] = useState(false)
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
        const current = progress < 1 ? progress * end : end
        setCount(current)

        if (progress >= 1) {
          setIsComplete(true)
        }

        if (progress < 1) {
          requestAnimationFrame(animateCount)
        }
      }

      requestAnimationFrame(animateCount)
    }
  }, [inView, end, duration])

  return (
    <span ref={ref}>
      {suffixStart}
      {isComplete ? end.toFixed(toFixed) : count.toFixed(toFixed)}
      {suffixEnd}
    </span>
  )
}

const AiSolutionsStatistics = () => {
  const t = useTranslations('pages.aiSolutions.hero.statistics')
  const locale = useLocale()
  const isTurkish = locale === 'tr'

  // Suffix değerleri dile göre ayarla
  const suffixValues = {
    first: {
      start: isTurkish ? '%' : '',
      end: isTurkish ? '+' : '%+',
    },
    second: {
      start: isTurkish ? '%' : '',
      end: isTurkish ? '' : '%',
    },
  }

  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  })

  return (
    <motion.div
      className="flex flex-row gap-4  w-full justify-between items-start p-0 md:p-0"
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex flex-1 flex-col items-center gap-2">
        <h3 className="text-[36px] md:text-[112px] font-bold text-transparent bg-clip-text bg-gradient-to-l from-secondary via-tertiary to-primary">
          <Counter
            end={47}
            suffixStart={suffixValues.first.start}
            suffixEnd={suffixValues.first.end}
            duration={1.8}
            toFixed={0}
          />
        </h3>
        <p className="text-xs md:text-xl text-center font-medium dark:text-white text-gray-700">
          {t('statistic-1')}
        </p>
      </div>

      <div className="flex flex-1 flex-col gap-2 items-center">
        <h3 className="text-[36px] md:text-[112px] font-bold text-transparent bg-clip-text bg-gradient-to-r from-secondary via-tertiary to-primary">
          <Counter
            end={99.9}
            suffixStart={suffixValues.second.start}
            suffixEnd={suffixValues.second.end}
            duration={2.2}
            toFixed={1}
          />
        </h3>
        <p className="text-xs md:text-xl text-center font-medium dark:text-white text-gray-700">
          {t('statistic-2')}
        </p>
      </div>

      <div className="flex flex-1 items-center flex-col gap-2">
        <h3 className="text-[36px] md:text-[112px] font-bold text-transparent bg-clip-text bg-gradient-to-l from-secondary via-tertiary to-primary">
          {/* <SpecialCounter /> */}
          SOC 2
        </h3>
        <p className="text-xs md:text-xl text-center font-medium dark:text-white text-gray-700">
          {t('statistic-3')}
        </p>
      </div>
    </motion.div>
  )
}

export default AiSolutionsStatistics
