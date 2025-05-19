import { gql } from "graphql-tag";

import {
  IBaseGraphqlRequest,
  IBaseGraphqlResponse,
  TGraphqlErrors,
  IEntityFilesAssignInput,
  IEntityFilesAssignResult,
} from "@common_package";

export const organizationDocumentAddManyQuery = gql`
  mutation organizationDocumentAddMany($input: EntityFilesAssignInput!) {
    organizationDocumentAddMany(input: $input) {
      success
    }
  }
`;

export interface IOrganizationDocumentAddManyRequest
  extends IBaseGraphqlRequest<IEntityFilesAssignInput> {}

export interface IOrganizationDocumentAddManyResponse
  extends IBaseGraphqlResponse<IEntityFilesAssignInput> {
  data: {
    organizationDocumentAddMany: IEntityFilesAssignResult;
  };
  errors: TGraphqlErrors<IEntityFilesAssignInput>;
}
