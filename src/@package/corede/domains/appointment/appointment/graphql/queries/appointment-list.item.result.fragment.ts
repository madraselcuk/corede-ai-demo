import { gql } from "graphql-tag";
import { userProfileMetadataFragment } from "../../../..";

export const appointmentListItemResultFragment = gql`
  ${userProfileMetadataFragment}

  fragment AppointmentListItemResultFragment on AppointmentListItemResult {
    _id
    title
    description
    startTime
    endTime
    duration
    timezone
    location
    meetingLink
    organizer {
      ...UserProfileMetadataFragment
    }
    targetType
    attendees {
      ...UserProfileMetadataFragment
    }
    category
    status

    organization {
      _id
    }
    department {
      _id
    }
  }
`;
