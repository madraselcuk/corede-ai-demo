import { gql } from "graphql-tag";

export const roleFragment = gql`
  fragment RoleFragment on Role {
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
