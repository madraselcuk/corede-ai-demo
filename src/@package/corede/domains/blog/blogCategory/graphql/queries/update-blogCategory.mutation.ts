import {
  IBaseGraphqlRequest,
  IBaseGraphqlResponse,
  TGraphqlErrors,
} from '@common_package';
import gql from 'graphql-tag';
import {
  IUpdateBlogCategoryInput,
  IUpdateBlogCategoryFilterInput,
} from '../resolverTypes/update-blogCategory.input';
import { IUpdateBlogCategoryResult } from '../resolverTypes/update-blogCategory.result';

export const updateBlogCategoryQuery = gql`
  mutation updateBlogCategory(
    $filter: UpdateBlogCategoryFilterInput!
    $input: UpdateBlogCategoryInput!
  ) {
    updateBlogCategory(filter: $filter, input: $input) {
      _id
    }
  }
`;

export interface IUpdateBlogCategoryRequest
  extends IBaseGraphqlRequest<IUpdateBlogCategoryInput, IUpdateBlogCategoryFilterInput> {}

export interface IUpdateBlogCategoryResponse
  extends IBaseGraphqlResponse<IUpdateBlogCategoryInput> {
  data: {
    updateBlogCategory: IUpdateBlogCategoryResult;
  };
  errors: TGraphqlErrors<IUpdateBlogCategoryInput>;
}
