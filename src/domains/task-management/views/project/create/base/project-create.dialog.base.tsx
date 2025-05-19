'use client'

import { CoDialog } from "@/components/molecules/dialog/dialog"
import ProjectCreateFormContainer from "../project-create-form.container"
import ProjectCreateFormUIBase from "./project-create-form.ui-base"

interface ProjectCreateDialogProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  onClose?: () => void
}

export const ProjectCreateDialog = ({
  open,
  onOpenChange,
  onClose
}: ProjectCreateDialogProps) => {
  return (
    <CoDialog open={open} onOpenChange={onOpenChange} onClose={onClose}>
      <ProjectCreateFormContainer>
        {(contentProps) => <ProjectCreateFormUIBase {...contentProps} />}
      </ProjectCreateFormContainer>
    </CoDialog>
  )
}

export default ProjectCreateDialog
