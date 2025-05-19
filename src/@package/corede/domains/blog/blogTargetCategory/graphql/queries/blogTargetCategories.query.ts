import { gql } from 'graphql-tag';

import { IBaseGraphqlRequest, IBaseGraphqlResponse, TGraphqlErrors } from '@common_package';
import { IBlogTargetCategoriesInput } from '../resolverTypes/blogTargetCategories.input';
import { IBlogTargetCategoriesResult } from '../resolverTypes/blogTargetCategories.result';
import { blogTargetCategoryResultFragment } from './blogTargetCategory-result.fragment';

export const blogTargetCategoriesQuery = gql`
  ${blogTargetCategoryResultFragment}

  query blogTargetCategories($input: BlogTargetCategoriesInput) {
    blogTargetCategories(input: $input) {
      data {
        ...BlogTargetCategoryResultFragment
      }
      count
    }
  }
`;

export interface IBlogTargetCategoriesRequest
  extends IBaseGraphqlRequest<IBlogTargetCategoriesInput, undefined> {}

export interface IBlogTargetCategoriesResponse extends IBaseGraphqlResponse<IBlogTargetCategoriesInput> {
  data: {
    blogTargetCategories: IBlogTargetCategoriesResult;
  };
  errors: TGraphqlErrors<IBlogTargetCategoriesInput>;
}
