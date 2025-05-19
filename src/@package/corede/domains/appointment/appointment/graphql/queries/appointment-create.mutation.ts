import {
  IBaseGraphqlRequest,
  IBaseGraphqlResponse,
  TGraphqlErrors,
} from '@common_package';
import gql from 'graphql-tag';
import {
  IAppointmentCreateInput,
  IAppointmentCreateResult,
} from '../resolverTypes';

export const appointmentCreateQuery = gql`
  mutation appointmentCreate($input: AppointmentCreateInput!) {
    appointmentCreate(input: $input) {
      _id
    }
  }
`;

export interface IAppointmentCreateRequest
  extends IBaseGraphqlRequest<IAppointmentCreateInput> {}

export interface IAppointmentCreateResponse
  extends IBaseGraphqlResponse<IAppointmentCreateInput> {
  data: {
    appointmentCreate: IAppointmentCreateResult;
  };
  errors: TGraphqlErrors<IAppointmentCreateInput>;
}
