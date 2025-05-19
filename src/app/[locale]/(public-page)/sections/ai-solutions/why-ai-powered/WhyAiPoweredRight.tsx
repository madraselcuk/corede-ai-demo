'use client'
import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

export const WhyAiPoweredRight = () => {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.2,
  })

  return (
    <motion.div 
      className="relative w-full h-full p-4 lg:p-0"
      ref={ref}
      initial={{ opacity: 0, scale: 0.95 }}
      animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.5 }}
    >
      <Image
        src="/img/others/ai-agent/why-ai-agents.png"
        alt="WhyAiPowered Right"
        className="object-cover w-full h-full"
        width={500}
        height={500}
      />
    </motion.div>
  )
}
