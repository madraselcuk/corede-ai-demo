import { gql } from "graphql-tag";
import { IBaseGraphqlRequest, IBaseGraphqlResponse } from "../../../../../graphql";
import { TGraphqlErrors } from "../../../../../graphql/response/base-response.interface";
import { IRegisterByInput } from "../resolverTypes/register-by.input";
import { IRegisterByResult } from "../resolverTypes/register-by.result";

export const registerByQuery = gql`
  mutation registerByAdmin($input: RegisterByInput!) {
    admin_register(input: $input) {
      success
      devMetaData {
        code
        token
        resetPasswordToken
      }
    }
  }
`;

export interface IRegisterByRequest
  extends IBaseGraphqlRequest<IRegisterByInput> {}

export interface IRegisterByResponse
  extends IBaseGraphqlResponse<IRegisterByInput> {
  data: {
    admin_register: IRegisterByResult;
  };
  errors: TGraphqlErrors<IRegisterByInput>;
}
