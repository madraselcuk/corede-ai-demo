import {
  IBaseGraphqlRequest,
  IBaseGraphqlResponse,
  TGraphqlErrors,
} from '@common_package';
import gql from 'graphql-tag';
import {
  IOrganizationChartUpdateInput,
  IOrganizationChartUpdateFilterInput,
} from '../resolverTypes/organizationChart-update.input';
import { IOrganizationChartUpdateResult } from '../resolverTypes/organizationChart-update.result';

export const organizationChartUpdateQuery = gql`
  mutation organizationChartUpdate(
    $filter: OrganizationChartUpdateFilterInput
    $input: OrganizationChartUpdateInput!
  ) {
    organizationChartUpdate(filter: $filter, input: $input) {
      _id
    }
  }
`;

export interface IOrganizationChartUpdateRequest
  extends IBaseGraphqlRequest<
    IOrganizationChartUpdateInput,
    IOrganizationChartUpdateFilterInput
  > {}

export interface IOrganizationChartUpdateResponse
  extends IBaseGraphqlResponse<IOrganizationChartUpdateInput> {
  data: {
    organizationChartUpdate: IOrganizationChartUpdateResult;
  };
  errors: TGraphqlErrors<IOrganizationChartUpdateInput>;
}
