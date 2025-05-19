import { gql } from 'graphql-tag';
import { DocumentNode } from 'graphql';
import {
  IBaseGraphqlRequest,
  IBaseGraphqlResponse,
  TGraphqlErrors,
} from '@common_package';

import { ICityListInput, ICityListResult } from '../resolverTypes';
import { cityListItemResultFragment } from '../fragments/city-list.item.result.fragment';

/**
 * @param params.fragment needs to be derived from `CityListItemResult` fragment
 * @param params.fragmentName needs to be unique
 */
export function cityListQuery(params?: {
  fragment: DocumentNode;
  fragmentName: string;
}): DocumentNode {
  return gql`
    ${params?.fragment ?? cityListItemResultFragment}

    query cityList($input: CityListInput!) {
      cityList(input: $input) {
        data {
          ...${params?.fragmentName ?? 'CityListItemResultFragment'}
        }
        count
      }
    }
  `;
}

export interface ICityListRequest
  extends IBaseGraphqlRequest<ICityListInput, undefined> {}

export interface ICityListResponse
  extends IBaseGraphqlResponse<ICityListInput> {
  data: {
    cityList: ICityListResult;
  };
  errors: TGraphqlErrors<ICityListInput>;
}
