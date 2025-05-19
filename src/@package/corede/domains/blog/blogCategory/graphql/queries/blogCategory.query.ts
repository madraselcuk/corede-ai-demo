import { gql } from "graphql-tag";

import {
  IBaseGraphqlRequest,
  IBaseGraphqlResponse,
  TGraphqlErrors,
} from "@common_package";
import { IBlogCategoryInput } from "../resolverTypes/blogCategory.input";
import { IBlogCategoryResult } from "../resolverTypes/blogCategory.result";
import { blogCategoryResultFragment } from "./blogCategory-result.fragment";

export const blogCategoryQuery = gql`
  ${blogCategoryResultFragment}

  query blogCategory($input: BlogCategoryInput!) {
    blogCategory(input: $input) {
      ...BlogCategoryResultFragment
    }
  }
`;

export interface IBlogCategoryRequest
  extends IBaseGraphqlRequest<IBlogCategoryInput, undefined> {}

export interface IBlogCategoryResponse
  extends IBaseGraphqlResponse<IBlogCategoryInput> {
  data: {
    blogCategory: IBlogCategoryResult;
  };
  errors: TGraphqlErrors<IBlogCategoryInput>;
}
