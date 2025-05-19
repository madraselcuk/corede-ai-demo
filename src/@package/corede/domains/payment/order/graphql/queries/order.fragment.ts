import { gql } from 'graphql-tag';

export const orderFragment = gql`
  fragment OrderFragment on Order {
    _id
    # TODO: add fields

    organization {  # TODO: Check organization 
      _id
    }
    department {    # TODO: Check department
      _id
    }
  }
`;
