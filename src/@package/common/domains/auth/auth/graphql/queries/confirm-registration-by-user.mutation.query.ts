import { gql } from "graphql-tag";
import { IBaseGraphqlRequest, IBaseGraphqlResponse } from "../../../../../graphql";
import { TGraphqlErrors } from "../../../../../graphql/response/base-response.interface";
import { IConfirmRegistrationByUserInput } from "../resolverTypes/confirm-registration-by-user.input";
import { IConfirmRegistrationByUserResult } from "../resolverTypes/confirm-registration-by-user.result";

export const confirmRegistrationByUserQuery = gql`
  mutation confirmRegistrationByUser($input: ConfirmRegistrationByUserInput!) {
    confirmRegistrationByUser(input: $input) {
      success
    }
  }
`;

export interface IConfirmRegistrationByUserRequest
  extends IBaseGraphqlRequest<IConfirmRegistrationByUserInput> {}

export interface IConfirmRegistrationByUserResponse
  extends IBaseGraphqlResponse<IConfirmRegistrationByUserInput> {
  data: {
    confirmRegistration: IConfirmRegistrationByUserResult;
  };
  errors: TGraphqlErrors<IConfirmRegistrationByUserInput>;
}
