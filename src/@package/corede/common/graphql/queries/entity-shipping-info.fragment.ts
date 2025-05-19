import { gql } from "graphql-tag";

export const entityShippingInfoFragment = gql`
  fragment EntityShippingInfoFragment on EntityShippingInfo {
    _id
    fullName
    phone
    address
    country
    state
    city
    street
    zip
  }
`;
