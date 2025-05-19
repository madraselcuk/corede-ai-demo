import gql from "graphql-tag";
import {
  IBaseGraphqlRequest,
  IBaseGraphqlResponse,
  TGraphqlErrors,
} from "@common_package";
import { IRegisterInput, IRegisterResult } from "../resolverTypes";

export const registerQuery = gql`
  mutation register($input: RegisterInput!) {
    register(input: $input) {
      success
      devMetaData {
        code
        token
      }
    }
  }
`;

export interface IRegisterRequest extends IBaseGraphqlRequest<IRegisterInput> {}

export interface IRegisterResponse
  extends IBaseGraphqlResponse<IRegisterInput> {
  data: {
    register: IRegisterResult;
  };
  errors: TGraphqlErrors<IRegisterInput>;
}
