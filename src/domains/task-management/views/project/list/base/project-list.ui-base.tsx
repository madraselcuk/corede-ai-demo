'use client'

import React from 'react'
import ProjectListContainer from '../project-list.container'
import ProjectListTableUIBase from './project-list-container.ui-base'

const ProjectListUIBase = () => {
  return (
    <div className="container mx-auto py-10">
      <ProjectListContainer>
        {(props) => <ProjectListTableUIBase {...props} />}
      </ProjectListContainer>
    </div>
  )
}

export default ProjectListUIBase
