import {
  IBaseGraphqlRequest,
  IBaseGraphqlResponse,
  TGraphqlErrors,
} from "@common_package";
import gql from "graphql-tag";
import {
  IReminderScheduleInput,
  IReminderScheduleFilterInput,
} from "../resolverTypes/reminder-schedule.input";
import { IReminderScheduleResult } from "../resolverTypes";

export const reminderScheduleQuery = gql`
  mutation reminderSchedule(
    $filter: ReminderScheduleFilterInput!
    $input: ReminderScheduleInput!
  ) {
    reminderSchedule(filter: $filter, input: $input) {
      success
    }
  }
`;

export interface IReminderScheduleRequest
  extends IBaseGraphqlRequest<
    IReminderScheduleInput,
    IReminderScheduleFilterInput
  > {}

export interface IReminderScheduleResponse
  extends IBaseGraphqlResponse<IReminderScheduleInput> {
  data: {
    reminderSchedule: IReminderScheduleResult;
  };
  errors: TGraphqlErrors<IReminderScheduleInput>;
}
