import { gql } from 'graphql-tag';

export const notificationHistoryFragment = gql`
  fragment NotificationHistoryFragment on NotificationHistory {
    _id
    status
    notification {
      _id
      name
    }
    customNotification
    channelType
    variableValues
    results
    isSentToTopic
    sentTopic
    language
    
    senderUser {
      _id
    }
    sentUser {
      _id
    }
    sentCustomUser
    organization {
      _id
    }
    createdAt
    updatedAt
  }
`;
