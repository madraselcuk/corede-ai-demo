import { IFilterContactForm } from '../../interfaces/contactForm-filter.interface';
import { IHasFilter, IHasPagination, IPagination } from '@common_package';

export interface IContactFormListInput
  extends IHasPagination<IPagination>,
    IHasFilter<IFilterContactForm> {}
