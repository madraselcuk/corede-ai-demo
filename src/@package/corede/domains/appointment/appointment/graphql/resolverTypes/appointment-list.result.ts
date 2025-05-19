import { IPaginated } from "@common_package";
import { IAppointmentListItemResult } from "./appointment-list.item.result";

export interface IAppointmentListResult extends IPaginated<IAppointmentListItemResult> {}
