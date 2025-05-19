import { gql } from "graphql-tag";

import {
  IBaseGraphqlRequest,
  IBaseGraphqlResponse,
  TGraphqlErrors,
} from "@common_package";
import { ICommentDetailInput } from "../resolverTypes/comment-detail.input";
import { ICommentDetailResult } from "../resolverTypes/comment-detail.result";
import { commentDetailResultFragment } from "./comment-detail.result.fragment";

export const commentDetailQuery = gql`
  ${commentDetailResultFragment}

  query commentDetail($input: CommentDetailInput!) {
    commentDetail(input: $input) {
      ...CommentDetailResultFragment
    }
  }
`;

export interface ICommentDetailRequest
  extends IBaseGraphqlRequest<ICommentDetailInput, undefined> {}

export interface ICommentDetailResponse
  extends IBaseGraphqlResponse<ICommentDetailInput> {
  data: {
    commentDetail: ICommentDetailResult;
  };
  errors: TGraphqlErrors<ICommentDetailInput>;
}
