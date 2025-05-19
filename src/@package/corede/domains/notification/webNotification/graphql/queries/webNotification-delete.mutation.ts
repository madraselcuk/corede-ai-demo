import {
  IBaseGraphqlRequest,
  IBaseGraphqlResponse,
  TGraphqlErrors,
} from "@common_package";
import gql from "graphql-tag";
import { IWebNotificationDeleteInput, IWebNotificationDeleteResult } from "../resolverTypes";

export const webNotificationDeleteQuery = gql`
  mutation webNotificationDelete($input: WebNotificationDeleteInput!) {
    webNotificationDelete(input: $input) {
      success
    }
  }
`;

export interface IWebNotificationDeleteRequest
  extends IBaseGraphqlRequest<IWebNotificationDeleteInput> {}

export interface IWebNotificationDeleteResponse
  extends IBaseGraphqlResponse<IWebNotificationDeleteInput> {
  data: {
    webNotificationDelete: IWebNotificationDeleteResult;
  };
  errors: TGraphqlErrors<IWebNotificationDeleteInput>;
}
