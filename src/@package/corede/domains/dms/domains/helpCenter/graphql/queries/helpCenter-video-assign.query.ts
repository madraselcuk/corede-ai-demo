import { gql } from "graphql-tag";

import {
  fileMetadataFragment,
  IBaseGraphqlRequest,
  IBaseGraphqlResponse,
  TGraphqlErrors,
  uploadPresignedUrlOutputFragment,
  IEntityFileAssignOwnInput,
  IEntityFileAssignResult,
} from "@common_package";

export const helpCenterVideoAssignQuery = gql`
  ${fileMetadataFragment}
  ${uploadPresignedUrlOutputFragment}

  query helpCenterVideoAssign($input: EntityFileAssignOwnInput!) {
    helpCenterVideoAssign(input: $input) {
      success
    }
  }
`;

export interface IHelpCenterVideoAssignRequest
  extends IBaseGraphqlRequest<IEntityFileAssignOwnInput> {}

export interface IHelpCenterVideoAssignResponse
  extends IBaseGraphqlResponse<IEntityFileAssignOwnInput> {
  data: {
    helpCenterVideoAssign: IEntityFileAssignResult;
  };
  errors: TGraphqlErrors<IEntityFileAssignOwnInput>;
}
