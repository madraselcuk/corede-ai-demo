import { gql } from "graphql-tag";

import {
  IBaseGraphqlRequest,
  IBaseGraphqlResponse,
  TGraphqlErrors,
} from "@common_package";

import { ICommentListResult } from "../resolverTypes/comment-list.result";
import { ICommentListInput } from "../resolverTypes";
import { commentListItemResultFragment } from "./comment-list.item.result.fragment";

export const commentListByRelatedQuery = gql`
  ${commentListItemResultFragment}

  query commentListByRelated($input: CommentListInput) {
    commentListByRelated(input: $input) {
      data {
        ...CommentListItemResultFragment
      }
      count
    }
  }
`;

export interface ICommentListByRelatedRequest
  extends IBaseGraphqlRequest<ICommentListInput, undefined> {}

export interface ICommentListByRelatedResponse
  extends IBaseGraphqlResponse<ICommentListInput> {
  data: {
    commentListByRelated: ICommentListResult;
  };
  errors: TGraphqlErrors<ICommentListInput>;
}
