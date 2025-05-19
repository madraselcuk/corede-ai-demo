import { gql } from "graphql-tag";
import { userProfileMetadataFragment } from "../../../..";

export const appointmentDetailResultFragment = gql`
  ${userProfileMetadataFragment}

  fragment AppointmentDetailResultFragment on AppointmentDetailResult {
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
      _id
      # name
      # image {
      #   thumbnailPublicUrl
      # }
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
