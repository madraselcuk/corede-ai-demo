'use client'
import React from 'react'
import TechnologiesUsedWrapper from './TechnologiesUsedWrapper'
import TechnologiesUsedTop from './TechnologiesUsedTop'
import TechnologiesUsedBottom from './TechnologiesUsedBottom'

const TechnologiesUsed = () => {
  return (
    <TechnologiesUsedWrapper>
      <div className="flex flex-col gap-8 w-full mt-36 px-4 md:px-0">
        <TechnologiesUsedTop />
        <TechnologiesUsedBottom />
      </div>
    </TechnologiesUsedWrapper>
  )
}

export default TechnologiesUsed
