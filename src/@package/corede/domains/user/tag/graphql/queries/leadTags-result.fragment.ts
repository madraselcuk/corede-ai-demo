import { gql } from 'graphql-tag';

export const leadTagsResultFragment = gql`
  fragment LeadTagsResultFragment on LeadTagsResult {
    leadTags
  }
`;
