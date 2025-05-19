// import { userProfileMetadataFragment } from '@/@package/corede'
import { gql } from 'graphql-tag'

// # ${taskDisplayFragment}

  // # ${userProfileMetadataFragment}
export const projectDetailResultFragment = gql`

  fragment ProjectDetailResultFragment on ProjectDetailResult {
    _id
    title
    description
    tags
    isMain
    status
    progress
    priority
    milestones {
      _id
      title
      description
      tags
      order
      # tasks {
      #   ...TaskDisplayFragment
      # }
      startDate
      dueDate
    }
    assignees {
      _id
      # ...UserProfileMetadataFragment
    }
    followers {
      _id
      # ...UserProfileMetadataFragment
    }
    organization {
      _id
    }
    department {
      _id
    }
  }
`
