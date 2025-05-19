'use client'

import { CoDialog } from "@/components/molecules/dialog/dialog"
import TaskCreateFormContainer from "../task-create-form.container"
import TaskCreateFormUIBase from "./task-create-form.ui-base"

interface TaskCreateDialogProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  onClose?: () => void
}

export const TaskCreateDialog = ({
  open,
  onOpenChange,
  onClose
}: TaskCreateDialogProps) => {
  return (
    <CoDialog open={open} onOpenChange={onOpenChange} onClose={onClose}>
      <TaskCreateFormContainer>
        {(contentProps) => <TaskCreateFormUIBase {...contentProps} />}
      </TaskCreateFormContainer>
    </CoDialog>
  )
}

export default TaskCreateDialog
