'use client'
import React, { useEffect, useRef, useState } from 'react'
import { useTranslations } from 'next-intl'

const AboutUsContent = () => {
  const t = useTranslations('pages.home.aboutUs')
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLDivElement>(null)
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.2 }
    )
    
    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }
    
    return () => {
      observer.disconnect()
    }
  }, [])
  
  return (
    <div 
      ref={sectionRef}
      className="flex flex-col items-center justify-center py-8 md:py-12 lg:py-20 px-4 md:px-6 lg:px-8"
    >
      <div className="w-full mx-auto">
        <h1 
          className={`text-5xl lg:text-6xl font-bold text-center md:text-left mb-6 md:mb-8 lg:mb-12 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
          style={{ transitionDelay: '100ms' }}
        >
          {t('title')}
        </h1>
        <p 
          className={`text-lg md:text-xl text-center md:text-left dark:text-slate-200 text-slate-800 mb-6 md:mb-8 mx-auto transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
          style={{ transitionDelay: '300ms' }}
        >
          {t('description')}
        </p>
      </div>
    </div>
  )
}

export default AboutUsContent