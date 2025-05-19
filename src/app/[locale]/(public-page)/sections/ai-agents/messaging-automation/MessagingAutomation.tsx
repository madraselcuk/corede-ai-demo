'use client'
import React from 'react'
import MessagingAutomationWrapper from './MessagingAutomationWrapper'
import MessagingAutomationLeft from './MessagingAutomationLeft'
import MessagingAutomationRight from './MessagingAutomationRight'

const MessagingAutomation = () => {
  return (
    <MessagingAutomationWrapper>
      <div className="flex flex-col gap-8">
        <div className="flex flex-col md:flex-row w-full gap-8 justify-between items-center">
          <MessagingAutomationLeft />
          <MessagingAutomationRight />
        </div>
      </div>
    </MessagingAutomationWrapper>
  )
}

export default MessagingAutomation
