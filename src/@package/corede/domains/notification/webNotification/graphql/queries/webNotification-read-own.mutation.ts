import {
  IBaseGraphqlRequest,
  IBaseGraphqlResponse,
  TGraphqlErrors,
} from '@common_package';
import gql from 'graphql-tag';
import { IWebNotificationReadOwnInput } from '../resolverTypes/webNotification-read-own.input';
import { IWebNotificationReadOwnResult } from '../resolverTypes/webNotification-read-own.result';

export const webNotificationReadOwnQuery = gql`
  mutation webNotificationReadOwn($input: WebNotificationReadOwnInput!) {
    webNotificationReadOwn(input: $input) {
      _id
    }
  }
`;

export interface IWebNotificationReadOwnRequest
  extends IBaseGraphqlRequest<IWebNotificationReadOwnInput> {}

export interface IWebNotificationReadOwnResponse
  extends IBaseGraphqlResponse<IWebNotificationReadOwnInput> {
  data: {
    webNotificationReadOwn: IWebNotificationReadOwnResult;
  };
  errors: TGraphqlErrors<IWebNotificationReadOwnInput>;
}
