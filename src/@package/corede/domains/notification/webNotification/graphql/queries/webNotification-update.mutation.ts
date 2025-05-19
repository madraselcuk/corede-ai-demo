import {
  IBaseGraphqlRequest,
  IBaseGraphqlResponse,
  TGraphqlErrors,
} from "@common_package";
import gql from "graphql-tag";
import {
  IWebNotificationUpdateInput,
  IWebNotificationUpdateFilterInput,
} from "../resolverTypes/webNotification-update.input";
import { IWebNotificationUpdateResult } from "../resolverTypes/webNotification-update.result";

export const webNotificationUpdateQuery = gql`
  mutation webNotificationUpdate(
    $filter: WebNotificationUpdateFilterInput!
    $input: WebNotificationUpdateInput!
  ) {
    webNotificationUpdate(filter: $filter, input: $input) {
      _id
    }
  }
`;

export interface IWebNotificationUpdateRequest
  extends IBaseGraphqlRequest<IWebNotificationUpdateInput, IWebNotificationUpdateFilterInput> {}

export interface IWebNotificationUpdateResponse
  extends IBaseGraphqlResponse<IWebNotificationUpdateInput> {
  data: {
    webNotificationUpdate: IWebNotificationUpdateResult;
  };
  errors: TGraphqlErrors<IWebNotificationUpdateInput>;
}
