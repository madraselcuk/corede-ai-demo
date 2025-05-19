import { IPaginated } from '@common_package'
import { IBlogTargetCategoryResult } from './blogTargetCategory.result'

export interface IBlogTargetCategoriesItemResult
  extends IBlogTargetCategoryResult {}

export interface IBlogTargetCategoriesResult
  extends IPaginated<IBlogTargetCategoriesItemResult> {}
