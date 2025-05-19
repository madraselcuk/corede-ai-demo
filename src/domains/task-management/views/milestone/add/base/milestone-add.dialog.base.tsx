'use client'

import { CoDialog } from "@/components/molecules/dialog/dialog"
import MilestoneAddFormContainer from "../milestone-add-form.container"
import MilestoneAddFormUIBase from "./milestone-add-form.ui-base"

interface MilestoneAddDialogProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  projectId: string
  onClose?: () => void
}

export const MilestoneAddDialog = ({
  open,
  onOpenChange,
  onClose,
  projectId
}: MilestoneAddDialogProps) => {
  return (
    <CoDialog open={open} onOpenChange={onOpenChange} onClose={onClose}>
      <MilestoneAddFormContainer projectId={projectId}>
        {(contentProps) => <MilestoneAddFormUIBase {...contentProps} />}
      </MilestoneAddFormContainer>
    </CoDialog>
  )
}

export default MilestoneAddDialog
