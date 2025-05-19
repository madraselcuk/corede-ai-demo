import {
  fileMetadataFragment,
  IBaseGraphqlRequest,
  IBaseGraphqlResponse,
  TGraphqlErrors,
} from "@common_package";
import { gql } from "graphql-tag";
import { IConfirmTwoFactorLoginInput } from "../resolverTypes/confirm-two-factor-login.input";
import { IConfirmTwoFactorLoginResult } from "../resolverTypes/confirm-two-factor-login.result";

export const confirmTwoFactorLoginQuery = gql`
  ${fileMetadataFragment}

  mutation confirmTwoFactorLogin($input: ConfirmTwoFactorLoginInput!) {
    confirmTwoFactorLogin(input: $input) {
      accessToken
      accessExpiresIn
      refreshToken
      refreshExpiresIn
      twoFactorLogin
      twoFactorToken
      user {
        _id
        status
        email
        type
        name
        surname
        profileImage {
          ...FileMetadataFragment
        }
        language
        country
        organization {
          _id
          name
        }
        department {
          _id
          name
        }
      }
    }
  }
`;

export interface IConfirmTwoFactorLoginRequest
  extends IBaseGraphqlRequest<IConfirmTwoFactorLoginInput> {}

export interface IConfirmTwoFactorLoginResponse
  extends IBaseGraphqlResponse<IConfirmTwoFactorLoginInput> {
  data: {
    confirmTwoFactorLogin: IConfirmTwoFactorLoginResult;
  };
  errors: TGraphqlErrors<IConfirmTwoFactorLoginInput>;
}
