import { gql } from 'graphql-tag';

export const tagFragment = gql`
  fragment TagFragment on Tag {
    _id
    leadTags
    organization
  }
`;
