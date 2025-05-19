import {
  IBaseGraphqlRequest,
  IBaseGraphqlResponse,
  TGraphqlErrors,
} from '@common_package';
import gql from 'graphql-tag';
import { IOrganizationSettingsUpdateInput } from '../resolverTypes/organizationSettings-update.input';
import { IOrganizationSettingsUpdateResult } from '../resolverTypes/organizationSettings-update.result';

export const organizationSettingsUpdateOwnQuery = gql`
  mutation organizationSettingsUpdateOwn(
    $input: OrganizationSettingsUpdateInput!
  ) {
    organizationSettingsUpdateOwn(input: $input) {
      _id
    }
  }
`;

export interface IOrganizationSettingsUpdateOwnRequest
  extends IBaseGraphqlRequest<IOrganizationSettingsUpdateInput> {}

export interface IOrganizationSettingsUpdateOwnResponse
  extends IBaseGraphqlResponse<IOrganizationSettingsUpdateInput> {
  data: {
    organizationSettingsUpdateOwn: IOrganizationSettingsUpdateResult;
  };
  errors: TGraphqlErrors<IOrganizationSettingsUpdateInput>;
}
