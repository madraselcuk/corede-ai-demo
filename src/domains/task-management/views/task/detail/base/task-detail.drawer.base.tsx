'use client'

import TaskDetailContainer from "../task-detail.container"
import TaskDetailContent from "./task-detail-container.ui.base"
import { CoDrawer } from "@/components/molecules/drawer-v2/drawer"

interface TaskDetailDrawerProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  onClose?: () => void
  taskId?: string
}

export const TaskDetailDrawer = ({
  open,
  onOpenChange,
  onClose,
  taskId
}: TaskDetailDrawerProps) => {
  return (
    <CoDrawer open={open} onOpenChange={onOpenChange} onClose={onClose}>
      <div className="p-4">
        <TaskDetailContainer taskId={taskId}>
          {(contentProps) => <TaskDetailContent {...contentProps} />}
        </TaskDetailContainer>
      </div>
    </CoDrawer>
  )
}

export default TaskDetailDrawer
