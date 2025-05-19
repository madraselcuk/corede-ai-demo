import {
  IBaseGraphqlRequest,
  IBaseGraphqlResponse,
  TGraphqlErrors,
} from '@common_package';
import gql from 'graphql-tag';
import { IReminderCreateInput, IReminderCreateResult } from '../resolverTypes';

export const reminderCreateQuery = gql`
  mutation reminderCreate($input: ReminderCreateInput!) {
    reminderCreate(input: $input) {
      _id
    }
  }
`;

export interface IReminderCreateRequest
  extends IBaseGraphqlRequest<IReminderCreateInput> {}

export interface IReminderCreateResponse
  extends IBaseGraphqlResponse<IReminderCreateInput> {
  data: {
    reminderCreate: IReminderCreateResult;
  };
  errors: TGraphqlErrors<IReminderCreateInput>;
}
