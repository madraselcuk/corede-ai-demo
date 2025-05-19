import { gql } from "graphql-tag";
import { IBaseGraphqlRequest, IBaseGraphqlResponse } from "../../../../../graphql";
import { TGraphqlErrors } from "../../../../../graphql/response/base-response.interface";
import { IResendRegistrationByUserConfirmationInput } from "../resolverTypes/resend-registration-by-user-confirmation.input";
import { IResendRegistrationByUserConfirmationResult } from "../resolverTypes/resend-registration-by-user-confirmation.result";

export const resendRegistrationByUserConfirmationQuery = gql`
  mutation resendRegistrationByUserConfirmation(
    $input: ResendRegistrationByUserConfirmationInput!
  ) {
    resendRegistrationByUserConfirmation(input: $input) {
      success
      devMetaData {
        code
        token
        resetPasswordToken
      }
    }
  }
`;

export interface IResendRegistrationByUserConfirmationRequest
  extends IBaseGraphqlRequest<IResendRegistrationByUserConfirmationInput> {}

export interface IResentRegistrationByUserConfirmationResponse
  extends IBaseGraphqlResponse<IResendRegistrationByUserConfirmationInput> {
  data: {
    resendRegistrationByUserConfirmation: IResendRegistrationByUserConfirmationResult;
  };
  errors: TGraphqlErrors<IResendRegistrationByUserConfirmationInput>;
}
