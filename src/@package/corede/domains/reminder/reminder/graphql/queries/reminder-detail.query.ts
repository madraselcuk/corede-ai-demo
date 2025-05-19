import { gql } from 'graphql-tag';

import {
  IBaseGraphqlRequest,
  IBaseGraphqlResponse,
  TGraphqlErrors,
} from '@common_package';

import { reminderDetailResultFragment } from './reminder-detail.result.fragment';
import { IReminderDetailInput } from '../resolverTypes/reminder-detail.input';
import { IReminderDetailResult } from '../resolverTypes/reminder-detail.result';

export const reminderDetailQuery = gql`
  ${reminderDetailResultFragment}

  query reminderDetail($input: ReminderDetailInput!) {
    reminderDetail(input: $input) {
      ...ReminderDetailResultFragment
    }
  }
`;

export interface IReminderDetailRequest
  extends IBaseGraphqlRequest<IReminderDetailInput, undefined> {}

export interface IReminderDetailResponse
  extends IBaseGraphqlResponse<IReminderDetailInput> {
  data: {
    reminderDetail: IReminderDetailResult;
  };
  errors: TGraphqlErrors<IReminderDetailInput>;
}
