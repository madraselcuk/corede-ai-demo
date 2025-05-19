import { IHasFilter, IHasPagination, IPagination } from "@common_package";
import { IFilterTask } from '../../interfaces';

export interface ITaskListInput
  extends IHasPagination<IPagination>,
    IHasFilter<IFilterTask> {}
