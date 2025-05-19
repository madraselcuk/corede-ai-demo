import { IEntity } from '@common_package';

export interface IBaseCity {
  name: string;
  state_name: string;
  country_name: string;
  latitude?: string;
  longitude?: string;
}

export interface IBaseCityEntity extends IEntity, IBaseCity {}

export interface ICity extends IBaseCityEntity {}
