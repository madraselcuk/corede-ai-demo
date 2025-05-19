import { gql } from "graphql-tag";
import { IBaseGraphqlRequest, IBaseGraphqlResponse } from "../../../../../graphql";
import { TGraphqlErrors } from "../../../../../graphql/response/base-response.interface";
import { IResendRegistrationConfirmationInput } from "../resolverTypes/resend-registration-confirmation.input";
import { IResendRegistrationConfirmationResult } from "../resolverTypes/resend-registration-confirmation.result";

export const resendRegistrationConfirmationQuery = gql`
  mutation resendRegistrationConfirmation(
    $input: ResendRegistrationConfirmationInput!
  ) {
    resendRegistrationConfirmation(input: $input) {
      success
      devMetaData {
        code
        token
      }
    }
  }
`;

export interface IResendRegistrationConfirmationRequest
  extends IBaseGraphqlRequest<IResendRegistrationConfirmationInput> {}

export interface IResentRegistrationConfirmationResponse
  extends IBaseGraphqlResponse<IResendRegistrationConfirmationInput> {
  data: {
    resendRegistrationConfirmation: IResendRegistrationConfirmationResult;
  };
  errors: TGraphqlErrors<IResendRegistrationConfirmationInput>;
}
