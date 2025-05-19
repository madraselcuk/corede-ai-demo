import { IBaseTranslation, IEntity } from '@common_package';

export interface IFaqCategoryUpdateFilterInput extends IEntity {}

export interface IFaqCategoryUpdateInput {
  name: string;
  nameTranslation?: IBaseTranslation;
  icon?: string;
  parentCategoryId?: string;
}
