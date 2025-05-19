import { gql } from "graphql-tag";
import { userProfileMetadataFragment } from "../../../..";

export const notificationHistoryDetailResultFragment = gql`
  ${userProfileMetadataFragment}

  fragment NotificationHistoryDetailResultFragment on NotificationHistoryDetailResult {
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
