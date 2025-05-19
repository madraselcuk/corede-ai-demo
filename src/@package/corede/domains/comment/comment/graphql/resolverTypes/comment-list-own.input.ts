import { IHasFilter, IHasPagination, IPagination } from '@common_package';
import { IFilterComment } from '../../interfaces';

export interface ICommentListOwnInput
  extends IHasPagination<IPagination>,
    IHasFilter<IFilterComment> {}
