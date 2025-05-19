import { gql } from 'graphql-tag';

export const webinarResultFragment = gql`
  fragment WebinarResultFragment on WebinarResult {
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
      _id
      email
      name
      surname
      country
      city
      company
      joined
      createdAt
      updatedAt
    }
    createdBy {
      _id
    }
    createdAt
    updatedAt
  }
`;
