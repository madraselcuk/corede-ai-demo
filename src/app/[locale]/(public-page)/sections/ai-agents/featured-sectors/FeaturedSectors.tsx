'use client'
import React from 'react'
import FeaturedSectorsWrapper from './FeaturedSectorsWrapper'
import FeaturedSectorsLeft from './FeaturedSectorsLeft'
import FeaturedSectorsRight from './FeaturedSectorsRight'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const FeaturedSectors = () => {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  })

  return (
    <FeaturedSectorsWrapper>
      <motion.div 
        className="dark:bg-gray-800/30 rounded-3xl shadow-2xl p-8 dark:border dark:border-gray-700/50 relative overflow-hidden"
        ref={ref}
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.5 }}
      >
        {/* Arka plan dekoratif elementler */}
        <div className="absolute top-40 left-60 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl"></div>
        <div className="absolute top-20 left-10 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl"></div>

        <div className="flex flex-col gap-8">
          <div className="flex flex-col md:flex-row w-full gap-8 justify-between items-center">
            <FeaturedSectorsLeft />
            <FeaturedSectorsRight />
          </div>
        </div>
      </motion.div>
    </FeaturedSectorsWrapper>
  )
}

export default FeaturedSectors
