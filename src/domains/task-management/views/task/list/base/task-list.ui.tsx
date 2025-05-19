'use client'

import React from 'react'
import TaskListContainer from '../task-list.container'
import TaskListTableUI from './task-list-container.ui'

const TaskListUI = () => {
  return (
    <div className="container mx-auto py-10">
      <TaskListContainer>
        {(props) => <TaskListTableUI {...props} />}
      </TaskListContainer>
    </div>
  )
}

export default TaskListUI
