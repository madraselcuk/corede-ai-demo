import { gql } from 'graphql-tag';

import {
  IBaseGraphqlRequest,
  IBaseGraphqlResponse,
  TGraphqlErrors,
} from '@common_package';
import {
  IWebNotificationDetailInput,
  IWebNotificationDetailResult,
} from '../resolverTypes';
import { webNotificationDetailResultFragment } from './webNotification-detail.result.fragment';

export const webNotificationDetailOwnQuery = gql`
  ${webNotificationDetailResultFragment}

  query webNotificationDetailOwn($input: WebNotificationDetailInput!) {
    webNotificationDetailOwn(input: $input) {
      ...WebNotificationDetailResultFragment
    }
  }
`;

export interface IWebNotificationDetailOwnRequest
  extends IBaseGraphqlRequest<IWebNotificationDetailInput, undefined> {}

export interface IWebNotificationDetailOwnResponse
  extends IBaseGraphqlResponse<IWebNotificationDetailInput> {
  data: {
    webNotificationDetailOwn: IWebNotificationDetailResult;
  };
  errors: TGraphqlErrors<IWebNotificationDetailInput>;
}
