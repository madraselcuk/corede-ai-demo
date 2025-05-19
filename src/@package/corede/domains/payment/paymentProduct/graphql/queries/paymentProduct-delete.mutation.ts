import {
  IBaseGraphqlRequest,
  IBaseGraphqlResponse,
  IBaseResult,
  IEntity,
  TGraphqlErrors,
} from "@common_package";
import gql from "graphql-tag";

export const paymentProductDeleteQuery = gql`
  mutation paymentProductDelete($input: EntityInput!) {
    paymentProductDelete(input: $input) {
      success
    }
  }
`;

export interface IPaymentProductDeleteRequest
  extends IBaseGraphqlRequest<IEntity> {}

export interface IPaymentProductDeleteResponse
  extends IBaseGraphqlResponse<IEntity> {
  data: {
    paymentProductDelete: IBaseResult;
  };
  errors: TGraphqlErrors<IEntity>;
}
