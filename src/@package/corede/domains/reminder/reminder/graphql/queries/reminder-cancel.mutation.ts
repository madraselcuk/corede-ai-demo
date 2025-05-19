import {
  IBaseGraphqlRequest,
  IBaseGraphqlResponse,
  TGraphqlErrors,
} from '@common_package';
import gql from 'graphql-tag';

import { IReminderCancelInput, IReminderCancelResult } from '../resolverTypes';

export const reminderCancelQuery = gql`
  mutation reminderCancel($input: ReminderCancelInput!) {
    reminderCancel(input: $input) {
      success
    }
  }
`;

export interface IReminderCancelRequest
  extends IBaseGraphqlRequest<IReminderCancelInput> {}

export interface IReminderCancelResponse
  extends IBaseGraphqlResponse<IReminderCancelInput> {
  data: {
    reminderCancel: IReminderCancelResult;
  };
  errors: TGraphqlErrors<IReminderCancelInput>;
}
