import { IPaginated } from '@common_package';
import { IBaseBlogEntity } from '../../interfaces/blog.interface';

export interface IBlogListItemPublicResult extends IBaseBlogEntity {}

export interface IBlogListPublicResult
  extends IPaginated<IBlogListItemPublicResult> {}
