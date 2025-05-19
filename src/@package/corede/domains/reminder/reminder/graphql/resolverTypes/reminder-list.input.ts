import { IHasFilter, IHasPagination, IPagination } from "@common_package";
import { IFilterReminder } from "../../interfaces";

export interface IReminderListInput
  extends IHasPagination<IPagination>,
    IHasFilter<IFilterReminder> {}
