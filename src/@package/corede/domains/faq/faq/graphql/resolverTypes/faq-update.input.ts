import { IEntity, Language } from '@common_package';

export interface IFaqUpdateFilterInput extends IEntity {}

export interface IFaqUpdateInput {
  question?: string;
  answer?: string;
  readingTime?: string;
  categoryId?: string;
  language?: Language;
  popular?: boolean;
}
