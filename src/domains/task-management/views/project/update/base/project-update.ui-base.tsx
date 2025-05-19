'use client'

import ProjectUpdateFormContainer from "../project-update-form.container"
import ProjectUpdateFormUIBase from "./project-update-form.ui-base"

const ProjectUpdateUIBase = () => {
  return (
    <div>
      <ProjectUpdateFormContainer>
        {(props) => <ProjectUpdateFormUIBase {...props} />}
      </ProjectUpdateFormContainer>
    </div>
  )
}

export default ProjectUpdateUIBase
