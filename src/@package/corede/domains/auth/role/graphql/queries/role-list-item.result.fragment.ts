import { gql } from "graphql-tag";
export const roleListItemResultFragment = gql`
  fragment RoleListItemResultFragment on RoleListItemResult {
    _id
    name
    type
    permissions {
      _id
    }
    description
    organization {
      _id
    }
  }
`;
