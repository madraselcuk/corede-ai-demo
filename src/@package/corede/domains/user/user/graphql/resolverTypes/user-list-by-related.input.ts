import { IHasFilter, IHasPagination, IPagination } from "@common_package";
import { IFilterUser } from "../../interfaces/user-filter.interface";
import { UserRelatedTargetType } from "../../enums";

export interface IFilterUserListByRelated extends IFilterUser {
  relatedTargetType?: UserRelatedTargetType;
}

export interface IUserListByRelatedInput
  extends IHasPagination<IPagination>,
    IHasFilter<IFilterUserListByRelated> {}
