import { gql } from 'graphql-tag';
import {
  IBaseGraphqlRequest,
  IBaseGraphqlResponse,
  TGraphqlErrors,
} from '@common_package';
import { IBlogListPublicInput, IBlogListPublicResult } from '../resolverTypes';
import { blogListItemPublicResultFragment } from './blog-list-public.item.result.fragment';

export const blogListPublicQuery = gql`
  ${blogListItemPublicResultFragment}

  query blogListPublic($input: BlogListPublicInput) {
    blogListPublic(input: $input) {
      data {
        ...BlogListItemPublicResultFragment
      }
      count
    }
  }
`;

export interface IBlogListPublicRequest
  extends IBaseGraphqlRequest<IBlogListPublicInput, undefined> {}

export interface IBlogListPublicResponse
  extends IBaseGraphqlResponse<IBlogListPublicInput> {
  data: {
    blogListPublic: IBlogListPublicResult;
  };
  errors: TGraphqlErrors<IBlogListPublicInput>;
}
