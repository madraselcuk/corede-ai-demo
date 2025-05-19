import { gql } from "graphql-tag";

import {
  IBaseGraphqlRequest,
  IBaseGraphqlResponse,
  TGraphqlErrors,
} from "@common_package";
import { INotificationDetailInput } from "../resolverTypes/notification-detail.input";
import { INotificationDetailResult } from "../resolverTypes/notification-detail.result";
import { notificationDetailResultFragment } from "./notification-detail.result.fragment";

export const notificationDetailQuery = gql`
  ${notificationDetailResultFragment}

  query notificationDetail($input: NotificationDetailInput!) {
    notificationDetail(input: $input) {
      ...NotificationDetailResultFragment
    }
  }
`;

export interface INotificationDetailRequest
  extends IBaseGraphqlRequest<INotificationDetailInput, undefined> {}

export interface INotificationDetailResponse
  extends IBaseGraphqlResponse<INotificationDetailInput> {
  data: {
    notificationDetail: INotificationDetailResult;
  };
  errors: TGraphqlErrors<INotificationDetailInput>;
}
