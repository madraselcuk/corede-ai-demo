import { gql } from 'graphql-tag';

import {
  IBaseGraphqlRequest,
  IBaseGraphqlResponse,
  TGraphqlErrors,
} from '@common_package';

import { IReminderListResult } from '../resolverTypes/reminder-list.result';

import { reminderListItemResultFragment } from './reminder-list-item.result.fragment';
import { IReminderListInput } from '../resolverTypes';

export const reminderListQuery = gql`
  ${reminderListItemResultFragment}

  query reminderList($input: ReminderListInput) {
    reminderList(input: $input) {
      data {
        ...ReminderListItemResultFragment
      }
      count
    }
  }
`;

export interface IReminderListRequest
  extends IBaseGraphqlRequest<IReminderListInput, undefined> {}

export interface IReminderListResponse
  extends IBaseGraphqlResponse<IReminderListInput> {
  data: {
    reminderList: IReminderListResult;
  };
  errors: TGraphqlErrors<IReminderListInput>;
}
