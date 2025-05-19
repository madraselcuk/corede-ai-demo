'use client'

import * as React from 'react'
import { useI18n } from '@/localization/hooks/useI18n'

interface SliderTitleProps {
  slides: {
    title: string
    titleParts: string[]
  }[]
  activeSlide: number
  setActiveSlide: (index: number) => void
}

function SliderTitle({ slides, activeSlide, setActiveSlide }: SliderTitleProps) {
  const { t: tAny } = useI18n()
  // Type cast for temporary fix
  const t = tAny as (key: string, options?: any) => string
  
  return (
    <div className="w-full relative h-48 mb-10">
      <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
        <div className="relative w-full max-w-7xl overflow-visible flex items-center justify-center">
          {slides.map((slide, index) => {
            // Calculate position for visible slide
            let position = index - activeSlide
            if (position < -2) position += slides.length
            if (position > 2) position -= slides.length

            // Set distances and properties for title positions
            const spacing: Record<
              string,
              {
                x: number
                opacity: number
                scale: number
                zIndex: number
              }
            > = {
              // Center
              '0': {
                x: 0,
                opacity: 1,
                scale: 1.2,
                zIndex: 50,
              },
              // First left/right
              '-1': {
                x: -380,
                opacity: 0.6,
                scale: 0.8,
                zIndex: 40,
              },
              '1': {
                x: 380,
                opacity: 0.6,
                scale: 0.8,
                zIndex: 40,
              },
              // Second left/right
              '-2': {
                x: -700,
                opacity: 0.3,
                scale: 0.7,
                zIndex: 30,
              },
              '2': {
                x: 700,
                opacity: 0.3,
                scale: 0.7,
                zIndex: 30,
              },
              // Others (hidden)
              other: {
                x: position < 0 ? -1000 : 1000,
                opacity: 0,
                scale: 0.5,
                zIndex: 10,
              },
            }

            // Select style properties based on position
            const style = spacing[position.toString()] || spacing.other

            // Double line for active slide, single line for others
            return (
              <div
                key={index}
                className="absolute transition-all duration-500 ease-in-out cursor-pointer"
                style={{
                  transform: `translateX(${style.x}px) scale(${style.scale})`,
                  opacity: style.opacity,
                  zIndex: style.zIndex,
                }}
                onClick={() => setActiveSlide(index)}
                role="button"
                tabIndex={position === 0 ? -1 : 0}
                aria-label={t('solutions.switchTo', { title: slide.title })}
              >
                {position === 0 ? (
                  // Active slide - double line
                  <div className="flex flex-col items-center text-center gap-1">
                    <h2 className="px-4 text-5xl font-bold text-black dark:text-white leading-tight">
                      {slide.titleParts[0]}
                    </h2>
                    <h2 className="px-4 text-5xl font-bold text-black dark:text-white leading-tight">
                      {slide.titleParts[1]}
                    </h2>
                  </div>
                ) : (
                  // Other slides - single line
                  <h2 className="px-4 text-2xl font-medium text-black dark:text-white/70 leading-tight whitespace-nowrap hover:text-black dark:hover:text-white hover:opacity-80 transition-colors">
                    {slide.title}
                  </h2>
                )}
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default SliderTitle 