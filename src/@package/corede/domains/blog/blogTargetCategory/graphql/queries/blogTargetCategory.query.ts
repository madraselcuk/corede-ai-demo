import { gql } from 'graphql-tag';

import { IBaseGraphqlRequest, IBaseGraphqlResponse, TGraphqlErrors } from '@common_package';
import { IBlogTargetCategoryInput } from '../resolverTypes/blogTargetCategory.input';
import { IBlogTargetCategoryResult } from '../resolverTypes/blogTargetCategory.result';
import { blogTargetCategoryResultFragment } from './blogTargetCategory-result.fragment';

export const blogTargetCategoryQuery = gql`
  ${blogTargetCategoryResultFragment}

  query blogTargetCategory($input: BlogTargetCategoryInput!) {
    blogTargetCategory(input: $input) {
      ...BlogTargetCategoryResultFragment
    }
  }
`;

export interface IBlogTargetCategoryRequest
  extends IBaseGraphqlRequest<IBlogTargetCategoryInput, undefined> {}

export interface IBlogTargetCategoryResponse extends IBaseGraphqlResponse<IBlogTargetCategoryInput> {
  data: {
    blogTargetCategory: IBlogTargetCategoryResult;
  };
  errors: TGraphqlErrors<IBlogTargetCategoryInput>;
}
