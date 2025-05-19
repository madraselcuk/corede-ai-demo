import { gql } from "graphql-tag";
import { IBaseGraphqlRequest, IBaseGraphqlResponse } from "../../../../../graphql";
import { TGraphqlErrors } from "../../../../../graphql/response/base-response.interface";
import { IResetPasswordInput } from "../resolverTypes/reset-password.input";
import { IResetPasswordResult } from "../resolverTypes/reset-password.result";

export const resetPasswordQuery = gql`
  mutation resetPassword($input: ResetPasswordInput!) {
    resetPassword(input: $input) {
      success
    }
  }
`;

export interface IResetPasswordRequest
  extends IBaseGraphqlRequest<IResetPasswordInput> {}

export interface IResetPasswordResponse
  extends IBaseGraphqlResponse<IResetPasswordInput> {
  data: {
    resetPassword: IResetPasswordResult;
  };
  errors: TGraphqlErrors<IResetPasswordInput>;
}
