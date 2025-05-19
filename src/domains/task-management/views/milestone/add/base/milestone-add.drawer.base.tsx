'use client'


import { CoDrawer } from "@/components/molecules/drawer-v2/drawer"
import MilestoneAddFormContainer from "../milestone-add-form.container"
import MilestoneAddFormUIBase from "./milestone-add-form.ui-base"

interface MilestoneAddDrawerProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  projectId: string
  onClose?: () => void
}

export const MilestoneAddDrawer = ({
  open,
  onOpenChange,
  onClose,
  projectId
}: MilestoneAddDrawerProps) => {
  return (
    <CoDrawer open={open} onOpenChange={onOpenChange} onClose={onClose}>
      <MilestoneAddFormContainer projectId={projectId}>
        {(contentProps) => <MilestoneAddFormUIBase {...contentProps} />}
      </MilestoneAddFormContainer>
    </CoDrawer>
  )
}

export default MilestoneAddDrawer
