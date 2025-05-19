import { gql } from "graphql-tag";

export const userBillingInfoFragment = gql`
  fragment UserBillingInfoFragment on UserBillingInfo {
    _id
    name
    surname
    email
    phone
    country
    state
    city
    address
    zip
    identityNumber
    companyName
    vat
    taxOffice
  }
`;
