import { gql } from "graphql-tag";

export const webNotificationListItemResultFragment = gql`
  fragment WebNotificationListItemResultFragment on WebNotificationListItemResult {
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
    user {
      _id
    }
    isRead
    language

    createdAt
    updatedAt
  }
`;
