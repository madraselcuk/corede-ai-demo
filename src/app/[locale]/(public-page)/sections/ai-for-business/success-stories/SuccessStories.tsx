'use client'
import React from 'react'
import SuccessStoriesWrapper from './SuccessStoriesWrapper'
import SuccessStoriesSection1 from './SuccessStoriesSection1'
import SuccessStoriesTop from './SuccessStoriesTop'
import SuccessStoriesSection2 from './SuccessStoriesSection2'
import SuccessStoriesSection3 from './SuccessStoriesSection3'

const SuccessStories = () => {
  return (
    <SuccessStoriesWrapper>
      <div className="flex flex-col md:gap-8 w-full mt-36">
        <SuccessStoriesTop />
        <SuccessStoriesSection1 />
        <SuccessStoriesSection2 />
        <SuccessStoriesSection3 />
      </div>
    </SuccessStoriesWrapper>
  )
}

export default SuccessStories
