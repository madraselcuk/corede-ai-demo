import {
  IBaseGraphqlRequest,
  IBaseGraphqlResponse,
  TGraphqlErrors,
} from '@common_package';
import gql from 'graphql-tag';
import {
  IAppointmentDeleteInput,
  IAppointmentDeleteResult,
} from '../resolverTypes';

export const appointmentDeleteQuery = gql`
  mutation appointmentDelete($input: AppointmentDeleteInput!) {
    appointmentDelete(input: $input) {
      success
    }
  }
`;

export interface IAppointmentDeleteRequest
  extends IBaseGraphqlRequest<IAppointmentDeleteInput> {}

export interface IAppointmentDeleteResponse
  extends IBaseGraphqlResponse<IAppointmentDeleteInput> {
  data: {
    appointmentDelete: IAppointmentDeleteResult;
  };
  errors: TGraphqlErrors<IAppointmentDeleteInput>;
}
