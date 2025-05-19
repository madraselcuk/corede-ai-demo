import { gql } from "graphql-tag";

export const departmentListItemResultFragment = gql`
  fragment DepartmentListItemResultFragment on DepartmentListItemResult {
    _id
    name
    users {
      _id
    }
    roles {
      _id
      name
    }
    organization {
      _id
    }
  }
`;
