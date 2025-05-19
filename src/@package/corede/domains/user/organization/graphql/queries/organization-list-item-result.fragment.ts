import { gql } from "graphql-tag";

export const organizationListItemResultFragment = gql`
  fragment OrganizationListItemResultFragment on OrganizationListItemResult {
    _id
    name
    status
    users {
      _id
    }
  }
`;
