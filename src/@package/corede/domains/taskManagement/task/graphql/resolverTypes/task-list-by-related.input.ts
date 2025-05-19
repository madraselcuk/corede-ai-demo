import { IHasFilter, IHasPagination, IPagination } from "@common_package";
import { IFilterTask } from '../../interfaces';
import { TaskRelatedEntityType } from '../../enums';

export interface IFilterTaskListByRelated extends IFilterTask {
  relatedEntityType?: TaskRelatedEntityType;
}

export interface ITaskListByRelatedInput
  extends IHasPagination<IPagination>,
    IHasFilter<IFilterTaskListByRelated> {}
