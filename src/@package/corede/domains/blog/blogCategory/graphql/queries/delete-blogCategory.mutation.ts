import {
  IBaseGraphqlRequest,
  IBaseGraphqlResponse,
  TGraphqlErrors,
} from '@common_package';
import gql from 'graphql-tag';
import { IDeleteBlogCategoryInput } from '../resolverTypes/delete-blogCategory.input';
import { IDeleteBlogCategoryResult } from '../resolverTypes/delete-blogCategory.result';

export const deleteBlogCategoryQuery = gql`
  mutation deleteBlogCategory($input: DeleteBlogCategoryInput!) {
    deleteBlogCategory(input: $input) {
      success
    }
  }
`;

export interface IDeleteBlogCategoryRequest
  extends IBaseGraphqlRequest<IDeleteBlogCategoryInput> {}

export interface IDeleteBlogCategoryResponse
  extends IBaseGraphqlResponse<IDeleteBlogCategoryInput> {
  data: {
    deleteBlogCategory: IDeleteBlogCategoryResult;
  };
  errors: TGraphqlErrors<IDeleteBlogCategoryInput>;
}
