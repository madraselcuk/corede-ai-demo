import {
  IBaseGraphqlRequest,
  IBaseGraphqlResponse,
  TGraphqlErrors,
} from '@common_package';
import gql from 'graphql-tag';
import { IReminderDeleteInput, IReminderDeleteResult } from '../resolverTypes';

export const reminderDeleteQuery = gql`
  mutation reminderDelete($input: ReminderDeleteInput!) {
    reminderDelete(input: $input) {
      success
    }
  }
`;

export interface IReminderDeleteRequest
  extends IBaseGraphqlRequest<IReminderDeleteInput> {}

export interface IReminderDeleteResponse
  extends IBaseGraphqlResponse<IReminderDeleteInput> {
  data: {
    reminderDelete: IReminderDeleteResult;
  };
  errors: TGraphqlErrors<IReminderDeleteInput>;
}
