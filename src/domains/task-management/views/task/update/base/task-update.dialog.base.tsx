'use client'

import { CoDialog } from "@/components/molecules/dialog/dialog"
import TaskUpdateFormContainer from "../task-update-form.container"
import TaskUpdateFormUIBase from "./task-update-form.ui-base"

interface TaskUpdateDialogProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  onClose?: () => void
  taskId?: string
}

export const TaskUpdateDialog = ({
  open,
  onOpenChange,
  onClose,
  taskId
}: TaskUpdateDialogProps) => {
  return (
    <CoDialog open={open} onOpenChange={onOpenChange} onClose={onClose}>
      <TaskUpdateFormContainer taskId={taskId}>
        {(contentProps) => <TaskUpdateFormUIBase {...contentProps} />}
      </TaskUpdateFormContainer>
    </CoDialog>
  )
}

export default TaskUpdateDialog
