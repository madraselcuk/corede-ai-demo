'use client'
import React from 'react'
import VoiceAutomationWrapper from './VoiceAutomationWrapper'
import VoiceAutomationLeft from './VoiceAutomationLeft'
import VoiceAutomationRight from './VoiceAutomationRight'

const VoiceAutomation = () => {
  return (
    <VoiceAutomationWrapper>
      <div className="flex flex-col gap-8">
        <div className="flex flex-col-reverse md:flex-row w-full gap-8 justify-between items-center">
          <VoiceAutomationLeft />
          <VoiceAutomationRight />
        </div>
      </div>
    </VoiceAutomationWrapper>
  )
}

export default VoiceAutomation
