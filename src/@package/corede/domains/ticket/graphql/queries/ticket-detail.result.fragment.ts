import { gql } from "graphql-tag";
import { userProfileMetadataFragment } from "../../..";

export const ticketDetailResultFragment = gql`
  ${userProfileMetadataFragment}

  fragment TicketDetailResultFragment on TicketDetailResult {
    _id
    subject
    contactName
    contactEmail
    assignees {
      _id
      name
      surname
      profileImage {
        thumbnailPublicUrl
      }
    }
    priority
    status
    statusHistory {
      newStatus
      prevStatus
      note
      updatedBy {
        _id
      }
      updatedAt
    }
    closedDate
    targetType
    target {
      _id
    }
    category
    ticketBody
    tags
    department {
      _id
    }
    organization {
      _id
    }
    createdBy {
      ...UserProfileMetadataFragment
    }
    createdAt
    updatedAt
  }
`;
