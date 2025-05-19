import { gql } from "graphql-tag";
import { DocumentNode } from "graphql";

import {
  IBaseGraphqlRequest,
  IBaseGraphqlResponse,
  TGraphqlErrors,
} from "@common_package";
import { INotificationHistoryDetailResult } from "../resolverTypes/notificationHistory-detail.result";
import { notificationHistoryDetailResultFragment } from "./notificationHistory-detail.result.fragment";
import { INotificationHistoryDetailInput } from "../resolverTypes";

/**
 * @param params.fragment needs to be derived from `NotificationHistoryDetailResult` fragment
 * @param params.fragmentName needs to be unique
 */
export function notificationHistoryDetailQuery(params?: {
  fragment: DocumentNode;
  fragmentName: string;
}): DocumentNode {
  return gql`
    ${params?.fragment ?? notificationHistoryDetailResultFragment}

    query notificationHistoryDetail($input: NotificationHistoryDetailInput!) {
      notificationHistoryDetail(input: $input) {
        ...${params?.fragmentName ?? "NotificationHistoryDetailResultFragment"}
      }
    }
  `;
}

export interface INotificationHistoryDetailRequest
  extends IBaseGraphqlRequest<INotificationHistoryDetailInput, undefined> {}

export interface INotificationHistoryDetailResponse
  extends IBaseGraphqlResponse<INotificationHistoryDetailInput> {
  data: {
    notificationHistoryDetail: INotificationHistoryDetailResult;
  };
  errors: TGraphqlErrors<INotificationHistoryDetailInput>;
}
