import { gql } from "graphql-tag";

import {
  IBaseGraphqlRequest,
  IBaseGraphqlResponse,
  TGraphqlErrors,
} from "@common_package";

import { INotificationListOwnResult } from "../resolverTypes/notification-list-own.result";
import { INotificationListOwnInput } from "../resolverTypes";
import { notificationListOwnItemResultFragment } from "./notification-list-own.item.result.fragment";

export const notificationListOwnQuery = gql`
  ${notificationListOwnItemResultFragment}

  query notificationListOwn($input: NotificationListOwnInput) {
    notificationListOwn(input: $input) {
      data {
        ...NotificationListOwnItemResultFragment
      }
      count
    }
  }
`;

export interface INotificationListOwnRequest
  extends IBaseGraphqlRequest<INotificationListOwnInput, undefined> {}

export interface INotificationListOwnResponse
  extends IBaseGraphqlResponse<INotificationListOwnInput> {
  data: {
    notificationListOwn: INotificationListOwnResult;
  };
  errors: TGraphqlErrors<INotificationListOwnInput>;
}
