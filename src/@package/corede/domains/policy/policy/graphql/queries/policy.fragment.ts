import { gql } from 'graphql-tag';

export const policyFragment = gql`
  fragment PolicyFragment on Policy {
    _id
    title
    content
    domain
    type
    target
    language
    versionCount
    createdAt
    updatedAt
  }
`;
