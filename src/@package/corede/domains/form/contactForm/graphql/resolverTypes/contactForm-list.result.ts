import { IPaginated } from '@common_package'
import { IContactForm } from '../../interfaces'

export interface IContactFormListItemResult extends IContactForm {}

export interface IContactFormListResult
  extends IPaginated<IContactFormListItemResult> {}
