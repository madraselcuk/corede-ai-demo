'use client'

import TaskDetailContainer from "../task-detail.container"
import TaskDetailContent from "./task-detail-container.ui.base"

const TaskDetailUIBase = () => {
  return (
    <div>
      <div className="space-y-4">
        <h2 className="mb-4 text-2xl font-bold">FAQ Details</h2>
        <TaskDetailContainer>
          {(props) => <TaskDetailContent {...props} />}
        </TaskDetailContainer>
      </div>
    </div>
  )
}

export default TaskDetailUIBase
