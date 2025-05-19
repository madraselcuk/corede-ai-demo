import {
  IBaseGraphqlRequest,
  IBaseGraphqlResponse,
  TGraphqlErrors,
} from '@common_package';
import gql from 'graphql-tag';
import {
  IReminderUpdateInput,
  IReminderUpdateFilterInput,
} from '../resolverTypes/reminder-update.input';
import { IReminderUpdateResult } from '../resolverTypes/reminder-update.result';

export const reminderUpdateQuery = gql`
  mutation reminderUpdate(
    $filter: ReminderUpdateFilterInput!
    $input: ReminderUpdateInput!
  ) {
    reminderUpdate(filter: $filter, input: $input) {
      _id
    }
  }
`;

export interface IReminderUpdateRequest
  extends IBaseGraphqlRequest<
    IReminderUpdateInput,
    IReminderUpdateFilterInput
  > {}

export interface IReminderUpdateResponse
  extends IBaseGraphqlResponse<IReminderUpdateInput> {
  data: {
    reminderUpdate: IReminderUpdateResult;
  };
  errors: TGraphqlErrors<IReminderUpdateInput>;
}
