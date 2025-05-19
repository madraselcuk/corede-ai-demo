import { gql } from 'graphql-tag';

import { IBaseGraphqlRequest, IBaseGraphqlResponse, TGraphqlErrors } from '@common_package';
import { IWebinarInput } from '../resolverTypes/webinar.input';
import { IWebinarResult } from '../resolverTypes/webinar.result';
import { webinarResultFragment } from './webinar-result.fragment';

export const webinarQuery = gql`
  ${webinarResultFragment}

  query webinar($input: WebinarInput!) {
    webinar(input: $input) {
      ...WebinarResultFragment
    }
  }
`;

export interface IWebinarRequest
  extends IBaseGraphqlRequest<IWebinarInput, undefined> {}

export interface IWebinarResponse extends IBaseGraphqlResponse<IWebinarInput> {
  data: {
    webinar: IWebinarResult;
  };
  errors: TGraphqlErrors<IWebinarInput>;
}
