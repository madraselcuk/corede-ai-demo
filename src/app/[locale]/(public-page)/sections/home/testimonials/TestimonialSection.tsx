'use client'
import React, { useState, useRef, useEffect } from 'react'
import GridBackground from './GridBackground'
import TestimonialCard from './TestimonialCard'
import TestimonialHeader from './TestimonialHeader'
import TestimonialNavigation from './TestimonialNavigation'
import HexagonGrid from './HexagonGrid'
import { testimonials } from './data'

const TestimonialSection: React.FC = () => {
  // Aktif testimonial için state
  const [activeIndex, setActiveIndex] = useState(0)

  // Logo active durumu için state
  const [activeLogo, setActiveLogo] = useState<string>('square') // Square logosu başlangıçta aktif

  // Animasyon için görünürlük state'i
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  // IntersectionObserver ile görünürlüğü takip et
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.2 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => {
      observer.disconnect()
    }
  }, [])

  // Önceki ve sonraki testimonial için fonksiyonlar
  const handlePrev = () => {
    setActiveIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1))
  }

  const handleNext = () => {
    setActiveIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1))
  }

  // Logo'ya tıklandığında
  const handleLogoClick = (id: string) => {
    setActiveLogo(id)
  }

  // Aktif testimonial
  const activeTestimonial = testimonials[activeIndex]

  return (
    <section
      ref={sectionRef}
      className="overflow-hidden relative mx-auto w-full max-w-none min-h-screen max-md:max-w-[991px] max-sm:max-w-screen-sm"
    >
      {/* Background Grid */}
      <GridBackground isVisible={isVisible} />

      <div className="relative px-5 mx-auto my-0 max-w-[1200px] max-sm:flex max-sm:flex-col">
        {/* Header Section */}
        <div
          className={`transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
          style={{ transitionDelay: '100ms' }}
        >
          <TestimonialHeader />
        </div>

        <div className="flex flex-col lg:flex-row items-center justify-center gap-10">
          <div
            className={`transition-all duration-700 ${
              isVisible
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-8'
            }`}
            style={{ transitionDelay: '300ms' }}
          >
            <HexagonGrid
              activeLogo={activeLogo}
              onLogoClick={handleLogoClick}
              isVisible={isVisible}
            />
          </div>

          <div>
            <div
              className={`transition-all duration-700 ${
                isVisible ? 'opacity-100 ' : 'opacity-0 translate-y-8'
              }`}
            >
              <TestimonialCard
                quote={activeTestimonial.quote}
                name={activeTestimonial.author}
                role={activeTestimonial.position}
                company={activeTestimonial.company}
                avatarSrc={activeTestimonial.image}
              />
            </div>

            <div
              className={`transition-all duration-700 ${
                isVisible
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: '700ms' }}
            >
              <TestimonialNavigation onPrev={handlePrev} onNext={handleNext} />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default TestimonialSection
