'use client'

import TaskUpdateFormContainer from "../task-update-form.container"
import TaskUpdateFormUIBase from "./task-update-form.ui-base"

const TaskUpdateUIBase = () => {
  return (
    <div>
      <TaskUpdateFormContainer>
        {(props) => <TaskUpdateFormUIBase {...props} />}
      </TaskUpdateFormContainer>
    </div>
  )
}

export default TaskUpdateUIBase
