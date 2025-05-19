'use client'


import TaskCreateFormContainer from "../task-create-form.container"
import TaskCreateFormUIBase from "./task-create-form.ui-base"

const TaskCreateUIBase = () => {
  return (
    <div>
      <TaskCreateFormContainer>
        {(props) => <TaskCreateFormUIBase {...props} />}
      </TaskCreateFormContainer>
    </div>
  )
}

export default TaskCreateUIBase
