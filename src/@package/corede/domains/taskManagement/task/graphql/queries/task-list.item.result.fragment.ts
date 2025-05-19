import { gql } from 'graphql-tag'
// import { userProfileMetadataFragment } from "@corede_package"

// # ${userProfileMetadataFragment}

export const taskListItemResultFragment = gql`
  fragment TaskListItemResultFragment on TaskListItemResult {
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
    startDate
    dueDate

    organization {
      _id
    }
    department {
      _id
    }
    createdAt
    updatedAt
  }
`
