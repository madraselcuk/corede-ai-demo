import { gql } from "graphql-tag";
import { IBaseGraphqlRequest, IBaseGraphqlResponse } from "../../../../../graphql";
import { TGraphqlErrors } from "../../../../../graphql/response/base-response.interface";
import { IRequestResetPasswordInput } from "../resolverTypes/request-reset-password.input";
import { IRequestResetPasswordResult } from "../resolverTypes/request-reset-password.result";

export const requestResetPasswordQuery = gql`
  mutation requestResetPassword($input: RequestResetPasswordInput!) {
    requestResetPassword(input: $input) {
      success
      devMetaData {
        token
      }
    }
  }
`;

export interface IRequestResetPasswordRequest
  extends IBaseGraphqlRequest<IRequestResetPasswordInput> {}

export interface IRequestResetPasswordResponse
  extends IBaseGraphqlResponse<IRequestResetPasswordInput> {
  data: {
    requestResetPassword: IRequestResetPasswordResult;
  };
  errors: TGraphqlErrors<IRequestResetPasswordInput>;
}
