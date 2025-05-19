import { gql } from 'graphql-tag'

export const subscriptionFormDetailResultFragment = gql`
  fragment SubscriptionFormDetailResultFragment on SubscriptionFormDetailResult {
    _id
    status
    email
    userType
    status
    language
    page
    newsTopicSubscribed
    blogTopicSubscribed
    productTopicSubscribed
    offerTopicSubscribed
    user {
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
    createdBy {
      _id
    }
    updatedBy {
      _id
    }
  }
`
