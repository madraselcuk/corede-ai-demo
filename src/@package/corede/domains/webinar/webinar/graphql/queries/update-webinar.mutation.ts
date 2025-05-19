import {
  IBaseGraphqlRequest,
  IBaseGraphqlResponse,
  TGraphqlErrors,
} from '@common_package';
import gql from 'graphql-tag';
import {
  IUpdateWebinarInput,
  IUpdateWebinarFilterInput,
} from '../resolverTypes/update-webinar.input';
import { IUpdateWebinarResult } from '../resolverTypes/update-webinar.result';

export const updateWebinarQuery = gql`
  mutation updateWebinar(
    $filter: UpdateWebinarFilterInput!
    $input: UpdateWebinarInput!
  ) {
    updateWebinar(filter: $filter, input: $input) {
      _id
    }
  }
`;

export interface IUpdateWebinarRequest
  extends IBaseGraphqlRequest<IUpdateWebinarInput, IUpdateWebinarFilterInput> {}

export interface IUpdateWebinarResponse
  extends IBaseGraphqlResponse<IUpdateWebinarInput> {
  data: {
    updateWebinar: IUpdateWebinarResult;
  };
  errors: TGraphqlErrors<IUpdateWebinarInput>;
}
