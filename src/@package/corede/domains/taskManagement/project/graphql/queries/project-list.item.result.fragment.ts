import { gql } from 'graphql-tag'
// import { userProfileMetadataFragment } from "@corede_package"

export const projectListItemResultFragment = gql`

  fragment ProjectListItemResultFragment on ProjectListItemResult {
    _id
    title
    description
    tags
    isMain
    status
    progress
    priority
    startDate
    dueDate
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
