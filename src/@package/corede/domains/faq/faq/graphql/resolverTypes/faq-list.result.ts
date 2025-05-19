import { IPaginated } from '@common_package';
import { IBaseFaqEntity } from '../../interfaces/faq.interface';

export interface IFaqListItemResult extends IBaseFaqEntity {}

export interface IFaqListResult extends IPaginated<IFaqListItemResult> {}
