import {
  IBaseGraphqlRequest,
  IBaseGraphqlResponse,
  TGraphqlErrors,
} from '@common_package';
import gql from 'graphql-tag';
import {
  IUpdateBlogTargetCategoryInput,
  IUpdateBlogTargetCategoryFilterInput,
} from '../resolverTypes/update-blogTargetCategory.input';
import { IUpdateBlogTargetCategoryResult } from '../resolverTypes/update-blogTargetCategory.result';

export const updateBlogTargetCategoryQuery = gql`
  mutation updateBlogTargetCategory(
    $filter: UpdateBlogTargetCategoryFilterInput!
    $input: UpdateBlogTargetCategoryInput!
  ) {
    updateBlogTargetCategory(filter: $filter, input: $input) {
      _id
    }
  }
`;

export interface IUpdateBlogTargetCategoryRequest
  extends IBaseGraphqlRequest<IUpdateBlogTargetCategoryInput, IUpdateBlogTargetCategoryFilterInput> {}

export interface IUpdateBlogTargetCategoryResponse
  extends IBaseGraphqlResponse<IUpdateBlogTargetCategoryInput> {
  data: {
    updateBlogTargetCategory: IUpdateBlogTargetCategoryResult;
  };
  errors: TGraphqlErrors<IUpdateBlogTargetCategoryInput>;
}
