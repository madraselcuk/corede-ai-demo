import { IHasFilter, IHasPagination, IPagination } from '@common_package';
import { IFilterComment } from '../../interfaces';

export interface ICommentListInput
  extends IHasPagination<IPagination>,
    IHasFilter<IFilterComment> {}
