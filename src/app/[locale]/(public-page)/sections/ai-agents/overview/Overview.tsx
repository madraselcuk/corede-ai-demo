'use client'
import React from 'react'
import OverviewWrapper from './OverviewWrapper'
import OverviewLeft from './OverviewLeft'
import { OverviewRight } from './OverviewRight'
import OverviewStatistics from './OverviewStatistics'

const Overview = () => {
  return (
    <OverviewWrapper>
      <div className="flex flex-col gap-8 w-full">
        <div className='flex flex-col-reverse md:flex-row w-full gap-8 justify-between items-center'>
          <OverviewLeft />
          <OverviewRight />
        </div>
        <OverviewStatistics />
      </div>
    </OverviewWrapper>
  )
}

export default Overview
