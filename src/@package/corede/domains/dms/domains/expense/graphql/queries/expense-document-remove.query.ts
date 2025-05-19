import { gql } from 'graphql-tag';

import {
  IBaseGraphqlRequest,
  IBaseGraphqlResponse,
  TGraphqlErrors,
  IEntityFileRemoveInput,
  IEntityFileRemoveResult,
} from '@common_package';

export const expenseDocumentRemoveQuery = gql`
  mutation expenseDocumentRemove($input: EntityFileRemoveInput!) {
    expenseDocumentRemove(input: $input) {
      success
    }
  }
`;

export interface IExpenseDocumentRemoveRequest
  extends IBaseGraphqlRequest<IEntityFileRemoveInput> {}

export interface IExpenseDocumentRemoveResponse
  extends IBaseGraphqlResponse<IEntityFileRemoveInput> {
  data: {
    expenseDocumentRemove: IEntityFileRemoveResult;
  };
  errors: TGraphqlErrors<IEntityFileRemoveInput>;
}
