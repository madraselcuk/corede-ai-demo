import { gql } from "graphql-tag";

export const orderDetailResultFragment = gql`
  fragment OrderDetailResultFragment on OrderDetailResult {
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
