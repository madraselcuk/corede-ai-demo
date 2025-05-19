'use client'
import React from 'react'
import WhyAiPoweredWrapper from './WhyAiPoweredWrapper'
import WhyAiPoweredLeft from './WhyAiPoweredLeft'
import { WhyAiPoweredRight } from './WhyAiPoweredRight'
import WhyAiPoweredFeatures from './WhyAiPoweredFeatures'

const WhyAiPowered = () => {
  return (
    <WhyAiPoweredWrapper>
      <div className="flex flex-col gap-8 w-full">
        <div className='flex flex-col-reverse md:flex-row w-full gap-4 justify-between items-center'>
          <WhyAiPoweredLeft />
          <WhyAiPoweredRight />
        </div>
      </div>
      <WhyAiPoweredFeatures />
    </WhyAiPoweredWrapper>
  )
}

export default WhyAiPowered
