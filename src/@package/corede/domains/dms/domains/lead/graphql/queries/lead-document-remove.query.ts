import { gql } from "graphql-tag";

import {
  IBaseGraphqlRequest,
  IBaseGraphqlResponse,
  TGraphqlErrors,
  IEntityFileRemoveInput,
  IEntityFileRemoveResult,
} from "@common_package";

export const leadDocumentRemoveQuery = gql`
  mutation leadDocumentRemove($input: EntityFileRemoveInput!) {
    leadDocumentRemove(input: $input) {
      success
    }
  }
`;

export interface ILeadDocumentRemoveRequest
  extends IBaseGraphqlRequest<IEntityFileRemoveInput> {}

export interface ILeadDocumentRemoveResponse
  extends IBaseGraphqlResponse<IEntityFileRemoveInput> {
  data: {
    leadDocumentRemove: IEntityFileRemoveResult;
  };
  errors: TGraphqlErrors<IEntityFileRemoveInput>;
}
