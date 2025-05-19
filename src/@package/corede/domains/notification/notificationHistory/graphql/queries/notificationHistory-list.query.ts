import { gql } from "graphql-tag";
import { DocumentNode } from 'graphql';
import {
  IBaseGraphqlRequest,
  IBaseGraphqlResponse,
  TGraphqlErrors,
} from "@common_package";

import { INotificationHistoryListResult } from "../resolverTypes/notificationHistory-list.result";
import { INotificationHistoryListInput } from "../resolverTypes";
import { notificationHistoryListItemResultFragment } from "./notificationHistory-list.item.result.fragment";

/**
 * @param params.fragment needs to be derived from `NotificationHistoryListItemResult` fragment
 * @param params.fragmentName needs to be unique
 */
export function notificationHistoryListQuery(params?: {
  fragment: DocumentNode;
  fragmentName: string;
}): DocumentNode {
  return gql`
    ${params?.fragment ?? notificationHistoryListItemResultFragment}

    query notificationHistoryList($input: NotificationHistoryListInput) {
      notificationHistoryList(input: $input) {
        data {
          ...${params?.fragmentName ?? 'NotificationHistoryListItemResultFragment'}
        }
        count
      }
    }
  `;
}

export interface INotificationHistoryListRequest
  extends IBaseGraphqlRequest<INotificationHistoryListInput, undefined> {}

export interface INotificationHistoryListResponse
  extends IBaseGraphqlResponse<INotificationHistoryListInput> {
  data: {
    notificationHistoryList: INotificationHistoryListResult;
  };
  errors: TGraphqlErrors<INotificationHistoryListInput>;
}
