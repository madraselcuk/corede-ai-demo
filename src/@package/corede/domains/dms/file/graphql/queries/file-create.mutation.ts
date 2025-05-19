import {
  IBaseGraphqlRequest,
  IBaseGraphqlResponse,
  TGraphqlErrors,
} from '@common_package';
import gql from 'graphql-tag';
import { IFileCreateInput, IFileCreateResult } from '../resolverTypes';

export const fileCreateQuery = gql`
  mutation fileCreate($input: FileCreateInput!) {
    fileCreate(input: $input) {
      _id
    }
  }
`;

export interface IFileCreateRequest
  extends IBaseGraphqlRequest<IFileCreateInput> {}

export interface IFileCreateResponse
  extends IBaseGraphqlResponse<IFileCreateInput> {
  data: {
    fileCreate: IFileCreateResult;
  };
  errors: TGraphqlErrors<IFileCreateInput>;
}
