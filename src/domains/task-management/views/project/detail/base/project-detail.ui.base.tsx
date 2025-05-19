'use client'

import ProjectDetailContainer from "../project-detail.container"
import ProjectDetailContent from "./project-detail-container.ui.base"

const ProjectDetailUIBase = () => {
  return (
    <div>
      <div className="space-y-4">
        <h2 className="mb-4 text-2xl font-bold">FAQ Details</h2>
        <ProjectDetailContainer>
          {(props) => <ProjectDetailContent {...props} />}
        </ProjectDetailContainer>
      </div>
    </div>
  )
}

export default ProjectDetailUIBase
