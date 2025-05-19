'use client'

import { CoDrawer } from "@/components/molecules/drawer-v2/drawer"
import ProjectCreateFormContainer from "../project-create-form.container"
import ProjectCreateFormUIBase from "./project-create-form.ui-base"

interface ProjectCreateDrawerProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  onClose?: () => void
}

export const ProjectCreateDrawer = ({
  open,
  onOpenChange,
  onClose
}: ProjectCreateDrawerProps) => {
  return (
    <CoDrawer open={open} onOpenChange={onOpenChange} onClose={onClose}>
      <ProjectCreateFormContainer>
        {(contentProps) => <ProjectCreateFormUIBase {...contentProps} />}
      </ProjectCreateFormContainer>
    </CoDrawer>
  )
}

export default ProjectCreateDrawer
