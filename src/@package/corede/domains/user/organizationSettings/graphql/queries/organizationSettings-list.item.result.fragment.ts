import { gql } from 'graphql-tag';

export const organizationSettingsListItemResultFragment = gql`
  fragment OrganizationSettingsListItemResultFragment on OrganizationSettingsListItemResult {
    _id
    # ??
    organization {
      _id
      name
    }
  }
`;
