import { IFilterWebinar } from '../../interfaces/webinar-filter.interface';
import { IHasFilter, IHasPagination, IPagination } from '@common_package';

export interface IWebinarsInput
  extends IHasPagination<IPagination>,
    IHasFilter<IFilterWebinar> {}
