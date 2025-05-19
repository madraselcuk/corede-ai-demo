'use client'
import React from 'react'
import AiTransformationWrapper from './AiTransformationWrapper'
import AiTransformationLeft from './AiTransformationLeft'
import AiTransformationRight from './AiTransformationRight'
import AiTransformationBottom from './AiTransformationBottom'
import AiTransformationTop from './AiTransformationTop'


const AiTransformation = () => {
  return (
    <AiTransformationWrapper>
      <div className="flex flex-col gap-4 md:gap-8 w-full mt-36">
        <AiTransformationTop />
        <div className="flex flex-col md:flex-row w-full gap-4 md:gap-8 justify-between items-center">
          <AiTransformationLeft />
          <AiTransformationRight />
        </div>
        <AiTransformationBottom />
      </div>
    </AiTransformationWrapper>
  )
}

export default AiTransformation
