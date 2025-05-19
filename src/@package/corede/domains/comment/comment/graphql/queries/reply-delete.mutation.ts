import {
  IBaseGraphqlRequest,
  IBaseGraphqlResponse,
  TGraphqlErrors,
} from '@common_package';
import gql from 'graphql-tag';
import { IReplyDeleteInput, IReplyDeleteResult } from '../resolverTypes';

export const replyDeleteQuery = gql`
  mutation replyDelete($input: ReplyDeleteInput!) {
    replyDelete(input: $input) {
      success
    }
  }
`;

export interface IReplyDeleteRequest
  extends IBaseGraphqlRequest<IReplyDeleteInput> {}

export interface IReplyDeleteResponse
  extends IBaseGraphqlResponse<IReplyDeleteInput> {
  data: {
    replyDelete: IReplyDeleteResult;
  };
  errors: TGraphqlErrors<IReplyDeleteInput>;
}
