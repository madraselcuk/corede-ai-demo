import { gql } from "graphql-tag";
import { IBaseGraphqlRequest, IBaseGraphqlResponse } from "../../../../../graphql";
import { TGraphqlErrors } from "../../../../../graphql/response/base-response.interface";
import { ILogoutInput } from "../resolverTypes/logout.input";
import { ILogoutResult } from "../resolverTypes/logout.result";

export const logoutQuery = gql`
  mutation logout($input: LogoutInput!) {
    logout(input: $input) {
      success
    }
  }
`;

export interface ILogoutRequest extends IBaseGraphqlRequest<ILogoutInput> {}

export interface ILogoutResponse extends IBaseGraphqlResponse<ILogoutInput> {
  data: {
    logout: ILogoutResult;
  };
  errors: TGraphqlErrors<ILogoutInput>;
}
