import { gql } from "graphql-tag";

import {
  IBaseGraphqlRequest,
  IBaseGraphqlResponse,
  TGraphqlErrors,
  IEntityFileAssignOwnInput,
  IEntityFileAssignResult,
} from "@common_package";

export const userSignatureAssignQuery = gql`
  mutation userSignatureAssign($input: EntityFileAssignOwnInput!) {
    userSignatureAssign(input: $input) {
      success
    }
  }
`;

export interface IUserSignatureAssignRequest
  extends IBaseGraphqlRequest<IEntityFileAssignOwnInput> {}

export interface IUserSignatureAssignResponse
  extends IBaseGraphqlResponse<IEntityFileAssignOwnInput> {
  data: {
    userSignatureAssign: IEntityFileAssignResult;
  };
  errors: TGraphqlErrors<IEntityFileAssignOwnInput>;
}
