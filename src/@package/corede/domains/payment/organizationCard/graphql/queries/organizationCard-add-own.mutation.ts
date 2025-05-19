import {
  IBaseGraphqlRequest,
  IBaseGraphqlResponse,
  IBaseResult,
  TGraphqlErrors,
} from '@common_package';
import gql from 'graphql-tag';
import { IOrganizationCardAddOwnInput } from '../resolverTypes';

export const organizationCardAddOwnQuery = gql`
  mutation organizationCardAddOwn($input: OrganizationCardAddOwnInput!) {
    organizationCardAddOwn(input: $input) {
      success
    }
  }
`;

export interface IOrganizationCardAddOwnRequest
  extends IBaseGraphqlRequest<IOrganizationCardAddOwnInput> {}

export interface IOrganizationCardAddOwnResponse
  extends IBaseGraphqlResponse<IOrganizationCardAddOwnInput> {
  data: {
    organizationCardAddOwn: IBaseResult;
  };
  errors: TGraphqlErrors<IOrganizationCardAddOwnInput>;
}
