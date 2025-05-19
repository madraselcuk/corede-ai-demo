import {
  IBaseGraphqlRequest,
  IBaseGraphqlResponse,
  IBaseResult,
  IEntity,
  TGraphqlErrors,
} from '@common_package';
import gql from 'graphql-tag';

export const orderDeleteQuery = gql`
  mutation orderDelete($input: EntityInput!) {
    orderDelete(input: $input) {
      success
    }
  }
`;

export interface IOrderDeleteRequest extends IBaseGraphqlRequest<IEntity> {}

export interface IOrderDeleteResponse extends IBaseGraphqlResponse<IEntity> {
  data: {
    orderDelete: IBaseResult;
  };
  errors: TGraphqlErrors<IEntity>;
}
