'use client'

import React, { useState, useEffect } from 'react'

interface Feature {
    image: string
    description: string
}

interface FeatureDisplayProps {
    selectedFeature: number
    featureData: Feature[]
}

const FeatureDisplay: React.FC<FeatureDisplayProps> = ({ 
    selectedFeature, 
    featureData 
}) => {
    const [displayedText, setDisplayedText] = useState('');
    const [showText, setShowText] = useState(true);
    
    // Bileşen yüklendiğinde başlangıç metnini ayarla
    useEffect(() => {
        if (featureData && featureData.length > 0 && selectedFeature >= 0) {
            setDisplayedText(featureData[selectedFeature].description);
        }
    }, [featureData, selectedFeature]);
    
    useEffect(() => {
        // Metni değiştirirken fade out efekti
        setShowText(false);
        
        // Kısa bir gecikme ile yeni metni ayarla
        const textTimer = setTimeout(() => {
            setDisplayedText(featureData[selectedFeature].description);
            setShowText(true);
        }, 300);
        
        return () => clearTimeout(textTimer);
    }, [selectedFeature, featureData]);
    
    return (
        <div className="w-[300px] lg:w-[627px] mt-8 md:mt-0 relative flex flex-col lg:mr-16 lg:ml-auto">
            {/* Görsel */}
            <div className="w-full h-[250px] sm:h-[320px] md:h-[360px] lg:h-[392px] rounded-xl overflow-hidden relative">
                {featureData.map((feature, index) => (
                    <div 
                        key={index}
                        className={`w-full h-full absolute inset-0 transition-all duration-700 ease-in-out ${
                            selectedFeature === index 
                                ? 'opacity-100 z-10' 
                                : 'opacity-0 z-0'
                        }`}
                    >
                        <img
                            src={feature.image}
                            alt={`Why Choose Us - ${index}`}
                            className="w-full h-full object-cover"
                        />
                    </div>
                ))}
            </div>

            {/* Açıklama Metni */}
            <div className="bg-[rgba(17,17,34,0.4)] backdrop-blur-md border border-white/25 rounded-xl p-4 sm:p-6 w-[90%] sm:w-[80%] md:w-[70%] lg:w-[385px] absolute bottom-[-40px] left-1/2 lg:left-[25%] transform -translate-x-1/2 lg:-translate-x-1/2 transition-all duration-500 z-20">
                <p className={`text-white text-sm sm:text-base md:text-lg transition-opacity duration-300 ${showText ? 'opacity-100' : 'opacity-0'}`}>
                    {displayedText}
                </p>
            </div>
        </div>
    )
}

export default FeatureDisplay 