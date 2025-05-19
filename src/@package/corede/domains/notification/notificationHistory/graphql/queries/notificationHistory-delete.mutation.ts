import {
  IBaseGraphqlRequest,
  IBaseGraphqlResponse,
  IBaseResult,
  IEntity,
  TGraphqlErrors,
} from "@common_package";
import gql from "graphql-tag";

export const notificationHistoryDeleteQuery = gql`
  mutation notificationHistoryDelete($input: EntityInput!) {
    notificationHistoryDelete(input: $input) {
      success
    }
  }
`;

export interface INotificationHistoryDeleteRequest
  extends IBaseGraphqlRequest<IEntity> {}

export interface INotificationHistoryDeleteResponse
  extends IBaseGraphqlResponse<IEntity> {
  data: {
    notificationHistoryDelete: IBaseResult;
  };
  errors: TGraphqlErrors<IEntity>;
}
