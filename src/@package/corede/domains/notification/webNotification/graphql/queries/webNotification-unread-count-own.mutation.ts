import {
  IBaseGraphqlRequest,
  IBaseGraphqlResponse,
  TGraphqlErrors,
} from "@common_package";
import gql from "graphql-tag";
import { IWebNotificationUnreadCountOwnResult } from "../resolverTypes";

export const webNotificationUnreadCountOwnQuery = gql`
  query webNotificationUnreadCountOwn {
    webNotificationUnreadCountOwn {
      count
    }
  }
`;

export interface IWebNotificationUnreadCountOwnRequest
  extends IBaseGraphqlRequest<undefined> {}

export interface IWebNotificationUnreadCountOwnResponse
  extends IBaseGraphqlResponse<undefined> {
  data: {
    webNotificationUnreadCountOwn: IWebNotificationUnreadCountOwnResult;
  };
  errors: TGraphqlErrors<undefined>;
}
