import {
  IBaseGraphqlRequest,
  IBaseGraphqlResponse,
  TGraphqlErrors,
} from '@common_package';
import gql from 'graphql-tag';
import {
  IReplyCreateFilterInput,
  IReplyCreateInput,
  IReplyCreateResult,
} from '../resolverTypes';

export const replyCreateQuery = gql`
  mutation replyCreate(
    $filter: ReplyCreateFilterInput!
    $input: ReplyCreateInput!
  ) {
    replyCreate(filter: $filter, input: $input) {
      _id
    }
  }
`;

export interface IReplyCreateRequest
  extends IBaseGraphqlRequest<IReplyCreateInput, IReplyCreateFilterInput> {}

export interface IReplyCreateResponse
  extends IBaseGraphqlResponse<IReplyCreateInput> {
  data: {
    replyCreate: IReplyCreateResult;
  };
  errors: TGraphqlErrors<IReplyCreateInput>;
}
