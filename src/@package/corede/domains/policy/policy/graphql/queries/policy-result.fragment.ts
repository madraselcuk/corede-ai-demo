import { gql } from 'graphql-tag';

export const policyResultFragment = gql`
  fragment PolicyResultFragment on PolicyResult {
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

export const latestPolicyResultFragment = gql`
  fragment LatestPolicyResultFragment on LatestPolicyResult {
    _id
    title
    content
    domain
    type
    target
    language
    versionCount
    updatedAt
  }
`;
