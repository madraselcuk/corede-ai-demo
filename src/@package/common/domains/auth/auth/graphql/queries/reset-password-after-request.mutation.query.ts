import { gql } from "graphql-tag";
import { IBaseGraphqlRequest, IBaseGraphqlResponse } from "../../../../../graphql";
import { TGraphqlErrors } from "../../../../../graphql/response/base-response.interface";
import { IResetPasswordAfterRequestInput } from "../resolverTypes/reset-password-after-request.input";
import { IResetPasswordAfterRequestResult } from "../resolverTypes/reset-password-after-request.result";

export const resetPasswordAfterRequestQuery = gql`
  mutation resetPasswordAfterRequest($input: ResetPasswordAfterRequestInput!) {
    resetPasswordAfterRequest(input: $input) {
      success
    }
  }
`;

export interface IResetPasswordAfterRequestRequest
  extends IBaseGraphqlRequest<IResetPasswordAfterRequestInput> {}

export interface IResetPasswordAfterRequestResponse
  extends IBaseGraphqlResponse<IResetPasswordAfterRequestInput> {
  data: {
    resetPasswordAfterRequest: IResetPasswordAfterRequestResult;
  };
  errors: TGraphqlErrors<IResetPasswordAfterRequestInput>;
}
