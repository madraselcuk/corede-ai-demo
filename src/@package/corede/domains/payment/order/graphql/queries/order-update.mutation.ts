import {
  IBaseGraphqlRequest,
  IBaseGraphqlResponse,
  IEntity,
  TGraphqlErrors,
} from '@common_package';
import gql from 'graphql-tag';
import { IOrderUpdateInput } from '../resolverTypes/order-update.input';

export const orderUpdateQuery = gql`
  mutation orderUpdate(
    $filter: EntityInput!
    $input: OrderUpdateInput!
  ) {
    orderUpdate(filter: $filter, input: $input) {
      _id
    }
  }
`;

export interface IOrderUpdateRequest
  extends IBaseGraphqlRequest<IOrderUpdateInput, IEntity> {}

export interface IOrderUpdateResponse
  extends IBaseGraphqlResponse<IOrderUpdateInput> {
  data: {
    orderUpdate: IEntity;
  };
  errors: TGraphqlErrors<IOrderUpdateInput>;
}
