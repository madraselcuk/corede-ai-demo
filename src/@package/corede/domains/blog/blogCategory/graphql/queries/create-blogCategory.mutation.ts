import {
  IBaseGraphqlRequest,
  IBaseGraphqlResponse,
  TGraphqlErrors,
} from '@common_package';
import gql from 'graphql-tag';
import { ICreateBlogCategoryInput } from '../resolverTypes/create-blogCategory.input';
import { ICreateBlogCategoryResult } from '../resolverTypes/create-blogCategory.result';

export const createBlogCategoryQuery = gql`
  mutation createBlogCategory($input: CreateBlogCategoryInput!) {
    createBlogCategory(input: $input) {
      _id
    }
  }
`;

export interface ICreateBlogCategoryRequest
  extends IBaseGraphqlRequest<ICreateBlogCategoryInput> {}

export interface ICreateBlogCategoryResponse
  extends IBaseGraphqlResponse<ICreateBlogCategoryInput> {
  data: {
    createBlogCategory: ICreateBlogCategoryResult;
  };
  errors: TGraphqlErrors<ICreateBlogCategoryInput>;
}
