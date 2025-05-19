import { gql } from 'graphql-tag';

import {
  IBaseGraphqlRequest,
  IBaseGraphqlResponse,
  TGraphqlErrors,
} from '@common_package';
import { IBlogCategoriesInput } from '../resolverTypes/blogCategories.input';
import { IBlogCategoriesResult } from '../resolverTypes/blogCategories.result';
import { blogCategoriesItemResultFragment } from './blogCategory-result.fragment';

export const blogCategoriesQuery = gql`
  ${blogCategoriesItemResultFragment}

  query blogCategories($input: BlogCategoriesInput) {
    blogCategories(input: $input) {
      data {
        ...BlogCategoriesItemResultFragment
      }
      count
    }
  }
`;

export interface IBlogCategoriesRequest
  extends IBaseGraphqlRequest<IBlogCategoriesInput, undefined> {}

export interface IBlogCategoriesResponse
  extends IBaseGraphqlResponse<IBlogCategoriesInput> {
  data: {
    blogCategories: IBlogCategoriesResult;
  };
  errors: TGraphqlErrors<IBlogCategoriesInput>;
}
