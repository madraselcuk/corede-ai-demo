import {
  IBaseGraphqlRequest,
  IBaseGraphqlResponse,
  IEntity,
  TGraphqlErrors,
} from '@common_package';
import gql from 'graphql-tag';
import { IPaymentProductCreateInput } from '../resolverTypes';

export const paymentProductCreateQuery = gql`
  mutation paymentProductCreate($input: PaymentProductCreateInput!) {
    paymentProductCreate(input: $input) {
      _id
    }
  }
`;

export interface IPaymentProductCreateRequest
  extends IBaseGraphqlRequest<IPaymentProductCreateInput> {}

export interface IPaymentProductCreateResponse
  extends IBaseGraphqlResponse<IPaymentProductCreateInput> {
  data: {
    paymentProductCreate: IEntity;
  };
  errors: TGraphqlErrors<IPaymentProductCreateInput>;
}
