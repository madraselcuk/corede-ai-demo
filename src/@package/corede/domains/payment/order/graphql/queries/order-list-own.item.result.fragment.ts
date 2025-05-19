import { gql } from "graphql-tag";

export const orderListOwnItemResultFragment = gql`
  fragment OrderListOwnItemResultFragment on OrderListOwnItemResult {
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
