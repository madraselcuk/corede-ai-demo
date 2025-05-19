import { IFilterBlogCategory } from '../../interfaces/blogCategory-filter.interface';
import { IHasFilter, IHasPagination, IPagination } from '@common_package';

export interface IBlogCategoriesPublicInput
  extends IHasPagination<IPagination>,
    IHasFilter<IFilterBlogCategory> {}
