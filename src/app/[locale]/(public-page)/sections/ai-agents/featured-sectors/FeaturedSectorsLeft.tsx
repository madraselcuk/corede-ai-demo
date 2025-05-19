'use client'
import React from 'react'
import Image from 'next/image'
import useTheme from '@/utils/hooks/useTheme'
import { MODE_DARK } from '@/constants/theme.constant'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const FeaturedSectorsLeft = () => {
  const mode = useTheme((state) => state.mode)
  const isDarkMode = mode === MODE_DARK
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
      {isDarkMode ? (
        <Image
          src="/img/others/ai-agent/related-sectors.png"
          alt="FeaturedSectors"
          className="object-contain w-full h-full z-10"
          width={500}
          height={500}
        />
      ) : (
        <Image
          src="/img/others/ai-agent/related-sectors-light.png"
          alt="FeaturedSectors"
          className="object-contain w-full h-full z-10"
          width={500}
          height={500}
        />
      )}
    </motion.div>
  )
}

export default FeaturedSectorsLeft
