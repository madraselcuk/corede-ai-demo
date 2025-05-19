import {
  IBaseGraphqlRequest,
  IBaseGraphqlResponse,
  TGraphqlErrors,
} from "@common_package";
import gql from "graphql-tag";
import {
  INotificationUpdateInput,
  INotificationUpdateFilterInput,
} from "../resolverTypes/notification-update.input";
import { INotificationUpdateResult } from "../resolverTypes/notification-update.result";

export const notificationUpdateQuery = gql`
  mutation notificationUpdate(
    $filter: NotificationUpdateFilterInput!
    $input: NotificationUpdateInput!
  ) {
    notificationUpdate(filter: $filter, input: $input) {
      _id
    }
  }
`;

export interface INotificationUpdateRequest
  extends IBaseGraphqlRequest<INotificationUpdateInput, INotificationUpdateFilterInput> {}

export interface INotificationUpdateResponse
  extends IBaseGraphqlResponse<INotificationUpdateInput> {
  data: {
    notificationUpdate: INotificationUpdateResult;
  };
  errors: TGraphqlErrors<INotificationUpdateInput>;
}
