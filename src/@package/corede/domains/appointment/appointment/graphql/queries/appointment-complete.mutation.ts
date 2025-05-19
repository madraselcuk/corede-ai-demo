import {
  IBaseGraphqlRequest,
  IBaseGraphqlResponse,
  TGraphqlErrors,
} from '@common_package';
import gql from 'graphql-tag';
import {
  IAppointmentCompleteInput,
  IAppointmentCompleteResult,
} from '../resolverTypes';

export const appointmentCompleteQuery = gql`
  mutation appointmentComplete($input: AppointmentCompleteInput!) {
    appointmentComplete(input: $input) {
      success
    }
  }
`;

export interface IAppointmentCompleteRequest
  extends IBaseGraphqlRequest<IAppointmentCompleteInput> {}

export interface IAppointmentCompleteResponse
  extends IBaseGraphqlResponse<IAppointmentCompleteInput> {
  data: {
    appointmentComplete: IAppointmentCompleteResult;
  };
  errors: TGraphqlErrors<IAppointmentCompleteInput>;
}
