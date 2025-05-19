import { IEntity, Language } from '@common_package';

export interface IHelpCenterUpdateFilterInput extends IEntity {}

export interface IHelpCenterUpdateInput {
  question?: string;
  answer?: string;
  readingTime?: string;
  categoryId?: string;
  language?: Language;
}
