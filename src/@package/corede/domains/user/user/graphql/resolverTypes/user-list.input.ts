import { IHasFilter, IHasPagination, IPagination } from "@common_package";
import { IFilterUser } from "../../interfaces/user-filter.interface";

export interface IUserListInput
  extends IHasPagination<IPagination>,
    IHasFilter<IFilterUser> {}
