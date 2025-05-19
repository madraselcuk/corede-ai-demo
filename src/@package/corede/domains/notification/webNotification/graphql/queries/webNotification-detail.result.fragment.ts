import { gql } from 'graphql-tag';

export const webNotificationDetailResultFragment = gql`
  fragment WebNotificationDetailResultFragment on WebNotificationDetailResult {
    _id
    notification {
      _id
    }
    notificationType
    notificationPreview {
      name
      subject
      content
      data {
        targetId
        targetModel
      }
    }
    language
    
    user {
      _id
    }
    isRead
    createdAt
    updatedAt
  }
`;
