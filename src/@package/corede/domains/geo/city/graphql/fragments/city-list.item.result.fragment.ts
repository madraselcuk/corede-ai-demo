import { gql } from "graphql-tag";

export const cityListItemResultFragment = gql`
  fragment CityListItemResultFragment on CityListItemResult {
    _id
    name
  }
`;
