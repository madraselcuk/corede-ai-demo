import { statusUpdateHistoryFragment } from '../../../../../common/statusUpdateHistory/graphql/queries/status-update-history.fragment'
import { gql } from 'graphql-tag'

export const contactFormDetailResultFragment = gql`
  ${statusUpdateHistoryFragment}

  fragment ContactFormDetailResultFragment on ContactFormDetailResult {
    _id
    fullName
    email
    subject
    message
    status
    type
    source
    language
    statusHistory {
      ...StatusUpdateHistoryFragment
    }
    responsibleUser {
      _id
      name
      surname
      profileImage {
        publicUrl
      }
      language
      email
    }
    escalatedUser {
      _id
      name
      surname
      profileImage {
        publicUrl
      }
      language
      email
    }
    createdAt
    updatedAt
  }
`
