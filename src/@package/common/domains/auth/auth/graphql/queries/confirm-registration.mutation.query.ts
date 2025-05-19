import { gql } from "graphql-tag";
import { IBaseGraphqlRequest, IBaseGraphqlResponse } from "../../../../../graphql";
import { IConfirmRegistrationInput } from "../resolverTypes/confirm-registration.input";
import { IConfirmRegistrationResult } from "../resolverTypes/confirm-registration.result";
import { TGraphqlErrors } from "../../../../../graphql/response/base-response.interface";

export const confirmRegistrationQuery = gql`
  mutation confirmRegistration($input: ConfirmRegistrationInput!) {
    confirmRegistration(input: $input) {
      success
    }
  }
`;

export interface IConfirmRegistrationRequest
  extends IBaseGraphqlRequest<IConfirmRegistrationInput> {}

export interface IConfirmRegistrationResponse
  extends IBaseGraphqlResponse<IConfirmRegistrationInput> {
  data: {
    confirmRegistration: IConfirmRegistrationResult;
  };
  errors: TGraphqlErrors<IConfirmRegistrationInput>;
}
