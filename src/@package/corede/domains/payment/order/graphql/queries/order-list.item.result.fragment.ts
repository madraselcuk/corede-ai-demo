import { gql } from "graphql-tag";

export const orderListItemResultFragment = gql`
  fragment OrderListItemResultFragment on OrderListItemResult {
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
