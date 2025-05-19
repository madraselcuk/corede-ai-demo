import { gql } from 'graphql-tag';

export const appointmentFragment = gql`
  fragment AppointmentFragment on Appointment {
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
      _id
    }
    targetType
    attendees {
      _id
      name
      image {
        thumbnailPublicUrl
      }
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
