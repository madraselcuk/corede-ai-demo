'use client'

import * as React from 'react'
import { CourseCardData } from './data'

interface SliderImagesProps {
  cards: CourseCardData[]
}

function SliderImages({ cards }: SliderImagesProps) {
  return (
    <div className="relative w-full max-w-[1200px] h-auto mx-auto max-md:w-full max-md:h-auto flex justify-center mt-16">
      <div className="w-full flex flex-wrap gap-6 justify-center">
        {cards.map((card, index) => (
          <div
            key={index}
            className={`w-[340px] h-fit md:h-full flex-shrink-0 rounded-[12px] border-[0.987px] border-slate-700 dark:border-slate-400 bg-slate-100 dark:bg-slate-900 overflow-hidden transition-all duration-500 hover:scale-105`}
            style={{
              transitionDelay: `${index * 50}ms`,
            }}
          >
            {/* Kart Üst Kısmı - Arka Plan Görseli */}
            <div
              className="w-full h-[180px] bg-center bg-cover relative"
              style={{ backgroundImage: `url(${card.backgroundImage})` }}
            >
              {/* Süre Etiketi */}
              <div className="absolute top-4 right-4 bg-purple-500 text-white px-3 py-1 rounded-full text-sm">
                {card.duration}
              </div>
            </div>

            {/* Kart İçeriği */}
            <div className="p-6 text-white">
              <h3 className="text-xl md:text-2xl font-bold mb-2 h-16">
                {card.title}
              </h3>

              <div className="mb-2">
                <p className="text-xs md:text-base text-slate-400 mb-1">
                  <span>İçerik Başlıkları: </span>
                  {card.contentHeaders}
                </p>
              </div>

              <div className="mb-2 h-12">
                <p className="text-xs md:text-base text-slate-400 mb-1">
                  <span>Hedef Kitle: </span>
                  {card.targetAudience}
                </p>
              </div>
              <div className="mt-6 border-t border-gray-700 pt-4">
                <p className="text-xs md:text-base text-white mb-1">
                  {' '}
                  <span>Memnuniyet ortalaması: </span>
                  {card.satisfactionRate}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default SliderImages
