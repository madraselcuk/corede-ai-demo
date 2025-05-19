'use client'

import { CoDrawer } from '@/components/molecules/drawer-v2/drawer'
import ProjectUpdateFormContainer from '../project-update-form.container'
import ProjectUpdateFormUIBase from './project-update-form.ui-base'

interface ProjectUpdateDrawerProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  onClose?: () => void
  projectId?: string
}

export const ProjectUpdateDrawer = ({
  open,
  onOpenChange,
  onClose,
  projectId
}: ProjectUpdateDrawerProps) => {
  return (
    <CoDrawer open={open} onOpenChange={onOpenChange} onClose={onClose}>
      <ProjectUpdateFormContainer projectId={projectId}>
        {(contentProps) => <ProjectUpdateFormUIBase {...contentProps} />}
      </ProjectUpdateFormContainer>
    </CoDrawer>
  )
}

export default ProjectUpdateDrawer
