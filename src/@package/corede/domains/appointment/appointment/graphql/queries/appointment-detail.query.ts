import { gql } from 'graphql-tag';
import { DocumentNode } from 'graphql';

import {
  IBaseGraphqlRequest,
  IBaseGraphqlResponse,
  TGraphqlErrors,
} from '@common_package';
import { IAppointmentDetailResult } from '../resolverTypes/appointment-detail.result';
import { appointmentDetailResultFragment } from './appointment-detail.result.fragment';
import { IAppointmentDetailInput } from '../resolverTypes';

/**
 * @param params.fragment needs to be derived from `AppointmentDetailResult` fragment
 * @param params.fragmentName needs to be unique
 */
export function appointmentDetailQuery(params?: {
  fragment: DocumentNode;
  fragmentName: string;
}): DocumentNode {
  return gql`
    ${params?.fragment ?? appointmentDetailResultFragment}

    query appointmentDetail($input: AppointmentDetailInput!) {
      appointmentDetail(input: $input) {
        ...${params?.fragmentName ?? 'AppointmentDetailResultFragment'}
      }
    }
  `;
}

export interface IAppointmentDetailRequest
  extends IBaseGraphqlRequest<IAppointmentDetailInput, undefined> {}

export interface IAppointmentDetailResponse
  extends IBaseGraphqlResponse<IAppointmentDetailInput> {
  data: {
    appointmentDetail: IAppointmentDetailResult;
  };
  errors: TGraphqlErrors<IAppointmentDetailInput>;
}
