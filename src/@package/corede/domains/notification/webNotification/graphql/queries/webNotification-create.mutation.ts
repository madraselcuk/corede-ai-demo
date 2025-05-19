import {
  IBaseGraphqlRequest,
  IBaseGraphqlResponse,
  TGraphqlErrors,
} from '@common_package';
import gql from 'graphql-tag';
import { IWebNotificationCreateInput, IWebNotificationCreateResult } from '../resolverTypes';

export const webNotificationCreateQuery = gql`
  mutation webNotificationCreate($input: WebNotificationCreateInput!) {
    webNotificationCreate(input: $input) {
      _id
    }
  }
`;

export interface IWebNotificationCreateRequest
  extends IBaseGraphqlRequest<IWebNotificationCreateInput> {}

export interface IWebNotificationCreateResponse
  extends IBaseGraphqlResponse<IWebNotificationCreateInput> {
  data: {
    webNotificationCreate: IWebNotificationCreateResult;
  };
  errors: TGraphqlErrors<IWebNotificationCreateInput>;
}
