import {
  IBaseGraphqlRequest,
  IBaseGraphqlResponse,
  TGraphqlErrors,
} from '@common_package';
import gql from 'graphql-tag';
import { IDeleteBlogTargetCategoryInput } from '../resolverTypes/delete-blogTargetCategory.input';
import { IDeleteBlogTargetCategoryResult } from '../resolverTypes/delete-blogTargetCategory.result';

export const deleteBlogTargetCategoryQuery = gql`
  mutation deleteBlogTargetCategory($input: DeleteBlogTargetCategoryInput!) {
    deleteBlogTargetCategory(input: $input) {
      success
    }
  }
`;

export interface IDeleteBlogTargetCategoryRequest
  extends IBaseGraphqlRequest<IDeleteBlogTargetCategoryInput> {}

export interface IDeleteBlogTargetCategoryResponse
  extends IBaseGraphqlResponse<IDeleteBlogTargetCategoryInput> {
  data: {
    deleteBlogTargetCategory: IDeleteBlogTargetCategoryResult;
  };
  errors: TGraphqlErrors<IDeleteBlogTargetCategoryInput>;
}
