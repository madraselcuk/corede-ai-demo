import {
  IBaseGraphqlRequest,
  IBaseGraphqlResponse,
  TGraphqlErrors,
} from '@common_package';
import gql from 'graphql-tag';
import { IBlogDeleteManyInput, IBlogDeleteManyResult } from '../resolverTypes';

export const blogDeleteManyQuery = gql`
  mutation blogDeleteMany($input: BlogDeleteManyInput!) {
    blogDeleteMany(input: $input) {
      success
    }
  }
`;

export interface IBlogDeleteManyRequest
  extends IBaseGraphqlRequest<IBlogDeleteManyInput> {}

export interface IBlogDeleteManyResponse
  extends IBaseGraphqlResponse<IBlogDeleteManyInput> {
  data: {
    blogDeleteMany: IBlogDeleteManyResult;
  };
  errors: TGraphqlErrors<IBlogDeleteManyInput>;
}
