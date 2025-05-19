import { IFilterFaqCategory } from '../../interfaces/faqCategory-filter.interface';
import { IHasFilter, IHasPagination, IPagination } from '@common_package';

export interface IFaqCategoryListPublicInput
  extends IHasPagination<IPagination>,
    IHasFilter<IFilterFaqCategory> {}
