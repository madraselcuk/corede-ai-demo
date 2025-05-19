import { gql } from "graphql-tag";
import { userProfileMetadataFragment } from "../../..";

export const ticketListItemResultFragment = gql`
  ${userProfileMetadataFragment}

  fragment TicketListItemResultFragment on TicketListItemResult {
    _id
    subject
    ticketBody
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
