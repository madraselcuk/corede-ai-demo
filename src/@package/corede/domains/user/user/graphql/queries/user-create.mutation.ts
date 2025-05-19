import gql from "graphql-tag";
import {
  IBaseGraphqlRequest,
  IBaseGraphqlResponse,
  TGraphqlErrors,
} from "@common_package";
import { IUserCreateInput } from "../resolverTypes/user-create.input";
import { IUserCreateResult } from "../resolverTypes/user-create.result";

/**
 * @note Create user operation is replacing the registerBy operation 
 */
export const userCreateQuery = gql`
  mutation userCreate($input: UserCreateInput!) {
    userCreate(input: $input) {
      _id
      devMetaData {
        code
        token
        resetPasswordToken
      }
    }
  }
`;

export interface IUserCreateRequest
  extends IBaseGraphqlRequest<IUserCreateInput> {}

export interface IUserCreateResponse
  extends IBaseGraphqlResponse<IUserCreateInput> {
  data: {
    userCreate: IUserCreateResult;
  };
  errors: TGraphqlErrors<IUserCreateInput>;
}
