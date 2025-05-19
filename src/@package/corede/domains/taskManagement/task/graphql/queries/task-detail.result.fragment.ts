import { gql } from 'graphql-tag'
import { taskDisplayFragment } from './task-display-fragment'

export const taskDetailResultFragment = gql`
  ${taskDisplayFragment}

  fragment TaskDetailResultFragment on TaskDetailResult {
    _id
    title
    description
    tags
    isCompleted
    status
    progress
    priority

    parentTask {
      ...TaskDisplayFragment
    }
    childTasks {
      ...TaskDisplayFragment
    }
    startDate
    dueDate

    relatedEntityType
  }
`
