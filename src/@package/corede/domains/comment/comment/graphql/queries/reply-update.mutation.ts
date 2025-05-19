import {
  IBaseGraphqlRequest,
  IBaseGraphqlResponse,
  TGraphqlErrors,
} from '@common_package';
import gql from 'graphql-tag';
import {
  IReplyUpdateInput,
  IReplyUpdateFilterInput,
} from '../resolverTypes/reply-update.input';
import { IReplyUpdateResult } from '../resolverTypes/reply-update.result';

export const replyUpdateQuery = gql`
  mutation replyUpdate(
    $filter: ReplyUpdateFilterInput!
    $input: ReplyUpdateInput!
  ) {
    replyUpdate(filter: $filter, input: $input) {
      _id
    }
  }
`;

export interface IReplyUpdateRequest
  extends IBaseGraphqlRequest<IReplyUpdateInput, IReplyUpdateFilterInput> {}

export interface IReplyUpdateResponse
  extends IBaseGraphqlResponse<IReplyUpdateInput> {
  data: {
    replyUpdate: IReplyUpdateResult;
  };
  errors: TGraphqlErrors<IReplyUpdateInput>;
}
