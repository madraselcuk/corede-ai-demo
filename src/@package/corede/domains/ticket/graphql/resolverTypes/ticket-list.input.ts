import { IHasFilter, IHasPagination, IPagination } from '@common_package';
import { IFilterTicket } from '../../interfaces';

export interface ITicketListInput
  extends IHasPagination<IPagination>,
    IHasFilter<IFilterTicket> {}
