'use client'

import React from 'react'
import MilestoneListContainer from '../milestone-list.container'
import MilestoneListTableUI from './milestone-list-container.ui'
import { IMilestone } from '@/@package/corede'

const MilestoneListUI = (params: {
  projectId?: string,
  milestones: IMilestone[]
}) => {
  return (
    <div className="container mx-auto py-10">
      <MilestoneListContainer projectId={params.projectId} milestones={params.milestones}>
        {(props) => <MilestoneListTableUI {...props} />}
      </MilestoneListContainer>
    </div>
  )
}

export default MilestoneListUI
