import {
  IBaseGraphqlRequest,
  IBaseGraphqlResponse,
  TGraphqlErrors,
} from '@common_package';
import gql from 'graphql-tag';
import { IWebNotificationReadAllOwnResult } from '../resolverTypes/webNotification-read-all-own.result';

export const webNotificationReadAllOwnQuery = gql`
  mutation webNotificationReadAllOwn {
    webNotificationReadAllOwn {
      success
    }
  }
`;

export interface IWebNotificationReadAllOwnRequest
  extends IBaseGraphqlRequest<undefined> {}

export interface IWebNotificationReadAllOwnResponse
  extends IBaseGraphqlResponse<undefined> {
  data: {
    webNotificationReadAllOwn: IWebNotificationReadAllOwnResult;
  };
  errors: TGraphqlErrors<undefined>;
}
