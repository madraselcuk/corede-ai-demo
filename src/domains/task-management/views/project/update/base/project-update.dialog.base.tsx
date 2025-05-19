'use client'

import { CoDialog } from "@/components/molecules/dialog/dialog"
import ProjectUpdateFormContainer from "../project-update-form.container"
import ProjectUpdateFormUIBase from "./project-update-form.ui-base"

interface ProjectUpdateDialogProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  onClose?: () => void
  projectId?: string
}

export const ProjectUpdateDialog = ({
  open,
  onOpenChange,
  onClose,
  projectId
}: ProjectUpdateDialogProps) => {
  return (
    <CoDialog open={open} onOpenChange={onOpenChange} onClose={onClose}>
      <ProjectUpdateFormContainer projectId={projectId}>
        {(contentProps) => <ProjectUpdateFormUIBase {...contentProps} />}
      </ProjectUpdateFormContainer>
    </CoDialog>
  )
}

export default ProjectUpdateDialog
