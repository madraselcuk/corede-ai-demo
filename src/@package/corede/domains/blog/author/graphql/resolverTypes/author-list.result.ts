import { IPaginated } from '@common_package'
import { IAuthor } from '../../interfaces'

export interface IAuthorListItemResult extends IAuthor {}

export interface IAuthorListResult extends IPaginated<IAuthorListItemResult> {}
