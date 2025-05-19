import { gql } from "graphql-tag";

import {
  IBaseGraphqlRequest,
  IBaseGraphqlResponse,
  TGraphqlErrors,
} from "@common_package";

import { ICommentListOwnResult } from "../resolverTypes/comment-list-own.result";
import { ICommentListOwnInput } from "../resolverTypes";
import { commentListOwnItemResultFragment } from "./comment-list-own.item.result.fragment";

export const commentListOwnQuery = gql`
  ${commentListOwnItemResultFragment}

  query commentListOwn($input: CommentListOwnInput) {
    commentListOwn(input: $input) {
      data {
        ...CommentListOwnItemResultFragment
      }
      count
    }
  }
`;

export interface ICommentListOwnRequest
  extends IBaseGraphqlRequest<ICommentListOwnInput, undefined> {}

export interface ICommentListOwnResponse
  extends IBaseGraphqlResponse<ICommentListOwnInput> {
  data: {
    commentListOwn: ICommentListOwnResult;
  };
  errors: TGraphqlErrors<ICommentListOwnInput>;
}
