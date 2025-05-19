import { gql } from 'graphql-tag';

export const webinarParticipantFragment = gql`
  fragment WebinarParticipantFragment on WebinarParticipant {
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
`;

export const joinWebinarResultFragment = gql`
  fragment JoinWebinarResultFragment on JoinWebinarResult {
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
`;