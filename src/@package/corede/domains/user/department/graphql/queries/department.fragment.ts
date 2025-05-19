import { gql } from 'graphql-tag';

export const departmentFragment = gql`
  fragment DepartmentFragment on Department {
    _id
    name
    users {
      _id
    }
    roles {
      _id
    }
    organization {
      _id
    }
  }
`;
