import { gql } from 'graphql-tag';

import {
  IBaseGraphqlRequest,
  IBaseGraphqlResponse,
  TGraphqlErrors,
} from '@common_package';
import { IOrganizationSettingsDetailInput } from '../resolverTypes/organizationSettings-detail.input';
import { IOrganizationSettingsDetailResult } from '../resolverTypes/organizationSettings-detail.result';
import { DocumentNode } from 'graphql';
import { organizationSettingsDetailResultFragment } from './organizationSettings-detail.result.fragment';

/**
 * @param params.fragment needs to be derived from `OrganizationSettingsDetailResult` fragment
 * @param params.fragmentName needs to be unique
 */
export function organizationSettingsDetailQuery(params?: {
  fragment: DocumentNode;
  fragmentName: string;
}): DocumentNode {
  return gql`
    ${params?.fragment ?? organizationSettingsDetailResultFragment}

    query organizationSettingsDetail($input: OrganizationSettingsDetailInput!) {
      organizationSettingsDetail(input: $input) {
        ...${params?.fragmentName ?? 'OrganizationSettingsDetailResultFragment'}
      }
    }
  `;
}

export interface IOrganizationSettingsDetailRequest
  extends IBaseGraphqlRequest<IOrganizationSettingsDetailInput, undefined> {}

export interface IOrganizationSettingsDetailResponse
  extends IBaseGraphqlResponse<IOrganizationSettingsDetailInput> {
  data: {
    organizationSettingsDetail: IOrganizationSettingsDetailResult;
  };
  errors: TGraphqlErrors<IOrganizationSettingsDetailInput>;
}
