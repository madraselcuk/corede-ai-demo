'use client'
import React from 'react'
import AiPoweredSolutionsWrapper from './AiPoweredSolutionsWrapper'
import AiPoweredSolutionsLeft from './AiPoweredSolutionsLeft'
import AiPoweredSolutionsRight from './AiPoweredSolutionsRight'
import AiPoweredSolutionsTop from './AiPoweredSolutionsTop'

const AiPoweredSolutions = () => {
  return (
    <AiPoweredSolutionsWrapper>
      <div className="flex flex-col gap-8 w-full mt-36">
        <AiPoweredSolutionsTop />
        <div className="flex flex-col md:flex-row w-full gap-4 justify-between items-center">
          <AiPoweredSolutionsLeft />
          <AiPoweredSolutionsRight />
        </div>
      </div>
    </AiPoweredSolutionsWrapper>
  )
}

export default AiPoweredSolutions
