import { gql } from "graphql-tag";

import {
  IBaseGraphqlRequest,
  IBaseGraphqlResponse,
  TGraphqlErrors,
} from "@common_package";

import { ICommentListResult } from "../resolverTypes/comment-list.result";
import { ICommentListInput } from "../resolverTypes";
import { commentListItemResultFragment } from "./comment-list.item.result.fragment";

export const commentListQuery = gql`
  ${commentListItemResultFragment}

  query commentList($input: CommentListInput) {
    commentList(input: $input) {
      data {
        ...CommentListItemResultFragment
      }
      count
    }
  }
`;

export interface ICommentListRequest
  extends IBaseGraphqlRequest<ICommentListInput, undefined> {}

export interface ICommentListResponse
  extends IBaseGraphqlResponse<ICommentListInput> {
  data: {
    commentList: ICommentListResult;
  };
  errors: TGraphqlErrors<ICommentListInput>;
}
