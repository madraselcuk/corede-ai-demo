import { gql } from "graphql-tag";

import {
  IBaseGraphqlRequest,
  IBaseGraphqlResponse,
  TGraphqlErrors,
} from "@common_package";
import { IWebNotificationDetailInput } from "../resolverTypes/webNotification-detail.input";
import { IWebNotificationDetailResult } from "../resolverTypes/webNotification-detail.result";
import { webNotificationDetailResultFragment } from "./webNotification-detail.result.fragment";

export const webNotificationDetailQuery = gql`
  ${webNotificationDetailResultFragment}

  query webNotificationDetail($input: WebNotificationDetailInput!) {
    webNotificationDetail(input: $input) {
      ...WebNotificationDetailResultFragment
    }
  }
`;

export interface IWebNotificationDetailRequest
  extends IBaseGraphqlRequest<IWebNotificationDetailInput, undefined> {}

export interface IWebNotificationDetailResponse
  extends IBaseGraphqlResponse<IWebNotificationDetailInput> {
  data: {
    webNotificationDetail: IWebNotificationDetailResult;
  };
  errors: TGraphqlErrors<IWebNotificationDetailInput>;
}
