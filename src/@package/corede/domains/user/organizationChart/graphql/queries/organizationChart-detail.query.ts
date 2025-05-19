import { gql } from 'graphql-tag';

import {
  IBaseGraphqlRequest,
  IBaseGraphqlResponse,
  TGraphqlErrors,
} from '@common_package';
import { IOrganizationChartDetailInput } from '../resolverTypes/organizationChart-detail.input';
import { IOrganizationChartDetailResult } from '../resolverTypes/organizationChart-detail.result';
import { organizationChartDetailResultFragment } from './organizationChart-detail.result.fragment';

export const organizationChartDetailQuery = gql`
  ${organizationChartDetailResultFragment}

  query organizationChartDetail($input: OrganizationChartDetailInput) {
    organizationChartDetail(input: $input) {
      ...OrganizationChartDetailResultFragment
    }
  }
`;

export interface IOrganizationChartDetailRequest
  extends IBaseGraphqlRequest<IOrganizationChartDetailInput, undefined> {}

export interface IOrganizationChartDetailResponse
  extends IBaseGraphqlResponse<IOrganizationChartDetailInput> {
  data: {
    organizationChartDetail: IOrganizationChartDetailResult;
  };
  errors: TGraphqlErrors<IOrganizationChartDetailInput>;
}
