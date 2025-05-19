import { gql } from "graphql-tag";
import { IBaseGraphqlRequest, IBaseGraphqlResponse } from "../../../../../graphql";
import { TGraphqlErrors } from "../../../../../graphql/response/base-response.interface";
import { ILoginInput } from "../resolverTypes/login.input";
import { ILoginResult } from "../resolverTypes/login.result";

export const loginQuery = gql`
  mutation login($input: LoginInput!) {
    login(input: $input) {
      twoFactorAuth
      twoFactorToken
      devMetaData {
        twoFactorCode
      }
      accessToken
      accessExpiresIn
      refreshToken
      refreshExpiresIn
      user {
        countryCode
        email
        languageCode
        name
        role
        surname
        userId
        username
      }
    }
  }
`;

export interface ILoginRequest extends IBaseGraphqlRequest<ILoginInput> {}

export interface ILoginResponse extends IBaseGraphqlResponse<ILoginInput> {
  data: {
    login: ILoginResult;
  };
  errors: TGraphqlErrors<ILoginInput>;
}
