import { gql } from 'graphql-tag';
import { webinarParticipantFragment } from './webinar-participant.fragment';

export const webinarFragment = gql`
  ${webinarParticipantFragment}

  fragment WebinarFragment on Webinar {
    _id
    title
    description
    content
    language
    type
    quota
    lastApplicationDate
    startDate
    duration
    participationLink
    status
    participants {
      ...WebinarParticipantFragment
    }
    createdBy {
      _id
    }
    createdAt
    updatedAt
  }
`;

export const activeWebinarResultFragment = gql`
  ${webinarParticipantFragment}

  fragment ActiveWebinarResultFragment on ActiveWebinarResult {
    _id
    title
    description
    content
    language
    type
    quota
    lastApplicationDate
    startDate
    duration
    participationLink
    status
    participants {
      ...WebinarParticipantFragment
    }
    createdBy {
      _id
    }
    createdAt
    updatedAt
  }
`;
