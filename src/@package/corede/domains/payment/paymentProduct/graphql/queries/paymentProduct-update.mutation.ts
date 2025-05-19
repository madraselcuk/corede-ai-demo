import {
  IBaseGraphqlRequest,
  IBaseGraphqlResponse,
  IEntity,
  TGraphqlErrors,
} from "@common_package";
import gql from "graphql-tag";
import { IPaymentProductUpdateInput } from "../resolverTypes/paymentProduct-update.input";

export const paymentProductUpdateQuery = gql`
  mutation paymentProductUpdate(
    $filter: EntityInput!
    $input: PaymentProductUpdateInput!
  ) {
    paymentProductUpdate(filter: $filter, input: $input) {
      _id
    }
  }
`;

export interface IPaymentProductUpdateRequest
  extends IBaseGraphqlRequest<IPaymentProductUpdateInput, IEntity> {}

export interface IPaymentProductUpdateResponse
  extends IBaseGraphqlResponse<IPaymentProductUpdateInput> {
  data: {
    paymentProductUpdate: IEntity;
  };
  errors: TGraphqlErrors<IPaymentProductUpdateInput>;
}
