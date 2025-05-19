import { gql } from 'graphql-tag';

import {
  IBaseGraphqlRequest,
  IBaseGraphqlResponse,
  IEntity,
  TGraphqlErrors,
} from '@common_package';
import { IOrderDetailResult } from '../resolverTypes/order-detail.result';
import { orderDetailResultFragment } from './order-detail.result.fragment';
import { DocumentNode } from 'graphql';

/**
 * @param params.fragment needs to be derived from `OrderListOwnItemResult` fragment
 * @param params.fragmentName needs to be unique
 */
export function orderDetailQuery(params?: {
  fragment: DocumentNode;
  fragmentName: string;
}): DocumentNode {
  return gql`
    ${params?.fragment ?? orderDetailResultFragment}

    query orderDetail($input: EntityInput!) {
      orderDetail(input: $input) {
        ...${params?.fragmentName ?? 'OrderDetailResultFragment'}
      }
    }
  `;
}

export interface IOrderDetailRequest
  extends IBaseGraphqlRequest<IEntity, undefined> {}

export interface IOrderDetailResponse extends IBaseGraphqlResponse<IEntity> {
  data: {
    orderDetail: IOrderDetailResult;
  };
  errors: TGraphqlErrors<IEntity>;
}
