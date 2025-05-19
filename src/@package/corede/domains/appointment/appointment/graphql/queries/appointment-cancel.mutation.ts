import {
  IBaseGraphqlRequest,
  IBaseGraphqlResponse,
  TGraphqlErrors,
} from '@common_package';
import gql from 'graphql-tag';
import {
  IAppointmentCancelInput,
  IAppointmentCancelResult,
} from '../resolverTypes';

export const appointmentCancelQuery = gql`
  mutation appointmentCancel($input: AppointmentCancelInput!) {
    appointmentCancel(input: $input) {
      success
    }
  }
`;

export interface IAppointmentCancelRequest
  extends IBaseGraphqlRequest<IAppointmentCancelInput> {}

export interface IAppointmentCancelResponse
  extends IBaseGraphqlResponse<IAppointmentCancelInput> {
  data: {
    appointmentCancel: IAppointmentCancelResult;
  };
  errors: TGraphqlErrors<IAppointmentCancelInput>;
}
