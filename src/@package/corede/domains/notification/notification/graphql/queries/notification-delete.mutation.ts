import {
  IBaseGraphqlRequest,
  IBaseGraphqlResponse,
  TGraphqlErrors,
} from "@common_package";
import gql from "graphql-tag";
import { INotificationDeleteInput, INotificationDeleteResult } from "../resolverTypes";

export const notificationDeleteQuery = gql`
  mutation notificationDelete($input: NotificationDeleteInput!) {
    notificationDelete(input: $input) {
      success
    }
  }
`;

export interface INotificationDeleteRequest
  extends IBaseGraphqlRequest<INotificationDeleteInput> {}

export interface INotificationDeleteResponse
  extends IBaseGraphqlResponse<INotificationDeleteInput> {
  data: {
    notificationDelete: INotificationDeleteResult;
  };
  errors: TGraphqlErrors<INotificationDeleteInput>;
}
