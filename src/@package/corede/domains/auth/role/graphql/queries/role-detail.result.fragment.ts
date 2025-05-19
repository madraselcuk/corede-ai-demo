import { gql } from "graphql-tag";

export const roleDetailResultFragment = gql`
  fragment RoleDetailResultFragment on RoleDetailResult {
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
