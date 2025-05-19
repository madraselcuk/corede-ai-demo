import { gql } from 'graphql-tag';

export const statusUpdateHistoryFragment = gql`
  fragment StatusUpdateHistoryFragment on StatusUpdateHistory {
    newStatus
    prevStatus
    note
    updatedBy {
      _id
    }
    updatedAt
  }
`;
