import {
  IBaseGraphqlRequest,
  IBaseGraphqlResponse,
  TGraphqlErrors,
} from "@common_package";
import gql from "graphql-tag";
import { ICommentDeleteInput, ICommentDeleteResult } from "../resolverTypes";

export const commentDeleteQuery = gql`
  mutation commentDelete($input: CommentDeleteInput!) {
    commentDelete(input: $input) {
      success
    }
  }
`;

export interface ICommentDeleteRequest
  extends IBaseGraphqlRequest<ICommentDeleteInput> {}

export interface ICommentDeleteResponse
  extends IBaseGraphqlResponse<ICommentDeleteInput> {
  data: {
    commentDelete: ICommentDeleteResult;
  };
  errors: TGraphqlErrors<ICommentDeleteInput>;
}
