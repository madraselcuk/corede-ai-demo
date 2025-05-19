import { gql } from 'graphql-tag';

export const departmentDetailResultFragment = gql`
  fragment DepartmentDetailResultFragment on DepartmentDetailResult {
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
