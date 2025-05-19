import {
  IBaseGraphqlRequest,
  IBaseGraphqlResponse,
  TGraphqlErrors,
} from '@common_package';
import gql from 'graphql-tag';
import { ICreateBlogTargetCategoryInput } from '../resolverTypes/create-blogTargetCategory.input';
import { ICreateBlogTargetCategoryResult } from '../resolverTypes/create-blogTargetCategory.result';

export const createBlogTargetCategoryQuery = gql`
  mutation createBlogTargetCategory($input: CreateBlogTargetCategoryInput!) {
    createBlogTargetCategory(input: $input) {
      _id
    }
  }
`;

export interface ICreateBlogTargetCategoryRequest
  extends IBaseGraphqlRequest<ICreateBlogTargetCategoryInput> {}

export interface ICreateBlogTargetCategoryResponse
  extends IBaseGraphqlResponse<ICreateBlogTargetCategoryInput> {
  data: {
    createBlogTargetCategory: ICreateBlogTargetCategoryResult;
  };
  errors: TGraphqlErrors<ICreateBlogTargetCategoryInput>;
}
