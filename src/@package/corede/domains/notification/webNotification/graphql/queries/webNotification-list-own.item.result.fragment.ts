import { gql } from 'graphql-tag';

export const webNotificationListOwnItemResultFragment = gql`
  fragment WebNotificationListOwnItemResultFragment on WebNotificationListOwnItemResult {
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
