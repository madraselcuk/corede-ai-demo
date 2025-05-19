'use client'

import { CoDrawer } from "@/components/molecules/drawer-v2/drawer"
import TaskUpdateFormContainer from "../task-update-form.container"
import TaskUpdateFormUIBase from "./task-update-form.ui-base"

interface TaskUpdateDrawerProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  onClose?: () => void
  taskId?: string
}

export const TaskUpdateDrawer = ({
  open,
  onOpenChange,
  onClose,
  taskId
}: TaskUpdateDrawerProps) => {
  return (
    <CoDrawer open={open} onOpenChange={onOpenChange} onClose={onClose}>
      <TaskUpdateFormContainer taskId={taskId}>
        {(contentProps) => <TaskUpdateFormUIBase {...contentProps} />}
      </TaskUpdateFormContainer>
    </CoDrawer>
  )
}

export default TaskUpdateDrawer
