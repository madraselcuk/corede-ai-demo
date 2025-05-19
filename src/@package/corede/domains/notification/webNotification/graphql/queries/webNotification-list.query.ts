import { gql } from "graphql-tag";

import {
  IBaseGraphqlRequest,
  IBaseGraphqlResponse,
  TGraphqlErrors,
} from "@common_package";

import { IWebNotificationListResult } from "../resolverTypes/webNotification-list.result";
import { IWebNotificationListInput } from "../resolverTypes";
import { webNotificationListItemResultFragment } from "./webNotification-list.item.result.fragment";

export const webNotificationListQuery = gql`
  ${webNotificationListItemResultFragment}

  query webNotificationList($input: WebNotificationListInput) {
    webNotificationList(input: $input) {
      data {
        ...WebNotificationListItemResultFragment
      }
      count
    }
  }
`;

export interface IWebNotificationListRequest
  extends IBaseGraphqlRequest<IWebNotificationListInput, undefined> {}

export interface IWebNotificationListResponse
  extends IBaseGraphqlResponse<IWebNotificationListInput> {
  data: {
    webNotificationList: IWebNotificationListResult;
  };
  errors: TGraphqlErrors<IWebNotificationListInput>;
}
