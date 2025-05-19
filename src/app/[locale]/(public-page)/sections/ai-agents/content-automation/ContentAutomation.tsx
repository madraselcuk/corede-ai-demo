'use client'
import React from 'react'
import ContentAutomationWrapper from './ContentAutomationWrapper'
import ContentAutomationLeft from './ContentAutomationLeft'
import ContentAutomationRight from './ContentAutomationRight'

const ContentAutomation = () => {
  return (
    <ContentAutomationWrapper>
      <div className="flex flex-col gap-8">
        <div className="flex flex-col-reverse md:flex-row w-full gap-8 justify-between items-center">
          <ContentAutomationLeft />
          <ContentAutomationRight />
        </div>
      </div>
    </ContentAutomationWrapper>
  )
}

export default ContentAutomation
