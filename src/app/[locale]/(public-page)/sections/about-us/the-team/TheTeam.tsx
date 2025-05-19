'use client'
import React from 'react'
import TheTeamWrapper from './TheTeamWrapper'
import TheTeamTop from './TheTeamTop'
import TheTeamBottom from './TheTeamBottom'

const TheTeam = () => {
  return (
    <TheTeamWrapper>
      <div className="w-full flex flex-col items-between p-4 md:p-0 gap-8">
        <TheTeamTop />
        <TheTeamBottom />
      </div>
    </TheTeamWrapper>
  )
}

export default TheTeam
