import { gql } from "graphql-tag";
import { IBaseGraphqlRequest, IBaseGraphqlResponse } from "../../../../../graphql";
import { TGraphqlErrors } from "../../../../../graphql/response/base-response.interface";
import { IRefreshTokenInput } from "../resolverTypes/refresh-token.input";
import { IRefreshTokenResult } from "../resolverTypes/refresh-token.result";

export const refreshTokenQuery = gql`
  mutation refreshToken($input: RefreshTokenInput!) {
    refreshToken(input: $input) {
      accessToken
      accessExpiresIn 
    }
  }
`;

export interface IRefreshTokenRequest
  extends IBaseGraphqlRequest<IRefreshTokenInput> {}

export interface IRefreshTokenResponse
  extends IBaseGraphqlResponse<IRefreshTokenInput> {
  data: {
    refreshToken: IRefreshTokenResult;
  };
  errors: TGraphqlErrors<IRefreshTokenInput>;
}
