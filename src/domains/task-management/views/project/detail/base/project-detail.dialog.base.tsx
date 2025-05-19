'use client'

import ProjectDetailContainer from "../project-detail.container"
import ProjectDetailContent from "./project-detail-container.ui.base"
import { CoDialog } from "@/components/molecules/dialog/dialog"

interface ProjectDetailDialogProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  onClose?: () => void
  projectId?: string
}

export const ProjectDetailDialog = ({
  open,
  onOpenChange,
  onClose,
  projectId
}: ProjectDetailDialogProps) => {
  return (
    <CoDialog open={open} onOpenChange={onOpenChange} onClose={onClose}>
      <ProjectDetailContainer projectId={projectId}>
        {(contentProps) => <ProjectDetailContent {...contentProps} />}
      </ProjectDetailContainer>
    </CoDialog>
  )
}

export default ProjectDetailDialog
