import { gql } from 'graphql-tag';

export const organizationChartFragment = gql`
  fragment OrganizationChartFragment on OrganizationChart {
    _id
    organization {
      _id
      name
    }
    chart
  }
`;
