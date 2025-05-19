'use client'

import ProjectDetailContainer from "../project-detail.container"
import ProjectDetailContent from "./project-detail-container.ui.base"
import { CoDrawer } from "@/components/molecules/drawer-v2/drawer"

interface ProjectDetailDrawerProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  onClose?: () => void
  projectId?: string
}

export const ProjectDetailDrawer = ({
  open,
  onOpenChange,
  onClose,
  projectId
}: ProjectDetailDrawerProps) => {
  return (
    <CoDrawer open={open} onOpenChange={onOpenChange} onClose={onClose}>
      <div className="p-4">
        <ProjectDetailContainer projectId={projectId}>
          {(contentProps) => <ProjectDetailContent {...contentProps} />}
        </ProjectDetailContainer>
      </div>
    </CoDrawer>
  )
}

export default ProjectDetailDrawer
