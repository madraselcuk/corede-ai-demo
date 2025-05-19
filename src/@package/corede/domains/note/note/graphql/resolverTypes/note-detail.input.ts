import { IEntity } from '@common_package';

export interface INoteDetailInput extends Partial<IEntity> {
  name?: string;
}
