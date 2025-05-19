import { gql } from 'graphql-tag';

import {
  IBaseGraphqlRequest,
  IBaseGraphqlResponse,
  TGraphqlErrors,
} from '@common_package';

import { IOrderListResult } from '../resolverTypes/order-list.result';
import { IOrderListInput } from '../resolverTypes';
import { orderListItemResultFragment } from './order-list.item.result.fragment';
import { DocumentNode } from 'graphql';

/**
 * @param params.fragment needs to be derived from `OrderListOwnItemResult` fragment
 * @param params.fragmentName needs to be unique
 */
export function orderListQuery(params?: {
  fragment: DocumentNode;
  fragmentName: string;
}): DocumentNode {
  return gql`
    ${params?.fragment ?? orderListItemResultFragment}

    query orderList($input: OrderListInput) {
      orderList(input: $input) {
        data {
          ...${params?.fragmentName ?? 'OrderListItemResultFragment'}
        }
        count
      }
    }
  `;
}

export interface IOrderListRequest
  extends IBaseGraphqlRequest<IOrderListInput, undefined> {}

export interface IOrderListResponse
  extends IBaseGraphqlResponse<IOrderListInput> {
  data: {
    orderList: IOrderListResult;
  };
  errors: TGraphqlErrors<IOrderListInput>;
}
