import { gql } from 'graphql-tag'
import { statusUpdateHistoryFragment } from '../../../../../common/statusUpdateHistory'

export const contactFormListItemResultFragment = gql`
  ${statusUpdateHistoryFragment}

  fragment ContactFormListItemResultFragment on ContactFormListItemResult {
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
