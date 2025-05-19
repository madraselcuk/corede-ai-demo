import { gql } from 'graphql-tag';

export const webNotificationFragment = gql`
  fragment WebNotificationFragment on WebNotification {
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
        uid
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
