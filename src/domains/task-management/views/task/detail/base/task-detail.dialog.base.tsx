'use client'

import TaskDetailContainer from "../task-detail.container"
import TaskDetailContent from "./task-detail-container.ui.base"
import { CoDialog } from "@/components/molecules/dialog/dialog"

interface TaskDetailDialogProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  onClose?: () => void
  taskId?: string
}

export const TaskDetailDialog = ({
  open,
  onOpenChange,
  onClose,
  taskId
}: TaskDetailDialogProps) => {
  return (
    <CoDialog open={open} onOpenChange={onOpenChange} onClose={onClose}>
      <TaskDetailContainer taskId={taskId}>
        {(contentProps) => <TaskDetailContent {...contentProps} />}
      </TaskDetailContainer>
    </CoDialog>
  )
}

export default TaskDetailDialog
