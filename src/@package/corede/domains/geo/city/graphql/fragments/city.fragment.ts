import { gql } from 'graphql-tag';

export const cityFragment = gql`
  fragment CityFragment on City {
    _id
    name
    state_name
    country_name
    latitude
    longitude
  }
`;
