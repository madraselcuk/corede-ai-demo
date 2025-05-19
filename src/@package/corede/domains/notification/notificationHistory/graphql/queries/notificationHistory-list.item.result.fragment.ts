import { gql } from "graphql-tag";
import { userProfileMetadataFragment } from "../../../..";

export const notificationHistoryListItemResultFragment = gql`
  ${userProfileMetadataFragment}

  fragment NotificationHistoryListItemResultFragment on NotificationHistoryListItemResult {
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
      ...UserProfileMetadataFragment
    }
    sentUser {
      ...UserProfileMetadataFragment
    }
    sentCustomUser
    organization {
      _id
    }
    createdAt
    updatedAt
  }
`;
