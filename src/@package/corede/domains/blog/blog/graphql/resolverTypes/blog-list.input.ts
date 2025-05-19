import { IFilterBlog } from '../../interfaces/blog-filter.interface'
import { IHasFilter, IHasPagination, IPagination } from '@common_package'

export interface IBlogListInput
  extends IHasPagination<IPagination>,
    IHasFilter<IFilterBlog> {}
