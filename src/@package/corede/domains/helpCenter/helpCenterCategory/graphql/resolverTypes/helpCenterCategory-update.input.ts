import { IBaseTranslation, IEntity } from '@common_package';

export interface IHelpCenterCategoryUpdateFilterInput extends IEntity {}

export interface IHelpCenterCategoryUpdateInput {
  name: string;
  nameTranslation?: IBaseTranslation;
  icon?: string;
  parentCategoryId?: string;
}
