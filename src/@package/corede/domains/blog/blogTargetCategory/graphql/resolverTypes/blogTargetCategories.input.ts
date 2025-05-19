import { IFilterBlogTargetCategory } from '../../interfaces/blogTargetCategory-filter.interface';
import { IHasFilter, IHasPagination, IPagination } from '@common_package';

export interface IBlogTargetCategoriesInput
  extends IHasPagination<IPagination>,
    IHasFilter<IFilterBlogTargetCategory> {}
