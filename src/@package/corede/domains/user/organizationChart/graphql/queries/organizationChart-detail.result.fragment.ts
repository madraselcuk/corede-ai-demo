import { gql } from 'graphql-tag';

export const organizationChartDetailResultFragment = gql`
  fragment OrganizationChartDetailResultFragment on OrganizationChartDetailResult {
    _id
    organization {
      _id
      name
    }
    chart
  }
`;
