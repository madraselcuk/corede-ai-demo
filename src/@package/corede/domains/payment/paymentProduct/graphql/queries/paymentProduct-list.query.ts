import { gql } from 'graphql-tag';

import {
  IBaseGraphqlRequest,
  IBaseGraphqlResponse,
  TGraphqlErrors,
} from '@common_package';

import { IPaymentProductListResult } from '../resolverTypes/paymentProduct-list.result';
import { IPaymentProductListInput } from '../resolverTypes';
import { paymentProductListItemResultFragment } from './paymentProduct-list.item.result.fragment';
import { DocumentNode } from 'graphql';

/**
 * @param params.fragment needs to be derived from `PaymentProductListItemResult` fragment
 * @param params.fragmentName needs to be unique
 */
export function paymentProductListQuery(params?: {
  fragment: DocumentNode;
  fragmentName: string;
}): DocumentNode {
  return gql`
  ${params?.fragment ?? paymentProductListItemResultFragment}

  query paymentProductList($input: PaymentProductListInput) {
    paymentProductList(input: $input) {
      data {
        ...${params?.fragmentName ?? 'PaymentProductDetailResultFragment'}
      }
      count
    }
  }
`;
}

export interface IPaymentProductListRequest
  extends IBaseGraphqlRequest<IPaymentProductListInput, undefined> {}

export interface IPaymentProductListResponse
  extends IBaseGraphqlResponse<IPaymentProductListInput> {
  data: {
    paymentProductList: IPaymentProductListResult;
  };
  errors: TGraphqlErrors<IPaymentProductListInput>;
}
