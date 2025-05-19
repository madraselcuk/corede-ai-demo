'use client'

import React from 'react'
import { useTranslations } from 'next-intl'

interface FeatureListProps {
  selectedFeature: number
  setSelectedFeature: (index: number) => void
}

const FeatureList: React.FC<FeatureListProps> = ({
  selectedFeature,
  setSelectedFeature,
}) => {
  const t = useTranslations('pages.aiSolutions.whyChoose')

  // Feature öğelerinin listesi için array oluşturma
  const features = [1, 2, 3].map(index => ({
    index,
    title: t(`feature-${index}`)
  }));

  return (
    <div className="w-full px-4 sm:px-6 md:px-0 md:w-auto lg:w-[275px] mx-auto md:ml-6 lg:ml-16 md:mr-auto">
      <div className="flex flex-col gap-4 sm:gap-6 md:gap-8">
        {features.map((feature, index) => (
          <div
            key={index}
            className={`text-[18px] md:text-[20px] leading-[120%] flex items-center cursor-pointer transition-all duration-500 ${
              selectedFeature === feature.index 
                ? 'bg-gradient-to-r from-primary via-secondary to-tertiary bg-clip-text text-transparent scale-105 translate-x-2' 
                : 'text-black dark:text-white hover:scale-[1.02] hover:translate-x-1'
            }`}
            onClick={() => setSelectedFeature(feature.index)}
          >
            <span className="break-words sm:whitespace-nowrap">{feature.title}</span>
            {selectedFeature === feature.index && (
              <span className="ml-2 text-[14px] sm:text-[16px] opacity-0 animate-fadeIn">➤</span>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}

export default FeatureList
