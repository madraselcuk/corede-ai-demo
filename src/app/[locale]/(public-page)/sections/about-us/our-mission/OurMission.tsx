'use client'
import React from 'react'
import OurMissionWrapper from './OurMissionWrapper'
import OurMissionLeft from './OurMissionLeft'
import OurMissionRight from './OurMissionRight'

const OurMission = () => {
  return (
    <OurMissionWrapper>
      <div className="flex flex-col gap-8" id="our-mission">
        <div className="flex flex-col-reverse md:flex-row w-full gap-8 justify-between items-center">
          <OurMissionLeft />
          <OurMissionRight />
        </div>
      </div>
    </OurMissionWrapper>
  )
}

export default OurMission
