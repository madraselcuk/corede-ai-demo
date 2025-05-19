import gql from "graphql-tag";
import { IRegisterByInput, IRegisterByResult } from "../resolverTypes";
import {
  IBaseGraphqlRequest,
  IBaseGraphqlResponse,
  TGraphqlErrors,
} from "@common_package";

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
