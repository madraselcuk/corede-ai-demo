import {
  IBaseGraphqlRequest,
  IBaseGraphqlResponse,
  TGraphqlErrors,
} from "@common_package";
import gql from "graphql-tag";
import {
  IAppointmentUpdateStatusInput,
  IAppointmentUpdateStatusFilterInput,
  IAppointmentUpdateStatusResult,
} from "../resolverTypes";

export const appointmentUpdateStatusQuery = gql`
  mutation appointmentUpdateStatus(
    $filter: AppointmentUpdateStatusFilterInput!
    $input: AppointmentUpdateStatusInput!
  ) {
    appointmentUpdateStatus(filter: $filter, input: $input) {
      _id
    }
  }
`;

export interface IAppointmentUpdateStatusRequest
  extends IBaseGraphqlRequest<
    IAppointmentUpdateStatusInput,
    IAppointmentUpdateStatusFilterInput
  > {}

export interface IAppointmentUpdateStatusResponse
  extends IBaseGraphqlResponse<IAppointmentUpdateStatusInput> {
  data: {
    appointmentUpdateStatus: IAppointmentUpdateStatusResult;
  };
  errors: TGraphqlErrors<IAppointmentUpdateStatusInput>;
}
