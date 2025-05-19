import {
  IBaseGraphqlRequest,
  IBaseGraphqlResponse,
  TGraphqlErrors,
} from '@common_package';
import gql from 'graphql-tag';
import {
  IAppointmentUpdateInput,
  IAppointmentUpdateFilterInput,
} from '../resolverTypes/appointment-update.input';
import { IAppointmentUpdateResult } from '../resolverTypes/appointment-update.result';

export const appointmentUpdateQuery = gql`
  mutation appointmentUpdate(
    $filter: AppointmentUpdateFilterInput!
    $input: AppointmentUpdateInput!
  ) {
    appointmentUpdate(filter: $filter, input: $input) {
      _id
    }
  }
`;

export interface IAppointmentUpdateRequest
  extends IBaseGraphqlRequest<
    IAppointmentUpdateInput,
    IAppointmentUpdateFilterInput
  > {}

export interface IAppointmentUpdateResponse
  extends IBaseGraphqlResponse<IAppointmentUpdateInput> {
  data: {
    appointmentUpdate: IAppointmentUpdateResult;
  };
  errors: TGraphqlErrors<IAppointmentUpdateInput>;
}
