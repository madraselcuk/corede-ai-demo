import { gql } from "graphql-tag";

import {
  IBaseGraphqlRequest,
  IBaseGraphqlResponse,
  TGraphqlErrors,
  IEntityFileAssignOwnInput,
  IEntityFileAssignResult,
} from "@common_package";

export const userProfileImageAssignQuery = gql`
  mutation userProfileImageAssign($input: EntityFileAssignOwnInput!) {
    userProfileImageAssign(input: $input) {
      success
    }
  }
`;

export interface IUserProfileImageAssignRequest
  extends IBaseGraphqlRequest<IEntityFileAssignOwnInput> {}

export interface IUserProfileImageAssignResponse
  extends IBaseGraphqlResponse<IEntityFileAssignOwnInput> {
  data: {
    userProfileImageAssign: IEntityFileAssignResult;
  };
  errors: TGraphqlErrors<IEntityFileAssignOwnInput>;
}
