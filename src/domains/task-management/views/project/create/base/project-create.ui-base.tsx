'use client'

import ProjectCreateFormContainer from "../project-create-form.container"
import ProjectCreateFormUIBase from "./project-create-form.ui-base"

const ProjectCreateUIBase = () => {
  return (
    <div>
      <ProjectCreateFormContainer>
        {(props) => <ProjectCreateFormUIBase {...props} />}
      </ProjectCreateFormContainer>
    </div>
  )
}

export default ProjectCreateUIBase
