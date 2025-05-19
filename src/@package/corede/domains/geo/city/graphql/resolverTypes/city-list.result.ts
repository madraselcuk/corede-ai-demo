import { IEntity, IPaginated } from '@common_package';

export interface ICityListItemResult extends IEntity {
  name: string;
}

export interface ICityListResult extends IPaginated<ICityListItemResult> {}
