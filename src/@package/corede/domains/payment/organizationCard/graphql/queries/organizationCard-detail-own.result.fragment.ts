import { gql } from 'graphql-tag';

export const organizationCardDetailOwnResultFragment = gql`
  fragment OrganizationCardDetailOwnResultFragment on OrganizationCardDetailOwnResult {
    cardDetails {
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
  }
`;
