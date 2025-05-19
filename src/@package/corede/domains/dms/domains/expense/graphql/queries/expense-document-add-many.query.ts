import { gql } from 'graphql-tag';

import {
  IBaseGraphqlRequest,
  IBaseGraphqlResponse,
  TGraphqlErrors,
  IEntityFilesAssignInput,
  IEntityFilesAssignResult,
} from '@common_package';

export const expenseDocumentAddManyQuery = gql`
  mutation expenseDocumentAddMany($input: EntityFilesAssignInput!) {
    expenseDocumentAddMany(input: $input) {
      success
    }
  }
`;

export interface IExpenseDocumentAddManyRequest
  extends IBaseGraphqlRequest<IEntityFilesAssignInput> {}

export interface IExpenseDocumentAddManyResponse
  extends IBaseGraphqlResponse<IEntityFilesAssignInput> {
  data: {
    expenseDocumentAddMany: IEntityFilesAssignResult;
  };
  errors: TGraphqlErrors<IEntityFilesAssignInput>;
}
