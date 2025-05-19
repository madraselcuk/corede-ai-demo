import { IPaginated } from '@common_package'
import { IBaseBlogEntity } from '../../interfaces/blog.interface'

export interface IBlogListItemResult extends IBaseBlogEntity {}

export interface IBlogListResult extends IPaginated<IBlogListItemResult> {}
