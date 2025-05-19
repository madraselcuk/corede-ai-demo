import { IHasFilter, IHasPagination, IPagination } from '@common_package';
import { IFilterNote } from '../../interfaces';

export interface INoteListOwnInput
  extends IHasPagination<IPagination>,
    IHasFilter<IFilterNote> {}
