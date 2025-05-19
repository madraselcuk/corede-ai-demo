import { IPaginated } from '@common_package';
import { IBaseFaqEntity } from '../../interfaces/faq.interface';

export interface IFaqListItemPublicResult extends IBaseFaqEntity {}

export interface IFaqListPublicResult
  extends IPaginated<IFaqListItemPublicResult> {}
