import { gql } from 'graphql-tag';

import { IBaseGraphqlRequest, IBaseGraphqlResponse, TGraphqlErrors } from '@common_package';
import { IWebinarsInput } from '../resolverTypes/webinars.input';
import { IWebinarsResult } from '../resolverTypes/webinars.result';
import { webinarResultFragment } from './webinar-result.fragment';

export const webinarsQuery = gql`
  ${webinarResultFragment}

  query webinars($input: WebinarsInput) {
    webinars(input: $input) {
      data {
        ...WebinarResultFragment
      }
      count
    }
  }
`;

export interface IWebinarsRequest
  extends IBaseGraphqlRequest<IWebinarsInput, undefined> {}

export interface IWebinarsResponse extends IBaseGraphqlResponse<IWebinarsInput> {
  data: {
    webinars: IWebinarsResult;
  };
  errors: TGraphqlErrors<IWebinarsInput>;
}
