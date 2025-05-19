import { gql } from "graphql-tag";
import { IBaseGraphqlRequest, IBaseGraphqlResponse } from "../../../../../graphql";
import { TGraphqlErrors } from "../../../../../graphql/response/base-response.interface";
import { ITwoFactorAuthInput } from "../resolverTypes/two-factor-auth.input";
import { ITwoFactorAuthResult } from "../resolverTypes/two-factor-auth.result";

// TODO: naming change: confirm two factor login
export const confirmTwoFactorAuthQuery = gql`
  mutation confirmTwoFactorAuth($input: TwoFactorAuthenticationInput!) {
    confirmTwoFactorAuth(input: $input) {
      accessToken
      accessExpiresIn
      refreshToken
      refreshExpiresIn
      twoFactorAuth
      twoFactorToken
      user {
        userId
        email
        role
        name
        surname
        username
        languageCode
        countryCode
      }
    }
  }
`;

export interface ITwoFactorAuthenticationRequest
  extends IBaseGraphqlRequest<ITwoFactorAuthInput> {}

export interface ITwoFactorAuthenticationResponse
  extends IBaseGraphqlResponse<ITwoFactorAuthInput> {
  data: {
    confirmTwoFactorAuth: ITwoFactorAuthResult;
  };
  errors: TGraphqlErrors<ITwoFactorAuthInput>;
}
