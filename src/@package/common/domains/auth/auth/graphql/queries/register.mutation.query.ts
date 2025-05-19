import { gql } from "graphql-tag";
import { IBaseGraphqlRequest, IBaseGraphqlResponse } from "../../../../../graphql";
import { TGraphqlErrors } from "../../../../../graphql/response/base-response.interface";
import { IRegisterInput } from "../resolverTypes/register.input";
import { IRegisterResult } from "../resolverTypes/register.result";

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
