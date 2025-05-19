import { gql } from "graphql-tag";

import {
  IBaseGraphqlRequest,
  IBaseGraphqlResponse,
  TGraphqlErrors,
  IEntityFileRemoveInput,
  IEntityFileRemoveResult,
} from "@common_package";

export const projectDocumentRemoveQuery = gql`
  mutation projectDocumentRemove($input: EntityFileRemoveInput!) {
    projectDocumentRemove(input: $input) {
      success
    }
  }
`;

export interface IProjectDocumentRemoveRequest
  extends IBaseGraphqlRequest<IEntityFileRemoveInput> {}

export interface IProjectDocumentRemoveResponse
  extends IBaseGraphqlResponse<IEntityFileRemoveInput> {
  data: {
    projectDocumentRemove: IEntityFileRemoveResult;
  };
  errors: TGraphqlErrors<IEntityFileRemoveInput>;
}
