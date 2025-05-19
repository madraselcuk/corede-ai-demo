'use client'

import React, { useState } from 'react'
import FeatureList from './FeatureList'
import Ruler from './Ruler'
import FeatureDisplay from './FeatureDisplay'

type ContentWrapperProps = {
    rulerPositions: any[]
    featureData: any[]
    isVisible?: boolean
}

const ContentWrapper = ({ 
    rulerPositions, 
    featureData,
    isVisible = false
}: ContentWrapperProps) => {
    const [selectedFeature, setSelectedFeature] = useState(0)

    return (
        <div className="flex flex-col lg:flex-row items-center justify-center mx-auto max-w-7xl h-full">
            <div className={`transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`} style={{ transitionDelay: '400ms' }}>
                <FeatureList 
                    selectedFeature={selectedFeature} 
                    setSelectedFeature={setSelectedFeature} 
                />
            </div>

            <div className={`transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`} style={{ transitionDelay: '500ms' }}>
                <Ruler 
                    selectedFeature={selectedFeature} 
                    rulerPositions={rulerPositions} 
                />
            </div>

            <div className={`transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`} style={{ transitionDelay: '600ms' }}>
                <FeatureDisplay 
                    selectedFeature={selectedFeature} 
                    featureData={featureData} 
                />
            </div>
        </div>
    )
}

export default ContentWrapper 