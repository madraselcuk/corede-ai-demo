import { gql } from "graphql-tag";

import {
  IBaseGraphqlRequest,
  IBaseGraphqlResponse,
  TGraphqlErrors,
} from "@common_package";

import { IWebNotificationListOwnResult } from "../resolverTypes/webNotification-list-own.result";
import { IWebNotificationListOwnInput } from "../resolverTypes";
import { webNotificationListOwnItemResultFragment } from "./webNotification-list-own.item.result.fragment";

export const webNotificationListOwnQuery = gql`
  ${webNotificationListOwnItemResultFragment}

  query webNotificationListOwn($input: WebNotificationListOwnInput) {
    webNotificationListOwn(input: $input) {
      data {
        ...WebNotificationListOwnItemResultFragment
      }
      count
    }
  }
`;

export interface IWebNotificationListOwnRequest
  extends IBaseGraphqlRequest<IWebNotificationListOwnInput, undefined> {}

export interface IWebNotificationListOwnResponse
  extends IBaseGraphqlResponse<IWebNotificationListOwnInput> {
  data: {
    webNotificationListOwn: IWebNotificationListOwnResult;
  };
  errors: TGraphqlErrors<IWebNotificationListOwnInput>;
}
