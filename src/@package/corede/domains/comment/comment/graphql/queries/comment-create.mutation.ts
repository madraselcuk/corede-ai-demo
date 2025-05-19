import {
  IBaseGraphqlRequest,
  IBaseGraphqlResponse,
  TGraphqlErrors,
} from '@common_package';
import gql from 'graphql-tag';
import { ICommentCreateInput, ICommentCreateResult } from '../resolverTypes';

export const commentCreateQuery = gql`
  mutation commentCreate($input: CommentCreateInput!) {
    commentCreate(input: $input) {
      _id
    }
  }
`;

export interface ICommentCreateRequest
  extends IBaseGraphqlRequest<ICommentCreateInput> {}

export interface ICommentCreateResponse
  extends IBaseGraphqlResponse<ICommentCreateInput> {
  data: {
    commentCreate: ICommentCreateResult;
  };
  errors: TGraphqlErrors<ICommentCreateInput>;
}
