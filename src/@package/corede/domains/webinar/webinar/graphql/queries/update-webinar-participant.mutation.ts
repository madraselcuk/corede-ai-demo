import {
  IBaseGraphqlRequest,
  IBaseGraphqlResponse,
  TGraphqlErrors,
} from '@common_package';
import gql from 'graphql-tag';
import { IUpdateWebinarParticipantFilterInput, IUpdateWebinarParticipantInput } from '../resolverTypes/update-webinar-participant.input';
import { IUpdateWebinarParticipantResult } from '../resolverTypes/update-webinar-participant.result';

export const updateWebinarParticipantQuery = gql`
  mutation updateWebinarParticipant(
    $filter: UpdateWebinarParticipantFilterInput!
    $input: UpdateWebinarParticipantInput!
  ) {
    updateWebinarParticipant(filter: $filter, input: $input) {
      _id
    }
  }
`;

export interface IUpdateWebinarParticipantRequest
  extends IBaseGraphqlRequest<IUpdateWebinarParticipantInput, IUpdateWebinarParticipantFilterInput> {}

export interface IUpdateWebinarParticipantResponse
  extends IBaseGraphqlResponse<IUpdateWebinarParticipantInput> {
  data: {
    updateWebinarParticipant: IUpdateWebinarParticipantResult;
  };
  errors: TGraphqlErrors<IUpdateWebinarParticipantInput>;
}
