'use client'
import React from 'react'
import SuccessStoriesWrapper from './SuccessStoriesWrapper'
import SuccessStoriesRight from './SuccessStoriesRight'
import { SuccessStoriesLeft} from './SuccessStoriesLeft'

const SuccessStories = () => {
  return (
    <SuccessStoriesWrapper>
      <div className="flex flex-col gap-8 w-full">
        <div className="flex flex-col md:flex-row w-full gap-4 md:gap-8 justify-between items-center">
          <SuccessStoriesLeft />
          <SuccessStoriesRight />
        </div>
      </div>
    </SuccessStoriesWrapper>
  )
}

export default SuccessStories
