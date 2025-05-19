import { IFilterFaq } from '../../interfaces/faq-filter.interface';
import { IHasFilter, IHasPagination, IPagination } from '@common_package';

export interface IFaqListInput
  extends IHasPagination<IPagination>,
    IHasFilter<IFilterFaq> {}
