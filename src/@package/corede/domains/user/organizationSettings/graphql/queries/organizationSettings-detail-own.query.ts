import { gql } from 'graphql-tag';

import {
  IBaseGraphqlRequest,
  IBaseGraphqlResponse,
  TGraphqlErrors,
} from '@common_package';
import { IOrganizationSettingsDetailResult } from '../resolverTypes/organizationSettings-detail.result';
import { DocumentNode } from 'graphql';
import { organizationSettingsDetailResultFragment } from './organizationSettings-detail.result.fragment';

/**
 * @param params.fragment needs to be derived from `OrganizationSettingsDetailResult` fragment
 * @param params.fragmentName needs to be unique
 */
export function organizationSettingsDetailOwnQuery(params?: {
  fragment: DocumentNode;
  fragmentName: string;
}): DocumentNode {
  return gql`
    ${params?.fragment ?? organizationSettingsDetailResultFragment}

    query organizationSettingsDetailOwn {
      organizationSettingsDetailOwn {
        ...${params?.fragmentName ?? 'OrganizationSettingsDetailResultFragment'}
      }
    }
  `;
}

export interface IOrganizationSettingsDetailOwnRequest
  extends IBaseGraphqlRequest<undefined, undefined> {}

export interface IOrganizationSettingsDetailOwnResponse
  extends IBaseGraphqlResponse<undefined> {
  data: {
    organizationSettingsDetailOwn: IOrganizationSettingsDetailResult;
  };
  errors: TGraphqlErrors<undefined>;
}
