import { gql } from "graphql-tag";

import {
  IBaseGraphqlRequest,
  IBaseGraphqlResponse,
  TGraphqlErrors,
  IEntityFileRemoveInput,
  IEntityFileRemoveResult,
} from "@common_package";

export const appointmentDocumentRemoveQuery = gql`
  mutation appointmentDocumentRemove($input: EntityFileRemoveInput!) {
    appointmentDocumentRemove(input: $input) {
      success
    }
  }
`;

export interface IAppointmentDocumentRemoveRequest
  extends IBaseGraphqlRequest<IEntityFileRemoveInput> {}

export interface IAppointmentDocumentRemoveResponse
  extends IBaseGraphqlResponse<IEntityFileRemoveInput> {
  data: {
    appointmentDocumentRemove: IEntityFileRemoveResult;
  };
  errors: TGraphqlErrors<IEntityFileRemoveInput>;
}
