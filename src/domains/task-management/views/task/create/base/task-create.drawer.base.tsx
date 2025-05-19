'use client'

import { CoDrawer } from "@/components/molecules/drawer-v2/drawer"
import TaskCreateFormContainer from "../task-create-form.container"
import TaskCreateFormUIBase from "./task-create-form.ui-base"

interface TaskCreateDrawerProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  onClose?: () => void
}

export const TaskCreateDrawer = ({
  open,
  onOpenChange,
  onClose
}: TaskCreateDrawerProps) => {
  return (
    <CoDrawer open={open} onOpenChange={onOpenChange} onClose={onClose}>
      <TaskCreateFormContainer>
        {(contentProps) => <TaskCreateFormUIBase {...contentProps} />}
      </TaskCreateFormContainer>
    </CoDrawer>
  )
}

export default TaskCreateDrawer
