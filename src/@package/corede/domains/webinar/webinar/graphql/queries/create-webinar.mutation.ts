import {
  IBaseGraphqlRequest,
  IBaseGraphqlResponse,
  TGraphqlErrors,
} from '@common_package';
import gql from 'graphql-tag';
import { ICreateWebinarInput } from '../resolverTypes/create-webinar.input';
import { ICreateWebinarResult } from '../resolverTypes/create-webinar.result';

export const createWebinarQuery = gql`
  mutation createWebinar($input: CreateWebinarInput!) {
    createWebinar(input: $input) {
      _id
    }
  }
`;

export interface ICreateWebinarRequest
  extends IBaseGraphqlRequest<ICreateWebinarInput> {}

export interface ICreateWebinarResponse
  extends IBaseGraphqlResponse<ICreateWebinarInput> {
  data: {
    createWebinar: ICreateWebinarResult;
  };
  errors: TGraphqlErrors<ICreateWebinarInput>;
}
