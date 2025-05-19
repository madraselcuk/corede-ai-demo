import { gql } from "graphql-tag";
import { userProfileMetadataFragment } from "../../../..";

export const reminderListItemResultFragment = gql`
  ${userProfileMetadataFragment}

  fragment ReminderListItemResultFragment on ReminderListItemResult {
    _id
    status
    title
    content
    description
    tags
    remindDate
    priority
    targetType
    target {
      _id
    }
    remindUsers {
      ...UserProfileMetadataFragment
    }
    department {
      _id
    }
    organization {
      _id
    }
    createdAt
    updatedAt
    createdBy {
      ...UserProfileMetadataFragment
    }
  }
`;
