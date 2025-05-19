import { IFilterAuthor } from '../../interfaces/author-filter.interface'
import { IHasFilter, IHasPagination, IPagination } from '@common_package'

export interface IAuthorListInput
  extends IHasPagination<IPagination>,
    IHasFilter<IFilterAuthor> {}
