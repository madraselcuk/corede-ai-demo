import { IHasFilter, IHasPagination, IPagination } from "@common_package";
import { IFilterProject } from '../../interfaces/project';

export interface IProjectListInput
  extends IHasPagination<IPagination>,
    IHasFilter<IFilterProject> {}
