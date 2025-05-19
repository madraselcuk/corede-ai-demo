import { gql } from 'graphql-tag'
// import { userProfileMetadataFragment } from "@corede_package"
import { entityDisplayMetadataFragment } from '../../../common/graphql'
import { taskDisplayFragment } from './task-display-fragment'

// # ${userProfileMetadataFragment}

export const taskFragment = gql`

  ${entityDisplayMetadataFragment}
  ${taskDisplayFragment}

  fragment TaskFragment on Task {
    _id
    title
    description
    tags
    isCompleted
    status
    progress
    priority
    assignees {
      _id
      # ...UserProfileMetadataFragment
    }
    followers {
      _id
      # ...UserProfileMetadataFragment
    }
    comments {
      _id
    }
    notes {
      _id
    }
    parentTask {
      ...TaskDisplayFragment
    }
    childTasks {
      ...TaskDisplayFragment
    }
    startDate
    dueDate

    relatedEntity {
      ...EntityDisplayMetadataFragment
    }
    relatedEntityType

    organization {
      _id
    }
    department {
      _id
    }
    createdAt
    updatedAt
    createdBy {
      _id
      # ...UserProfileMetadataFragment
    }
    updatedBy {
      _id
      # ...UserProfileMetadataFragment
    }
  }
`
