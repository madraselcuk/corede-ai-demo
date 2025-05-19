'use client'
import React, { ReactNode } from 'react'
import classNames from 'classnames'
import GetOfferBackground from './GetOfferBackground'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

export interface GetOfferProps {
  children: ReactNode
  fullHeight?: boolean
}

const GetOfferWrapper = ({
  children,
  fullHeight = false,
}: GetOfferProps) => {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  })

  return (
    <div
      className={classNames('relative w-full overflow-hidden', {
        'min-h-screen': fullHeight,
        'py-16 md:py-24': !fullHeight,
      })}
    >
      <GetOfferBackground />
      <motion.div 
        className="relative z-10 container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        ref={ref}
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
        {children}
      </motion.div>
    </div>
  )
}

export default GetOfferWrapper 