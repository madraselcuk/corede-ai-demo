import { gql } from 'graphql-tag';

export const baseDepartmentEntityFragment = gql`
  fragment BaseDepartmentEntityFragment on BaseDepartmentEntity {
    _id
    name
  }
`;
