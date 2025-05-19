import {
  IBaseGraphqlRequest,
  IBaseGraphqlResponse,
  TGraphqlErrors,
} from '@common_package';
import gql from 'graphql-tag';
import { INotificationCreateInput, INotificationCreateResult } from '../resolverTypes';

export const notificationCreateQuery = gql`
  mutation notificationCreate($input: NotificationCreateInput!) {
    notificationCreate(input: $input) {
      _id
    }
  }
`;

export interface INotificationCreateRequest
  extends IBaseGraphqlRequest<INotificationCreateInput> {}

export interface INotificationCreateResponse
  extends IBaseGraphqlResponse<INotificationCreateInput> {
  data: {
    notificationCreate: INotificationCreateResult;
  };
  errors: TGraphqlErrors<INotificationCreateInput>;
}
