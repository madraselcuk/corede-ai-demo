'use client'
import React from 'react'
import CompanyHistoryWrapper from './CompanyHistoryWrapper'
import CompanyHistoryLeft from './CompanyHistoryLeft'
import CompanyHistoryRight from './CompanyHistoryRight'

const CompanyHistory = () => {
  return (
    <CompanyHistoryWrapper>
      <div className="w-full flex flex-col md:flex-row items-between p-4 md:p-0">
        <CompanyHistoryLeft />
        <CompanyHistoryRight />
      </div>
    </CompanyHistoryWrapper>
  )
}

export default CompanyHistory
