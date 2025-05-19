import { gql } from "graphql-tag";
import { DocumentNode } from "graphql";
import {
  IBaseGraphqlRequest,
  IBaseGraphqlResponse,
  TGraphqlErrors,
} from "@common_package";

import { IAppointmentListResult } from "../resolverTypes/appointment-list.result";
import { IAppointmentListInput } from "../resolverTypes";
import { appointmentListItemResultFragment } from "./appointment-list.item.result.fragment";

/**
 * @param params.fragment needs to be derived from `AppointmentListItemResult` fragment
 * @param params.fragmentName needs to be unique
 */
export function appointmentListByRelatedQuery(params?: {
  fragment: DocumentNode;
  fragmentName: string;
}): DocumentNode {
  return gql`
    ${params?.fragment ?? appointmentListItemResultFragment}

    query appointmentListByRelated($input: AppointmentListInput) {
      appointmentListByRelated(input: $input) {
        data {
          ...${params?.fragmentName ?? "AppointmentListItemResultFragment"}
        }
        count
      }
    }
  `;
}

export interface IAppointmentListByRelatedRequest
  extends IBaseGraphqlRequest<IAppointmentListInput, undefined> {}

export interface IAppointmentListByRelatedResponse
  extends IBaseGraphqlResponse<IAppointmentListInput> {
  data: {
    appointmentListByRelated: IAppointmentListResult;
  };
  errors: TGraphqlErrors<IAppointmentListInput>;
}
