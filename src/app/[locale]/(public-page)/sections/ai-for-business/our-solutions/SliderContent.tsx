'use client'

import * as React from 'react'
import RightArrowButton from '../../../components/button/RightArrowButton'
import LeftArrowButton from '../../../components/button/LeftArrowButton'

interface SliderContentProps {
  description: string
  prevSlide: () => void
  nextSlide: () => void
}

function SliderContent({
  description,
  prevSlide,
  nextSlide,
}: SliderContentProps) {
  return (
    <div className="flex items-start justify-center max-w-4xl mx-auto mt-10">
      {/* Sol Ok */}
      <div className="transition-transform duration-300 hover:scale-110">
        <LeftArrowButton prevSlide={prevSlide} />
      </div>

      {/* Açıklama Metni */}
      <div className="flex-1">
        <p className="text-xl text-black dark:text-white text-center leading-relaxed transition-all duration-500">
          {description}
        </p>
      </div>

      {/* Sağ Ok */}
      <div className="transition-transform duration-300 hover:scale-110">
        <RightArrowButton nextSlide={nextSlide} />
      </div>
    </div>
  )
}

export default SliderContent
