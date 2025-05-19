'use client'
import React from 'react'
import WhyAiAgentsWrapper from './WhyAiAgentsWrapper'
import WhyAiAgentsLeft from './WhyAiAgentsLeft'
import WhyAiAgentsRight from './WhyAiAgentsRight'

const WhyAiAgents = () => {
  return (
    <WhyAiAgentsWrapper>
      <div className="flex flex-col gap-8">
        <div className="flex flex-col md:flex-row w-full gap-8 justify-between items-start">
          <WhyAiAgentsLeft />
          <WhyAiAgentsRight />
        </div>
      </div>
    </WhyAiAgentsWrapper>
  )
}

export default WhyAiAgents
