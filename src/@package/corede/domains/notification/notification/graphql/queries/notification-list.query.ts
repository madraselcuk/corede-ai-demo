import { gql } from "graphql-tag";

import {
  IBaseGraphqlRequest,
  IBaseGraphqlResponse,
  TGraphqlErrors,
} from "@common_package";

import { INotificationListResult } from "../resolverTypes/notification-list.result";
import { INotificationListOwnInput } from "../resolverTypes";
import { notificationListItemResultFragment } from "./notification-list.item.result.fragment";

export const notificationListQuery = gql`
  ${notificationListItemResultFragment}

  query notificationList($input: NotificationListInput) {
    notificationList(input: $input) {
      data {
        ...NotificationListItemResultFragment
      }
      count
    }
  }
`;

export interface INotificationListRequest
  extends IBaseGraphqlRequest<INotificationListOwnInput, undefined> {}

export interface INotificationListResponse
  extends IBaseGraphqlResponse<INotificationListOwnInput> {
  data: {
    notificationList: INotificationListResult;
  };
  errors: TGraphqlErrors<INotificationListOwnInput>;
}
