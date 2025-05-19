import {
  IBaseGraphqlRequest,
  IBaseGraphqlResponse,
  TGraphqlErrors,
} from '@common_package';
import gql from 'graphql-tag';
import { IDeleteLeadTagInput } from '../resolverTypes/delete-leadTag.input';
import { IDeleteLeadTagResult } from '../resolverTypes/delete-leadTag.result';

export const deleteLeadTagQuery = gql`
  mutation deleteLeadTag(
    $input: DeleteLeadTagInput!
    $filter: DeleteLeadTagFilterInput
  ) {
    deleteLeadTag(input: $input, filter: $filter) {
      success
    }
  }
`;

export interface IDeleteLeadTagRequest
  extends IBaseGraphqlRequest<IDeleteLeadTagInput> {}

export interface IDeleteLeadTagResponse
  extends IBaseGraphqlResponse<IDeleteLeadTagInput> {
  data: {
    deleteLeadTag: IDeleteLeadTagResult;
  };
  errors: TGraphqlErrors<IDeleteLeadTagInput>;
}
