import { IHasFilter, IHasPagination, IPagination } from '@common_package';
import { IFilterAppointment } from '../../interfaces';

export interface IAppointmentListInput
  extends IHasPagination<IPagination>,
    IHasFilter<IFilterAppointment> {}
