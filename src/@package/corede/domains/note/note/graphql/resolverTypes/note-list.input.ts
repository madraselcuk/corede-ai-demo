import { IHasFilter, IHasPagination, IPagination } from '@common_package';
import { IFilterNote } from '../../interfaces';

export interface INoteListInput
  extends IHasPagination<IPagination>,
    IHasFilter<IFilterNote> {}
