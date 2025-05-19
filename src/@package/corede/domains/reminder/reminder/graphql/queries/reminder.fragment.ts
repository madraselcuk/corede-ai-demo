import { gql } from "graphql-tag";
import { userProfileMetadataFragment } from "../../../../user";

export const reminderFragment = gql`
  ${userProfileMetadataFragment}

  fragment ReminderFragment on Reminder {
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
