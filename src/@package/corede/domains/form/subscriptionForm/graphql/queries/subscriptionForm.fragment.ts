import { gql } from 'graphql-tag';

export const subscriptionFormFragment = gql`
  fragment SubscriptionFormFragment on SubscriptionForm {
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
`;
