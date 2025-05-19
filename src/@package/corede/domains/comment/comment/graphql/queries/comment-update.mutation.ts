import {
  IBaseGraphqlRequest,
  IBaseGraphqlResponse,
  TGraphqlErrors,
} from "@common_package";
import gql from "graphql-tag";
import {
  ICommentUpdateInput,
  ICommentUpdateFilterInput,
} from "../resolverTypes/comment-update.input";
import { ICommentUpdateResult } from "../resolverTypes/comment-update.result";

export const commentUpdateQuery = gql`
  mutation commentUpdate(
    $filter: CommentUpdateFilterInput!
    $input: CommentUpdateInput!
  ) {
    commentUpdate(filter: $filter, input: $input) {
      _id
    }
  }
`;

export interface ICommentUpdateRequest
  extends IBaseGraphqlRequest<ICommentUpdateInput, ICommentUpdateFilterInput> {}

export interface ICommentUpdateResponse
  extends IBaseGraphqlResponse<ICommentUpdateInput> {
  data: {
    commentUpdate: ICommentUpdateResult;
  };
  errors: TGraphqlErrors<ICommentUpdateInput>;
}
