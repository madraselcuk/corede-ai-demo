import { gql } from 'graphql-tag';

import {
  IBaseGraphqlRequest,
  IBaseGraphqlResponse,
  IEntity,
  TGraphqlErrors,
} from '@common_package';
import { IPaymentProductDetailResult } from '../resolverTypes/paymentProduct-detail.result';
import { paymentProductDetailResultFragment } from './paymentProduct-detail.result.fragment';
import { DocumentNode } from 'graphql';

/**
 * @param params.fragment needs to be derived from `PaymentProductDetailResult` fragment
 * @param params.fragmentName needs to be unique
 */
export function paymentProductDetailQuery(params?: {
  fragment: DocumentNode;
  fragmentName: string;
}): DocumentNode {
  return gql`
    ${params?.fragment ?? paymentProductDetailResultFragment}

    query paymentProductDetail($input: EntityInput!) {
      paymentProductDetail(input: $input) {
        ...${params?.fragmentName ?? 'PaymentProductDetailResultFragment'}
      }
    }
  `;
}

export interface IPaymentProductDetailRequest
  extends IBaseGraphqlRequest<IEntity, undefined> {}

export interface IPaymentProductDetailResponse
  extends IBaseGraphqlResponse<IEntity> {
  data: {
    paymentProductDetail: IPaymentProductDetailResult;
  };
  errors: TGraphqlErrors<IEntity>;
}
