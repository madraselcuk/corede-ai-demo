import { gql } from 'graphql-tag';

export const organizationCardFragment = gql`
  fragment OrganizationCardFragment on OrganizationCard {
    binNumber
    cardType
    cardAssociation
    cardFamily
    cardBankName
    cardBankCode
    email
    cardUserKey
    cardToken
    cardAlias
  }
`;
