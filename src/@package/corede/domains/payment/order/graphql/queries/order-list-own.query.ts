import { gql } from 'graphql-tag';

import {
  IBaseGraphqlRequest,
  IBaseGraphqlResponse,
  TGraphqlErrors,
} from '@common_package';

import { IOrderListOwnResult } from '../resolverTypes/order-list-own.result';
import { IOrderListOwnInput } from '../resolverTypes';
import { orderListOwnItemResultFragment } from './order-list-own.item.result.fragment';
import { DocumentNode } from 'graphql';

/**
 * @param params.fragment needs to be derived from `OrderListOwnItemResult` fragment
 * @param params.fragmentName needs to be unique
 */
export function orderListOwnQuery(params?: {
  fragment: DocumentNode;
  fragmentName: string;
}): DocumentNode {
  return gql`
    ${params?.fragment ?? orderListOwnItemResultFragment}

    query orderListOwn($input: OrderListOwnInput) {
      orderListOwn(input: $input) {
        data {
          ...${params?.fragmentName ?? 'OrderListOwnItemResultFragment'}
        }
        count
      }
    }
  `;
}

export interface IOrderListOwnRequest
  extends IBaseGraphqlRequest<IOrderListOwnInput, undefined> {}

export interface IOrderListOwnResponse
  extends IBaseGraphqlResponse<IOrderListOwnInput> {
  data: {
    orderListOwn: IOrderListOwnResult;
  };
  errors: TGraphqlErrors<IOrderListOwnInput>;
}
