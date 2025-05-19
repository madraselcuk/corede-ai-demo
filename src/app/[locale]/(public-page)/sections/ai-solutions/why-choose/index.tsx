'use client'

import React, { useRef, useState, useEffect } from 'react'
import { useTranslations } from 'next-intl'
import Title from './Title'
import Background from './Background'
import { rulerPositions, getFeatureData } from './data'
import ContentWrapper from './ContentWrapper'

const WhyChoose = () => {
    const t = useTranslations('pages.aiSolutions.whyChoose')
    const featureData = getFeatureData(t)
    const [isVisible, setIsVisible] = useState(false)
    const sectionRef = useRef<HTMLElement>(null)
    
    
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
        <section ref={sectionRef} className="relative w-full min-h-screen overflow-x-clip">
            <Background />

            <div className="container mx-auto px-2 lg:px-6 relative z-[2] h-screen flex flex-col">
                <div className={`transition-all duration-700 ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`} style={{ transitionDelay: '100ms' }}>
                    <Title />
                </div>

                <div className={`transition-all duration-700 ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`} style={{ transitionDelay: '300ms' }}>
                    <ContentWrapper 
                        rulerPositions={rulerPositions} 
                        featureData={featureData}
                        isVisible={isVisible}
                    />
                </div>
            </div>
        </section>
    )
}

export default WhyChoose
