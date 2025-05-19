import { gql } from "graphql-tag";

export const addressFragment = gql`
  fragment AddressFragment on Address {
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

export const baseAddressFragment = gql`
  fragment BaseAddressFragment on Address {
    address
    country
    state
    city
    street
    zip
  }
`;
