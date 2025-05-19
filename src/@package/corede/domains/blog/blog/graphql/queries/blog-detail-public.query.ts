import { gql } from 'graphql-tag';

import {
  IBaseGraphqlRequest,
  IBaseGraphqlResponse,
  TGraphqlErrors,
} from '@common_package';
import {
  IBlogDetailPublicInput,
  IBlogDetailPublicResult,
} from '../resolverTypes';
import { blogDetailPublicResultFragment } from './blog-detail-public.result.fragment';

export const blogDetailPublicQuery = gql`
  ${blogDetailPublicResultFragment}

  query blogDetailPublic($input: BlogDetailPublicInput!) {
    blogDetailPublic(input: $input) {
      ...BlogDetailPublicResultFragment
    }
  }
`;

export interface IBlogDetailPublicRequest
  extends IBaseGraphqlRequest<IBlogDetailPublicInput, undefined> {}

export interface IBlogDetailPublicResponse
  extends IBaseGraphqlResponse<IBlogDetailPublicInput> {
  data: {
    blogDetailPublic: IBlogDetailPublicResult;
  };
  errors: TGraphqlErrors<IBlogDetailPublicInput>;
}
