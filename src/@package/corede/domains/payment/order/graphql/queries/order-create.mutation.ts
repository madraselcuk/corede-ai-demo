import {
  IBaseGraphqlRequest,
  IBaseGraphqlResponse,
  IEntity,
  TGraphqlErrors,
} from '@common_package';
import gql from 'graphql-tag';
import { IOrderCreateInput } from '../resolverTypes';

export const orderCreateQuery = gql`
  mutation orderCreate($input: OrderCreateInput!) {
    orderCreate(input: $input) {
      _id
    }
  }
`;

export interface IOrderCreateRequest
  extends IBaseGraphqlRequest<IOrderCreateInput> {}

export interface IOrderCreateResponse
  extends IBaseGraphqlResponse<IOrderCreateInput> {
  data: {
    orderCreate: IEntity;
  };
  errors: TGraphqlErrors<IOrderCreateInput>;
}
