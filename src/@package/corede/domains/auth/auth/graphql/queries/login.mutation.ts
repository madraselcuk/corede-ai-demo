import gql from "graphql-tag";
import {
  fileMetadataFragment,
  IBaseGraphqlRequest,
  IBaseGraphqlResponse,
  TGraphqlErrors,
} from "@common_package";
import { ILoginInput } from "../resolverTypes/login.input";
import { ILoginResult } from "../resolverTypes/login.result";

export const loginQuery = gql`
  ${fileMetadataFragment}
  mutation login($input: LoginInput!) {
    login(input: $input) {
      twoFactorAuth
      twoFactorToken
      accessToken
      accessExpiresIn
      refreshToken
      refreshExpiresIn
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
      devMetaData {
        twoFactorCode
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
