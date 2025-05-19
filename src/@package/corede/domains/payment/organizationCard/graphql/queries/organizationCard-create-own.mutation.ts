import {
  IBaseGraphqlRequest,
  IBaseGraphqlResponse,
  IBaseResult,
  TGraphqlErrors,
} from '@common_package';
import gql from 'graphql-tag';
import { IOrganizationCardCreateOwnInput } from '../resolverTypes';

export const organizationCardCreateOwnQuery = gql`
  mutation organizationCardCreateOwn($input: OrganizationCardCreateOwnInput!) {
    organizationCardCreateOwn(input: $input) {
      success
    }
  }
`;

export interface IOrganizationCardCreateOwnRequest
  extends IBaseGraphqlRequest<IOrganizationCardCreateOwnInput> {}

export interface IOrganizationCardCreateOwnResponse
  extends IBaseGraphqlResponse<IOrganizationCardCreateOwnInput> {
  data: {
    organizationCardCreateOwn: IBaseResult;
  };
  errors: TGraphqlErrors<IOrganizationCardCreateOwnInput>;
}
