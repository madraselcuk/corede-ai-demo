import { gql } from "graphql-tag";
import { userProfileMetadataFragment } from "../../../../user";

export const reminderDetailResultFragment = gql`
  ${userProfileMetadataFragment}

  fragment ReminderDetailResultFragment on ReminderDetailResult {
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
