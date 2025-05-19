'use client'
import React from 'react'
import LeftArrowButton from '@/app/[locale]/(public-page)/components/button/LeftArrowButton'
import RightArrowButton from '@/app/[locale]/(public-page)/components/button/RightArrowButton'

interface TestimonialNavigationProps {
    onPrev: () => void;
    onNext: () => void;
}

const TestimonialNavigation: React.FC<TestimonialNavigationProps> = ({ onPrev, onNext }) => {
    return (
        <div className="flex justify-center lg:justify-end relative ">
            <LeftArrowButton prevSlide={onPrev} />
            <RightArrowButton nextSlide={onNext} />
        </div>
    )
}

export default TestimonialNavigation 