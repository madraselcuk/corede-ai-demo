'use client'
import * as React from 'react'
import { useState, useRef, useEffect } from 'react'
import Background from './Background'
import SliderTitle from './SliderTitle'
import SliderContent from './SliderContent'
import SliderImages from './SliderImages'
import { slides } from './data'
import { useTranslations } from 'next-intl'

function OurSolutions() {
  const [activeSlide, setActiveSlide] = useState(1)
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLDivElement>(null)
  const t = useTranslations('pages.aiForBusiness')

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

  const prevSlide = () => {
    setActiveSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1))
  }

  const nextSlide = () => {
    setActiveSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1))
  }

  // Çeviri verilerini hazırlama
  const currentSlideKey = slides[activeSlide].key
  const currentDescription = t(`ourSolutions.${currentSlideKey}.description`)

  // Tüm slaytlar için başlıkları hazırlama
  const localizedSlides = slides.map((slide) => ({
    ...slide,
    title: t(`ourSolutions.${slide.key}.title`),
    titleParts: [
      t(`ourSolutions.${slide.key}.titlePart1`),
      t(`ourSolutions.${slide.key}.titlePart2`)
    ],
    description: t(`ourSolutions.${slide.key}.description`),
  }))

  return (
    <section ref={sectionRef} className="relative w-full min-h-screen overflow-x-clip pt-12 pb-24">
      <Background />

      <div className="container mx-auto px-4 lg:px-6 relative z-[2]">
        <div className={`flex flex-col items-center transition-all duration-700 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`} style={{ transitionDelay: '100ms' }}>
          <SliderTitle
            slides={localizedSlides}
            activeSlide={activeSlide}
            setActiveSlide={setActiveSlide}
          />
        </div>

        <div className={`transition-all duration-700 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`} style={{ transitionDelay: '300ms' }}>
          <SliderContent
            description={currentDescription}
            prevSlide={prevSlide}
            nextSlide={nextSlide}
          />
        </div>

        <div className={`transition-all duration-700 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`} style={{ transitionDelay: '500ms' }}>
          <SliderImages cards={slides[activeSlide].cards} />
        </div>
      </div>
    </section>
  )
}

export default OurSolutions
