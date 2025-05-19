import { gql } from "graphql-tag";

import {
  IBaseGraphqlRequest,
  IBaseGraphqlResponse,
  TGraphqlErrors,
} from "@common_package";

import { IReminderListResult } from "../resolverTypes/reminder-list.result";

import { reminderListItemResultFragment } from "./reminder-list-item.result.fragment";
import { IReminderListInput } from "../resolverTypes";

export const reminderListByRelatedQuery = gql`
  ${reminderListItemResultFragment}

  query reminderListByRelated($input: ReminderListInput) {
    reminderListByRelated(input: $input) {
      data {
        ...ReminderListItemResultFragment
      }
      count
    }
  }
`;

export interface IReminderListByRelatedRequest
  extends IBaseGraphqlRequest<IReminderListInput, undefined> {}

export interface IReminderListByRelatedResponse
  extends IBaseGraphqlResponse<IReminderListInput> {
  data: {
    reminderListByRelated: IReminderListResult;
  };
  errors: TGraphqlErrors<IReminderListInput>;
}
