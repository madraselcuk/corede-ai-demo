import { gql } from "graphql-tag";

export const entityBillingInfoFragment = gql`
  fragment EntityBillingInfoFragment on EntityBillingInfo {
    _id
    fullName
    phone
    address
    country
    state
    city
    street
    zip
    vat
    taxOffice
  }
`;
