import {
  IBaseGraphqlRequest,
  IBaseGraphqlResponse,
  TGraphqlErrors,
} from '@common_package';
import gql from 'graphql-tag';

import {
  IReminderCompleteInput,
  IReminderCompleteResult,
} from '../resolverTypes';

export const reminderCompleteQuery = gql`
  mutation reminderComplete($input: ReminderCompleteInput!) {
    reminderComplete(input: $input) {
      success
    }
  }
`;

export interface IReminderCompleteRequest
  extends IBaseGraphqlRequest<IReminderCompleteInput> {}

export interface IReminderCompleteResponse
  extends IBaseGraphqlResponse<IReminderCompleteInput> {
  data: {
    reminderComplete: IReminderCompleteResult;
  };
  errors: TGraphqlErrors<IReminderCompleteInput>;
}
